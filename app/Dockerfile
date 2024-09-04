FROM node:latest AS build
WORKDIR /myapp
COPY . .
RUN npm install

CMD [ "node", "index.js"]