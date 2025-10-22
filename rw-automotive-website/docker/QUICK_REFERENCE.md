# Docker Quick Reference

Quick command reference for managing the RW Automotive website Docker container.

## 🚀 Most Common Commands

```bash
# Navigate to docker directory first
cd docker

# Start the application
./scripts/start.sh

# Stop the application
./scripts/stop.sh

# View logs (live)
./scripts/logs.sh

# Check if running
./scripts/status.sh

# Rebuild after code changes
./scripts/rebuild.sh
```

## 📋 Script Details

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `start.sh` | Build and start containers | First time or after stop |
| `stop.sh` | Stop containers | End of day, maintenance |
| `logs.sh` | View container logs | Debugging, monitoring |
| `status.sh` | Check container health | Verify it's running |
| `rebuild.sh` | Full rebuild (no cache) | After code changes |

## 🔧 Direct Docker Commands

If you prefer docker-compose commands:

```bash
cd docker

# Start
docker-compose up -d

# Stop
docker-compose down

# Logs
docker-compose logs -f

# Rebuild
docker-compose build --no-cache
docker-compose up -d

# Status
docker-compose ps
```

## 🌐 Accessing the Website

Once running:
- **URL:** http://localhost:3000
- **Container:** rw-automotive-web

## 🐛 Troubleshooting

### Container won't start
```bash
cd docker
./scripts/logs.sh  # Check for errors
```

### Port 3000 in use
```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process or change port in docker-compose.yml
```

### Need to rebuild
```bash
cd docker
./scripts/rebuild.sh
```

### Remove everything and start fresh
```bash
cd docker
docker-compose down
docker system prune -f
./scripts/start.sh
```

## 📊 Monitoring

```bash
# View resource usage
docker stats rw-automotive-web --no-stream

# Check health
docker inspect --format='{{.State.Health.Status}}' rw-automotive-web

# View container info
docker inspect rw-automotive-web
```

## 🔄 Update Workflow

After making code changes:

```bash
# Option 1: Quick rebuild
cd docker
./scripts/rebuild.sh

# Option 2: Manual
cd docker
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 📁 File Locations

```
docker/
├── Dockerfile              # Build instructions
├── docker-compose.yml      # Service config
├── .dockerignore          # Build exclusions
└── scripts/               # Helper scripts
    ├── start.sh
    ├── stop.sh
    ├── logs.sh
    ├── rebuild.sh
    └── status.sh
```

## 💡 Tips

1. **Always run from docker directory**
   ```bash
   cd docker  # Do this first
   ```

2. **Make scripts executable** (if needed)
   ```bash
   chmod +x scripts/*.sh
   ```

3. **View logs while starting**
   ```bash
   ./scripts/start.sh && ./scripts/logs.sh
   ```

4. **Check status before debugging**
   ```bash
   ./scripts/status.sh
   ```

## 🆘 Need Help?

- Full docs: [README.md](README.md)
- Deployment guide: [../DOCKER_DEPLOYMENT.md](../DOCKER_DEPLOYMENT.md)
- Main project: [../README.md](../README.md)
