# Docker Configuration for RW Automotive Website

This directory contains all Docker-related files and scripts for containerizing and deploying the RW Automotive website.

## Directory Structure

```
docker/
├── Dockerfile              # Multi-stage Docker build configuration
├── docker-compose.yml      # Docker Compose orchestration
├── .dockerignore          # Files to exclude from Docker build
├── scripts/               # Helper scripts for Docker management
│   ├── start.sh          # Build and start containers
│   ├── stop.sh           # Stop containers
│   ├── logs.sh           # View container logs
│   ├── rebuild.sh        # Rebuild after code changes
│   └── status.sh         # Check container status
└── README.md             # This file
```

## Quick Start

### Using Helper Scripts (Recommended)

Navigate to the docker directory and use the provided scripts:

```bash
cd docker

# Start the application
./scripts/start.sh

# View logs
./scripts/logs.sh

# Check status
./scripts/status.sh

# Stop the application
./scripts/stop.sh

# Rebuild after code changes
./scripts/rebuild.sh
```

### Using Docker Compose Directly

If you prefer to use docker-compose commands directly:

```bash
cd docker

# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down

# Rebuild
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Access the Application

Once running, the website will be available at:
- **URL:** http://localhost:3000
- **Container Name:** rw-automotive-web

## Scripts Reference

### `start.sh`
Builds and starts the Docker container. Performs health checks and provides status updates.

**Usage:**
```bash
./scripts/start.sh
```

### `stop.sh`
Stops and removes the Docker containers.

**Usage:**
```bash
./scripts/stop.sh
```

### `logs.sh`
Displays real-time logs from the container. Press Ctrl+C to exit.

**Usage:**
```bash
./scripts/logs.sh
```

### `rebuild.sh`
Stops containers, rebuilds the image from scratch (no cache), and restarts. Use this after making code changes.

**Usage:**
```bash
./scripts/rebuild.sh
```

### `status.sh`
Shows the current status of the container, including health status and resource usage.

**Usage:**
```bash
./scripts/status.sh
```

## Configuration

### Environment Variables

Modify `docker-compose.yml` to add environment variables:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_TELEMETRY_DISABLED=1
  - YOUR_CUSTOM_VAR=value
```

### Port Configuration

To change the port (default: 3000), edit `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # External:Internal
```

### Resource Limits

Add resource limits to `docker-compose.yml`:

```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
    reservations:
      cpus: '0.25'
      memory: 256M
```

## Health Checks

The container includes automatic health checks:
- **Interval:** 30 seconds
- **Timeout:** 10 seconds
- **Retries:** 3
- **Start Period:** 40 seconds

View health status:
```bash
docker inspect --format='{{.State.Health.Status}}' rw-automotive-web
```

## Troubleshooting

### Container won't start
```bash
# Check logs for errors
docker-compose logs

# Verify Docker is running
docker ps
```

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000

# Change port in docker-compose.yml
```

### Rebuild issues
```bash
# Clean rebuild
docker-compose down
docker system prune -f
./scripts/rebuild.sh
```

### Permission issues
```bash
# Make scripts executable
chmod +x scripts/*.sh
```

## Production Deployment

### Build for Production

```bash
# Build the image
docker build -t rw-automotive-web:latest -f Dockerfile ..

# Tag for registry
docker tag rw-automotive-web:latest yourusername/rw-automotive-web:latest

# Push to Docker Hub
docker push yourusername/rw-automotive-web:latest
```

### Deploy to Server

```bash
# Pull on production server
docker pull yourusername/rw-automotive-web:latest

# Run with production settings
docker run -d \
  -p 80:3000 \
  --name rw-automotive \
  --restart unless-stopped \
  yourusername/rw-automotive-web:latest
```

### Using Docker Compose in Production

```bash
# On production server
cd docker
docker-compose -f docker-compose.yml up -d
```

## Maintenance

### Update the Application

```bash
# Pull latest code
cd ..
git pull origin main

# Rebuild and restart
cd docker
./scripts/rebuild.sh
```

### View Resource Usage

```bash
docker stats rw-automotive-web
```

### Backup and Restore

```bash
# Backup (if using volumes)
docker run --rm --volumes-from rw-automotive-web -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz /app

# Restore
docker run --rm --volumes-from rw-automotive-web -v $(pwd):/backup ubuntu tar xzf /backup/backup.tar.gz
```

## Security Best Practices

1. **Non-root User:** Container runs as `nextjs` user (UID 1001)
2. **Minimal Base Image:** Alpine Linux for small attack surface
3. **No Dev Dependencies:** Production build only
4. **Health Checks:** Automated monitoring
5. **Regular Updates:** Keep base images updated

## Support

For detailed deployment documentation, see:
- [DOCKER_DEPLOYMENT.md](../DOCKER_DEPLOYMENT.md) - Comprehensive deployment guide
- [Official Docker Docs](https://docs.docker.com/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment#docker-image)

## License

Part of the RW Automotive website project.
