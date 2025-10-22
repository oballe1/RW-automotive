#!/bin/bash

# View logs for RW Automotive Website Docker Container

# Navigate to docker directory
cd "$(dirname "$0")/.."

echo "📋 Viewing logs for RW Automotive Website..."
echo "Press Ctrl+C to exit"
echo ""

# Follow logs
docker-compose logs -f
