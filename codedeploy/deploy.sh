#!/usr/bin/env bash

WORKDIR=/home/ec2-user/nestjs-boilerplate
cd $WORKDIR

ECR_REGISTRY=873251151111.dkr.ecr.ap-northeast-2.amazonaws.com
ECR_REPOSITORY=nestjs-boilerplate

echo "> Do AWS Codedeploy!"

docker --version
aws ecr get-login-password --region ap-northeast-2 | \
  docker login --username AWS --password-stdin $ECR_REGISTRY
docker pull $ECR_REGISTRY/$ECR_REPOSITORY:latest
docker image tag $ECR_REGISTRY/$ECR_REPOSITORY:latest $ECR_REPOSITORY:latest

whoami

which docker
cd /usr/local/bin
cd $WORKDIR

which docker-compose

docker-compose version
docker-compose -f docker-compose.dev.yaml up -d

docker image prune -f

