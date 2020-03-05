FROM node:10

ENV DATABASE_URL postgres://postgres:1234@localhost:5432/saamaanwala

ENV SCHEMA public

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

COPY . .