-- Sponsors table
create table if not exists public.sponsors (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  link_url text,
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index if not exists sponsors_published_idx on public.sponsors(is_published);

alter table public.sponsors enable row level security;

-- Public read access for published sponsors
create policy "Anyone can view published sponsors"
  on public.sponsors for select
  using (is_published = true);

-- Admin policies
create policy "Authenticated users can insert sponsors"
  on public.sponsors for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update sponsors"
  on public.sponsors for update
  to authenticated
  using (true);

create policy "Authenticated users can delete sponsors"
  on public.sponsors for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all sponsors"
  on public.sponsors for select
  to authenticated
  using (true);
