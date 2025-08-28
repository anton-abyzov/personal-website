#!/bin/bash

# Cloudflare configuration
# The Zone ID is from your URL path
ZONE_ID="your_zone_id_here"
API_TOKEN="your_api_token_here"

# GitHub Pages IP addresses
IPS=("185.199.108.153" "185.199.109.153" "185.199.110.153" "185.199.111.153")

echo "Adding DNS records for antonabyzov.com..."

# Add each A record
for IP in "${IPS[@]}"; do
    echo "Adding A record for @ -> $IP"
    
    curl -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
      -H "Authorization: Bearer ${API_TOKEN}" \
      -H "Content-Type: application/json" \
      --data '{
        "type": "A",
        "name": "@",
        "content": "'${IP}'",
        "ttl": 1,
        "proxied": false,
        "comment": "GitHub Pages"
      }'
    
    echo ""
done

# Add CNAME for www
echo "Adding CNAME record for www -> anton-abyzov.github.io"
curl -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "anton-abyzov.github.io",
    "ttl": 1,
    "proxied": false,
    "comment": "GitHub Pages www redirect"
  }'

echo ""
echo "DNS records added! Please wait 5-30 minutes for propagation."