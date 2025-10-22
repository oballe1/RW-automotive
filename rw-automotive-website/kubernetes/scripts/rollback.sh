#!/bin/bash

# Rollback RW Automotive deployment
set -e

echo "⏪ Rolling back RW Automotive deployment..."
echo ""

# Show rollout history
echo "📊 Rollout history:"
kubectl rollout history deployment/rw-automotive-web -n rw-automotive
echo ""

# Rollback
echo "🔄 Performing rollback..."
kubectl rollout undo deployment/rw-automotive-web -n rw-automotive

echo ""
echo "⏳ Waiting for rollback to complete..."
kubectl rollout status deployment/rw-automotive-web -n rw-automotive

echo ""
echo "✅ Rollback completed!"
echo ""

# Show current pods
echo "🎯 Current pods:"
kubectl get pods -n rw-automotive
