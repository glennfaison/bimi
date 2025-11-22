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

-- Public read access for published content
create policy "Anyone can view published cards"
  on public.cards for select
  using (is_published = true);

create policy "Anyone can view published page sections"
  on public.page_sections for select
  using (is_published = true);

create policy "Anyone can view published team members"
  on public.team_members for select
  using (is_published = true);

create policy "Anyone can view published impact stories"
  on public.impact_stories for select
  using (is_published = true);

-- Admin policies (authenticated users can do everything)
create policy "Authenticated users can insert cards"
  on public.cards for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update cards"
  on public.cards for update
  to authenticated
  using (true);

create policy "Authenticated users can delete cards"
  on public.cards for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all cards"
  on public.cards for select
  to authenticated
  using (true);

-- Similar policies for other tables
create policy "Authenticated users can insert page sections"
  on public.page_sections for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update page sections"
  on public.page_sections for update
  to authenticated
  using (true);

create policy "Authenticated users can delete page sections"
  on public.page_sections for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all page sections"
  on public.page_sections for select
  to authenticated
  using (true);

create policy "Authenticated users can insert team members"
  on public.team_members for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update team members"
  on public.team_members for update
  to authenticated
  using (true);

create policy "Authenticated users can delete team members"
  on public.team_members for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all team members"
  on public.team_members for select
  to authenticated
  using (true);

create policy "Authenticated users can insert impact stories"
  on public.impact_stories for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update impact stories"
  on public.impact_stories for update
  to authenticated
  using (true);

create policy "Authenticated users can delete impact stories"
  on public.impact_stories for delete
  to authenticated
  using (true);

create policy "Authenticated users can view all impact stories"
  on public.impact_stories for select
  to authenticated
  using (true);
