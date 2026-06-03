import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Plus,
  Trash2,
  Save,
  RotateCcw,
  Download,
  Upload,
  ArrowLeft,
  Check,
  ChevronUp,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useContent } from "../content/ContentContext";
import { defaultContent } from "../content/defaultContent";
import { isAuthed, setAuthed } from "../content/auth";
import type {
  SiteContent,
  EventItem,
  ScheduleItem,
  Tag,
} from "../content/types";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

function uid(prefix: string) {
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `${prefix}-${rand}`;
}

// Deep clone helper so the draft is fully independent of the live content.
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

/* ---------- small presentational building blocks ---------- */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20";

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        value={value}
        rows={4}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} resize-y leading-relaxed`}
      />
    </div>
  );
}

function SectionCard({
  title,
  children,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  title: string;
  children: React.ReactNode;
  onRemove?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 md:p-8 space-y-5">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
          {title}
        </h4>
        <div className="flex items-center gap-1">
          {onMoveUp && (
            <button
              onClick={onMoveUp}
              title="Move up"
              className="rounded-lg p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          )}
          {onMoveDown && (
            <button
              onClick={onMoveDown}
              title="Move down"
              className="rounded-lg p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
          {onRemove && (
            <button
              onClick={onRemove}
              title="Remove"
              className="rounded-lg p-2 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function TagsEditor({
  tags,
  onChange,
}: {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}) {
  const update = (i: number, patch: Partial<Tag>) =>
    onChange(tags.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  return (
    <div>
      <FieldLabel>Tags / Badges</FieldLabel>
      <div className="space-y-2">
        {tags.map((tag, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={tag.label}
              onChange={(e) => update(i, { label: e.target.value })}
              className={`${inputClass} flex-1`}
              placeholder="Tag label"
            />
            <button
              onClick={() => update(i, { highlight: !tag.highlight })}
              title="Toggle orange highlight"
              className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                tag.highlight
                  ? "bg-[#ea5e28]/10 border-[#ea5e28]/40 text-[#ea5e28]"
                  : "bg-neutral-800 border-neutral-700 text-neutral-400"
              }`}
            >
              {tag.highlight ? "Accent" : "Neutral"}
            </button>
            <button
              onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
              className="shrink-0 rounded-lg p-2 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => onChange([...tags, { label: "New tag", highlight: false }])}
          className="inline-flex items-center gap-1.5 text-xs text-[#ea5e28] hover:text-[#ff6a30] transition-colors font-semibold mt-1"
        >
          <Plus className="h-3.5 w-3.5" /> Add tag
        </button>
      </div>
    </div>
  );
}

/* ---------- the page ---------- */

