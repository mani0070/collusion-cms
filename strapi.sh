#!/bin/sh
set -ea

_stopStrapi() {
  echo "Stopping strapi"
  kill -SIGINT "$strapiPID"
  wait "$strapiPID"
}

trap _stopStrapi SIGTERM SIGINT

APP_NAME=${APP_NAME}
DATABASE_AUTHENTICATION=${AUTHENTICATION_DATABASE}
DATABASE_ENABLE_SSL=${DATABASE_ENABLE_SSL}
DATABASE_CLIENT=${DATABASE_CLIENT}
DATABASE_HOST=${DATABASE_HOST}
DATABASE_PORT=${DATABASE_PORT}
DATABASE_NAME=${DATABASE_NAME}

if [ ! -f "$APP_NAME/package.json" ]
then
    strapi -v
    strapi new $APP_NAME --dbclient=$DATABASE_CLIENT --dbhost=$DATABASE_HOST --dbport=$DATABASE_PORT --dbname=$DATABASE_NAME --dbusername=$DATABASE_USERNAME --dbpassword=$DATABASE_PASSWORD
fi

cd $APP_NAME
strapi start &

strapiPID=$!
wait "$strapiPID"
