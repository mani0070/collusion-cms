# Collusion CMS

Our CMS is available as a docker image.

You will need to have [docker](https://www.docker.com/community-edition#/download) installed and running on you machine to develop this project.


## Local Development

#### Spin up

Build and run a development environment

    $ docker-compose up -d

#### Spin down

Stop a development environment

    $ docker-compose stop

#### Remove images

Delete all images associated development environment

    $ docker-compose down --rmi all

## Environment variables

- `ADMIN_PATH` set the path for access to the CMS admin.
- `DATABASE_CLIENT` a database providers supported by Strapi: MongoDB, Postgres, MySQL, Sqlite3 and Redis.
- `DATABASE_HOST` database service name.
- `DATABASE_PORT` depends on your database client.
- `DATABASE_NAME` initialises a database with specific name (default strapi). When using MongoDB, you should also update the `MONGO_INITDB_DATABASE` environment in the db service.
- `DATABASE_USERNAME` set the username of the database connection.
- `DATABASE_PASSWORD` set the password of the database connection.
- `NODE_ENV` the node environment - it can be `production`, `staging` or `development`. In production you're not able to create/edit a Content-type.
