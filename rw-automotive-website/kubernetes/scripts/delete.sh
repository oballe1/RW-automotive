#!/bin/bash

# Delete RW Automotive deployment from Kubernetes

echo "⚠️  WARNING: This will delete the RW Automotive deployment!"
echo ""
read -p "Are you sure? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Cancelled."
    exit 0
fi

echo ""
echo "🗑️  Deleting RW Automotive deployment..."
echo ""

# Navigate to kubernetes directory
cd "$(dirname "$0")/.."

# Delete resources in reverse order
echo "Deleting ingress..."
kubectl delete -f manifests/ingress.yaml -n rw-automotive --ignore-not-found=true

echo "Deleting HPA..."
kubectl delete -f manifests/hpa.yaml -n rw-automotive --ignore-not-found=true

echo "Deleting deployment..."
kubectl delete -f manifests/deployment.yaml -n rw-automotive --ignore-not-found=true

echo "Deleting ConfigMap..."
kubectl delete -f configs/configmap.yaml -n rw-automotive --ignore-not-found=true

echo ""
read -p "Delete namespace? (yes/no): " delete_ns

if [ "$delete_ns" = "yes" ]; then
    echo "Deleting namespace..."
    kubectl delete namespace rw-automotive
fi

echo ""
echo "✅ Cleanup complete!"
