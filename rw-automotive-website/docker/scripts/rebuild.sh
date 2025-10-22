#!/bin/bash

# Rebuild RW Automotive Website Docker Container
# Use this after making code changes

set -e

echo "🔄 Rebuilding RW Automotive Website..."
echo ""

# Navigate to docker directory
cd "$(dirname "$0")/.."

# Stop containers
echo "📦 Stopping containers..."
docker-compose down

# Rebuild with no cache
echo "🔨 Building fresh image (no cache)..."
docker-compose build --no-cache

# Start containers
echo "🚀 Starting containers..."
docker-compose up -d

echo ""
echo "✅ Rebuild complete!"
echo "🌐 Website available at: http://localhost:3000"
