#!/usr/bin/env bash
# PostgreSQL restore script for bongPujoGuide backend
# Usage: ./scripts/restore.sh /path/to/backup_YYYYMMDD_HHMMSS.sql.gz

set -euo pipefail

BACKUP_FILE="${1:-}"
CONTAINER="${POSTGRES_CONTAINER:-bongpujoguide-postgres}"
DB_NAME="${POSTGRES_DB:-bongpujoguide}"
DB_USER="${POSTGRES_USER:-postgres}"

if [[ -z "$BACKUP_FILE" ]]; then
  echo "Usage: $0 <backup_file.sql.gz>"
  exit 1
fi

if [[ ! -f "$BACKUP_FILE" ]]; then
  echo "Error: file not found: ${BACKUP_FILE}"
  exit 1
fi

echo "[$(date)] Restoring ${DB_NAME} from ${BACKUP_FILE}..."
gunzip -c "$BACKUP_FILE" | docker exec -i "$CONTAINER" psql -U "$DB_USER" "$DB_NAME"
echo "[$(date)] Restore complete."
