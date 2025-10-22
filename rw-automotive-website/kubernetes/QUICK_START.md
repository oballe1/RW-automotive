# Kubernetes Quick Start Guide

## 🚀 Deploy in 5 Steps

### Step 1: Build Image
```bash
cd docker
docker build -t rw-automotive-web:v1.0.0 -f Dockerfile ..
```

### Step 2: Push to Registry
```bash
# Tag for your registry
docker tag rw-automotive-web:v1.0.0 YOUR-REGISTRY/rw-automotive-web:v1.0.0

# Push
docker push YOUR-REGISTRY/rw-automotive-web:v1.0.0
```

### Step 3: Update Config
Edit `kubernetes/manifests/deployment.yaml`:
```yaml
image: YOUR-REGISTRY/rw-automotive-web:v1.0.0  # Line 24
```

### Step 4: Deploy
```bash
cd kubernetes
./scripts/deploy.sh
```

### Step 5: Verify
```bash
./scripts/status.sh
```

## 📊 Daily Commands

```bash
cd kubernetes

# Check status
./scripts/status.sh

# View logs
./scripts/logs.sh

# Update deployment
./scripts/update.sh v1.0.1

# Rollback
./scripts/rollback.sh
```

## 🔧 Configuration Checklist

Before deploying, update these files:

- [ ] `manifests/deployment.yaml` - Line 24: Image path
- [ ] `manifests/ingress.yaml` - Lines 23-24: Domain names
- [ ] `configs/configmap.yaml` - Business info (optional)

## 💰 Hosting Recommendations

| Provider | Cost/Month | Setup Link |
|----------|-----------|------------|
| DigitalOcean | $40-60 | [Create Cluster](https://cloud.digitalocean.com/kubernetes/clusters/new) |
| Google (GKE) | $75-100 | [Create Cluster](https://console.cloud.google.com/kubernetes) |
| Linode | $30-50 | [Create Cluster](https://cloud.linode.com/kubernetes/clusters/create) |

## ⚡ Quick Troubleshooting

**Pods not starting?**
```bash
kubectl get pods -n rw-automotive
kubectl describe pod POD-NAME -n rw-automotive
```

**Can't access website?**
```bash
kubectl get ingress -n rw-automotive
# Point your DNS to the EXTERNAL-IP
```

**Need to scale?**
```bash
kubectl scale deployment rw-automotive-web --replicas=5 -n rw-automotive
```

## 📚 Full Documentation

- [kubernetes/README.md](README.md) - Complete guide
- [../KUBERNETES_SETUP_SUMMARY.md](../../KUBERNETES_SETUP_SUMMARY.md) - Overview
