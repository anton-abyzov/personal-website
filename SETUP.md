# Setup Instructions for antonabyzov.com

## Configuration Required

### 1. Google Analytics 4
Replace `G-XXXXXXXXXX` in `index.html` (lines 77 & 82) with your GA4 Measurement ID.

**Recommendation:** Use the same GA4 property as EasyChamp to track all your sites in one dashboard.

```javascript
// Line 77 & 82 in index.html
gtag('config', 'G-YOUR-ID-HERE');
```

### 2. Ko-fi Integration
The Ko-fi widget is configured with username `antonabyzov`. 

To change:
- Update line 739 in `index.html`
- Replace `antonabyzov` with your Ko-fi username

### 3. Stripe Configuration (Optional)
For payment processing, update in `index.html` line 754:

```javascript
const stripeConfig = {
  publicKey: 'pk_live_YOUR_PUBLIC_KEY', // Safe to expose
  // ...
};
```

**Note:** Stripe public keys are safe to include in frontend code. Never include secret keys.

## GitHub Secrets

**NOT NEEDED for this site** because:
- GA4 IDs are public
- Ko-fi usernames are public  
- Stripe public keys are safe in frontend code

GitHub Secrets are only needed for:
- Backend API keys
- Database credentials
- Stripe secret keys (backend only)
- Private API tokens

## Deployment

The site auto-deploys via GitHub Pages when you push to the `main` branch.

## Files Created

- `sitemap.xml` - Helps search engines index your site
- `robots.txt` - Controls crawler access
- `seo-config.js` - Centralized SEO settings
- `seo-test.html` - SEO validation dashboard

## Testing

Open `seo-test.html` locally to validate SEO implementation:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000/seo-test.html
```