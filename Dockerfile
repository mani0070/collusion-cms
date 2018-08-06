FROM node:10.7.0-alpine

LABEL maintainer="Collusion Tech" \
      org.label-schema.vendor="Colluion" \
      org.label-schema.name="Collusion CMS Docker image" \
      org.label-schema.vcs-url="https://github.com/CollusionStudios/collusion-cms"

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api

RUN npm install -g strapi@3.0.0-alpha.13.0.1

COPY strapi.sh ./
RUN chmod +x ./strapi.sh

EXPOSE 1337

COPY healthcheck.js /usr/local/bin/healthcheck.js
COPY app /usr/src/api/

HEALTHCHECK --interval=15s --timeout=60s --start-period=60s \
      CMD node /usr/local/bin/healthcheck.js

CMD ["./strapi.sh"]
