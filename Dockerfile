FROM node:18.9.0-alpine as build
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build
