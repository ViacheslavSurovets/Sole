#!/bin/bash

docker rm -f sole-fe

docker build \
  -t sole-fe \
  .
