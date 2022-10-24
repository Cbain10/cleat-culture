FROM        node:alpine

LABEL       author="Christian Bain"

ENV         NODE_ENV=production
ENV         PORT=3001

COPY        package.json package-lock.json ./
RUN         npm install

COPY        . ./
EXPOSE      $PORT

ENTRYPOINT  ["npm", "run", "start:dev"]
