FROM        node:alpine

LABEL       author="Christian Bain"

ENV         NODE_ENV=production
ENV         PORT=3000

WORKDIR     /var/www
COPY        package.json package-lock.json ./
RUN         npm install

COPY        . .
RUN         npm run build
EXPOSE      $PORT

ENTRYPOINT  ["npm", "start"]