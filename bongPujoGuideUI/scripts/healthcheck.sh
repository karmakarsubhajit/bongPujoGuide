#!/usr/bin/env bash
# Healthcheck for the bongPujoGuideUI frontend container
# Usage: ./scripts/healthcheck.sh [host] [port]
# Exits 0 if healthy, 1 if not

set -euo pipefail

HOST="${1:-localhost}"
PORT="${2:-80}"
URL="http://${HOST}:${PORT}/"

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$URL" || echo "000")

if [[ "$RESPONSE" == "200" ]]; then
  echo "[$(date)] Frontend is healthy (HTTP ${RESPONSE})"
  exit 0
else
  echo "[$(date)] Frontend healthcheck failed (HTTP ${RESPONSE})"
  exit 1
fi
