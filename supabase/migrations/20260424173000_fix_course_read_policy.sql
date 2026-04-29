drop policy if exists "Readable courses" on public.courses;

create policy "Readable courses"
  on public.courses for select
  using (
    visibility in ('community', 'public')
    or owner_id = auth.uid()
  );
