#!/bin/bash
docker login
docker build --no-cache=true -t gabrielo91/aws-node:1.0.0 .
docker push gabrielo91/aws-node:1.0.0