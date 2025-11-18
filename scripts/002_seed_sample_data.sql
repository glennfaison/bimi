-- Seed some sample data for testing

-- Sample page sections for landing page
insert into public.page_sections (page_slug, section_key, title, content, order_index, is_published)
values
  ('landing', 'hero', 'Welcome to BIMI', 'Empowering businesses for a sustainable future', 1, true),
  ('landing', 'about', 'About Us', 'BIMI is dedicated to supporting impact-driven businesses through strategic initiatives and ecosystem development.', 2, true),
  ('climate', 'hero', 'Climate Action', 'Our commitment to climate resilience and sustainable development', 1, true);

-- Sample cards for companies
insert into public.cards (title, description, category, order_index, is_published)
values
  ('Sample Company 1', 'An innovative company making a difference', 'company', 1, true),
  ('Sample Company 2', 'Leading the way in sustainable solutions', 'company', 2, true);

-- Sample cards for partners
insert into public.cards (title, description, category, order_index, is_published)
values
  ('Partner Organization 1', 'Supporting our mission through collaboration', 'partner', 1, true),
  ('Sponsor Corporation', 'Funding sustainable development initiatives', 'sponsor', 1, true);

-- Sample team member
insert into public.team_members (name, role, bio, order_index, is_published)
values
  ('John Doe', 'Executive Director', 'John leads BIMI with over 20 years of experience in sustainable development.', 1, true);

-- Sample impact story
insert into public.impact_stories (company_name, story, impact_metrics, is_featured, is_published)
values
  ('Green Tech Solutions', 'Through BIMI support, Green Tech Solutions expanded operations and reduced carbon emissions by 40%.', '{"jobs_created": 50, "carbon_reduced": "40%"}', true, true);
