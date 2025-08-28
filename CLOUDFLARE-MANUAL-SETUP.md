# 🚀 MANUAL DNS SETUP - antonabyzov.com

## Step-by-Step Instructions for Cloudflare Dashboard

### 1. Open Cloudflare Dashboard
Go to: https://dash.cloudflare.com/1364b528762500de4f870e064229d443/antonabyzov.com/dns/records

### 2. Add These 4 A Records (COPY EXACTLY)

Click "+ Add record" and add each of these:

#### Record 1:
- **Type:** A
- **Name:** @ (or antonabyzov.com)
- **IPv4 address:** `185.199.108.153`
- **Proxy status:** Click the orange cloud to make it GREY (DNS only)
- **TTL:** Auto
- Click "Save"

#### Record 2:
- **Type:** A
- **Name:** @ (or antonabyzov.com)
- **IPv4 address:** `185.199.109.153`
- **Proxy status:** Click the orange cloud to make it GREY (DNS only)
- **TTL:** Auto
- Click "Save"

#### Record 3:
- **Type:** A
- **Name:** @ (or antonabyzov.com)
- **IPv4 address:** `185.199.110.153`
- **Proxy status:** Click the orange cloud to make it GREY (DNS only)
- **TTL:** Auto
- Click "Save"

#### Record 4:
- **Type:** A
- **Name:** @ (or antonabyzov.com)
- **IPv4 address:** `185.199.111.153`
- **Proxy status:** Click the orange cloud to make it GREY (DNS only)
- **TTL:** Auto
- Click "Save"

### 3. Add CNAME for www (Optional)
- **Type:** CNAME
- **Name:** www
- **Target:** `anton-abyzov.github.io`
- **Proxy status:** Click the orange cloud to make it GREY (DNS only)
- **TTL:** Auto
- Click "Save"

## 🔐 About SSL Certificate

### GitHub Pages SSL (Recommended)
- **Automatic**: GitHub provides free SSL via Let's Encrypt
- **No configuration needed**: Just wait after DNS propagates
- **How it works**: 
  1. DNS records point directly to GitHub (proxy OFF)
  2. GitHub detects your custom domain
  3. GitHub automatically provisions SSL certificate
  4. Certificate renews automatically

### Cloudflare SSL (Alternative - if you turn proxy ON)
- **Pros**: Cloudflare's CDN, DDoS protection
- **Cons**: More complex, potential issues with GitHub Pages
- **Settings if using Cloudflare SSL**:
  1. Turn Proxy ON (orange cloud)
  2. Go to SSL/TLS → Overview
  3. Set to "Full" mode (NOT Flexible!)
  4. May cause issues with GitHub Pages automatic deployment

## ✅ Verification After Adding Records

### 1. Test DNS (5-30 minutes after adding):
```bash
# Check if DNS is resolving
nslookup antonabyzov.com
dig antonabyzov.com

# Should return one of the GitHub IPs:
# 185.199.108.153, 185.199.109.153, 185.199.110.153, or 185.199.111.153
```

### 2. Check GitHub Pages Status:
- Go to: https://github.com/anton-abyzov/personal-website/settings/pages
- Look for green checkmark ✅
- Should show: "Your site is published at https://antonabyzov.com"

### 3. Enable HTTPS in GitHub (after DNS works):
- In GitHub Pages settings
- Check "Enforce HTTPS"
- GitHub will get SSL certificate from Let's Encrypt

## 🎯 Current Status Check

Run these commands to verify:

```bash
# Check if site is accessible
curl -I https://anton-abyzov.github.io/personal-website/
# Should return: HTTP/2 200

# Check custom domain (after DNS propagates)
curl -I http://antonabyzov.com
# Should redirect to HTTPS after certificate is ready

# Check SSL certificate (after it's issued)
curl -I https://antonabyzov.com
# Should return: HTTP/2 200
```

## ⏰ Timeline
1. **Add DNS records**: 2 minutes
2. **DNS propagation**: 5-30 minutes (can be up to 48 hours)
3. **GitHub detects domain**: 5-15 minutes after DNS works
4. **SSL certificate**: 15-60 minutes after GitHub detects domain
5. **Full HTTPS site**: Usually within 1-2 hours total

## 🆘 Troubleshooting

**"DNS_PROBE_FINISHED_NXDOMAIN"**
- DNS hasn't propagated yet, wait more

**"Your connection is not private" (SSL error)**
- Certificate is still being provisioned
- Wait 15-60 minutes
- Make sure proxy is OFF in Cloudflare

**404 Error**
- Check CNAME file exists in repo
- Verify GitHub Pages is enabled
- Check repository is public

**Site loads but no HTTPS**
- Go to GitHub Pages settings
- Click "Enforce HTTPS"
- Wait for certificate provisioning

## 📞 Need Help?
1. Share screenshot of your Cloudflare DNS records page
2. Share screenshot of GitHub Pages settings
3. Run `nslookup antonabyzov.com` and share output