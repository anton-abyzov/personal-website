# 🌐 Complete DNS & SSL Setup Guide for antonabyzov.com

## 📊 Current Status
- ✅ Domain registered and in Cloudflare
- ✅ GitHub Pages knows about antonabyzov.com (CNAME file present)
- ❌ DNS A records not configured yet
- ❌ Site not accessible at custom domain

## 🎯 IMMEDIATE ACTION REQUIRED

### Option A: Add Records in Cloudflare Dashboard (EASIEST)

1. **Go to your Cloudflare Dashboard:**
   https://dash.cloudflare.com/

2. **Navigate to:**
   - Select "antonabyzov.com"
   - Click "DNS" in left sidebar
   - Click "Records" tab

3. **Add these 4 A records EXACTLY:**

| Add Record #1 |
|---------------|
| Type: **A** |
| Name: **@** |
| IPv4 address: **185.199.108.153** |
| Proxy status: **DNS only (GREY cloud)** |
| TTL: **Auto** |

| Add Record #2 |
|---------------|
| Type: **A** |
| Name: **@** |
| IPv4 address: **185.199.109.153** |
| Proxy status: **DNS only (GREY cloud)** |
| TTL: **Auto** |

| Add Record #3 |
|---------------|
| Type: **A** |
| Name: **@** |
| IPv4 address: **185.199.110.153** |
| Proxy status: **DNS only (GREY cloud)** |
| TTL: **Auto** |

| Add Record #4 |
|---------------|
| Type: **A** |
| Name: **@** |
| IPv4 address: **185.199.111.153** |
| Proxy status: **DNS only (GREY cloud)** |
| TTL: **Auto** |

### Option B: Use API (If you have full API token)

```bash
# Get API token from: https://dash.cloudflare.com/profile/api-tokens
# Need: Zone:DNS:Edit permission

# Run these commands with your token:
ZONE_ID="1364b528762500de4f870e064229d443"
API_TOKEN="YOUR_FULL_API_TOKEN"

# Add A records
for IP in 185.199.108.153 185.199.109.153 185.199.110.153 185.199.111.153; do
  curl -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
    -H "Authorization: Bearer ${API_TOKEN}" \
    -H "Content-Type: application/json" \
    --data '{"type":"A","name":"@","content":"'${IP}'","ttl":1,"proxied":false}'
done
```

## 🔐 SSL Certificate - How It Works

### When Proxy is OFF (Recommended for GitHub Pages):
1. **GitHub provides SSL automatically via Let's Encrypt**
   - Free SSL certificate
   - Auto-renewal every 90 days
   - No configuration needed
   - Works within 1 hour after DNS propagates

2. **Process:**
   - DNS points directly to GitHub → GitHub sees domain → GitHub gets certificate from Let's Encrypt → HTTPS works

### When Proxy is ON (Cloudflare SSL):
1. **Cloudflare provides SSL**
   - Instant SSL
   - DDoS protection
   - CDN benefits
   - BUT: Can conflict with GitHub Pages

2. **Required Settings if using Cloudflare Proxy:**
   - SSL/TLS → Overview → Set to "Full" (NOT Flexible!)
   - This prevents redirect loops

## ✅ Verification Steps After Adding DNS

### Step 1: Check DNS Propagation (5-30 minutes)
```bash
# Should return GitHub IPs
nslookup antonabyzov.com
dig antonabyzov.com

# Expected output:
# 185.199.108.153 (or one of the other 3 IPs)
```

### Step 2: Check if site loads (after DNS works)
```bash
# Test HTTP
curl -I http://antonabyzov.com

# Should get 301 redirect or 200 OK
```

### Step 3: Enable HTTPS in GitHub
1. Go to: https://github.com/anton-abyzov/personal-website/settings/pages
2. After DNS works, you'll see "✅ antonabyzov.com is correctly configured"
3. Check the box: "Enforce HTTPS"
4. GitHub will provision SSL certificate (15-60 minutes)

### Step 4: Verify HTTPS works
```bash
# Test HTTPS
curl -I https://antonabyzov.com

# Should get: HTTP/2 200
```

## 🚨 Common Issues & Solutions

### "DNS_PROBE_FINISHED_NXDOMAIN"
- **Cause**: DNS records not added or not propagated
- **Fix**: Add A records, wait 30 minutes

### "Your connection is not private" / SSL Error
- **Cause**: SSL certificate not ready
- **Fix**: 
  1. Make sure DNS works first
  2. Enable "Enforce HTTPS" in GitHub
  3. Wait 15-60 minutes for certificate

### Site shows 404
- **Cause**: GitHub not detecting domain
- **Fix**:
  1. Ensure CNAME file exists (✅ already done)
  2. Check DNS points to GitHub IPs
  3. Repository must be public (✅ already done)

### "Too many redirects" error
- **Cause**: Cloudflare SSL set to "Flexible" with GitHub HTTPS
- **Fix**: Set Cloudflare SSL to "Full" or turn off proxy

## 📈 Expected Timeline

| Time | What Happens |
|------|-------------|
| 0 min | You add DNS records |
| 5-30 min | DNS propagates globally |
| 30-45 min | GitHub detects custom domain |
| 45-90 min | SSL certificate issued |
| 2 hours | Site fully operational with HTTPS |

## 🎯 Quick Check Commands

```bash
# 1. Is DNS working?
dig +short antonabyzov.com
# Should show: 185.199.108.153 (or other GitHub IP)

# 2. Is site accessible?
curl -sI http://antonabyzov.com | head -1
# Should show: HTTP/1.1 301 or 200

# 3. Is HTTPS working?
curl -sI https://antonabyzov.com | head -1
# Should show: HTTP/2 200

# 4. Check SSL certificate
echo | openssl s_client -connect antonabyzov.com:443 2>/dev/null | openssl x509 -noout -subject
# Should show certificate details
```

## 📞 Still Need Help?

If DNS records are added but site doesn't work after 2 hours:
1. Screenshot your Cloudflare DNS records page
2. Run `dig antonabyzov.com` and share output
3. Check https://github.com/anton-abyzov/personal-website/settings/pages
4. Share any error messages

The website code is ready and deployed. Once DNS is configured, everything will work automatically!