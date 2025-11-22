-- Seed data for companies table
insert into public.companies (title, description, image_url, link_url, order_index, is_published)
values
('Company A', 'Description for Company A', 'company-a.jpg', 'https://company-a.com', 1, true),
('Company B', 'Description for Company B', 'company-b.jpg', 'https://company-b.com', 2, true);
