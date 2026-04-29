create table if not exists public.page_comments (
  id uuid primary key default gen_random_uuid(),
  page_id text not null references public.pages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  parent_id uuid references public.page_comments(id) on delete cascade,
  body text not null,
  status text not null default 'visible'
    check (status in ('visible', 'hidden', 'resolved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists page_comments_set_updated_at on public.page_comments;
create trigger page_comments_set_updated_at
  before update on public.page_comments
  for each row execute function public.set_updated_at();

create table if not exists public.page_suggestions (
  id uuid primary key default gen_random_uuid(),
  page_id text not null references public.pages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  title text,
  content text,
  summary text,
  system text,
  drug_class text,
  rationale text,
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'rejected')),
  reviewer_id uuid references public.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists page_suggestions_set_updated_at on public.page_suggestions;
create trigger page_suggestions_set_updated_at
  before update on public.page_suggestions
  for each row execute function public.set_updated_at();

create table if not exists public.course_join_requests (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  note text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  reviewed_by uuid references public.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (course_id, user_id)
);

create index if not exists page_comments_page_id_created_at_idx on public.page_comments(page_id, created_at);
create index if not exists page_suggestions_page_id_status_idx on public.page_suggestions(page_id, status);
create index if not exists page_suggestions_user_id_idx on public.page_suggestions(user_id);
create index if not exists course_join_requests_course_id_status_idx on public.course_join_requests(course_id, status);
create index if not exists course_join_requests_user_id_idx on public.course_join_requests(user_id);

alter table public.page_comments enable row level security;
alter table public.page_suggestions enable row level security;
alter table public.course_join_requests enable row level security;

drop policy if exists "Readable page comments" on public.page_comments;
create policy "Readable page comments"
  on public.page_comments for select
  using (
    status = 'visible'
    and exists (
      select 1 from public.pages
      where pages.id = page_comments.page_id
      and (
        pages.visibility in ('community', 'public')
        or pages.user_id = auth.uid()
        or page_comments.user_id = auth.uid()
      )
    )
  );

drop policy if exists "Users create own page comments" on public.page_comments;
create policy "Users create own page comments"
  on public.page_comments for insert
  with check (user_id = auth.uid());

drop policy if exists "Users update own page comments" on public.page_comments;
create policy "Users update own page comments"
  on public.page_comments for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Readable page suggestions" on public.page_suggestions;
create policy "Readable page suggestions"
  on public.page_suggestions for select
  using (
    auth.uid() is not null
    and (
      user_id = auth.uid()
      or exists (
        select 1 from public.pages
        where pages.id = page_suggestions.page_id
        and (pages.visibility in ('community', 'public') or pages.user_id = auth.uid())
      )
    )
  );

drop policy if exists "Users create own page suggestions" on public.page_suggestions;
create policy "Users create own page suggestions"
  on public.page_suggestions for insert
  with check (user_id = auth.uid() and status = 'pending');

drop policy if exists "Users update own pending suggestions" on public.page_suggestions;
create policy "Users update own pending suggestions"
  on public.page_suggestions for update
  using (user_id = auth.uid() and status = 'pending')
  with check (user_id = auth.uid());

drop policy if exists "Page owners review suggestions" on public.page_suggestions;
create policy "Page owners review suggestions"
  on public.page_suggestions for update
  using (
    exists (
      select 1 from public.pages
      where pages.id = page_suggestions.page_id
      and pages.user_id = auth.uid()
    )
  );

drop policy if exists "Users read relevant join requests" on public.course_join_requests;
create policy "Users read relevant join requests"
  on public.course_join_requests for select
  using (
    user_id = auth.uid()
    or exists (
      select 1 from public.courses
      where courses.id = course_join_requests.course_id
      and courses.owner_id = auth.uid()
    )
  );

drop policy if exists "Users create own join requests" on public.course_join_requests;
create policy "Users create own join requests"
  on public.course_join_requests for insert
  with check (user_id = auth.uid() and status = 'pending');

drop policy if exists "Course owners review join requests" on public.course_join_requests;
create policy "Course owners review join requests"
  on public.course_join_requests for update
  using (
    exists (
      select 1 from public.courses
      where courses.id = course_join_requests.course_id
      and courses.owner_id = auth.uid()
    )
  );
