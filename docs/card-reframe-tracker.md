# Pulse Card Reframe Tracker

Current goal: make disease and drug cards feel like a nursing-school clinical thinking filter, not a giant medical database.

## Product Standard

Pulse cards should answer five questions:

1. What is this?
2. Why does it matter for safety, clinical, or NCLEX thinking?
3. What do I check before I act?
4. What findings should I monitor or escalate?
5. What is the common student trap?

If a line does not help a student assess, hold, monitor, teach, escalate, or remember the pattern, move it to lesson notes or delete it.

## What Changed

- Drug cards now use `Study Snapshot`, `Nursing Lens`, and `Exam Layer`.
- Disease cards now use `Study Snapshot`, `Clinical Pattern`, `Nursing Lens`, and `Exam Layer`.
- Empty `Not specified in source notes.` sections are no longer rendered into cards.
- Risky directive wording is scrubbed during generation:
  - `The Fix`
  - `Typical Dosage`
  - `Compatibility`
  - `do NOT wait for orders`
  - `CVL only`
  - `gold standard`
  - `Safe in pregnancy`
- The app now prefers generated local cards for disease/drug browsing unless `NEXT_PUBLIC_PULSE_CONTENT_SOURCE=supabase` is set.
- `supabase/seed.sql` has been regenerated from the new card format, but the remote Supabase project still needs a reseed before backend rows match local files.

## How To Verify

Run:

```bash
npm run content:audit
npm run lint
npm run build
```

Open:

```text
http://localhost:3002/drugs/lisinopril
```

Expected headings:

- `Study Snapshot`
- `Nursing Lens`
- `Before Giving: What To Check`
- `Monitor For`
- `Major Safety Flags`
- `Exam Layer`

If the browser still shows `Clinical Core`, restart the dev server on port `3002` and hard refresh the page.

## Current Quality Snapshot

- Total cards: 112
- Disease cards: 73
- Drug cards: 39
- Student-ready cards: 25
- Needs review: 45
- Repair first: 42
- Broken wikilink targets: 183
- Risky directive wording flags: 0
- `Not specified in source notes.` sections shown in cards: 0

## Next Best Work

1. Restart local app and confirm `/drugs/lisinopril` shows the new headings.
2. Repair the top 10 cards in `content/checklists/coverage-report.md`.
3. Fix broken wikilinks for high-value cards first, not alphabetically.
4. Reseed Supabase from `supabase/seed.sql` when local card shape looks right.
5. Add a small card-source footer in the UI: source path, last generated, and student-study disclaimer.
6. Consider a compact card UI that visually highlights:
   - danger
   - before giving
   - monitor
   - teaching
   - exam trap
7. Add claim-level source chips to cards so course notes, textbook notes, and student notes can point back to a class/module/source.
8. Connect `/import` outputs to a real intake/review workflow so course notes can be accepted into official card context.

## Do Not Do Yet

- Do not chase all 183 broken links at once.
- Do not turn Pulse into Lexicomp or UpToDate.
- Do not add dosing-heavy med administration guidance.
- Do not add new database tables for this cleanup.
- Do not publish cards as clinical advice.
- Do not host or share textbook PDFs, full slide decks, copied chapters, copied slides, or answer keys.
