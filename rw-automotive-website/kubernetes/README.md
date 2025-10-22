# Kubernetes Deployment for RW Automotive Website

Professional Kubernetes deployment configuration for hosting the RW Automotive website in production.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Management](#management)
- [Hosting Options](#hosting-options)
- [Cost Estimates](#cost-estimates)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## Overview

This Kubernetes setup provides:
- ✅ **High Availability** - 2+ replicas with auto-healing
- ✅ **Auto-Scaling** - Scale 2-10 pods based on CPU/memory
- ✅ **Zero Downtime** - Rolling updates
- ✅ **SSL/TLS** - Automatic HTTPS with cert-manager
- ✅ **Resource Management** - CPU/memory limits and quotas
- ✅ **Health Checks** - Liveness and readiness probes
- ✅ **Professional Grade** - Enterprise-ready configuration

## Prerequisites

### Required Tools
- `kubectl` - Kubernetes CLI ([Install](https://kubernetes.io/docs/tasks/tools/))
- `docker` - Container runtime ([Install](https://docs.docker.com/get-docker/))
- Access to a Kubernetes cluster (see [Hosting Options](#hosting-options))

### Kubernetes Cluster Options
1. **Managed Services** (Recommended for production):
   - Google Kubernetes Engine (GKE)
   - Amazon EKS
   - Azure AKS
   - DigitalOcean Kubernetes

2. **Local Development**:
   - Minikube
   - Kind
   - Docker Desktop

## Quick Start

### 1. Build and Push Docker Image

```bash
# Build the image
cd docker
docker build -t rw-automotive-web:latest -f Dockerfile ..

# Tag for your registry
docker tag rw-automotive-web:latest your-registry.com/rw-automotive-web:latest

# Push to registry
docker push your-registry.com/rw-automotive-web:latest
```

### 2. Update Image in Deployment

Edit `kubernetes/manifests/deployment.yaml`:
```yaml
image: your-registry.com/rw-automotive-web:latest
```

### 3. Deploy to Kubernetes

```bash
cd kubernetes
./scripts/deploy.sh
```

### 4. Check Status

```bash
./scripts/status.sh
```

## Architecture

```
┌─────────────────────────────────────────────┐
│         Internet / DNS Provider             │
│   (rwgeneralautomotiveandtires.com)        │
└─────────────┬───────────────────────────────┘
              │
┌─────────────▼───────────────────────────────┐
│        Ingress Controller (NGINX)           │
│         - SSL/TLS Termination               │
│         - Load Balancing                    │
└─────────────┬───────────────────────────────┘
              │
┌─────────────▼───────────────────────────────┐
│      Kubernetes Service (ClusterIP)         │
│            Port 80 → 3000                   │
└─────────────┬───────────────────────────────┘
              │
        ┌─────┴─────┬─────────────┐
        │           │             │
┌───────▼────┐ ┌────▼──────┐ ┌───▼────────┐
│   Pod 1    │ │   Pod 2   │ │   Pod N    │
│  Next.js   │ │  Next.js  │ │  Next.js   │
│   :3000    │ │   :3000   │ │   :3000    │
└────────────┘ └───────────┘ └────────────┘
     2-10 replicas (auto-scaled)
```

## Deployment

### Directory Structure

```
kubernetes/
├── manifests/              # Kubernetes resources
│   ├── deployment.yaml    # Main deployment + service
│   ├── ingress.yaml       # Ingress configuration
│   └── hpa.yaml          # Horizontal Pod Autoscaler
├── configs/               # Configuration files
│   ├── namespace.yaml    # Namespace + quotas
│   └── configmap.yaml    # Environment variables
├── scripts/              # Helper scripts
│   ├── deploy.sh        # Deploy everything
│   ├── status.sh        # Check status
│   ├── update.sh        # Update deployment
│   ├── rollback.sh      # Rollback deployment
│   ├── logs.sh          # View logs
│   └── delete.sh        # Delete deployment
└── README.md            # This file
```

### Full Deployment Steps

1. **Prepare Image**
   ```bash
   # Build
   cd docker
   docker build -t rw-automotive-web:v1.0.0 -f Dockerfile ..

   # Push to registry
   docker tag rw-automotive-web:v1.0.0 your-registry/rw-automotive-web:v1.0.0
   docker push your-registry/rw-automotive-web:v1.0.0
   ```

2. **Configure kubectl**
   ```bash
   # Point kubectl to your cluster
   kubectl config use-context your-cluster

   # Verify connection
   kubectl cluster-info
   ```

3. **Update Configuration**
   - Edit `manifests/deployment.yaml` - Update image path
   - Edit `manifests/ingress.yaml` - Update domain name
   - Edit `configs/configmap.yaml` - Update env vars if needed

4. **Deploy**
   ```bash
   cd kubernetes
   ./scripts/deploy.sh
   ```

5. **Verify**
   ```bash
   ./scripts/status.sh
   ```

## Management

### Common Operations

```bash
cd kubernetes

# Deploy/Update
./scripts/deploy.sh

# Check status
./scripts/status.sh

# View logs
./scripts/logs.sh

# Update to new version
./scripts/update.sh v1.1.0

# Rollback if needed
./scripts/rollback.sh

# Delete everything
./scripts/delete.sh
```

### Manual Commands

```bash
# Get pods
kubectl get pods -n rw-automotive

# Describe pod
kubectl describe pod <pod-name> -n rw-automotive

# Get logs
kubectl logs -f <pod-name> -n rw-automotive

# Execute command in pod
kubectl exec -it <pod-name> -n rw-automotive -- /bin/sh

# Scale manually
kubectl scale deployment rw-automotive-web --replicas=5 -n rw-automotive

# Check HPA
kubectl get hpa -n rw-automotive

# View events
kubectl get events -n rw-automotive --sort-by='.lastTimestamp'
```

## Hosting Options

### Recommended for Production

#### 1. **Google Kubernetes Engine (GKE)** ⭐ RECOMMENDED
- **Cost:** ~$75-150/month
- **Pros:** Excellent auto-pilot mode, reliable, good free tier
- **Best for:** Businesses wanting managed Kubernetes
- **Setup:** https://cloud.google.com/kubernetes-engine

#### 2. **DigitalOcean Kubernetes**
- **Cost:** ~$40-100/month
- **Pros:** Simple, affordable, great for small businesses
- **Best for:** Cost-conscious clients
- **Setup:** https://www.digitalocean.com/products/kubernetes

#### 3. **Amazon EKS**
- **Cost:** ~$72+ cluster + ~$30-80 nodes = ~$100-150/month
- **Pros:** AWS ecosystem, highly scalable
- **Best for:** AWS-centric infrastructure
- **Setup:** https://aws.amazon.com/eks/

#### 4. **Azure AKS**
- **Cost:** Similar to EKS
- **Pros:** Microsoft ecosystem, good enterprise support
- **Best for:** Microsoft-centric businesses
- **Setup:** https://azure.microsoft.com/en-us/products/kubernetes-service

### Budget Options

#### 1. **Linode Kubernetes (LKE)**
- **Cost:** ~$30-60/month
- **Pros:** Very affordable, simple
- **Setup:** https://www.linode.com/products/kubernetes/

#### 2. **Vultr Kubernetes**
- **Cost:** ~$30-60/month
- **Pros:** Budget-friendly
- **Setup:** https://www.vultr.com/kubernetes/

## Cost Estimates

### Small Setup (Recommended for RW Automotive)
- **2 nodes, 2GB RAM each**
- **Estimated:** $40-75/month
- **Handles:** 10,000+ monthly visitors
- **Includes:** Load balancer, auto-scaling, SSL

### Medium Setup (Growth)
- **3 nodes, 4GB RAM each**
- **Estimated:** $100-150/month
- **Handles:** 50,000+ monthly visitors

### Comparison with Alternatives

| Platform | Cost/Month | Effort | Scalability |
|----------|-----------|--------|-------------|
| Kubernetes | $40-150 | Medium | Excellent |
| Vercel | $0-20 | Very Low | Excellent |
| VPS (Single) | $10-20 | High | Poor |
| AWS EC2 | $20-50 | High | Good |

## SSL/TLS Setup

### Using cert-manager (Recommended)

1. **Install cert-manager**
   ```bash
   kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml
   ```

2. **Create ClusterIssuer**
   ```bash
   kubectl apply -f - <<EOF
   apiVersion: cert-manager.io/v1
   kind: ClusterIssuer
   metadata:
     name: letsencrypt-prod
   spec:
     acme:
       server: https://acme-v02.api.letsencrypt.org/directory
       email: info@rwautomotive.com
       privateKeySecretRef:
         name: letsencrypt-prod
       solvers:
       - http01:
           ingress:
             class: nginx
   EOF
   ```

3. **SSL automatically provisioned via ingress annotations**

## Monitoring

### Basic Monitoring

```bash
# Resource usage
kubectl top pods -n rw-automotive
kubectl top nodes

# Events
kubectl get events -n rw-automotive --watch

# Logs
kubectl logs -f -l app=rw-automotive -n rw-automotive
```

### Advanced Monitoring (Optional)

- **Prometheus + Grafana** - Metrics and dashboards
- **ELK Stack** - Log aggregation
- **Datadog / New Relic** - Commercial APM

## Troubleshooting

### Pods not starting

```bash
# Check pod status
kubectl get pods -n rw-automotive

# Describe pod for events
kubectl describe pod <pod-name> -n rw-automotive

# Check logs
kubectl logs <pod-name> -n rw-automotive
```

### Image pull errors

```bash
# Verify image exists
docker pull your-registry/rw-automotive-web:latest

# Check image pull secret if using private registry
kubectl get secrets -n rw-automotive
```

### Ingress not working

```bash
# Check ingress controller
kubectl get pods -n ingress-nginx

# Check ingress resource
kubectl describe ingress rw-automotive-ingress -n rw-automotive

# Verify DNS points to ingress IP
kubectl get ingress -n rw-automotive
```

### High memory/CPU usage

```bash
# Check resource usage
kubectl top pods -n rw-automotive

# Check HPA status
kubectl get hpa -n rw-automotive

# Adjust resource limits in deployment.yaml
```

## DNS Configuration

Point your domain to the ingress IP:

```bash
# Get ingress IP
kubectl get ingress rw-automotive-ingress -n rw-automotive

# Create A records:
# rwgeneralautomotiveandtires.com → <INGRESS_IP>
# www.rwgeneralautomotiveandtires.com → <INGRESS_IP>
```

## Security Best Practices

- ✅ Non-root container user
- ✅ Resource limits and quotas
- ✅ Network policies (optional, add if needed)
- ✅ SSL/TLS encryption
- ✅ Security headers in ingress
- ✅ Regular image updates
- ✅ Secrets management (use Kubernetes secrets for sensitive data)

## Backup and Disaster Recovery

### Backup Deployment Configs

```bash
# Export current configuration
kubectl get all -n rw-automotive -o yaml > backup.yaml
```

### Restore

```bash
kubectl apply -f backup.yaml
```

## Performance Tuning

### Optimize for Traffic

1. **Increase replicas for high traffic**
   ```bash
   kubectl scale deployment rw-automotive-web --replicas=5 -n rw-automotive
   ```

2. **Adjust HPA thresholds in `hpa.yaml`**

3. **Enable CDN** (Cloudflare, Fastly) for static assets

## Support

- **Kubernetes Docs:** https://kubernetes.io/docs/
- **kubectl Cheat Sheet:** https://kubernetes.io/docs/reference/kubectl/cheatsheet/
- **Community:** https://kubernetes.slack.com/

## License

Part of the RW Automotive website project.
