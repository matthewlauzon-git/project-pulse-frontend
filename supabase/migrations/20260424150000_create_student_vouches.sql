drop policy if exists "Users can insert own profile" on public.users;
create policy "Users can insert own profile"
  on public.users for insert
  with check (auth.uid() = id);

create table if not exists public.page_vouches (
  page_id text not null references public.pages(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  vouch_type text not null check (vouch_type in ('helpful', 'relevant', 'verified')),
  created_at timestamptz not null default now(),
  primary key (page_id, user_id)
);

alter table public.page_vouches enable row level security;

drop policy if exists "Anyone can read page vouches" on public.page_vouches;
create policy "Anyone can read page vouches"
  on public.page_vouches for select
  using (true);

drop policy if exists "Authenticated users can vouch once per page" on public.page_vouches;
create policy "Authenticated users can vouch once per page"
  on public.page_vouches for insert
  with check (auth.uid() = user_id);

drop policy if exists "Authenticated users can update own vouches" on public.page_vouches;
create policy "Authenticated users can update own vouches"
  on public.page_vouches for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Authenticated users can delete own vouches" on public.page_vouches;
create policy "Authenticated users can delete own vouches"
  on public.page_vouches for delete
  using (auth.uid() = user_id);

create index if not exists page_vouches_page_id_idx on public.page_vouches(page_id);
