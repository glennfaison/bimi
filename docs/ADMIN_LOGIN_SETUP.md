# Admin Login Setup

## Default Admin Credentials

**Email:** `admin@bimiconsulting.org`  
**Password:** `admin`

## Setup Instructions

### Method 1: Supabase Dashboard (Easiest)

1. Go to your Supabase project
2. Navigate to **Authentication** > **Users**
3. Click **"Add user"** > **"Create new user"**
4. Enter:
   - Email: `admin@bimiconsulting.org`
   - Password: `admin`
   - ✅ Check **"Auto Confirm User"**
5. Click **"Create user"**

### Method 2: Disable Email Confirmation (For Development)

1. Go to **Authentication** > **Settings**
2. Find **"Enable email confirmations"**
3. **Disable** it
4. Now you can sign up normally at `/auth/login`

### Method 3: Using API (Advanced)

Create a temporary script to call Supabase Admin API with your service role key.

## After Setup

1. Visit: `http://localhost:3000/auth/login`
2. Login with:
   - Email: `admin@bimiconsulting.org`
   - Password: `admin`
3. You'll be redirected to `/admin`

## Security Notes

⚠️ **IMPORTANT:** 
- Change the default password immediately after first login
- For production, use a strong password
- Consider enabling 2FA in Supabase
- The admin user has full access to the CMS

## Test Login

```bash
# Start dev server
npm run dev

# Visit in browser:
# http://localhost:3000/auth/login
```

Enter credentials and you should be redirected to `/admin`.
