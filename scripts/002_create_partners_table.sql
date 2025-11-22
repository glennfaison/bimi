-- Partners table
create table if not exists public.partners (
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

create index if not exists partners_published_idx on public.partners(is_published);

alter table public.partners enable row level security;

create policy "Full access for authenticated users"
  on public.partners
  to authenticated
  using (true)
  with check (true);

create policy "Anyone can view partners"
  on public.partners
  for select
  using (true);
