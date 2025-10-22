#!/bin/bash

# Stop RW Automotive Website Docker Container

set -e

echo "🛑 Stopping RW Automotive Website..."
echo ""

# Navigate to docker directory
cd "$(dirname "$0")/.."

# Stop the containers
docker-compose down

echo ""
echo "✅ Containers stopped successfully!"
