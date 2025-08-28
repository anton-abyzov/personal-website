# ⚡ Cloudflare DNS Configuration for antonabyzov.com

## 🎯 Quick Setup - Add These DNS Records in Cloudflare

### Step 1: Add A Records (REQUIRED)
Go to your Cloudflare dashboard for antonabyzov.com and add these exact records:

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| **A** | `@` | `185.199.108.153` | **OFF (Grey)** | Auto |
| **A** | `@` | `185.199.109.153` | **OFF (Grey)** | Auto |
| **A** | `@` | `185.199.110.153` | **OFF (Grey)** | Auto |
| **A** | `@` | `185.199.111.153` | **OFF (Grey)** | Auto |

### Step 2: Add CNAME for www (OPTIONAL)
| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| **CNAME** | `www` | `anton-abyzov.github.io` | **OFF (Grey)** | Auto |

## ⚠️ IMPORTANT NOTES:

1. **Proxy MUST be OFF (Grey Cloud)**: GitHub Pages needs direct connection to provide SSL
2. **Name "@" means root domain**: This points antonabyzov.com directly
3. **All 4 A records are required**: GitHub Pages uses multiple IPs for reliability
4. **SSL is automatic**: GitHub will provide free SSL certificate via Let's Encrypt

## 📝 How to Add Records in Cloudflare:

1. Log into Cloudflare Dashboard
2. Select "antonabyzov.com" 
3. Go to "DNS" → "Records"
4. Click "Add record"
5. For each A record:
   - Type: A
   - Name: @ (or leave empty for root)
   - IPv4 address: [Copy IP from table above]
   - Proxy status: Click to make it GREY (DNS only)
   - TTL: Auto
   - Save

## ✅ Verification Steps:

### 1. Check DNS Propagation (5-30 minutes):
```bash
nslookup antonabyzov.com
dig antonabyzov.com
```

### 2. Check GitHub Pages Status:
- Go to: https://github.com/anton-abyzov/personal-website/settings/pages
- Should show: "✅ Your site is published at https://antonabyzov.com"

### 3. Enable HTTPS in GitHub (After DNS propagates):
- In GitHub Pages settings
- Check "Enforce HTTPS" 
- GitHub will provision SSL certificate automatically

## 🚀 Expected Timeline:
- DNS Propagation: 5-30 minutes (can take up to 48 hours)
- SSL Certificate: 15-60 minutes after DNS propagates
- Full site live: Usually within 1 hour

## 🔍 Troubleshooting:

**Site not loading?**
- Verify all 4 A records are added
- Ensure Proxy is OFF (grey cloud)
- Wait for DNS propagation

**SSL Certificate Error?**
- Wait up to 60 minutes for GitHub to provision certificate
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings

**404 Error?**
- Check CNAME file exists in repository
- Verify repository is public
- GitHub Pages is enabled on main branch

## 📞 Current Status:
- ✅ CNAME file added to repository
- ✅ GitHub Pages enabled
- ✅ Website code deployed
- ⏳ Waiting for you to add DNS records in Cloudflare
- ⏳ Then site will be live at https://antonabyzov.com

## 🎉 Your Website Features:
- Expandable experience sections with detailed achievements
- Business award and hackathon photos
- Piano performance YouTube videos
- 8 scholarly publications and Forbes article
- Google Scholar profile integration
- Professional certifications showcase
- Futsal and soccer coaching achievements
- Responsive design with smooth animations