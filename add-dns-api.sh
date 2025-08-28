#!/bin/bash

# Instructions:
# 1. Get your API token from: https://dash.cloudflare.com/profile/api-tokens
# 2. Create a token with "Zone.DNS:Edit" permission for antonabyzov.com
# 3. Replace YOUR_API_TOKEN below
# 4. Run this script: bash add-dns-api.sh

# Your zone ID from the URL
ZONE_ID="1364b528762500de4f870e064229d443"

# REPLACE THIS with your actual API token
API_TOKEN="YOUR_API_TOKEN_HERE"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "🚀 Adding DNS records for antonabyzov.com..."
echo "================================================"

# GitHub Pages IPs
declare -a IPS=(
    "185.199.108.153"
    "185.199.109.153"
    "185.199.110.153"
    "185.199.111.153"
)

# Counter for success
SUCCESS=0
FAILED=0

# Add each A record
for IP in "${IPS[@]}"; do
    echo -n "Adding A record: @ -> $IP ... "
    
    RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
        -H "Authorization: Bearer ${API_TOKEN}" \
        -H "Content-Type: application/json" \
        --data '{
            "type": "A",
            "name": "@",
            "content": "'${IP}'",
            "ttl": 1,
            "proxied": false,
            "comment": "GitHub Pages"
        }')
    
    if echo "$RESPONSE" | grep -q '"success":true'; then
        echo -e "${GREEN}✅ SUCCESS${NC}"
        ((SUCCESS++))
    else
        echo -e "${RED}❌ FAILED${NC}"
        echo "Error: $(echo "$RESPONSE" | python3 -m json.tool 2>/dev/null | grep -A2 'errors')"
        ((FAILED++))
    fi
done

# Add CNAME for www
echo -n "Adding CNAME record: www -> anton-abyzov.github.io ... "

RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
    -H "Authorization: Bearer ${API_TOKEN}" \
    -H "Content-Type: application/json" \
    --data '{
        "type": "CNAME",
        "name": "www",
        "content": "anton-abyzov.github.io",
        "ttl": 1,
        "proxied": false,
        "comment": "GitHub Pages www"
    }')

if echo "$RESPONSE" | grep -q '"success":true'; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
    ((SUCCESS++))
else
    echo -e "${RED}❌ FAILED${NC}"
    echo "Error: $(echo "$RESPONSE" | python3 -m json.tool 2>/dev/null | grep -A2 'errors')"
    ((FAILED++))
fi

echo "================================================"
echo -e "Results: ${GREEN}$SUCCESS successful${NC}, ${RED}$FAILED failed${NC}"

if [ $SUCCESS -eq 5 ]; then
    echo -e "${GREEN}🎉 All DNS records added successfully!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Wait 5-30 minutes for DNS propagation"
    echo "2. Check: nslookup antonabyzov.com"
    echo "3. Visit: https://github.com/anton-abyzov/personal-website/settings/pages"
    echo "4. Enable 'Enforce HTTPS' when domain is verified"
    echo "5. Your site will be live at: https://antonabyzov.com"
else
    echo -e "${RED}⚠️  Some records failed. Please check the errors above.${NC}"
    echo "You may need to:"
    echo "1. Verify your API token has DNS Edit permissions"
    echo "2. Check if records already exist (delete them first)"
    echo "3. Try adding manually in Cloudflare dashboard"
fi