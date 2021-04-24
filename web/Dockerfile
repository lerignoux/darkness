FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app

npm install

CMD ["npm", "run", "server"]
