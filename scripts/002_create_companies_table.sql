-- Companies table
create table if not exists public.companies (
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

create index if not exists companies_published_idx on public.companies(is_published);

alter table public.companies enable row level security;

-- Public read access for published companies
create policy "Anyone can view published companies"
  on public.companies for select
  using (is_published = true);

-- Admin policies
create policy "Authenticated users can insert companies"
  on public.companies for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update companies"
  on public.companies for update
  to authenticated
  using (true);

create policy "Authenticated users can delete companies"
  on public.companies for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all companies"
  on public.companies for select
  to authenticated
  using (true);
