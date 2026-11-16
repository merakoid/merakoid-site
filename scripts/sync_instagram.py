#!/usr/bin/env python3
"""Sync recent public Instagram media into a JSON feed for the Merakoid site.

Required GitHub Actions secrets:
  IG_USER_ID: Instagram professional account ID
  IG_ACCESS_TOKEN: Meta Graph API access token with instagram_basic permission
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone

user_id = os.environ.get("IG_USER_ID", "").strip()
token = os.environ.get("IG_ACCESS_TOKEN", "").strip()
if not user_id or not token:
    print("Missing IG_USER_ID or IG_ACCESS_TOKEN GitHub Actions secrets.", file=sys.stderr)
    sys.exit(2)

fields = "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url"
params = urllib.parse.urlencode({"fields": fields, "limit": 25, "access_token": token})
url = f"https://graph.facebook.com/v22.0/{urllib.parse.quote(user_id, safe='')}/media?{params}"
items = []
while url and len(items) < 25:
    req = urllib.request.Request(url, headers={"User-Agent": "MerakoidSiteSync/1.0"})
    with urllib.request.urlopen(req, timeout=30) as response:
        payload = json.load(response)
    for item in payload.get("data", []):
        if item.get("media_type") not in ("VIDEO", "REELS", "CAROUSEL_ALBUM"):
            continue
        permalink = item.get("permalink", "")
        if "instagram.com/" not in permalink:
            continue
        items.append({
            "id": item.get("id", ""),
            "caption": (item.get("caption") or "").strip()[:500],
            "media_type": item.get("media_type", ""),
            "permalink": permalink,
            "timestamp": item.get("timestamp", ""),
            "thumbnail_url": item.get("thumbnail_url") or item.get("media_url") or "",
        })
        if len(items) >= 25:
            break
    url = payload.get("paging", {}).get("next")

out = {
    "account": "merakoid",
    "updated_at": datetime.now(timezone.utc).isoformat(),
    "items": items,
}
with open("reels.json", "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
print(f"Saved {len(items)} recent Instagram video/carousel items.")
