<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Pulse Agent Rules

Pulse is a structured nursing knowledge system. Keep the product narrow.

## Current MVP

- Search diseases, drugs, and notes.
- Standardize disease cards.
- Standardize drug cards.
- Keep wikilinks working.
- Organize raw markdown study notes into fixed templates.

## Do Not Add Yet

- Graph view.
- Collaboration.
- Institution or class workspace features.
- AI agent systems inside the web app.
- Extra database tables unless explicitly requested.
- Broad architecture rewrites.

## Content Rules

- Raw study files go in `content/inbox/markdown`.
- Standardized cards go in `content/processed`.
- Use the templates in `content/templates`.
- Track coverage using `content/checklists`.
- Consistency beats creativity.

## Engineering Rules

- Keep changes small and reviewable.
- Prefer explicit functions and simple data shapes.
- Do not replace the current Supabase setup until the content model is stable.
- Do not revert unrelated work.
