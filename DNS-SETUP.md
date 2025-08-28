# DNS Configuration for antonabyzov.com

## Current Status
✅ GitHub Pages is enabled and site is live at: https://anton-abyzov.github.io/personal-website/
⏳ Custom domain (antonabyzov.com) needs DNS configuration

## Option 1: Direct GitHub Pages (No HTTPS on custom domain)
Configure your DNS provider with:
- **A Records** pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

## Option 2: Cloudflare (Recommended - Free HTTPS) 🔒
This option provides:
- ✅ Free SSL/TLS certificate
- ✅ DDoS protection
- ✅ CDN for faster global loading
- ✅ Analytics
- ✅ Page rules and redirects

### Step-by-Step Cloudflare Setup:

1. **Sign up for Cloudflare (Free)**
   - Go to https://www.cloudflare.com
   - Create a free account

2. **Add Your Site**
   - Add "antonabyzov.com" as a new site
   - Select the FREE plan

3. **Configure DNS Records in Cloudflare**
   
   **IMPORTANT: Use these exact A records to point to GitHub Pages:**
   ```
   Type: A
   Name: @
   Content: 185.199.108.153
   Proxy: OFF (Grey cloud - IMPORTANT!)
   TTL: Auto
   
   Type: A
   Name: @
   Content: 185.199.109.153
   Proxy: OFF (Grey cloud - IMPORTANT!)
   TTL: Auto
   
   Type: A
   Name: @
   Content: 185.199.110.153
   Proxy: OFF (Grey cloud - IMPORTANT!)
   TTL: Auto
   
   Type: A
   Name: @
   Content: 185.199.111.153
   Proxy: OFF (Grey cloud - IMPORTANT!)
   TTL: Auto
   
   Type: CNAME
   Name: www
   Content: anton-abyzov.github.io
   Proxy: OFF (Grey cloud - IMPORTANT!)
   TTL: Auto
   ```
   
   **Note**: Keep Proxy OFF (grey cloud) for GitHub Pages to work correctly. GitHub will provide SSL.

4. **Update Nameservers**
   - Cloudflare will provide you with 2 nameservers like:
     - `xxx.ns.cloudflare.com`
     - `yyy.ns.cloudflare.com`
   - Update these at your domain registrar

5. **Configure SSL/TLS in Cloudflare**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full"
   - Enable "Always Use HTTPS"

6. **Enable HTTPS in GitHub**
   Once DNS propagates (can take up to 48 hours):
   - Go to your repo Settings → Pages
   - Check "Enforce HTTPS"

7. **Optional Cloudflare Optimizations**
   - **Speed → Optimization**: Enable Auto Minify (JS, CSS, HTML)
   - **Caching → Configuration**: Set Browser Cache TTL
   - **Page Rules**: Add redirects if needed
   - **Analytics**: Monitor your site traffic

## Verification Steps

1. **Check DNS Propagation**
   ```bash
   nslookup antonabyzov.com
   dig antonabyzov.com
   ```

2. **Test HTTPS**
   ```bash
   curl -I https://antonabyzov.com
   ```

3. **SSL Certificate Check**
   Visit: https://www.ssllabs.com/ssltest/analyze.html?d=antonabyzov.com

## Troubleshooting

- **"DNS_PROBE_FINISHED_NXDOMAIN"**: DNS hasn't propagated yet, wait up to 48 hours
- **SSL Certificate Error**: Make sure Cloudflare SSL is set to "Full" mode
- **404 Error**: Check CNAME file in repository exists
- **Redirect Loop**: Ensure Cloudflare SSL is NOT set to "Flexible"

## Alternative: GitHub Pages with Let's Encrypt
If you prefer not to use Cloudflare, GitHub Pages automatically provides HTTPS for custom domains:
1. Configure A records directly to GitHub
2. Wait for DNS propagation
3. Enable "Enforce HTTPS" in repo settings
4. GitHub will automatically provision a Let's Encrypt certificate

## Current Site URLs
- GitHub Pages: https://anton-abyzov.github.io/personal-website/
- Custom Domain: https://antonabyzov.com (pending DNS configuration)