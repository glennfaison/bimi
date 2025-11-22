-- Create content tables for CMS

-- Cards table for reusable card content (for companies, partners, etc.)
create table if not exists public.cards (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  link_url text,
  category text not null, -- 'company', 'partner', 'sponsor', etc.
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Page sections table for dynamic page content
create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null, -- 'landing', 'climate', 'strategic-priority', etc.
  section_key text not null, -- 'hero', 'about', 'features', etc.
  title text,
  content text,
  image_url text,
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(page_slug, section_key)
);

-- Team members table
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  image_url text,
  linkedin_url text,
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Testimonials/Impact stories table
create table if not exists public.impact_stories (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  story text not null,
  impact_metrics text, -- JSON string with key metrics
  image_url text,
  is_featured boolean default false,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create indexes for better query performance
create index if not exists cards_category_idx on public.cards(category);
create index if not exists cards_published_idx on public.cards(is_published);
create index if not exists page_sections_page_idx on public.page_sections(page_slug);
create index if not exists page_sections_published_idx on public.page_sections(is_published);
create index if not exists team_members_published_idx on public.team_members(is_published);
create index if not exists impact_stories_published_idx on public.impact_stories(is_published);

-- Enable Row Level Security
alter table public.cards enable row level security;
alter table public.page_sections enable row level security;
alter table public.team_members enable row level security;
alter table public.impact_stories enable row level security;

-- Full access for authenticated users
create policy "Full access for authenticated users on cards"
  on public.cards
  to authenticated
  using (true)
  with check (true);
create policy "Anyone can view cards"
  on public.cards
  for select
  using (true);

create policy "Full access for authenticated users on page_sections"
  on public.page_sections
  to authenticated
  using (true)
  with check (true);
create policy "Anyone can view page_sections"
  on public.page_sections
  for select
  using (true);

create policy "Full access for authenticated users on team_members"
  on public.team_members
  to authenticated
  using (true)
  with check (true);
create policy "Anyone can view team_members"
  on public.team_members
  for select
  using (true);

create policy "Full access for authenticated users on impact_stories"
  on public.impact_stories
  to authenticated
  using (true)
  with check (true);
create policy "Anyone can view impact_stories"
  on public.impact_stories
  for select
  using (true);
