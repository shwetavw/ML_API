## Description

Requirement is defined in "BusinessRequirement/ML_US_Requirement.pdf" document.

## Development

1. API is developed in NestJS and typeorm is used for db conneectivity.
2. Database : Postgres
3. Swagger is used for API documentation

## Setup Database with Docker-compose

1. Use docker-compose to start up and run the application without having to install database

Run the following command
```bash
# start up application in docker along with postgres containers
$ docker-compose up

# tear down application, postgres containers
$ docker-compose down
```
2. run migration command to create db tables
```
$ npm run migration:run
```

## Run API locally 

```bash
# 1. install project dependecies 
$ npm i

# 2. run in different modes as below

# run in development mode
$ npm run start

# run in watch mode
$ npm run start:dev

# run in production mode
$ npm run start:prod
```

## Debugging

Debugging the application in local computer.

```bash
# 1. Ensure that your postgres database (installed, or docker image) is up and running.
# 1.1 For a docker image, run command
$ docker ps

# 1.2 If image is not listed, check for stopped container with
$ docker ps -a

# 1.3 If stopped, simple restart using the container name, or container id
$ docker start <container_name> OR $ docker start <container_id>

# 2. Ensure .env file exists with correct db connection variables, and then run
$ npm run start:debug

```

## Access API functions using Swagger Definition
In order to access the swagger definition for this service, open a web browser and navigate to 
```http://localhost:3000/api-doc```
