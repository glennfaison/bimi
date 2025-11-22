-- Seed data for partners table
insert into public.partners (title, description, image_url, link_url, order_index, is_published)
values
('Partner X', 'Description for Partner X', 'partner-x.jpg', 'https://partner-x.com', 1, true),
('Partner Y', 'Description for Partner Y', 'partner-y.jpg', 'https://partner-y.com', 2, true);
