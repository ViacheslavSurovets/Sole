#!/bin/bash

./build.sh

docker run -dit \
  --name sole-fe \
  --rm \
  -p 3000:3000 \
  sole-fe:latest
