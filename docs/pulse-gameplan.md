# Pulse Gameplan

Current pivot: Pulse is becoming a private class workspace for nursing school, not just a disease/drug card library. Read `docs/class-rescue-mvp.md` and `docs/student-operating-system-guide.md` before making product decisions.

The current MVP wedge is **Class Rescue**:

> Upload your messy class materials. Pulse turns them into a class command center: what is due, what matters, what to study, and what to create next.

This is monetizable and scalable only if source files are private by default and sharing is limited to student-created outputs later.

Pulse is a structured clinical knowledge system for nursing students first, then nursing cohorts, then working nurses.

The product should stay narrow until the core loop is genuinely useful:

1. Create a structured page.
2. Edit it without friction.
3. Save it to Supabase.
4. Link concepts with wikilinks.
5. Search and review clean clinical cards.

## Product Thesis

Nursing students do not need another notes app. They need a structured way to turn messy course material into clear clinical reasoning:

- What is happening pathophysiologically?
- What should I assess?
- What can kill the patient?
- What do I need to monitor?
- What do I teach?
- What does this connect to?

Pulse wins if it makes clinical thinking feel organized, fast, and less overwhelming.

## Phase 1: Personal MVP

Goal: make Pulse useful for Matthew every week.

Build only:

- Browse disease cards.
- Browse drug cards.
- Open a detailed card.
- Search all cards.
- Create a page.
- Edit a page.
- Save a page to Supabase.
- Parse and render wikilinks.

Content goals:

- Keep disease, drug, and procedure templates strict.
- Keep raw source files separate from processed cards.
- Prefer missing-field honesty over invented content.
- Normalize cards around working-nurse scanning: clinical core first, nursing safety second, exam layer last.

Exit criteria:

- 100+ useful cards are browsable.
- Search finds the card you expect in under 3 seconds.
- Editing and saving one card feels obvious.
- You use it for studying without needing Codex beside you.

## Phase 2: Class Pilot

Goal: make Pulse useful to 5-15 classmates without adding institutional complexity.

Build only after Phase 1 feels solid:

- Read-only shared class library.
- Simple account login.
- Personal saved edits or duplicated cards.
- Import/export markdown.
- Lightweight feedback capture: "confusing", "missing", "helpful".

Avoid:

- Collaboration editing.
- Real-time sync.
- Graph view.
- Roles and permissions beyond owner/public.
- AI inside the app.

Pilot motion:

- Start with one course module.
- Ask classmates to search for 5 concepts before an exam.
- Watch where they get lost.
- Improve clarity and navigation before adding features.

Exit criteria:

- Classmates come back without being reminded.
- Search terms reveal what people actually need.
- Users ask for more content, not more features.

## Phase 3: Multi-Class Product

Goal: make Pulse reusable across nursing cohorts.

Build:

- Course/module grouping.
- Better card coverage tracking.
- Stronger onboarding: "Start with Med-Surg", "Start with Pharm", etc.
- Cleaner mobile study experience.
- Basic sharing/public libraries.

Content strategy:

- Turn repeated course material into reusable canonical cards.
- Keep local/custom notes separate from shared library cards.
- Add source/verification workflow, but do not turn Pulse into a textbook replacement.

Exit criteria:

- New students can understand the product in 2 minutes.
- A course library can be reused by the next cohort.
- Content quality improves through feedback, not uncontrolled generation.

## Phase 4: Working Nurse Retention

Goal: transition from school study tool to clinical reference habit.

Build only after student use is real:

- Shift-friendly quick reference mode.
- Safety-first drug cards.
- Procedure checklists.
- Specialty packs: med-surg, peds, psych, critical care.
- Personal notes attached to canonical pages.

Retention loops:

- "Recently reviewed" clinical cards.
- "My weak areas" based on saved flags.
- Weekly review sets from pages the user actually opened.
- Fast search from phone.

Avoid:

- Medical decision automation.
- Recommending patient-specific care plans.
- Anything that feels like unsafe clinical advice.

