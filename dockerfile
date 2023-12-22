FROM node:20 as build 

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV PNPNM_HOME=/usr/local/bin

WORKDIR /usr/src/app

COPY package*.json ./


RUN pnpm install

COPY  . .



#ETAPA 2 UNA IMAGEN PEQUEÑA

FROM node:20-alpine

WORKDIR /usr/src/app

COPY  --from=build /usr/src/app/node_modules ./node_modules

COPY --from=build /usr/src/app/package*.json ./

EXPOSE 4000

CMD [ "pnpm", "start" ]