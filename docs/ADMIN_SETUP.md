# Admin Backoffice Setup Guide

## Overview
Admin backoffice now supports uploading and managing:
- Partners & Sponsors logos
- Team members
- Pillars of Inspiration
- Page sections (hero images, content)
- Companies

## Setup Steps

### 1. Run Database Migrations

In your Supabase SQL Editor, run these scripts in order:

```sql
-- 1. Create pillars table (if not already done)
-- Run: scripts/003_create_pillars_table.sql

-- 2. Create storage bucket
-- Run: scripts/004_create_storage_bucket.sql

-- 3. Seed existing data
-- Run: scripts/005_seed_existing_data.sql
```

### 2. Storage Bucket Setup

The bucket `public-images` has been created with policies:
- ✅ Public read access
- ✅ Authenticated users can upload/update/delete

### 3. Upload Existing Images (Optional)

You can either:
- **Option A**: Keep using `/public` folder images (current setup works)
- **Option B**: Upload to Supabase Storage:
  1. Go to Supabase Dashboard > Storage > `public-images`
  2. Upload logos from `/public` folder
  3. Update image URLs in admin to use Supabase URLs

## Admin Routes

- `/admin` - Dashboard
- `/admin/pages` - Manage page sections
- `/admin/team` - Manage team members
- `/admin/companies` - Manage companies & partners
- `/admin/pillars` - Manage pillars of inspiration
- `/admin/impact` - Manage impact stories

## Image Upload

All forms now have `ImageUpload` component that:
- Uploads to Supabase Storage `public-images` bucket
- Shows preview
- Generates public URLs automatically
- Supports drag & drop

## What Changed

### Frontend Pages
- ✅ `/pillars-of-inspiration` - Now fetches from `pillars` table
- ✅ `/partners` - Fetches from `cards` table (category: partner/sponsor)
- ✅ `/companies` - Fetches from `cards` table (category: company)
- ✅ `/our-people` - Already fetching from `team_members` table

### Database
- ✅ New table: `pillars` (9 existing pillars seeded)
- ✅ Seeded: 7 partners/sponsors in `cards` table
- ✅ Storage bucket: `public-images` with RLS policies

### Admin Forms
- ✅ Pillar form with image upload
- ✅ Card form with image upload (partners/companies)
- ✅ Page section form with image upload
- ✅ Team member form already has image upload

## Next Steps

1. Run the 3 SQL scripts in Supabase
2. Login to `/admin` (existing auth)
3. Navigate to `/admin/pillars` or `/admin/companies`
4. Click "Add New" and test image upload
5. (Optional) Upload real images for pillars via admin

## Notes

- Existing images in `/public` still work
- Can gradually migrate to Supabase Storage
- All uploads auto-generate public URLs
- RLS ensures only authenticated users can upload
