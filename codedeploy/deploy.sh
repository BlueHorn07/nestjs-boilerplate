#!/usr/bin/env bash

REPOSITORY=/home/ec2-user/nestjs-boilerplate
cd $REPOSITORY

ECR_REGISTRY=873251151111.dkr.ecr.ap-northeast-2.amazonaws.com
ECR_REPOSITORY=nestjs-boilerplate

echo "> Do AWS Codedeploy!"
docker pull $ECR_REGISTRY/$ECR_REPOSITORY:latest
