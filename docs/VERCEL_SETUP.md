# Vercel Deployment Setup

This guide will help you set up automatic deployments for your BIMI website on Vercel.

## Configuration

The project is configured with:
- ✅ `vercel.json` - Deployment configuration
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ Next.js framework detection
- ✅ pnpm package manager support

## Deployment Strategy

### Production (main branch)
- **Branch**: `main`
- **URL**: Your production domain (e.g., `bimi-website.vercel.app` or custom domain)
- **Auto-deploy**: Every push to `main` triggers a production deployment

### Preview Deployments (all other branches)
- **Branches**: Any branch other than `main`
- **URL**: Unique preview URL per branch (e.g., `bimi-website-branch-name.vercel.app`)
- **Auto-deploy**: Every push to any branch creates a preview deployment
- **Auto-cancel**: Previous deployments are cancelled when new commits are pushed

## Setup Instructions

### 1. Connect Your Repository to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub/GitLab/Bitbucket account
3. Click **"Add New..."** → **"Project"**
4. Import your `bimi-website` repository
5. Vercel will auto-detect Next.js settings

### 2. Configure Project Settings

During import or in Project Settings:

**Framework Preset**: Next.js (auto-detected)

**Build & Development Settings**:
- Build Command: `pnpm build` (auto-detected from vercel.json)
- Install Command: `pnpm install` (auto-detected from vercel.json)
- Output Directory: `.next` (default for Next.js)

**Root Directory**: `.` (leave as root)

### 3. Configure Environment Variables

Add your environment variables in Vercel Dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add the following variables for all environments (Production, Preview, Development):

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

3. For Preview/Development, you can use the same values or separate staging credentials

### 4. Configure Git Integration

In **Project Settings** → **Git**:

- ✅ **Production Branch**: `main`
- ✅ **Deploy Hooks**: Enabled
- ✅ **Automatically expose System Environment Variables**: Enabled
- ✅ **Deploy on Push**: Enabled for all branches
- ✅ **Auto-cancel Previous Deployments**: Enabled (recommended)

### 5. Domain Configuration (Optional)

**For Production**:
1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `bimi.com`)
3. Configure DNS records as instructed by Vercel

**Preview Deployments**:
- Automatic: `[project]-[branch]-[team].vercel.app`
- You can also assign specific domains to specific branches

## Deployment Workflow

### Creating a Preview Deployment

```bash
# Create a new feature branch
git checkout -b feature/new-feature

# Make your changes
git add .
git commit -m "Add new feature"

# Push to create preview deployment
git push origin feature/new-feature
```

Vercel will automatically:
1. Detect the push
2. Build and deploy to a preview URL
3. Comment on your PR (if GitHub integration is enabled) with the preview URL

### Deploying to Production

```bash
# Merge your changes to main
git checkout main
git merge feature/new-feature
git push origin main
```

Vercel will automatically deploy to production.

## Vercel CLI (Optional)

For local development and manual deployments:

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## GitHub Integration Features

When connected to GitHub, Vercel provides:

- ✅ **Deployment status checks** on PRs
- ✅ **Preview URL comments** on PRs
- ✅ **Automatic deployments** on push
- ✅ **Deployment protection** for production branch
- ✅ **Build logs** accessible from GitHub

## Monitoring & Analytics

Access deployment information:
- **Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Analytics**: Built-in with `@vercel/analytics` (already in package.json)
- **Logs**: Real-time logs for each deployment
- **Performance**: Vercel Speed Insights

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all environment variables are set
- Verify `pnpm-lock.yaml` is committed

### Preview Deployment Not Created
- Check Git settings in Project Settings
- Ensure branch protection rules aren't blocking
- Verify Vercel GitHub App has repository access

### Environment Variables Not Working
- Ensure variables are added to correct environment (Production/Preview/Development)
- Redeploy after adding new variables
- Use `NEXT_PUBLIC_` prefix for client-side variables

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Git Integration](https://vercel.com/docs/concepts/git)
