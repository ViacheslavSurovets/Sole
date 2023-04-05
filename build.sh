#!/bin/bash

docker rm -f sole-fe
docker rm -f sole-be

docker build \
  -t sole-fe \
  .

docker build \
  -t sole-be \
  -f Dockerfilebackend \
  .
