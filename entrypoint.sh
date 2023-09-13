#!/bin/sh

# Read the table name from the environment variable
TABLE_NAME="$MYSQL_DBNAME"

if [ -z "$TABLE_NAME" ]; then
  echo "Error: DB_TABLE_NAME environment variable not set."
  exit 1
fi

# Function to check if a table exists in the database
table_exists() {
  local table_name="$1"
  local output=$(npx sequelize-cli db:migrate:status)
  
  if echo "$output" | grep -q " $table_name "; then
    return 0  # Table exists
  else
    return 1  # Table does not exist
  fi
}

# Check if the specified table exists
if table_exists "$TABLE_NAME"; then
  echo "Table '$TABLE_NAME' already exists."
else
  echo "Table '$TABLE_NAME' does not exist. Running migrations..."
  npm run migrate:up
  # Run seeders
  npm run migrate:seed
fi

# Start the server
npm run start
