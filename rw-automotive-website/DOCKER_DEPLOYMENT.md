# Docker Deployment Guide

This guide explains how to containerize and deploy the RW Automotive website using Docker.

## Prerequisites

- Docker installed on your system ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose (usually included with Docker Desktop)

## Project Structure

All Docker-related files are organized in the `docker/` directory:

```
rw-automotive-website/
├── docker/                   # Docker configuration
│   ├── Dockerfile           # Build configuration
│   ├── docker-compose.yml   # Orchestration
│   ├── .dockerignore       # Build exclusions
│   ├── scripts/            # Helper scripts
│   └── README.md           # Docker documentation
├── app/                     # Next.js application
├── components/             # React components
├── public/                 # Static assets
└── ...
```

## Quick Start

### Option 1: Using Helper Scripts (Easiest)

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
```

### Option 2: Using Docker Compose

1. **Navigate to docker directory:**
   ```bash
   cd docker
   ```

2. **Build and start the container:**
   ```bash
   docker-compose up -d --build
   ```

2. **Access the application:**
   Open your browser and navigate to: `http://localhost:3000`

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Option 3: Using Docker Commands Directly

1. **Build the Docker image:**
   ```bash
   cd docker
   docker build -t rw-automotive-web -f Dockerfile ..
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 --name rw-automotive rw-automotive-web
   ```

3. **Stop the container:**
   ```bash
   docker stop rw-automotive
   docker rm rw-automotive
   ```

## Docker Configuration

### Dockerfile

The multi-stage Dockerfile includes:
- **Stage 1 (deps):** Install production dependencies
- **Stage 2 (builder):** Build the Next.js application
- **Stage 3 (runner):** Run the application with minimal footprint

Benefits:
- Small final image size
- Security (runs as non-root user)
- Optimized for production

### docker-compose.yml

Features:
- Auto-restart on failure
- Health checks
- Network isolation
- Port mapping (3000:3000)

## Advanced Usage

### Custom Port

To run on a different port (e.g., 8080):

**Docker Compose:**
```yaml
ports:
  - "8080:3000"
```

**Docker Command:**
```bash
docker run -d -p 8080:3000 --name rw-automotive rw-automotive-web
```

### Environment Variables

Create a `.env` file:
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

Then update docker-compose.yml:
```yaml
env_file:
  - .env
```

### View Logs

**Docker Compose:**
```bash
docker-compose logs -f
```

**Docker Command:**
```bash
docker logs -f rw-automotive
```

### Rebuild After Code Changes

**Docker Compose:**
```bash
docker-compose down
docker-compose up -d --build
```

**Docker Command:**
```bash
docker stop rw-automotive
docker rm rw-automotive
docker build -t rw-automotive-web .
docker run -d -p 3000:3000 --name rw-automotive rw-automotive-web
```

## Production Deployment

### Using a Registry (Docker Hub)

1. **Tag the image:**
   ```bash
   docker tag rw-automotive-web yourusername/rw-automotive-web:latest
   ```

2. **Push to Docker Hub:**
   ```bash
   docker push yourusername/rw-automotive-web:latest
   ```

3. **Pull and run on production server:**
   ```bash
   docker pull yourusername/rw-automotive-web:latest
   docker run -d -p 80:3000 --name rw-automotive yourusername/rw-automotive-web:latest
   ```

### Reverse Proxy (Nginx)

For production, use Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name rwgeneralautomotiveandtires.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL/HTTPS

Use Let's Encrypt with Certbot:
```bash
sudo certbot --nginx -d rwgeneralautomotiveandtires.com
```

## Monitoring & Maintenance

### Check Container Status
```bash
docker-compose ps
```

### Check Resource Usage
```bash
docker stats rw-automotive-web
```

### Update the Application
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose up -d --build
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs

# Or for specific container
docker logs rw-automotive-web
```

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process or change the port in docker-compose.yml
```

### Permission issues
Make sure the non-root user has correct permissions:
```bash
docker-compose down
docker-compose up --build
```

### Clear all Docker data (careful!)
```bash
docker system prune -a --volumes
```

## Health Checks

The container includes health checks that verify the application is running:
- Checks every 30 seconds
- 10 second timeout
- 3 retries before marking unhealthy
- 40 second startup grace period

Check health status:
```bash
docker inspect --format='{{.State.Health.Status}}' rw-automotive-web
```

## Security Best Practices

1. **Non-root user:** Container runs as user `nextjs` (UID 1001)
2. **Minimal image:** Based on Alpine Linux for small attack surface
3. **No dev dependencies:** Production build excludes dev packages
4. **Environment variables:** Sensitive data should use secrets management
5. **Regular updates:** Keep base image and dependencies updated

## Performance Optimization

The Dockerfile is optimized for:
- Fast builds (layer caching)
- Small image size (~150MB)
- Quick startup time
- Efficient resource usage

## Support

For issues or questions:
- Check logs: `docker-compose logs -f`
- Verify build: `docker-compose build --no-cache`
- Review Docker docs: https://docs.docker.com/

## License

This Docker configuration is part of the RW Automotive website project.
