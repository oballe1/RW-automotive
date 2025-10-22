#!/bin/bash

# Update RW Automotive deployment with new image
set -e

echo "🔄 Updating RW Automotive deployment..."
echo ""

# Check arguments
if [ -z "$1" ]; then
    echo "Usage: ./update.sh <image-tag>"
    echo "Example: ./update.sh v1.2.0"
    exit 1
fi

IMAGE_TAG=$1
REGISTRY=${REGISTRY:-"your-registry.com"}  # Set your registry
IMAGE="$REGISTRY/rw-automotive-web:$IMAGE_TAG"

echo "📦 New image: $IMAGE"
echo ""

# Update deployment image
echo "🚀 Updating deployment..."
kubectl set image deployment/rw-automotive-web \
    web=$IMAGE \
    -n rw-automotive

echo ""
echo "⏳ Waiting for rollout to complete..."
kubectl rollout status deployment/rw-automotive-web -n rw-automotive

echo ""
echo "✅ Deployment updated successfully!"
echo ""

# Show new pods
echo "🎯 New pods:"
kubectl get pods -n rw-automotive

echo ""
echo "📊 Rollout history:"
kubectl rollout history deployment/rw-automotive-web -n rw-automotive
