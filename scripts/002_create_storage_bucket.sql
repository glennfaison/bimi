-- Create storage bucket for images
insert into storage.buckets (id, name, public)
values ('public-images', 'public-images', true)
on conflict (id) do nothing;

-- Allow full access for authenticated users
create policy "Full access for authenticated users"
  on storage.objects
  to authenticated
  using (true)
  with check (true);

-- Allow anyone to view public images
create policy "Anyone can view public images"
  on storage.objects
  for select
  using (bucket_id = 'public-images');
