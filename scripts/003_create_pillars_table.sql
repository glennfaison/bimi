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

-- Public read access
create policy "Anyone can view published pillars"
  on public.pillars for select
  using (is_published = true);

-- Admin policies
create policy "Authenticated users can insert pillars"
  on public.pillars for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update pillars"
  on public.pillars for update
  to authenticated
  using (true);

create policy "Authenticated users can delete pillars"
  on public.pillars for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all pillars"
  on public.pillars for select
  to authenticated
  using (true);
