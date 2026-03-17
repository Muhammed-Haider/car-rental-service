# Supabase OAuth Configuration Guide (PKCE Flow)

## ✅ Implementation Complete

Your app now uses the **official Supabase PKCE OAuth flow** which is more secure and production-ready.

## Important: Update Your Supabase Dashboard Settings

### 1. Go to Supabase Dashboard
- Visit: https://supabase.com/dashboard
- Select your project: `wldgwndfnqymhrkuwrsp`

### 2. Navigate to Authentication Settings
- Go to: **Authentication** → **URL Configuration**

### 3. Update Site URL
**Development:**
- Site URL: `http://localhost:3000`

**Production:**
- Site URL: `https://car-rental-service-pearl.vercel.app`

### 4. Add Redirect URLs
Add BOTH URLs to **Redirect URLs** section:

```
http://localhost:3000/auth/callback
https://car-rental-service-pearl.vercel.app/auth/callback
```

### 5. OAuth Provider Settings (Google)
- Go to: **Authentication** → **Providers** → **Google**
- Make sure Google OAuth is enabled
- Verify your Client ID and Client Secret are correct
- **Important**: Ensure PKCE flow is enabled (it's on by default)

### 6. Test the Flow
1. Clear your browser cookies and localStorage
2. Go to http://localhost:3000/signin
3. Click "Continue with Google"
4. Select your Google account
5. You should be redirected to /dashboard

## 🚀 What Changed (PKCE Implementation)

### Files Created/Updated:

1. **`app/auth/callback/route.js`** ✅ NEW
   - Server-side route handler
   - Exchanges OAuth code for session using `exchangeCodeForSession()`
   - Redirects to /dashboard on success

2. **`lib/supabase/client.js`** ✅ UPDATED
   - Simplified to use default Supabase cookie handling
   - Removed all custom localStorage/cookie overrides
   - Uses `createBrowserClient()` with no custom config

3. **`lib/supabase/server.js`** ✅ UPDATED
   - Uses official `getAll()` and `setAll()` cookie methods
   - Compatible with Next.js 15+ async cookies

4. **`middleware.js`** ✅ NEW
   - Automatically refreshes user sessions on every request
   - Ensures auth state persists across navigation

5. **`app/signin/page.jsx` & `app/signup/page.jsx`** ✅ UPDATED
   - Uses `window.location.origin` for dynamic redirect URLs
   - Works on both localhost and production automatically

6. **`app/auth/callback/page.jsx`** ❌ DELETED
   - Old client-side callback logic removed
   - PKCE uses server-side code exchange instead

## How PKCE Flow Works Now

1. User clicks "Sign in with Google"
2. Supabase generates a code verifier (stored in cookies automatically)
3. User redirects to Google OAuth
4. Google redirects back with `?code=...`
5. **Server route** (`/auth/callback/route.js`) exchanges code for session
6. Session cookies are set server-side
7. User redirects to /dashboard

## Troubleshooting

### "invalid request: both auth code and code verifier should be non-empty"
**Fixed!** This error occurred because:
- Old implementation used client-side hash tokens (`#access_token`)
- New PKCE uses server-side code exchange (`?code`)
- Cookie handling was overridden incorrectly

### Cookies Not Persisting
- Make sure both redirect URLs are in Supabase dashboard
- Clear all browser storage and try again
- Check that middleware.js is not excluded from your matcher

### Still Not Working?
1. Check Supabase Dashboard → Logs → Auth logs
2. Verify environment variables in Vercel
3. Ensure `NEXT_PUBLIC_SITE_URL` matches your production URL

## Environment Variables Required

```env
NEXT_PUBLIC_SUPABASE_URL=https://wldgwndfnqymhrkuwrsp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000 (or production URL)
```

## Current Configuration Status

✅ **Official Supabase PKCE OAuth flow**
✅ **Server-side code exchange** (more secure)
✅ **Automatic session refresh** via middleware
✅ **Works on localhost AND Vercel production**
✅ **No custom cookie handling** (uses Supabase defaults)
✅ **Google account selection prompt** enabled
