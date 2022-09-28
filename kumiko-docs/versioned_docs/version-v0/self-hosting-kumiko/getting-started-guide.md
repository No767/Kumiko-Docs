---
title: Getting Started Guide
sidebar_position: 2
---

# Getting Started Guide

Kumiko can now be self-hosted. You can self host your own version of Kumiko now. There are 2 ways to self host Kumiko: Standalone (Docker CLI) or with Docker Compose

:::caution Kumiko is still in alpha stages

Kumiko is currently in v0 as of writing this. This means that the instructions for self-hosting may not work, and might be different than the ones written here

:::

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- cURL or wget

If using the standalone method:

- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [RabbitMQ](https://www.rabbitmq.com/)
- psql
- monogosh

## Docker CLI (Standalone)

1. Pull the latest production build from either GHCR or Docker Hub

    GHCR: 
    ```bash
    docker pull ghcr.io/no767/kumiko:latest
    ```

    Docker Hub:
    ```bash
    docker pull no767/kumiko:latest
    ```

2. Download the example docker env file and standalone-setup script. This is the file where you'll put all of your env and credentials in

    curl:

    ```bash
    curl -o .env https://raw.githubusercontent.com/No767/Kumiko/dev/.env-docker-example \
    && curl -o standalone-setup.sh https://raw.githubusercontent.com/No767/Kumiko/dev/standalone-setup.sh \
    && chmod +x standalone-setup.sh
    ```

    wget:

    ```bash
    wget -O .env https://raw.githubusercontent.com/No767/Kumiko/dev/.env-docker-example \
    && wget -O standalone-setup.sh https://raw.githubusercontent.com/No767/Kumiko/dev/standalone-setup.sh \
    && chmod +x standalone-setup.sh
    ```

3. Obtain the API keys, access tokens, discord bot token, and database credentials for Kumiko. Open up the `.env` file with an editor like Vim and add the needed values. Refer to the list of API keys and tokens below.

4. To set up all of the data, all we need to do is to run a script to set that up.

    ```bash
    env $(grep -v '^#' .env | xargs) ./standalone-setup.sh
    ```

5. Now it's time to run Kumiko. Just run this command to run the bot:

    ```bash
    sudo docker run -d --restart=always --env-file=.env --name Kumiko no767/kumiko:latest
    ```

  :::note You don't need `sudo` on windows

  Note that on windows, you don't need to run it with the `sudo` command

  :::
## Docker Compose

1. Clone the repo

    ```sh
    git clone https://github.com/No767/Kumiko.git
    ```

2. Rename the `.env-docker-example` file to `.env` and the `docker-compose-example.yml` to `docker-compose.yml`

3. Start the Docker Compose up without Kumiko. Just comment out those lines if you are setting up Kumiko for the first time.

4. Update the `.env` file with the correct values, and also set the correct passwords and users for Postgres, MongoDB, and RabbitMQ.

5. Log into your PostgreSQL server with `psql` and create the databases needed defined in your `.env` file. Also log on to your MongoDB server and create the databases needed defined in your `.env` file as well.

    For example, if the quests database is named `quests`, then create the DB as follows:

    ```sql
    CREATE DATABASE quests;
    ```

6. Now you can just run the docker compose stack

    ```sh
    sudo docker-compose up -d
    ```
