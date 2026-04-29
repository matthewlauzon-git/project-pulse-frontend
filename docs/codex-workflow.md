# Codex Workflow For Pulse

Use Codex as the project cockpit: planning, coding, content normalization, testing, and deployment prep all happen from this repo.

## Project Location

Open this folder in Codex:

```text
/Users/matthewlauzon/Projects/project-pulse-frontend
```

This is the working project. The second-brain folders are source material, not the app itself.

## Local Site

The app usually runs at:

```text
http://localhost:3000
```

If an old server gets stuck, use another port:

```text
http://localhost:3002
```

If the browser shows stale content, restart the dev server instead of debugging the UI first.

## Daily Codex Loop

Use small, specific prompts:

```text
Open the Pulse project, check status, and tell me what changed.
```

```text
Add create/edit/save for pages using the existing pages table. Keep it MVP-simple.
```

```text
Review the drug card page and make it easier to scan for nursing safety.
```

```text
Normalize the new markdown files I dropped into the source folder. Do not invent facts.
```

## What To Track

Keep durable decisions in repo docs, not only chat:

- `docs/pulse-gameplan.md` for product strategy.
- `docs/codex-workflow.md` for how to work with Codex.
- `START_HERE.md` for the current next action.
- `PROJECT_INDEX.md` for repo map.
- `content/processed` for normalized cards.
- `supabase/migrations` for database schema.

## What Codex Should Do

Codex should:

- Inspect files before editing.
- Keep changes small.
- Run lint/build when possible.
- Update docs when strategy changes.
- Preserve the strict `pages` and `links` model.
- Avoid adding extra tables or product surface without a clear MVP reason.

Codex should not:

- Turn Pulse into an AI-agent system.
- Add graph view before search/edit/save are excellent.
- Add collaboration before individual use is sticky.
- Treat LLM output as clinical truth.
- Put service-role keys in browser code.

## Current Backend

Supabase project:

```text
https://eufsfojyqycyvovhetin.supabase.co
```

Local env file:

```text
.env.local
```

Tables:

- `users`
- `pages`
- `links`

Seeded content:

- 73 disease pages
- 39 drug pages
- 297 links

## Restart Commands

From the project folder:

```bash
npm run dev
```

If port `3000` is stuck:

```bash
npm run dev -- -p 3002
```

For production-style local preview:

```bash
npm run build
npm run start -- -p 3002
```

If a stale server is stuck and Codex cannot stop it, run this yourself:

```bash
kill 15771
```

Then restart the app.
