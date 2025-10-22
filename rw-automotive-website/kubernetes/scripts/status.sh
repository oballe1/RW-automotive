#!/bin/bash

# Check status of RW Automotive Kubernetes deployment

echo "📊 RW Automotive Kubernetes Status"
echo "===================================="
echo ""

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo "❌ Error: kubectl is not installed"
    exit 1
fi

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check cluster connection
echo "🔗 Cluster Information:"
kubectl cluster-info | grep "Kubernetes" || echo -e "${RED}Not connected to cluster${NC}"
echo ""

# Check namespace
echo "📦 Namespace:"
kubectl get namespace rw-automotive 2>/dev/null || echo -e "${YELLOW}Namespace not found${NC}"
echo ""

# Check deployments
echo "🚢 Deployments:"
kubectl get deployments -n rw-automotive 2>/dev/null || echo -e "${YELLOW}No deployments found${NC}"
echo ""

# Check pods
echo "🎯 Pods:"
kubectl get pods -n rw-automotive -o wide 2>/dev/null || echo -e "${YELLOW}No pods found${NC}"
echo ""

# Check services
echo "🌐 Services:"
kubectl get svc -n rw-automotive 2>/dev/null || echo -e "${YELLOW}No services found${NC}"
echo ""

# Check ingress
echo "🔌 Ingress:"
kubectl get ingress -n rw-automotive 2>/dev/null || echo -e "${YELLOW}No ingress found${NC}"
echo ""

# Check HPA
echo "📊 Horizontal Pod Autoscaler:"
kubectl get hpa -n rw-automotive 2>/dev/null || echo -e "${YELLOW}No HPA found${NC}"
echo ""

# Resource usage
echo "💻 Resource Usage:"
kubectl top pods -n rw-automotive 2>/dev/null || echo -e "${YELLOW}Metrics server not available${NC}"
echo ""

# Recent events
echo "📋 Recent Events:"
kubectl get events -n rw-automotive --sort-by='.lastTimestamp' | tail -10 2>/dev/null || echo -e "${YELLOW}No events found${NC}"

echo ""
echo "===================================="
echo "For real-time logs: kubectl logs -f -l app=rw-automotive -n rw-automotive"
