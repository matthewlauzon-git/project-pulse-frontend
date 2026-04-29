create extension if not exists pg_trgm;

alter table public.users
  add column if not exists display_name text,
  add column if not exists avatar_url text,
  add column if not exists program text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.pages
  add column if not exists summary text,
  add column if not exists system text,
  add column if not exists drug_class text,
  add column if not exists aliases text[] not null default '{}',
  add column if not exists tags text[] not null default '{}',
  add column if not exists template_version text,
  add column if not exists quality_status text not null default 'needs_review'
    check (quality_status in ('needs_review', 'student_ready', 'class_verified', 'archived')),
  add column if not exists source_path text,
  add column if not exists source_citation text,
  add column if not exists status text not null default 'published'
    check (status in ('draft', 'published', 'archived')),
  add column if not exists visibility text not null default 'private'
    check (visibility in ('private', 'course', 'community', 'public')),
  add column if not exists source_kind text not null default 'seed'
    check (source_kind in ('seed', 'student', 'course', 'import')),
  add column if not exists search_text text generated always as (
    lower(coalesce(title, '') || ' ' || coalesce(summary, '') || ' ' || coalesce(content, ''))
  ) stored;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists pages_set_updated_at on public.pages;
create trigger pages_set_updated_at
  before update on public.pages
  for each row execute function public.set_updated_at();

drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at
  before update on public.users
  for each row execute function public.set_updated_at();

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  code text,
  institution text,
  term text,
  description text,
  visibility text not null default 'private'
    check (visibility in ('private', 'community', 'public')),
  owner_id uuid not null references public.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.courses
  add column if not exists id uuid default gen_random_uuid(),
  add column if not exists visibility text not null default 'public'
    check (visibility in ('private', 'community', 'public')),
  add column if not exists owner_id uuid references public.users(id) on delete cascade,
  add column if not exists institution text,
  add column if not exists term text,
  add column if not exists description text,
  add column if not exists updated_at timestamptz not null default now();

update public.courses
set id = gen_random_uuid()
where id is null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'courses_id_key'
    and conrelid = 'public.courses'::regclass
  ) then
    alter table public.courses add constraint courses_id_key unique (id);
  end if;
end;
$$;

drop trigger if exists courses_set_updated_at on public.courses;
create trigger courses_set_updated_at
  before update on public.courses
  for each row execute function public.set_updated_at();

