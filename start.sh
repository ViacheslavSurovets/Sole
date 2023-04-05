#!/bin/bash

./build.sh

docker run -dit \
  --name sole-fe \
  --rm \
  -p 3000:3000 \
  sole-fe:latest

docker run -dit \
    --name sole-be \
    --rm \
    -p 5000:5000 \
    sole-be:latest

