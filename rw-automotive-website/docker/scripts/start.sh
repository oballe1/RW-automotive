#!/bin/bash

# Start RW Automotive Website Docker Container
# This script builds and starts the Docker container

set -e

echo "🚀 Starting RW Automotive Website..."
echo ""

# Navigate to docker directory
cd "$(dirname "$0")/.."

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed"
    echo "Please install Docker from https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Error: Docker Compose is not installed"
    echo "Please install Docker Compose from https://docs.docker.com/compose/install/"
    exit 1
fi

# Start the containers
echo "📦 Building and starting containers..."
docker-compose up -d --build

echo ""
echo "✅ RW Automotive Website is starting..."
echo ""
echo "🌐 Website will be available at: http://localhost:3000"
echo "📊 View logs: docker-compose logs -f"
echo "🛑 Stop containers: docker-compose down"
echo ""
echo "Waiting for container to be healthy..."

# Wait for health check
sleep 5

# Check container status
if docker ps | grep -q rw-automotive-web; then
    echo "✅ Container is running!"
else
    echo "⚠️  Container may not be running properly. Check logs:"
    echo "   docker-compose logs"
fi
