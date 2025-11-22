-- Seed existing partners/sponsors
insert into public.cards (title, description, image_url, category, order_index, is_published) values
('Facebook', 'Technology Partner', '/facebook-logo.png', 'partner', 1, true),
('Coca Cola', 'Corporate Sponsor', '/coca-cola-logo.png', 'sponsor', 2, true),
('Disney', 'Media Partner', '/disney-inspired-logo.png', 'partner', 3, true),
('Walmart', 'Retail Partner', '/walmart-logo.png', 'partner', 4, true),
('Muyang Group', 'Strategic Partner', '/muyang-group-logo.jpg', 'partner', 5, true),
('Ntala Show', 'Media Partner', '/ntala-show-logo.jpg', 'partner', 6, true),
('Yellow Lock', 'Technology Partner', '/yellow-lock-logo.jpg', 'partner', 7, true)
on conflict do nothing;

-- Seed pillars of inspiration
insert into public.pillars (name, country, image_url, order_index, is_published) values
('Rebecca Enonchong', 'Cameroon', '/placeholder.svg', 1, true),
('Magatte Wade', 'Senegal', '/placeholder.svg', 2, true),
('Tony Elumelu', 'Nigeria', '/placeholder.svg', 3, true),
('Foster Awintiti Akugri', 'Ghana', '/placeholder.svg', 4, true),
('Aliko Dangote', 'Nigeria', '/placeholder.svg', 5, true),
('Mamadou Kwidjim', 'Cameroon', '/placeholder.svg', 6, true),
('Asma Mansour', 'Tunisia', '/placeholder.svg', 7, true),
('Iyinoluwa Aboyeji', 'Nigeria', '/placeholder.svg', 8, true),
('Yasmin Belo-Osagie', 'Nigeria', '/placeholder.svg', 9, true)
on conflict do nothing;
