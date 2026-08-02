# context.md — Startup Village Website

> **Purpose:** A fast, complete index of this codebase for any agent (human or AI).
> Read this first before editing anything.
>
> ## ⚠️ Golden rule for every agent
> **If you change the codebase, update this file in the same change.** When you
> add/remove/move a file, change the content model, add an API route, change a
> convention, or change env/deploy requirements — reflect it here. Keep it
> accurate and scannable. Treat `context.md` as part of "done", not optional.
> See **[Conventions](#conventions)** and **[Agent rules](#agent-rules)** at the bottom.

---

## 1. What this is

A single-page marketing site for **Startup Village** (a student org) plus a small
self-serve **admin CMS** for non-technical editors. Originally a Figma Make
export; a lightweight backend was added so admin edits persist for all visitors.

- **Frontend:** Vite 6 + React 18 + `react-router` 7 (SPA), Tailwind CSS v4.
- **Backend:** Vercel serverless functions (plain ESM `.js`) under `/api`.
- **Storage:** Upstash Redis in production; a local JSON file in dev.
- **Hosting:** Vercel.
- **Language:** Frontend is TypeScript; backend is plain JavaScript (runs on Node).

### Two kinds of content
- **CMS-driven (editable in `/admin`):** Home page **events** + the **VillageHacks**
  (hackathon) page details. Served from the backend.
- **Hardcoded (edit the page file directly):** **Officers**, **Gallery**, **About**
  pages, the nav, and the footer. These are NOT in the CMS. The Gallery page
  currently renders a **VillageHacks '26** photo section from optimized image
  derivatives in `src/imports/gallery/villagehacks-26/`.

---

## 2. Commands

| Command | What it does |
|---|---|
| `npm i` | Install dependencies |
| `npm run dev` | Vite dev server **+ local API** (see `localVercelApi` in `vite.config.ts`). Serves `/api/*` from the handlers in `api/`. |
| `npm run build` | `vite build` only — **no TypeScript type-checking happens** (esbuild transpiles, type errors do NOT fail the build). Type-check manually if needed. |

There is no `tsc` / test runner installed. Verify changes by running the app.

---

## 3. Directory map

```
/
├── api/                         # Vercel serverless functions (ESM .js, Node runtime)
│   ├── _lib/                    #   shared backend helpers (NOT routed; underscore prefix)
│   │   ├── auth.js             #     cookie-session sign/verify, admin credential check
│   │   ├── content.js         #     storage (Redis/local file) + normalizeContent() schema guard
│   │   └── http.js            #     json()/methodNotAllowed()/readJson() response helpers
│   ├── admin/
│   │   └── content.js         #   GET/PUT/DELETE /api/admin/content (auth required)
│   ├── auth/
│   │   ├── login.js           #   POST /api/auth/login   -> sets session cookie
│   │   ├── logout.js          #   POST /api/auth/logout  -> clears cookie
│   │   └── session.js         #   GET  /api/auth/session -> { authed }
│   └── content.js              #   GET  /api/content      -> public content (no auth)
│
├── src/
│   ├── main.tsx                 # App entry: BrowserRouter > ContentProvider > App
│   ├── app/
│   │   ├── App.tsx             # Shell: nav (desktop + mobile hamburger), <Routes>, footer, LoginModal
│   │   ├── content/            # ── CMS data layer ──
│   │   │   ├── types.ts        #   SiteContent type model (source of truth for TS)
│   │   │   ├── defaultContentData.js  # Plain-JS default content, imported by BOTH FE & BE
│   │   │   ├── defaultContent.ts      # Casts defaultContentData to SiteContent for the FE
│   │   │   ├── ContentContext.tsx     # ContentProvider + useContent(); fetches /api/content
│   │   │   └── auth.ts         #   FE auth client: verifyCredentials/isAuthed/logoutAdmin (fetch /api/auth/*)
│   │   ├── pages/
│   │   │   ├── HomePage.tsx    #   Hero (hiring button links to Google Form) + Industry Partners carousel + Upcoming events
│   │   │   ├── HackathonPage.tsx #  Main VillageHacks hub page
│   │   │   ├── VillageHacks25Page.tsx # Dedicated VillageHacks '26 page (334 attendees highlight, "What was on the line", venue, sponsors)
│   │   │   ├── OfficersPage.tsx#   Hardcoded team grid ("Our Team", + hidden admin entry lives in App footer)
│   │   │   ├── GalleryPage.tsx #   Hardcoded gallery (shows curated VillageHacks photos 1, 7, 8, 9)
│   │   │   ├── PodcastPage.tsx #   STFU Podcast page (logo, intro, tagline, speaker/viewer waitlists)
│   │   │   ├── AboutPage.tsx   #   Hardcoded about
│   │   │   ├── ContactPage.tsx #   Contact page (Email startupvillage.asu@gmail.com + Instagram DM link)
│   │   │   └── AdminPage.tsx   #   The CMS editor (auth-guarded). Fetches /api/admin/content
│   │   └── components/
│   │       ├── LoginModal.tsx  #   Admin login dialog (opened from footer © on /officers)
│   │       ├── PartnersCarousel.tsx # Slowly moving horizontal carousel for PNG partner logos
│   │       ├── Logo.tsx, BackgroundContours.tsx, StarDestroyer.tsx  # bespoke visuals
│   │       ├── figma/ImageWithFallback.tsx
│   │       └── ui/             #   shadcn/ui primitives (large set; mostly unused by custom pages)
│   ├── imports/                 # Image/SVG assets (hero PNGs, logo, star destroyer)
│   │   └── gallery/
│   │       ├── Our Partners Carosel/ # PNG partner logos for PartnersCarousel
│   │       ├── Podcast/          # STFU Podcast logo (STFULOGO.png)
│   │       └── villagehacks-26/
│   │           ├── thumbs/           #   small JPEG grid thumbnails for GalleryPage
│   │           └── full/             #   capped JPEG lightbox images for GalleryPage

│   └── styles/                  # index.css imports fonts.css + tailwind.css + theme.css
│
├── photos/                       # Original source photos; not imported directly by the app
├── context.md                   # THIS FILE — canonical codebase index (keep updated)
├── CLAUDE.md / AGENTS.md         # Short pointers to context.md + the update rule (auto-loaded by agents)
├── index.html                   # Vite HTML entry (#root)
├── vite.config.ts               # Vite config + figmaAssetResolver + localVercelApi dev middleware
├── vercel.json                  # SPA rewrites for deep links (/about, /officers, /admin, ...)
├── .env.example                 # Required env vars (copy to .env for local; set in Vercel for prod)
├── .gitignore                   # ignores .local/ (dev content store), node_modules/.vite, etc.
├── README.md                    # Setup + admin backend env notes
└── guidelines/Guidelines.md     # (Figma Make template placeholder; not actively used)
```

---

## 4. How content flows (the most important architecture)

```
defaultContentData.js  ──imported by──►  defaultContent.ts (FE typed default)
        │                                 api/_lib/content.js (BE default + reset target)
        │
  Public visitor                         Admin editor
        │                                     │
  GET /api/content                       GET /api/admin/content   (auth)
        │                                PUT /api/admin/content   (auth, save)
        ▼                                DELETE /api/admin/content(auth, reset)
  ContentProvider (ContentContext.tsx)        │
        │  useContent()                       ▼
        ▼                                AdminPage.tsx draft -> PUT
  HomePage / HackathonPage render        on save, server normalizes + persists
```

- **`defaultContentData.js` is the single source of default content** and is the
  one file imported by *both* the TypeScript frontend and the Node backend. It is
  intentionally **plain JS** (no TS) so the serverless functions can import it
  without a build step. **Keep its shape identical to `SiteContent` in `types.ts`.**
- **`normalizeContent()` in `api/_lib/content.js`** is the server-side
  whitelist/validator. It coerces and caps incoming data (events ≤ 50, schedule
  ≤ 100, tags ≤ 20) and fills missing fields from defaults. **Any new content
  field must be added here too, or it will be silently dropped on save.**
- **Storage selection** (`api/_lib/content.js`): if `UPSTASH_REDIS_REST_URL` +
  `UPSTASH_REDIS_REST_TOKEN` are set → Redis. Else in dev → `.local/site-content.json`.
  Else in production → read-only defaults, and **saving returns a setup error**
  (it never pretends to persist).

### Current default content
`defaultContentData.js` currently ships a **"coming soon" state**: `events: []`
and `hackathon.schedule: []`, with a single "Coming Fall 2026" badge. (It does
**not** contain the old Village Summit / full schedule sample data anymore.)

---

## 5. Auth flow

1. Footer shows `©` (in `App.tsx`). On the **`/officers`** page only, clicking it
   opens `LoginModal`.
2. `LoginModal` → `verifyCredentials()` (`content/auth.ts`) → `POST /api/auth/login`.
3. Backend (`api/_lib/auth.js`) checks username + password against env config,
   then sets an **HMAC-signed, HttpOnly cookie** `sv_admin_session` (8h TTL,
   signed with `ADMIN_SESSION_SECRET`).
4. `AdminPage` guards itself: calls `isAuthed()` → `GET /api/auth/session`; if not
   authed it redirects to `/`.
5. Admin reads/writes via `/api/admin/content`, which calls `requireAdmin(req)`
   (validates the cookie) and returns 401 otherwise.
6. Log out → `logoutAdmin()` → `POST /api/auth/logout` clears the cookie.

Credential config (`getAdminConfig` in `api/_lib/auth.js`): `ADMIN_USERNAME`
(default `admin`), and either `ADMIN_PASSWORD` (plain compare, timing-safe) or
`ADMIN_PASSWORD_HASH` (SHA-256 hex). In **dev only**, a built-in fallback hash is
used if neither is set. **This auth is real (server-side), unlike the earlier
client-only version.**

---

## 6. Routing

- Client routes are declared in `App.tsx` `<Routes>`: `/`, `/about`, `/hackathon`,
  `/officers`, `/gallery`, `/admin`.
- For production deep links to work, each non-root route is rewritten to
  `/index.html` in **`vercel.json`**. **If you add a route, add a rewrite there.**

---

## 7. Environment variables

See `.env.example`. Local dev works with none (falls back to `.local/` storage +
dev auth hash). Production (Vercel) needs:

| Var | Purpose |
|---|---|
| `ADMIN_USERNAME` | optional, defaults to `admin` |
| `ADMIN_PASSWORD` *or* `ADMIN_PASSWORD_HASH` | admin password (plain or SHA-256 hex) |
| `ADMIN_SESSION_SECRET` | long random string; signs session cookies (**required in prod**) |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | persistent content store (**required in prod to save edits**) |

---

## 8. Conventions

Follow the patterns already in the codebase:

**Brand / styling**
- Accent orange is `#ea5e28` (hover `#ff6a30`). Use these literals — the project
  does not use a Tailwind theme token for them.
- Headings use Cormorant Garamond via a local `headingFont` style object that is
  re-declared at the top of most page files; body uses Inter (set on the root in
  `App.tsx`). Reuse the existing `headingFont` pattern rather than inventing new
  font setups.
- First-letter accent trick: titles render the first character in an italic
  orange `<span>` then the rest (see `HomePage`/`HackathonPage`/`AdminPage`).
- Cards: `rounded-2xl border border-neutral-800 bg-neutral-950/40` + backdrop blur.
- Mobile: design responsively with Tailwind `md:` breakpoints. Mobile-specific
  glass/overlay treatments already exist in the hero and nav — match that style.

**Frontend**
- Read CMS content via `useContent()`; never refetch content ad hoc in pages.
- TypeScript types live in `content/types.ts` — it is the type source of truth.
- Because `npm run build` does NOT type-check, be deliberate about types; a broken
  type won't fail CI.
- Gallery originals live in `photos/`. Do not import those originals directly into
  pages. Generate optimized paired JPEGs under
  `src/imports/gallery/villagehacks-26/thumbs/` and
  `src/imports/gallery/villagehacks-26/full/`; `GalleryPage.tsx` pairs them by
  filename with `import.meta.glob`, renders only thumbnails in the grid, and
  loads the larger optimized image only in the lightbox.

**Backend**
- API files are **plain ESM `.js` on Node** (use `node:` imports). Do **not**
  convert them to TypeScript or add a bundler step.
- `api/_lib/*` are shared helpers and are not HTTP routes (underscore = private).
- Return responses via the `http.js` helpers (`json`, `methodNotAllowed`, `readJson`).
- Validate/shape all persisted data through `normalizeContent()`.

**Editing the content model (do all of these together):** to add/change a field
that admins can edit, update **all** of:
1. `src/app/content/types.ts` (the TS type)
2. `src/app/content/defaultContentData.js` (default value, keep shape in sync)
3. `api/_lib/content.js` → `normalizeContent()` (server validation/caps/defaults)
4. `src/app/pages/AdminPage.tsx` (an editor control)
5. The consuming page (`HomePage.tsx` / `HackathonPage.tsx`)
…and then update this file's relevant sections.

---

## 9. Agent rules

When you make any change:
1. **Update `context.md`** to match reality (file moves, new routes/env vars,
   model changes, new conventions). This is mandatory, not optional.
2. **Follow the conventions in §8.** Match existing patterns; don't introduce a
   parallel styling system, state approach, or backend language.
3. **Keep frontend ↔ backend in sync** for the content model (the 5-step list above).
4. **If a route changes**, update both `App.tsx` and `vercel.json`.
5. **If env/auth/storage behavior changes**, update §5/§7 and `README.md` + `.env.example`.
6. Prefer small, reversible edits. If something here is now wrong, fix the doc as
   part of your change rather than leaving it stale.

_Last indexed: 2026-06-06._
```
