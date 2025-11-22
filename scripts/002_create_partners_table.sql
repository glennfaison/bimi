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

-- Public read access for published partners
create policy "Anyone can view published partners"
  on public.partners for select
  using (is_published = true);

-- Admin policies
create policy "Authenticated users can insert partners"
  on public.partners for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update partners"
  on public.partners for update
  to authenticated
  using (true);

create policy "Authenticated users can delete partners"
  on public.partners for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all partners"
  on public.partners for select
  to authenticated
  using (true);
