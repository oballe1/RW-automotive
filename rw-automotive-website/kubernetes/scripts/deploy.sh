#!/bin/bash

# Deploy RW Automotive Website to Kubernetes
set -e

echo "🚀 Deploying RW Automotive Website to Kubernetes..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ Error: kubectl is not installed${NC}"
    echo "Please install kubectl: https://kubernetes.io/docs/tasks/tools/"
    exit 1
fi

# Check if connected to cluster
if ! kubectl cluster-info &> /dev/null; then
    echo -e "${RED}❌ Error: Not connected to a Kubernetes cluster${NC}"
    echo "Please configure kubectl to connect to your cluster"
    exit 1
fi

echo -e "${GREEN}✅ Connected to cluster${NC}"
kubectl cluster-info | grep "Kubernetes"
echo ""

# Navigate to kubernetes directory
cd "$(dirname "$0")/.."

# Step 1: Create namespace (if not exists)
echo -e "${YELLOW}📦 Creating namespace...${NC}"
kubectl apply -f configs/namespace.yaml

# Step 2: Apply ConfigMap
echo -e "${YELLOW}⚙️  Applying ConfigMap...${NC}"
kubectl apply -f configs/configmap.yaml -n rw-automotive

# Step 3: Deploy application
echo -e "${YELLOW}🚢 Deploying application...${NC}"
kubectl apply -f manifests/deployment.yaml -n rw-automotive

# Step 4: Apply HPA (Horizontal Pod Autoscaler)
echo -e "${YELLOW}📊 Configuring auto-scaling...${NC}"
kubectl apply -f manifests/hpa.yaml -n rw-automotive

# Step 5: Apply Ingress
echo -e "${YELLOW}🌐 Configuring ingress...${NC}"
kubectl apply -f manifests/ingress.yaml -n rw-automotive

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""

# Wait for deployment to be ready
echo "⏳ Waiting for pods to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/rw-automotive-web -n rw-automotive

echo ""
echo -e "${GREEN}✅ All pods are ready!${NC}"
echo ""

# Show deployment status
echo "📊 Deployment Status:"
echo "===================="
kubectl get deployments -n rw-automotive
echo ""
kubectl get pods -n rw-automotive
echo ""
kubectl get svc -n rw-automotive
echo ""
kubectl get ingress -n rw-automotive

echo ""
echo -e "${GREEN}🎉 Deployment successful!${NC}"
echo ""
echo "Next steps:"
echo "1. Configure your DNS to point to the ingress IP"
echo "2. Monitor with: kubectl logs -f -l app=rw-automotive -n rw-automotive"
echo "3. Check status: ./scripts/status.sh"
