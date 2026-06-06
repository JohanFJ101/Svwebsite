# AGENTS.md

**Read [`context.md`](./context.md) first.** It is the canonical, up-to-date index
of this codebase: structure, architecture (frontend + `/api` backend), the CMS
content flow, auth, routing, env vars, and conventions.

## Mandatory rule for every change
- **Keep `context.md` up to date in the same change.** If you add/move/remove a
  file, change the content model, add an API route or env var, or change a
  convention, update `context.md` to match. This is part of "done".
- **Follow the conventions documented in `context.md` §8** — match the existing
  styling tokens, the TypeScript content model, and the plain-JS backend. Do not
  introduce a parallel system.
- When changing the editable content model, update all 5 places listed in
  `context.md` §8 (types → default data → backend `normalizeContent` → AdminPage
  → consuming page), then update `context.md`.

If anything in `context.md` is wrong, fix the doc as part of your change.
