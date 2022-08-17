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

- [Python 3.10](https://www.python.org/)
- [Poetry](https://python-poetry.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- psql or pgAdmin4
- mongosh or MongoDBCompass

If using the standalone method:

- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [RabbitMQ](https://www.rabbitmq.com/)

If using the Docker Compose method:

- [Docker Compose](https://docs.docker.com/compose/)

## Standalone

1. Clone the repo

    ```sh
    git clone https://github.com/No767/Kumiko.git
    ```

2. Rename the `.env-docker-example` file to `.env`

3. If you haven't, now start changing the values from the `.env` file to match the credentials that you are going to be using. You'll need to adjust the credentials for Postgres, MongoDB, Redis, and RabbitMQ. 

4. Log into your PostgreSQL server with `psql` and create the databases needed defined in your `.env` file. Also log on to your MongoDB server and create the databases needed defined in your `.env` file as well.

    For example, if the quests database is named `quests`, then create the DB as follows:
    
    ```sql
    CREATE DATABASE quests;
    ```

5. Now you can run the bot. Use the `.env` file to read out the environment variables as needed. 

    ```sh
    sudo docker run -d --env-file=.env --restart=always --name=Kumiko no767/kumiko:edge
    ```

    :::note
    
    You could also use the `-e` flag, but that would take way too long. The `.env` file is the same as the one adjusted in step 3
    
    :::

6. Once ran, Kumiko will go ahead and create the tables as needed. Kumiko will also output any logs, so make sure to check the logs in the container to make sure everything is going fine.

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