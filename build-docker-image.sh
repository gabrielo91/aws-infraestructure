#!/bin/bash
docker login
docker build -t gabrielo91/aws-node:latest .
docker push gabrielo91/aws-node:latest