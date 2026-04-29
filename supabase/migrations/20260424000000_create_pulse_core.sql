create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.pages (
  id text primary key,
  title text not null,
  type text not null check (type in ('disease', 'drug', 'procedure', 'note')),
  content text not null default '',
  user_id uuid references public.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.links (
  from_page_id text not null references public.pages(id) on delete cascade,
  to_page_id text not null references public.pages(id) on delete cascade,
  primary key (from_page_id, to_page_id)
);

alter table public.users enable row level security;
alter table public.pages enable row level security;
alter table public.links enable row level security;

drop policy if exists "Users can read own profile" on public.users;
create policy "Users can read own profile"
  on public.users for select
  using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.users;
create policy "Users can update own profile"
  on public.users for update
  using (auth.uid() = id);

drop policy if exists "Anyone can read pages" on public.pages;
create policy "Anyone can read pages"
  on public.pages for select
  using (true);

drop policy if exists "Authenticated users can insert own pages" on public.pages;
create policy "Authenticated users can insert own pages"
  on public.pages for insert
  with check (auth.uid() = user_id);

drop policy if exists "Authenticated users can update own pages" on public.pages;
create policy "Authenticated users can update own pages"
  on public.pages for update
  using (auth.uid() = user_id);

drop policy if exists "Authenticated users can delete own pages" on public.pages;
create policy "Authenticated users can delete own pages"
  on public.pages for delete
  using (auth.uid() = user_id);

drop policy if exists "Anyone can read links" on public.links;
create policy "Anyone can read links"
  on public.links for select
  using (true);

drop policy if exists "Authenticated users can insert links from own pages" on public.links;
create policy "Authenticated users can insert links from own pages"
  on public.links for insert
  with check (
    exists (
      select 1
      from public.pages
      where pages.id = links.from_page_id
      and pages.user_id = auth.uid()
    )
  );

drop policy if exists "Authenticated users can delete links from own pages" on public.links;
create policy "Authenticated users can delete links from own pages"
  on public.links for delete
  using (
    exists (
      select 1
      from public.pages
      where pages.id = links.from_page_id
      and pages.user_id = auth.uid()
    )
  );

create index if not exists pages_type_title_idx on public.pages(type, title);
create index if not exists pages_user_id_idx on public.pages(user_id);
create index if not exists links_to_page_id_idx on public.links(to_page_id);
