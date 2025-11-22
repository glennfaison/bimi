-- Create pillars of inspiration table
create table if not exists public.pillars (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  bio text,
  image_url text,
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create index
create index if not exists pillars_published_idx on public.pillars(is_published);
create index if not exists pillars_order_idx on public.pillars(order_index);

-- Enable RLS
alter table public.pillars enable row level security;

create policy "Full access for authenticated users"
  on public.pillars
  to authenticated
  using (true)
  with check (true);

create policy "Anyone can view pillars"
  on public.pillars
  for select
  using (true);
