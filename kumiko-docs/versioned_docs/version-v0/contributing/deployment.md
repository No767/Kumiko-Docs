---
title: Deployment
sidebar_position: 4
---

# Deployment

The official version of Kumiko is self hosted on a Docker container, and the rest of the infrastructure is also self hosted on a server running Ubuntu 20.04.04 LTS. But, if you would like to, you could also use the included `docker-compose.yml` file to deploy Kumiko. That file will have everything you need in order to deploy Kumiko with the correct services. The current services that Kumiko needs is Postgres, MongoDB, Redis, and RabbitMQ.

## Running Docker-Compose

You'll need Docker Compose installed for this. If you are planning to host this on Windows and/or MacOS, you'll need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). If you already have Docker Desktop installed, then you should already have Docker compose installed. For Linux users, you'll need [Docker Engine](https://docs.docker.com/engine/) and the [Docker Compose](https://docs.docker.com/compose/install/compose-plugin/) plugin. Refer to the instructions [here](https://docs.docker.com/compose/install/compose-plugin/).

The steps for how to deploy Kumiko can be found [here](../self-hosting-kumiko/getting-started-guide.md)

:::note
For WSL users, first install Docker Desktop, and then add your distro of choice into the WSL integration tab in Docker Desktop's settings page. Note that you'll need to run all docker commands with sudo privileges.
:::

:::caution 
It is advised to run this on a Linux server when in production. Deploying Kumiko to hosting sites such as PebbleHost will not work. Cloud hosting sites such as AWS, Azure, GCP, etc will work, but you'll more than likely have to spin up separate servers and run Kumiko as a docker container. If you are not able to use the Docker Compose system, consider using the standalone method.

:::

## Deploying on Cloud

It's also completely possible to deploy Kumiko to the cloud. For running Docker containers on the cloud, it's recommended to use the standalone method, and make sure you have the servers running. Another option is to use rent out a VPS from a cloud provider, install Docker and Docker Compose, and follow the steps [here](../self-hosting-kumiko/getting-started-guide.md) to get started as well. It's recommended to use a host such as AWS or Azure instead of hosts such as PebbleHost, Railway, etc.


## Expected Uptimes

Discord bots are generally expected to be running 24/7, and are expected to have an uptime of 90-99% when in production. Make sure that the server you are running does not experience issues, or this can cause Kumiko to fail. It is recommended to not stop the bot unless for new updates, or critical downtime issues or server maintenance.

## Docker-Compose File
Full docker-compose file [(source)](https://github.com/No767/Kumiko/blob/dev/docker-compose-example.yml):

```yaml
# docker-compose-example.yml
version: "3.9"
services:
  postgres:
    container_name: Kumiko-Postgres
    image: no767/kumiko-postgres:latest
    restart: always
    env_file:
      - .env
    volumes:
      - postgres_volume:/var/lib/postgresql/data
    ports:
      - 5432:5432

  rabbitmq:
    container_name: Kumiko-RabbitMQ
    image: rabbitmq:3-management
    hostname: kumiko_prod
    restart: always
    ports:
      - 5672:5672
      - 15672:15672
    env_file:
      - .env

  kumiko:
    container_name: Kumiko
    image: no767/kumiko:latest
    restart: always
    deploy:
      restart_policy:
        condition: on-failure
        delay: 0s
        max_attempts: 5
        window: 120s
      mode: replicated
    command: sh -c '/Kumiko/wait-for postgres:5432 -- echo "[Wait-for] PostgreSQL is fully up. Waiting for RabbitMQ" && /Kumiko/wait-for rabbitmq:5672 -- echo "[Wait-for] Both PostgreSQL and RabbitMQ are fully ready. Starting up Kumiko" && /Kumiko/start.sh'
    env_file:
      - .env
    depends_on:
      - postgres
      - rabbitmq
    
  mongodb:
    container_name: Kumiko-MongoDB
    image: mongo:latest
    restart: always
    env_file:
      - .env
    ports:
      - 27017:27017
    volumes:
      - mongodb_volume:/data/db


  redis:
    container_name: Kumiko-Redis
    image: redis:latest
    ports:
      - 6379:6379
    volumes:
      - redis_volume:/data
    command: redis-server --save 60 1 --loglevel warning

volumes:
  postgres_volume:
  mongodb_volume:
  redis_volume:
```
