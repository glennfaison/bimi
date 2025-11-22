-- Create storage bucket for images
insert into storage.buckets (id, name, public)
values ('public-images', 'public-images', true)
on conflict (id) do nothing;

-- Allow public read access
create policy "Public images are publicly accessible"
on storage.objects for select
using ( bucket_id = 'public-images' );

-- Allow authenticated users to upload
create policy "Authenticated users can upload images"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'public-images' );

-- Allow authenticated users to update their uploads
create policy "Authenticated users can update images"
on storage.objects for update
to authenticated
using ( bucket_id = 'public-images' );

-- Allow authenticated users to delete
create policy "Authenticated users can delete images"
on storage.objects for delete
to authenticated
using ( bucket_id = 'public-images' );
