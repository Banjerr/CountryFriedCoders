FROM node:7.1-alpine

RUN mkdir -p /home/app && mkdir -p /home/data/db
WORKDIR /home/app

RUN npm install -g serve

COPY build /home/app

EXPOSE 5000

CMD [ "serve",  "-s", "build" ]
