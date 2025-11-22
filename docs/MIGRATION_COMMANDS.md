# Quick Migration Commands

## Run in Supabase SQL Editor

Copy and paste these in order:

### 1. Create Pillars Table

```sql
-- Already exists, verify it's there:
SELECT * FROM public.pillars LIMIT 1;
```

### 2. Create Storage Bucket

```sql
-- Create bucket
insert into storage.buckets (id, name, public)
values ('public-images', 'public-images', true)
on conflict (id) do nothing;

-- Add policies
create policy "Public images are publicly accessible"
on storage.objects for select
using ( bucket_id = 'public-images' );

create policy "Authenticated users can upload images"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'public-images' );

create policy "Authenticated users can update images"
on storage.objects for update
to authenticated
using ( bucket_id = 'public-images' );

create policy "Authenticated users can delete images"
on storage.objects for delete
to authenticated
using ( bucket_id = 'public-images' );
```

### 3. Seed Data

```sql
-- Seed partners/sponsors
insert into public.cards (title, description, image_url, category, order_index, is_published) values
('Facebook', 'Technology Partner', '/facebook-logo.png', 'partner', 1, true),
('Coca Cola', 'Corporate Sponsor', '/coca-cola-logo.png', 'sponsor', 2, true),
('Disney', 'Media Partner', '/disney-inspired-logo.png', 'partner', 3, true),
('Walmart', 'Retail Partner', '/walmart-logo.png', 'partner', 4, true),
('Muyang Group', 'Strategic Partner', '/muyang-group-logo.jpg', 'partner', 5, true),
('Ntala Show', 'Media Partner', '/ntala-show-logo.jpg', 'partner', 6, true),
('Yellow Lock', 'Technology Partner', '/yellow-lock-logo.jpg', 'partner', 7, true)
on conflict do nothing;

-- Seed pillars
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
```

## Verify

```sql
-- Check pillars
SELECT count(*) FROM public.pillars;

-- Check partners/sponsors
SELECT count(*) FROM public.cards WHERE category IN ('partner', 'sponsor');

-- Check storage bucket
SELECT * FROM storage.buckets WHERE id = 'public-images';
```

## Done!

Now visit:
- `/admin/pillars` - Manage pillars
- `/admin/companies` - Manage partners/sponsors
- `/pillars-of-inspiration` - View public page
