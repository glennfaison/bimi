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

create policy "Full access for authenticated users"
  on public.sponsors
  to authenticated
  using (true)
  with check (true);

create policy "Anyone can view sponsors"
  on public.sponsors
  for select
  using (true);
