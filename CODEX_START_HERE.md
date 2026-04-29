# Codex Start Here — Project Pulse

Open this folder directly in Codex:

```text
/Users/matthewlauzon/Projects/project-pulse-frontend
```

## What this repo is

Project Pulse is the nursing-student web app / AI study workspace.

It is **not** MatthewOS, Mission Control, OpenClaw, vault migration, or general infrastructure.

## Fast local loop

```bash
cd /Users/matthewlauzon/Projects/project-pulse-frontend
npm run dev
```

Then open:

```text
http://localhost:3000
```

If port 3000 is stuck:

```bash
npm run dev -- -p 3002
```

## Quality checks

```bash
npm run lint
npm run build
npm run content:audit
```

## Human vibe-code loop

1. Start with `START_HERE.md`.
2. Use `PROJECT_INDEX.md` as the repo map.
3. Use `AGENTS.md` as the guardrails for Codex.
4. Ask Codex for one small improvement at a time.
5. Run `npm run build` before trusting the result.

## Good first prompts

```text
Read CODEX_START_HERE.md, START_HERE.md, PROJECT_INDEX.md, and AGENTS.md. Then summarize what this app is and suggest the smallest useful UI improvement.
```

```text
Make the dashboard look cleaner without adding new product surfaces. Keep Project Pulse focused on a nursing-student study app. Run lint/build after.
```

```text
Review the current homepage and propose a visual cleanup plan. Do not edit yet. Keep it simple and student-focused.
```

```text
Improve one screen visually, keep the data model unchanged, and show me the diff before broader changes.
```

## Hard boundaries

Do not put these in this repo/project scope unless Matt explicitly asks:

- MatthewOS operating-system docs
- Mission Control UI/backend
- OpenClaw cron/agent infrastructure
- generic vault migration docs
- broad social/community features before the solo student workflow feels good

## Product direction

Keep the loop simple:

```text
import class material → organize into modules/cards → study/search/create outputs → optionally share later
```

Consistency beats cleverness. Useful beats shiny.
