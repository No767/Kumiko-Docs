---
title: Deployment
sidebar_position: 4
---

# Deployment

The official version of Kumiko is self hosted on a Docker container, and the rest of the infrastructure is also self hosted on a server running Ubuntu 20.04.04 LTS. But, if you would like to, you could also use the included `docker-compose.yml` file to deploy Kumiko. That file will have everything you need in order to deploy Kumiko with the correct services. The current services that Kumiko needs is Postgres, MongoDB, and RabbitMQ.

## Building + Running Docker-Compose

You'll need Docker Compose installed for this. If you are planning to host this on Windows and/or MacOS, you'll need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). If you already have Docker Desktop installed, then you should already have Docker compose installed. For Linux users, you'll need [Docker Engine](https://docs.docker.com/engine/) and the [Docker Compose](https://docs.docker.com/compose/install/compose-plugin/) plugin. Refer to the instructions [here](https://docs.docker.com/compose/install/compose-plugin/).

Then you can run `docker compose up` to build Kumiko, and then `docker compose up -d` to start it all up. You can use `docker compose ps` to see the containers running, and then to shut it all down, run `docker compose stop`

:::note
For WSL users, first install Docker Desktop, and then add your distro of choice into the WSL integration tab in Docker Desktop's settings page. Note that you'll need to run all docker commands with sudo privileges.
:::

:::caution 
It is advised to run this on a Linux server when in production. Deploying Kumiko to hosting sites such as PebbleHost will not work.
:::

## Deploying on Cloud

It is also possible to deploy Kumiko to the cloud. v0 is currently unsharded, but once Kumiko hits up to 900-1000 servers, then sharding is needed, and a service like Kubernetes or the cloud provider's version of Kubernetes (eg AKS from Azure, etc) is needed. Note that before you deploy Kumiko, make sure to build Kumiko's docker image using the already configured Makefile. Edit the makefile as need be. For standard deployments, run Kumiko as a docker container, and then configure your PostgreSQL, MongoDB, and RabbitMQ clusters. 

:::caution
Make sure to have all of your database credentials already configured within the `.env` file. Once you build the image, you can't change any of the env values.
:::

## Expected Uptimes

Discord bots are generally expected to be running 24/7, and are expected to have an uptime of 90-99% when in production. Make sure that the server you are running does not experience issues, or this can cause Kumiko to fail. It is recommended to not stop the bot unless for new updates, or critical downtime issues or server maintenance.

## Docker-Compose File
Full docker-compose file [(source)](https://github.com/No767/Kumiko/blob/dev/docker-compose.yml):

```yaml
# docker-compose.yml
# This docker compose file is actually not used by Kumiko
# This is just for example
# MAKE SURE TO CHANGE THE VALUES FOR KUMIKO

version: "3.9"
services:
  kumiko:
    # Use cloudflare's DNS server. This is what Discord uses as well
    dns: 
      - 1.1.1.1
      - 1.0.0.1
    container_name: Kumiko
    restart: always
    build:
      dockerfile: ./Ubuntu-Docker/Dockerfile
      context: .
      args:
        # Both fields are optional. These are for if you want to hook up Kumiko to PM2, which natively in the Dockerfile, is supported
        - PM2_PUBLIC_KEY_INGEST=pub_key # Change this to your own PM2 public key
        - PM2_SECRET_KEY_INGEST=secret_key # Change this to your own PM2 private key
    ports:
      - 4002:4002 # Used by uptime kuma. remove if not needed
    deploy:
      restart_policy:
        condition: on-failure
        delay: 0s
        max_attempts: 3
        window: 120s
      mode: replicated
    
  postgres:
    container_name: Kumiko-Postgres
    image: postgres:latest
    restart: always
    environment:
      - POSTGRES_PASSWORD=password # Chnage this to a secure password
      - POSTGRES_USER=Kumiko
      - POSTGRES_DB=Kumiko
    volumes:
      - postgres_volume:/var/lib/postgresql/data
    ports:
      - 5432:5432

  mongodb:
    container_name: Kumiko-MongoDB
    image: mongo:latest
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=Kumiko
      - MONGO_INITDB_ROOT_PASSWORD=password # Chnage this to a secure password
    ports:
      - 27017:27017
    volumes:
      - mongodb_volume:/data/db

  rabbitmq:
    container_name: Kumiko-RabbitMQ
    image: rabbitmq:3-management
    hostname: kumiko_prod
    restart: always
    ports:
      - 5672:5672
      - 15672:15672
    environment:
      - RABBITMQ_DEFAULT_USER=Kumiko
      - RABBITMQ_DEFAULT_PASS=password # Chnage this to a secure password
      - RABBITMQ_DEFAULT_VHOST=kumiko

volumes:
  postgres_volume:
  mongodb_volume:
```
