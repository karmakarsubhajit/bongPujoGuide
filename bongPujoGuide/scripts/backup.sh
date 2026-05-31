#!/usr/bin/env bash
# PostgreSQL backup script for bongPujoGuide backend
# Usage: ./scripts/backup.sh
# Cron example (daily at 2am):
#   0 2 * * * /path/to/bongPujoGuide/scripts/backup.sh >> /var/log/bongpujoguide-backup.log 2>&1

set -euo pipefail

BACKUP_DIR="${BACKUP_DIR:-/var/backups/bongpujoguide}"
CONTAINER="${POSTGRES_CONTAINER:-bongpujoguide-postgres}"
DB_NAME="${POSTGRES_DB:-bongpujoguide}"
DB_USER="${POSTGRES_USER:-postgres}"
RETAIN_DAYS="${RETAIN_DAYS:-7}"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/backup_${TIMESTAMP}.sql.gz"

mkdir -p "$BACKUP_DIR"

echo "[$(date)] Starting backup of ${DB_NAME}..."

docker exec "$CONTAINER" pg_dump -U "$DB_USER" "$DB_NAME" | gzip > "$BACKUP_FILE"

echo "[$(date)] Backup saved to ${BACKUP_FILE}"

find "$BACKUP_DIR" -name "backup_*.sql.gz" -mtime +"$RETAIN_DAYS" -delete
echo "[$(date)] Backups older than ${RETAIN_DAYS} days removed."