create table if not exists public.course_memberships (
  course_id uuid not null references public.courses(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  role text not null default 'student'
    check (role in ('owner', 'moderator', 'student')),
  created_at timestamptz not null default now(),
  primary key (course_id, user_id)
);

create table if not exists public.page_courses (
  page_id text not null references public.pages(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  relevance text not null default 'supporting'
    check (relevance in ('core', 'supporting', 'mentioned')),
  created_at timestamptz not null default now(),
  primary key (page_id, course_id)
);

create table if not exists public.user_library (
  user_id uuid not null references public.users(id) on delete cascade,
  page_id text not null references public.pages(id) on delete cascade,
  saved_at timestamptz not null default now(),
  last_viewed_at timestamptz,
  pinned boolean not null default false,
  primary key (user_id, page_id)
);

create table if not exists public.page_feedback (
  id uuid primary key default gen_random_uuid(),
  page_id text not null references public.pages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  kind text not null check (kind in ('helpful', 'confusing', 'missing', 'incorrect')),
  body text,
  created_at timestamptz not null default now()
);

create table if not exists public.flashcard_decks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  owner_id uuid not null references public.users(id) on delete cascade,
  course_id uuid references public.courses(id) on delete set null,
  visibility text not null default 'private'
    check (visibility in ('private', 'course', 'community', 'public')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists flashcard_decks_set_updated_at on public.flashcard_decks;
create trigger flashcard_decks_set_updated_at
  before update on public.flashcard_decks
  for each row execute function public.set_updated_at();

create table if not exists public.flashcards (
  id uuid primary key default gen_random_uuid(),
  deck_id uuid not null references public.flashcard_decks(id) on delete cascade,
  page_id text references public.pages(id) on delete set null,
  front text not null,
  back text not null,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists flashcards_set_updated_at on public.flashcards;
create trigger flashcards_set_updated_at
  before update on public.flashcards
  for each row execute function public.set_updated_at();

create table if not exists public.study_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  page_id text references public.pages(id) on delete cascade,
  deck_id uuid references public.flashcard_decks(id) on delete cascade,
  event_type text not null check (event_type in ('view_page', 'search', 'save_page', 'review_flashcard', 'create_page')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace view public.page_vouch_counts as
select
  page_id,
  count(*) filter (where vouch_type = 'helpful')::integer as helpful_count,
  count(*) filter (where vouch_type = 'relevant')::integer as relevant_count,
  count(*) filter (where vouch_type = 'verified')::integer as verified_count
from public.page_vouches
group by page_id;

create index if not exists pages_type_title_search_idx on public.pages(type, title);
create index if not exists pages_search_text_trgm_idx on public.pages using gin(search_text gin_trgm_ops);
create index if not exists pages_system_idx on public.pages(system);
create index if not exists pages_drug_class_idx on public.pages(drug_class);
create index if not exists pages_aliases_gin_idx on public.pages using gin(aliases);
create index if not exists pages_tags_gin_idx on public.pages using gin(tags);
create index if not exists pages_quality_status_idx on public.pages(quality_status);
create index if not exists courses_owner_id_idx on public.courses(owner_id);
create index if not exists course_memberships_user_id_idx on public.course_memberships(user_id);
create index if not exists page_courses_course_id_idx on public.page_courses(course_id);
create index if not exists user_library_page_id_idx on public.user_library(page_id);
create index if not exists page_feedback_page_id_idx on public.page_feedback(page_id);
create index if not exists flashcards_deck_id_idx on public.flashcards(deck_id);
create index if not exists study_events_user_id_created_at_idx on public.study_events(user_id, created_at desc);

alter table public.courses enable row level security;
alter table public.course_memberships enable row level security;
alter table public.page_courses enable row level security;
alter table public.user_library enable row level security;
alter table public.page_feedback enable row level security;
alter table public.flashcard_decks enable row level security;
alter table public.flashcards enable row level security;
alter table public.study_events enable row level security;

drop policy if exists "Readable courses" on public.courses;
create policy "Readable courses"
  on public.courses for select
  using (
    visibility in ('community', 'public')
    or owner_id = auth.uid()
    or exists (
      select 1 from public.course_memberships
      where course_memberships.course_id = courses.id
      and course_memberships.user_id = auth.uid()
    )
  );

drop policy if exists "Users create own courses" on public.courses;
create policy "Users create own courses"
  on public.courses for insert
  with check (owner_id = auth.uid());

drop policy if exists "Course owners update courses" on public.courses;
create policy "Course owners update courses"
  on public.courses for update
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

drop policy if exists "Users read own memberships" on public.course_memberships;
create policy "Users read own memberships"
  on public.course_memberships for select
  using (user_id = auth.uid());

drop policy if exists "Course owners manage memberships" on public.course_memberships;
create policy "Course owners manage memberships"
  on public.course_memberships for all
  using (exists (select 1 from public.courses where courses.id = course_id and courses.owner_id = auth.uid()))
  with check (exists (select 1 from public.courses where courses.id = course_id and courses.owner_id = auth.uid()));

drop policy if exists "Anyone can read page courses" on public.page_courses;
create policy "Anyone can read page courses"
  on public.page_courses for select
  using (true);

drop policy if exists "Course owners link pages" on public.page_courses;
create policy "Course owners link pages"
  on public.page_courses for all
  using (exists (select 1 from public.courses where courses.id = course_id and courses.owner_id = auth.uid()))
  with check (exists (select 1 from public.courses where courses.id = course_id and courses.owner_id = auth.uid()));

drop policy if exists "Users manage own library" on public.user_library;
create policy "Users manage own library"
  on public.user_library for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Anyone can read page feedback" on public.page_feedback;
create policy "Anyone can read page feedback"
  on public.page_feedback for select
  using (true);

drop policy if exists "Users create own feedback" on public.page_feedback;
create policy "Users create own feedback"
  on public.page_feedback for insert
  with check (user_id = auth.uid());

drop policy if exists "Readable flashcard decks" on public.flashcard_decks;
create policy "Readable flashcard decks"
  on public.flashcard_decks for select
  using (visibility in ('community', 'public') or owner_id = auth.uid());

drop policy if exists "Users manage own flashcard decks" on public.flashcard_decks;
create policy "Users manage own flashcard decks"
  on public.flashcard_decks for all
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

drop policy if exists "Readable flashcards" on public.flashcards;
create policy "Readable flashcards"
  on public.flashcards for select
  using (
    exists (
      select 1 from public.flashcard_decks
      where flashcard_decks.id = deck_id
      and (flashcard_decks.visibility in ('community', 'public') or flashcard_decks.owner_id = auth.uid())
    )
  );

drop policy if exists "Deck owners manage flashcards" on public.flashcards;
create policy "Deck owners manage flashcards"
  on public.flashcards for all
  using (exists (select 1 from public.flashcard_decks where flashcard_decks.id = deck_id and flashcard_decks.owner_id = auth.uid()))
  with check (exists (select 1 from public.flashcard_decks where flashcard_decks.id = deck_id and flashcard_decks.owner_id = auth.uid()));

drop policy if exists "Users manage own study events" on public.study_events;
create policy "Users manage own study events"
  on public.study_events for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
