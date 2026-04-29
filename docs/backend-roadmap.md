# Pulse Backend Roadmap

This file is the working backend contract for Project Pulse. The frontend can change freely as long as these product surfaces stay stable.

## Core Models

- `users`: student profile shell tied to Supabase Auth.
- `pages`: canonical content unit for diseases, drugs, procedures, notes, care plans, and study guides.
- `pages.aliases`, `pages.tags`, `pages.template_version`, and `pages.quality_status`: lightweight metadata for growing the content database without changing the core model.
- `links`: wikilinks between pages.
- `courses`: course/module containers for later class-specific libraries.
- `course_memberships`: owner, moderator, and student membership.
- `page_courses`: attaches a page to one or more courses.
- `user_library`: saved, pinned, and recently viewed pages.
- `page_vouches`: student trust signals: helpful, relevant, verified from class.
- `page_feedback`: confusing, missing, incorrect, helpful comments.
- `flashcard_decks` and `flashcards`: study mode backend.
- `study_events`: review, search, save, and flashcard activity history.

## API Contract

- `GET /api/library`: list pages with filters: `type`, `system`, `drugClass`, `q`, `limit`.
- `POST /api/library`: save a page to the current user's library. Requires `Authorization: Bearer <token>`.
- `GET /api/search?q=...`: search all page content.
- `GET /api/pages`: list pages with the same filters as library.
- `POST /api/pages`: create or upsert a page. Requires auth.
- `GET /api/pages/:id`: fetch one page.
- `PATCH /api/pages/:id`: update one page. Requires auth.
- `GET /api/courses`: list readable courses.
- `POST /api/courses`: create a course and owner membership. Requires auth.
- `POST /api/vouches`: set the current user's vouch for a page. Requires auth.
- `GET /api/flashcards`: list readable decks.
- `POST /api/flashcards`: create a deck. Requires auth.
- `GET /api/profile`: load the current user's student profile. Requires auth.
- `PATCH /api/profile`: update display name, avatar, or program. Requires auth.
- `POST /api/feedback`: save confusing, missing, incorrect, or helpful feedback for a page. Requires auth.
- `GET /api/study-events`: load the current user's recent learning activity. Requires auth.
- `POST /api/study-events`: record view, search, save, page creation, or flashcard review activity. Requires auth.
- `GET /api/content-health`: read the generated content audit for dashboards and admin views.
- `GET /api/dashboard`: return recent pages, recent study events when signed in, and generated content-health data.
- `GET /api/comments?pageId=...`: list visible comments for a page.
- `POST /api/comments`: add a page comment. Requires auth.
- `GET /api/suggestions?pageId=...`: list page improvement suggestions. Requires auth.
- `POST /api/suggestions`: submit a suggested edit or rationale. Requires auth.

## Frontend Mockup Mapping

- Landing page: no backend required except auth session.
- Dashboard/Home: `GET /api/library`, `study_events`, recent pages.
- Dashboard backend bundle: `GET /api/dashboard`.
- My Library: `GET /api/library`.
- Card Detail: `GET /api/pages/:id`, `POST /api/vouches`, `POST /api/library`.
- Create New Page: `POST /api/pages`.
- Search Results: `GET /api/search`.
- Study Mode: `GET /api/flashcards`, later `POST /api/study-events`.
- Community: `GET /api/library?type=note`, `POST /api/vouches`.
- Settings: `GET /api/profile`, `PATCH /api/profile`.

## Next Backend Steps

1. Apply migrations to Supabase once reviewed.
2. Move existing client pages to consume route handlers instead of direct Supabase calls.
3. Add dashboard metrics using `study_events`.
4. Add import/export endpoints for markdown batches.
5. Add moderation/admin views for feedback and suggestion review before opening broader community submission.
6. Add card quality workflows around `quality_status`, broken wikilinks, feedback counts, and accepted suggestions.
