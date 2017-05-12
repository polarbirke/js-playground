FROM ubuntu:latest

MAINTAINER Team Turtles (Chefkoch.de) "turtles@chefkoch.de"

RUN apt-get update

RUN apt-get -y install npm
RUN mkdir -p /src/

WORKDIR /src
COPY package.json /src/package.json

RUN npm install && \
    npm run build