export default function AdminPage() {
  const navigate = useNavigate();
  const { content, setContent, reset } = useContent();
  const [draft, setDraft] = useState<SiteContent>(() => clone(content));
  const [tab, setTab] = useState<"events" | "hackathon">("events");
  const [saved, setSaved] = useState(false);
  const authed = isAuthed();

  // Guard: only signed-in admins can view this page.
  useEffect(() => {
    if (!authed) navigate("/", { replace: true });
  }, [authed, navigate]);

  if (!authed) return null;

  const logout = () => {
    setAuthed(false);
    navigate("/");
  };

  const dirty = JSON.stringify(draft) !== JSON.stringify(content);

  const save = () => {
    setContent(clone(draft));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const resetAll = () => {
    if (
      !window.confirm(
        "Reset ALL content back to the original defaults? This cannot be undone."
      )
    )
      return;
    reset();
    setDraft(clone(defaultContent));
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sv-site-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as SiteContent;
        setDraft(parsed);
      } catch {
        window.alert("That file isn't valid content JSON.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  /* ----- events helpers ----- */
  const updateEvent = (id: string, patch: Partial<EventItem>) =>
    setDraft((d) => ({
      ...d,
      events: d.events.map((ev) => (ev.id === id ? { ...ev, ...patch } : ev)),
    }));

  const moveEvent = (index: number, dir: -1 | 1) =>
    setDraft((d) => {
      const events = [...d.events];
      const j = index + dir;
      if (j < 0 || j >= events.length) return d;
      [events[index], events[j]] = [events[j], events[index]];
      return { ...d, events };
    });

  const addEvent = () =>
    setDraft((d) => ({
      ...d,
      events: [
        ...d.events,
        {
          id: uid("event"),
          tags: [{ label: "New Event", highlight: true }],
          title: "New Event",
          description: "",
          date: "",
          time: "",
          location: "",
          statusLabel: "Registrations Open",
          statusNote: "",
          ctaLabel: "Register",
          ctaUrl: "",
        },
      ],
    }));

  /* ----- hackathon helpers ----- */
  const h = draft.hackathon;
  const setHack = (patch: Partial<typeof h>) =>
    setDraft((d) => ({ ...d, hackathon: { ...d.hackathon, ...patch } }));

  const updateSchedule = (id: string, patch: Partial<ScheduleItem>) =>
    setHack({
      schedule: h.schedule.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    });
  const moveSchedule = (index: number, dir: -1 | 1) => {
    const schedule = [...h.schedule];
    const j = index + dir;
    if (j < 0 || j >= schedule.length) return;
    [schedule[index], schedule[j]] = [schedule[j], schedule[index]];
    setHack({ schedule });
  };

  return (
    <div className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-14 pt-32 pb-32">
      {/* Header */}
      <div className="mb-10">
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm mb-6"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Site
        </button>
        <h1
          className="text-[clamp(40px,6vw,72px)] uppercase leading-none"
          style={headingFont}
        >
          <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
            A
          </span>
          dmin
        </h1>
        <p className="mt-4 text-neutral-400 max-w-2xl">
          Edit the events on the home page and every detail of the VillageHacks
          page. Changes are saved in this browser. Use Export to back up your
          content or move it to another machine.
        </p>
      </div>

      {/* Action bar */}
      <div
        className="sticky top-24 z-30 mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-3"
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <button
          onClick={save}
          disabled={!dirty}
          className="inline-flex items-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] disabled:opacity-40 disabled:hover:bg-[#ea5e28] transition-colors px-5 py-2.5 text-sm font-semibold text-black"
        >
          {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
          {saved ? "Saved" : "Save changes"}
        </button>
        {dirty && !saved && (
          <span className="text-xs text-[#ea5e28] font-medium">
            Unsaved changes
          </span>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={exportJson}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-4 py-2.5 text-sm text-neutral-300"
          >
            <Download className="h-4 w-4" /> Export
          </button>
          <label className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-4 py-2.5 text-sm text-neutral-300 cursor-pointer">
            <Upload className="h-4 w-4" /> Import
            <input type="file" accept="application/json" onChange={importJson} className="hidden" />
          </label>
          <button
            onClick={resetAll}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 hover:border-red-400 hover:text-red-400 transition-colors px-4 py-2.5 text-sm text-neutral-300"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-4 py-2.5 text-sm text-neutral-300"
          >
            <LogOut className="h-4 w-4" /> Log out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-neutral-800">
        {(["events", "hackathon"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-sm font-semibold uppercase tracking-wider border-b-2 -mb-px transition-colors ${
              tab === t
                ? "border-[#ea5e28] text-[#ea5e28]"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {t === "events" ? "Home Events" : "VillageHacks"}
          </button>
        ))}
      </div>

      {/* EVENTS TAB */}
      {tab === "events" && (
        <div className="space-y-6">
          {draft.events.map((ev, i) => (
            <SectionCard
              key={ev.id}
              title={`Event ${i + 1}`}
              onRemove={() =>
                setDraft((d) => ({
                  ...d,
                  events: d.events.filter((e) => e.id !== ev.id),
                }))
              }
              onMoveUp={i > 0 ? () => moveEvent(i, -1) : undefined}
              onMoveDown={i < draft.events.length - 1 ? () => moveEvent(i, 1) : undefined}
            >
              <TagsEditor
                tags={ev.tags}
                onChange={(tags) => updateEvent(ev.id, { tags })}
              />
              <TextField
                label="Title"
                value={ev.title}
                onChange={(v) => updateEvent(ev.id, { title: v })}
              />
              <TextArea
                label="Description"
                value={ev.description}
                onChange={(v) => updateEvent(ev.id, { description: v })}
              />
              <div className="grid gap-5 md:grid-cols-3">
                <TextField
                  label="Date"
                  value={ev.date}
                  placeholder="June 15, 2026"
                  onChange={(v) => updateEvent(ev.id, { date: v })}
                />
                <TextField
                  label="Time"
                  value={ev.time}
                  placeholder="6:00 PM — 9:30 PM"
                  onChange={(v) => updateEvent(ev.id, { time: v })}
                />
                <TextField
                  label="Location"
                  value={ev.location}
                  placeholder="Innovation Hub"
                  onChange={(v) => updateEvent(ev.id, { location: v })}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Status Label"
                  value={ev.statusLabel}
                  placeholder="Registrations Open"
                  onChange={(v) => updateEvent(ev.id, { statusLabel: v })}
                />
                <TextField
                  label="Status Note"
                  value={ev.statusNote}
                  placeholder="Limited Seats Remaining"
                  onChange={(v) => updateEvent(ev.id, { statusNote: v })}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Button Label"
                  value={ev.ctaLabel}
                  placeholder="Secure Your Spot"
                  onChange={(v) => updateEvent(ev.id, { ctaLabel: v })}
                />
                <TextField
                  label="Button Link (optional)"
                  value={ev.ctaUrl}
                  placeholder="https://..."
                  onChange={(v) => updateEvent(ev.id, { ctaUrl: v })}
                />
              </div>
            </SectionCard>
          ))}

          <button
            onClick={addEvent}
            className="inline-flex items-center gap-2 rounded-xl border border-dashed border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-5 py-4 text-sm text-neutral-300 w-full justify-center"
          >
            <Plus className="h-4 w-4" /> Add event
          </button>
        </div>
      )}

      {/* HACKATHON TAB */}
      {tab === "hackathon" && (
        <div className="space-y-6">
          <SectionCard title="Hero">
            <TagsEditor tags={h.badges} onChange={(badges) => setHack({ badges })} />
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="Title — Word 1"
                value={h.titlePart1}
                onChange={(v) => setHack({ titlePart1: v })}
              />
              <TextField
                label="Title — Word 2"
                value={h.titlePart2}
                onChange={(v) => setHack({ titlePart2: v })}
              />
            </div>
            <TextArea
              label="Description"
              value={h.description}
              onChange={(v) => setHack({ description: v })}
            />
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="Date"
                value={h.meta.date}
                onChange={(v) => setHack({ meta: { ...h.meta, date: v } })}
              />
              <TextField
                label="Time"
                value={h.meta.time}
                onChange={(v) => setHack({ meta: { ...h.meta, time: v } })}
              />
              <TextField
                label="Location"
                value={h.meta.location}
                onChange={(v) => setHack({ meta: { ...h.meta, location: v } })}
              />
              <TextField
                label="Participants"
                value={h.meta.participants}
                onChange={(v) => setHack({ meta: { ...h.meta, participants: v } })}
              />
            </div>
          </SectionCard>

          {/* Schedule */}
          <SectionCard title="Schedule">
            <div className="space-y-4">
              {h.schedule.map((s, i) => (
                <div
                  key={s.id}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-900/30 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">
                      Item {i + 1}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveSchedule(i, -1)}
                        disabled={i === 0}
                        className="rounded-lg p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => moveSchedule(i, 1)}
                        disabled={i === h.schedule.length - 1}
                        className="rounded-lg p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setHack({ schedule: h.schedule.filter((x) => x.id !== s.id) })}
                        className="rounded-lg p-1.5 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-[140px_1fr]">
                    <TextField
                      label="Time"
                      value={s.time}
                      placeholder="9:00 AM"
                      onChange={(v) => updateSchedule(s.id, { time: v })}
                    />
                    <TextField
                      label="Title"
                      value={s.title}
                      onChange={(v) => updateSchedule(s.id, { title: v })}
                    />
                  </div>
                  <TextArea
                    label="Description"
                    value={s.desc}
                    onChange={(v) => updateSchedule(s.id, { desc: v })}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                setHack({
                  schedule: [
                    ...h.schedule,
                    { id: uid("sched"), time: "", title: "New item", desc: "" },
                  ],
                })
              }
              className="inline-flex items-center gap-1.5 text-xs text-[#ea5e28] hover:text-[#ff6a30] transition-colors font-semibold"
            >
              <Plus className="h-3.5 w-3.5" /> Add schedule item
            </button>
          </SectionCard>
        </div>
      )}
    </div>
  );
}
