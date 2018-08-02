#!/bin/sh
set -ea

_stopStrapi() {
  echo "Stopping strapi"
  kill -SIGINT "$strapiPID"
  wait "$strapiPID"
}

trap _stopStrapi SIGTERM SIGINT

# if [ ! -f "$APP_NAME/package.json" ]
# then
#     strapi -v
#     strapi new $APP_NAME --dbclient=$DATABASE_CLIENT --dbhost=$DATABASE_HOST --dbport=$DATABASE_PORT --dbname=$DATABASE_NAME --dbusername=$DATABASE_USERNAME --dbpassword=$DATABASE_PASSWORD
# fi
#
# # replace database configs from strapi - there's a bug
# cp database.json $APP_NAME/config/environments/production/database.json
# cp database.json $APP_NAME/config/environments/staging/database.json
# cp database.json $APP_NAME/config/environments/development/database.json

# cp server.js $APP_NAME/server.js

cd $APP_NAME

npm install

npm run start & strapiPID=$!

wait "$strapiPID"
