FROM node:7.1-alpine

RUN mkdir -p /home/app && mkdir -p /home/data/db
WORKDIR /home/app

COPY package.json /home/app/
RUN npm install && npm cache clean && npm install -g serve

COPY . /home/app

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "serve" ]