# Database Setup Guide

## Quick Start - Run All Scripts

Follow these steps in order to set up your database completely.

### Prerequisites
1. Open your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **SQL Editor** in the left sidebar

---

## Step 1: Create Content Tables

Copy and paste the **entire contents** of `scripts/001_create_content_tables.sql`:

- Creates: `cards`, `page_sections`, `team_members`, `impact_stories` tables
- Sets up RLS policies for public/authenticated access

---

## Step 2: Seed Sample Data (Optional)

Copy and paste `scripts/002_seed_sample_data.sql`:

- Adds sample team members and page sections
- Can skip this if you want to start fresh

---

## Step 3: Create Pillars Table

Copy and paste `scripts/003_create_pillars_table.sql`:

- Creates `pillars` table for Pillars of Inspiration
- Sets up indexes and RLS policies

---

## Step 4: Create Storage Bucket

Copy and paste `scripts/004_create_storage_bucket.sql`:

- Creates `public-images` storage bucket
- Sets up storage policies for image uploads

---

## Step 5: Seed Existing Data

Copy and paste `scripts/005_seed_existing_data.sql`:

- Seeds partners/sponsors (Facebook, Coca Cola, Disney, etc.)
- Seeds pillars of inspiration (Rebecca Enonchong, Tony Elumelu, etc.)

---

## Step 6: Create Admin User

**Cannot be done via SQL!** Choose one option:

### Option A: Supabase Dashboard (Recommended)
1. Go to **Authentication** > **Users**
2. Click **"Add user"** > **"Create new user"**
3. Email: `admin@bimiconsulting.org`
4. Password: `admin` (or your choice)
5. ✅ Check **"Auto Confirm User"**
6. Click **"Create user"**

### Option B: Sign Up via App
1. Go to your app's login page: `/auth/login`
2. Sign up with any email
3. Manually confirm in Supabase Dashboard

---

## Alternative: Run Scripts in Order via Terminal

If you have Supabase CLI installed:

```bash
# Install Supabase CLI if needed
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Run scripts in order
psql $DATABASE_URL -f scripts/001_create_content_tables.sql
psql $DATABASE_URL -f scripts/002_seed_sample_data.sql
psql $DATABASE_URL -f scripts/003_create_pillars_table.sql
psql $DATABASE_URL -f scripts/004_create_storage_bucket.sql
psql $DATABASE_URL -f scripts/005_seed_existing_data.sql
# Note: 006 requires manual user creation via dashboard
```

---

## Quick Verification Commands

Run in Supabase SQL Editor:

---

## Quick Verification Commands

Run in Supabase SQL Editor:

```sql
-- Check all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('cards', 'page_sections', 'team_members', 'impact_stories', 'pillars');

-- Check data counts
SELECT 'cards' as table_name, count(*) FROM public.cards
UNION ALL
SELECT 'page_sections', count(*) FROM public.page_sections
UNION ALL
SELECT 'team_members', count(*) FROM public.team_members
UNION ALL
SELECT 'pillars', count(*) FROM public.pillars
UNION ALL
SELECT 'impact_stories', count(*) FROM public.impact_stories;

-- Check storage bucket
SELECT * FROM storage.buckets WHERE id = 'public-images';

-- Check admin user exists
SELECT email, created_at FROM auth.users;
```

---

## Quick Verification - Specific Queries

### Check Pillars

### Check Pillars

```sql
SELECT name, country, order_index, is_published FROM public.pillars ORDER BY order_index;
```

### Check Partners/Sponsors

```sql
SELECT title, category, is_published FROM public.cards WHERE category IN ('partner', 'sponsor') ORDER BY order_index;
```

### Check Team Members

```sql
SELECT name, role, is_published FROM public.team_members ORDER BY order_index;
```

---

## Troubleshooting

### Error: "relation already exists"
- **Solution**: Skip that script, the table is already created

### Error: "permission denied"
- **Solution**: Make sure you're running as the postgres user in SQL Editor

### Error: "duplicate key value"
- **Solution**: The data already exists, safe to ignore

### Can't login as admin
- **Solution**: Make sure you created the user in Authentication > Users
- **Solution**: Check email confirmation is disabled or user is confirmed

---

## After Setup

1. **Login** to admin panel: `/auth/login`
2. **Change password** immediately if using default
3. **Verify** pages work:
   - `/admin` - Dashboard
   - `/admin/pillars` - Manage pillars
   - `/admin/companies` - Manage partners/sponsors
   - `/admin/team` - Manage team members
   - `/pillars-of-inspiration` - View public page
   - `/partners` - View partners page

---

## One-Line Setup Script (Advanced)

If all scripts need to be run fresh, save this as `run_all.sh`:

```bash
#!/bin/bash
# Make sure you have your database URL set
# export DATABASE_URL="postgresql://..."

echo "Running all migration scripts..."
for script in scripts/*.sql; do
    echo "Running $script..."
    psql $DATABASE_URL -f "$script"
done
echo "Done! Remember to create admin user manually in Supabase Dashboard"
```

Make executable and run:
```bash
chmod +x run_all.sh
./run_all.sh
```

**Note**: This still requires manual admin user creation via Supabase Dashboard.

---

## Done!

Now visit:
- `/admin/pillars` - Manage pillars
- `/admin/companies` - Manage partners/sponsors
- `/pillars-of-inspiration` - View public page
