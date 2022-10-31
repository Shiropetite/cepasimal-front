FROM node:18.9.0-alpine as build
RUN ls
WORKDIR /build
RUN ls
COPY package*.json ./
RUN ls
RUN npm ci
RUN ls
COPY . ./
RUN ls
RUN npm run build
