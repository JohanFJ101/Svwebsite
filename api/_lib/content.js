import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultContent } from "../../src/app/content/defaultContentData.js";

const CONTENT_KEY = "svwebsite:site-content:v1";
const LOCAL_DATA_DIR = path.join(process.cwd(), ".local");
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIR, "site-content.json");

function isProduction() {
  return process.env.NODE_ENV === "production" || Boolean(process.env.VERCEL);
}

function getRedisConfig() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
}

async function redisCommand(command) {
  const config = getRedisConfig();
  if (!config) throw new Error("Upstash Redis is not configured.");

  const res = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) {
    throw new Error(data.error || "Upstash Redis request failed.");
  }
  return data.result;
}

function requireStorage() {
  if (getRedisConfig()) return { type: "redis" };
  if (!isProduction()) return { type: "local" };
  throw new Error(
    "Persistent storage is not configured. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in Vercel."
  );
}

function asString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asTags(value, fallback) {
  const source = Array.isArray(value) ? value : fallback;
  return source.slice(0, 20).map((tag, index) => ({
    label: asString(tag?.label, `Tag ${index + 1}`),
    highlight: Boolean(tag?.highlight),
  }));
}

function asEvent(value, fallback, index) {
  return {
    id: asString(value?.id, fallback?.id || `event-${index + 1}`),
    tags: asTags(value?.tags, fallback?.tags || []),
    title: asString(value?.title, fallback?.title),
    description: asString(value?.description, fallback?.description),
    date: asString(value?.date, fallback?.date),
    time: asString(value?.time, fallback?.time),
    location: asString(value?.location, fallback?.location),
    statusLabel: asString(value?.statusLabel, fallback?.statusLabel),
    statusNote: asString(value?.statusNote, fallback?.statusNote),
    ctaLabel: asString(value?.ctaLabel, fallback?.ctaLabel),
    ctaUrl: asString(value?.ctaUrl, fallback?.ctaUrl),
  };
}

function asScheduleItem(value, fallback, index) {
  return {
    id: asString(value?.id, fallback?.id || `schedule-${index + 1}`),
    time: asString(value?.time, fallback?.time),
    title: asString(value?.title, fallback?.title),
    desc: asString(value?.desc, fallback?.desc),
  };
}

export function normalizeContent(input) {
  const source = input && typeof input === "object" ? input : {};
  const hackathon = source.hackathon || {};

  return {
    eventsHeading: asString(source.eventsHeading, defaultContent.eventsHeading),
    eventsSubtitle: asString(source.eventsSubtitle, defaultContent.eventsSubtitle),
    events: (Array.isArray(source.events) ? source.events : defaultContent.events)
      .slice(0, 50)
      .map((event, index) =>
        asEvent(event, defaultContent.events[index] || defaultContent.events[0], index)
      ),
    hackathon: {
      badges: asTags(hackathon.badges, defaultContent.hackathon.badges),
      titlePart1: asString(hackathon.titlePart1, defaultContent.hackathon.titlePart1),
      titlePart2: asString(hackathon.titlePart2, defaultContent.hackathon.titlePart2),
      description: asString(hackathon.description, defaultContent.hackathon.description),
      meta: {
        date: asString(hackathon.meta?.date, defaultContent.hackathon.meta.date),
        time: asString(hackathon.meta?.time, defaultContent.hackathon.meta.time),
        location: asString(
          hackathon.meta?.location,
          defaultContent.hackathon.meta.location
        ),
        participants: asString(
          hackathon.meta?.participants,
          defaultContent.hackathon.meta.participants
        ),
      },
      schedule: (Array.isArray(hackathon.schedule)
        ? hackathon.schedule
        : defaultContent.hackathon.schedule
      )
        .slice(0, 100)
        .map((item, index) =>
          asScheduleItem(
            item,
            defaultContent.hackathon.schedule[index] || defaultContent.hackathon.schedule[0],
            index
          )
        ),
    },
  };
}

async function readLocalContent() {
  try {
    const raw = await fs.readFile(LOCAL_DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function writeLocalContent(content) {
  await fs.mkdir(LOCAL_DATA_DIR, { recursive: true });
  await fs.writeFile(LOCAL_DATA_FILE, JSON.stringify(content, null, 2));
}

export async function getContent() {
  if (getRedisConfig()) {
    const storedRaw = await redisCommand(["GET", CONTENT_KEY]);
    const stored = typeof storedRaw === "string" ? JSON.parse(storedRaw) : storedRaw;
    return {
      content: normalizeContent(stored),
      storage: { configured: true, source: stored ? "redis" : "defaults" },
    };
  }

  if (isProduction()) {
    return {
      content: normalizeContent(defaultContent),
      storage: { configured: false, source: "defaults" },
    };
  }

  const stored = await readLocalContent();
  return {
    content: normalizeContent(stored),
    storage: { configured: true, source: stored ? "local" : "defaults" },
  };
}

export async function saveContent(nextContent) {
  const content = normalizeContent(nextContent);
  const storage = requireStorage();

  if (storage.type === "redis") {
    await redisCommand(["SET", CONTENT_KEY, JSON.stringify(content)]);
    return { content, storage: { configured: true, source: "redis" } };
  }

  await writeLocalContent(content);
  return { content, storage: { configured: true, source: "local" } };
}

export async function resetContent() {
  const storage = requireStorage();
  const content = normalizeContent(defaultContent);

  if (storage.type === "redis") {
    await redisCommand(["DEL", CONTENT_KEY]);
    return { content, storage: { configured: true, source: "defaults" } };
  }

  await fs.rm(LOCAL_DATA_FILE, { force: true });
  return { content, storage: { configured: true, source: "defaults" } };
}
