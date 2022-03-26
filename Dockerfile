From node:alpine

ENV DOCKERHOME=/home/app
ENV MONGO_DB_URI=${MONGO_DB_URI}
ENV DROP_MONBO=${DROP_MONBO}

RUN mkdir -p $DOCKERHOME

WORKDIR $DOCKERHOME

COPY . $DOCKERHOME

RUN npm ci

EXPOSE 8080

RUN npm run build

CMD npm run start