## Engineering Principles

- Use `pages` and `links` as the core model.
- Keep `type` simple: `disease`, `drug`, `procedure`, `note`.
- Store content as markdown first.
- Add JSON structure only when the UI truly needs it.
- Keep local processing separate from the web app.
- Do not add new tables unless a user-facing MVP need forces it.

## Current State

- Existing Supabase project is linked.
- Core tables exist: `users`, `pages`, `links`.
- Seeded content exists in Supabase:
  - 73 disease pages
  - 39 drug pages
  - 297 links
- Backend route handlers exist for library, search, pages, profile, courses, vouches, feedback, flashcards, and study events.
- Collaboration foundation exists for page comments, suggested edits, and course join requests.
- A content audit command exists: `npm run content:audit`.
- Current local content audit:
  - 112 total cards
  - 73 disease cards
  - 39 drug cards
  - 183 broken wikilink targets
  - 25 cards in the repair-first queue
- Local processed markdown lives in `content/processed`.
- Local browser fallback data lives in `public/data/cards.json`.

## Completed MVP Foundation

- [x] Restart local dev server cleanly.
- [x] Verify the app reads Supabase `pages`.
- [x] Replace dashboard count queries with `pages` table queries.
- [x] Fix wikilinks so `[[plain-slug]]` and `[[slug|Label]]` both render.
- [x] Add create/edit/save for pages.
- [x] Add a simple markdown page editor.
- [x] Add save-to-Supabase path.
- [x] Add search against `pages`.
- [x] Organize diseases by system.
- [x] Organize drugs by class.
- [x] Add backend routes for the frontend mockup.
- [x] Add content health reporting for summer database growth.
- [x] Add controlled collaboration primitives: comments, suggestions, vouches, feedback, and course membership foundation.

## Summer 2026 Build Path

### May: Make The Core Loop Dependable

- [ ] Apply backend migrations to Supabase.
- [ ] Move frontend reads/writes through `/api/*` routes instead of direct browser Supabase calls.
- [ ] Make login/profile/settings feel boring and reliable.
- [ ] Add dashboard recent activity from `study_events`.
- [ ] Use `content-health.json` to show database quality and coverage in the app.
- [ ] Run 10 real study tasks and write down every failure.

### June: Make The Database Worth Using

- [ ] Reach 150 total disease/drug/procedure cards.
- [ ] Repair the top 25 cards in `content/checklists/coverage-report.md`.
- [ ] Reduce broken wikilink targets below 75.
- [ ] Add the first procedure cards and nursing skill checklists.
- [ ] Build markdown import/export so summer notes can flow into Pulse quickly.
- [ ] Create one high-quality Med-Surg collection and one high-quality Pharm collection.

### July: Make It Useful For Classmates

- [ ] Invite 3-5 trusted classmates for read-only testing.
- [ ] Add feedback buttons: helpful, confusing, missing, incorrect.
- [ ] Add vouch counts to card detail pages.
- [ ] Add suggested edits to card detail pages.
- [ ] Add page comments for class discussion and clarification.
- [ ] Add a simple review queue for feedback and low-quality cards.
- [ ] Polish mobile search and card reading.
- [ ] Measure what people search for before adding features.

### August: September Pilot Prep

- [ ] Reach 200+ total cards.
- [ ] Reduce broken wikilink targets below 25.
- [ ] Make the top 100 cards student-ready.
- [ ] Prepare onboarding for one nursing cohort use case.
- [ ] Deploy stable Vercel preview and production environments.
- [ ] Create a support/feedback workflow for September users.

## September Pilot Definition

Pulse is ready to provide to students when:

- [ ] A student can sign up, search, open cards, save cards, and leave feedback without help.
- [ ] Search returns useful disease, drug, procedure, and note results in under 3 seconds.
- [ ] The top 100 cards are reviewed for nursing safety, exam usefulness, and broken links.
- [ ] The app has a clear way to report confusing or incorrect material.
- [ ] No feature suggests patient-specific medical decision-making.
