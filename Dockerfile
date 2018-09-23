FROM node:8.12.0-alpine

WORKDIR /usr/src/praxis-app

COPY . .

RUN npm i

RUN npm run prestart:prod

# ENV NODE_ENV production

EXPOSE 3000

ENTRYPOINT [ "node", "./dist/main.js" ]