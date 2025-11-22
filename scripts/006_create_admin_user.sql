-- Create admin user
-- This creates a user with email: admin@bimiconsulting.org and password: admin
-- 
-- IMPORTANT: Run this in Supabase SQL Editor
-- After running, you can login with:
-- Email: admin@bimiconsulting.org
-- Password: admin
--
-- CHANGE THE PASSWORD IMMEDIATELY AFTER FIRST LOGIN!

-- Note: Supabase doesn't allow direct user creation via SQL for security reasons
-- You have two options:

-- OPTION 1: Use Supabase Dashboard (Recommended)
-- 1. Go to Authentication > Users
-- 2. Click "Add user" > "Create new user"
-- 3. Email: admin@bimiconsulting.org
-- 4. Password: admin
-- 5. Check "Auto Confirm User"

-- OPTION 2: Use the Supabase Admin API (requires service role key)
-- You can create a one-time script or use the dashboard

-- For development, you can also temporarily disable email confirmation:
-- Go to Authentication > Settings > Enable "Disable email confirmations"
