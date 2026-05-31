#!/usr/bin/env bash
# Build the bongPujoGuideUI Docker image for production
# Usage: VITE_API_BASE_URL=https://api.bongpujoguide.com ./scripts/build.sh

set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-bongpujoguide-frontend}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
API_URL="${VITE_API_BASE_URL:?VITE_API_BASE_URL must be set}"

echo "[$(date)] Building frontend image ${IMAGE_NAME}:${IMAGE_TAG}..."

docker build \
  --build-arg VITE_API_BASE_URL="$API_URL" \
  -t "${IMAGE_NAME}:${IMAGE_TAG}" \
  .

echo "[$(date)] Build complete: ${IMAGE_NAME}:${IMAGE_TAG}"
