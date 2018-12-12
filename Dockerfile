FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY ./src ./src

EXPOSE 3000

CMD [ "nodemon", "src/app.js", "-L" ]