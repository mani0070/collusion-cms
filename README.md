# Collusion CMS

Our CMS is dockerised so please install docker first - https://www.docker.com/get-docker

## How to Install locally

```bash
docker-compose build --no-cache api && docker-compose up
```

I like rebuilding the container when I make edits to the Dockerfile as its getting cached but feel free to ommit the build command after the first build.

## Environment variables

- `APP_NAME` to override the `strapi-app` generated folder name (you should also update the volumes paths).
- `DATABASE_CLIENT` a database providers supported by Strapi: MongoDB, Postgres, MySQL, Sqlite3 and Redis.
- `DATABASE_HOST` database service name.
- `DATABASE_PORT` depends on your database client.
- `DATABASE_NAME` initializes a database with specific name (default strapi). When using MongoDB, you should also update the `MONGO_INITDB_DATABASE` environment in the db service.
- `DATABASE_USERNAME` set the username of the database connection.
- `DATABASE_PASSWORD` set the password of the database connection.
- `NODE_ENV` the node environment - it can be `production`, `staging` or `development`. In the production you're not able to create/edit a Content-type.
