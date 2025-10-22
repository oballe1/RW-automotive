#!/bin/bash

# Check status of RW Automotive Website Docker Container

# Navigate to docker directory
cd "$(dirname "$0")/.."

echo "📊 RW Automotive Website Container Status"
echo "=========================================="
echo ""

# Check if container is running
if docker ps | grep -q rw-automotive-web; then
    echo "✅ Status: RUNNING"
    echo ""

    # Show container details
    docker ps --filter "name=rw-automotive-web" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""

    # Show health status
    echo "Health Status:"
    docker inspect --format='{{.State.Health.Status}}' rw-automotive-web 2>/dev/null || echo "No health check configured"
    echo ""

    # Show resource usage
    echo "Resource Usage:"
    docker stats rw-automotive-web --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
else
    echo "❌ Status: NOT RUNNING"
    echo ""
    echo "Start the container with: ./scripts/start.sh"
fi

echo ""
echo "=========================================="
