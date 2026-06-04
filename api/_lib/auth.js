import crypto from "node:crypto";

const SESSION_COOKIE = "sv_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const DEV_PASSWORD_HASH =
  "7fd411f515994111b00a0d1b3515c9f9ff7ed002f873cffa3fbf0171d190d23e";

function isProduction() {
  return process.env.NODE_ENV === "production" || Boolean(process.env.VERCEL);
}

function requireSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (secret) return secret;
  if (!isProduction()) return "local-dev-only-session-secret";
  throw new Error("ADMIN_SESSION_SECRET is required in production.");
}

function getAdminConfig() {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (password || passwordHash) return { username, password, passwordHash };
  if (!isProduction()) return { username, passwordHash: DEV_PASSWORD_HASH };

  throw new Error("Set ADMIN_PASSWORD or ADMIN_PASSWORD_HASH in Vercel.");
}

function sha256Hex(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function timingSafeEqualText(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function base64Url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload) {
  return crypto
    .createHmac("sha256", requireSessionSecret())
    .update(payload)
    .digest("base64url");
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [
          decodeURIComponent(part.slice(0, index)),
          decodeURIComponent(part.slice(index + 1)),
        ];
      })
  );
}

function cookieOptions(maxAge) {
  const secure = isProduction() ? "; Secure" : "";
  return `Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export async function verifyAdminCredentials(username, password) {
  const config = getAdminConfig();
  if (username.trim().toLowerCase() !== config.username.toLowerCase()) {
    return false;
  }

  if (config.password) {
    return timingSafeEqualText(password, config.password);
  }

  return timingSafeEqualText(sha256Hex(password), config.passwordHash);
}

export function setSessionCookie(res, username) {
  const now = Math.floor(Date.now() / 1000);
  const payload = base64Url(
    JSON.stringify({
      sub: username,
      iat: now,
      exp: now + SESSION_TTL_SECONDS,
    })
  );
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=${payload}.${sign(payload)}; ${cookieOptions(
      SESSION_TTL_SECONDS
    )}`
  );
}

export function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; ${cookieOptions(0)}`);
}

export function getSession(req) {
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token || !token.includes(".")) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature || !timingSafeEqualText(signature, sign(payload))) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!parsed.exp || parsed.exp < Math.floor(Date.now() / 1000)) return null;
    return { username: parsed.sub };
  } catch {
    return null;
  }
}

export function requireAdmin(req) {
  return getSession(req);
}
