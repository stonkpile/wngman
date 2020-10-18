FROM node:14.14-alpine3.12
WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm ci

COPY . /home/app

RUN npm run build

CMD [ "node", "dist/index.js" ]