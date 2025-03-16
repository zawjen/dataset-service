#!/bin/bash
set -e

# List of databases to create
DATABASES="kong keycloak"

for db in $DATABASES; do
  echo "Creating database: $db"
  psql -U "$POSTGRES_USER" -tc "SELECT 1 FROM pg_database WHERE datname = '$db'" | grep -q 1 || psql -U "$POSTGRES_USER" -c "CREATE DATABASE $db;"
done
