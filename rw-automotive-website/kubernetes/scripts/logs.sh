#!/bin/bash

# View logs for RW Automotive pods

echo "📋 RW Automotive Logs"
echo "====================="
echo ""

# Check for specific pod or all pods
if [ -z "$1" ]; then
    echo "Following logs from all pods..."
    echo "Press Ctrl+C to exit"
    echo ""
    kubectl logs -f -l app=rw-automotive -n rw-automotive --all-containers=true
else
    POD_NAME=$1
    echo "Following logs from pod: $POD_NAME"
    echo "Press Ctrl+C to exit"
    echo ""
    kubectl logs -f $POD_NAME -n rw-automotive
fi
