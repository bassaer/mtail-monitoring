FROM node:14

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src/ ./src/

RUN apt-get update && \
    apt-get install -y yarn && \
    yarn install && \
    yarn build

ENV TZ=Asia/Tokyo
ENV PORT=80

EXPOSE 80

CMD ["node", "dist/server.js"]
