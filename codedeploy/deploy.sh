#!/usr/bin/env bash

REPOSITORY=/home/ec2-user/nestjs-boilerplate
cd $REPOSITORY

ECR_REGISTRY=873251151111.dkr.ecr.ap-northeast-2.amazonaws.com
ECR_REPOSITORY=nestjs-boilerplate

echo "> Do AWS Codedeploy!"

docker --version
aws ecr get-login-password --region ap-northeast-2 | \
  docker login --username AWS --password-stdin 873251151111.dkr.ecr.ap-northeast-2.amazonaws.com
docker pull $ECR_REGISTRY/$ECR_REPOSITORY:latest
docker image tag $ECR_REGISTRY/$ECR_REPOSITORY:latest $ECR_REPOSITORY:latest

docker run -d -p 4000:4000 $ECR_REPOSITORY:latest

# docker-compose version
# docker-compose -f docker-compose.prod.yaml up -d

docker image prune -f
