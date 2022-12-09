---
title: Manual Deployment
sidebar_position: 3
---

# Manual Deployment

There are 2 ways to host Kumiko: Standalone (Docker CLI) or with Docker Compose

:::info Using Docker Compose is recommended

Kumiko has 2 methods for manual deployment. Using Docker Compose is recommended instead due to the ease of use when hosting. Other options may also be used but only if you know you already have hosting for the rest of the needed services (Redis, PostgreSQL, and MongoDB)

:::

## Requirements

- [Docker](https://www.docker.com/)
- [`cURL`](https://curl.se/) or [`wget`](https://www.gnu.org/software/wget/)

### Additional Standalone Requirements

If using the standalone method (and all of the client tools as needed):

- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

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

    :::tip Always use the Debian based images

    One of the big things that will help is using the Debian based images. These are the normal version tags, and are also appended with the `-bullseye` tag. These often will be a bit bulkier, but offer better performance and stability compared to the Alpine based images.

    :::

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

3. Obtain the API keys, access tokens, discord bot token, and database credentials for Kumiko. Open up the `.env` file with an editor like Vim and add the needed values. Refer to the list of API keys and tokens [here](../environment-setup/api-keys-and-access-tokens.md).

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

1. Download the `.env` file and `docker-compose.yml` file via the `setup.sh` script

    ```bash
    curl -s https://raw.githubusercontent.com/No767/Kumiko/dev/scripts/setup.sh | sh
    ```

2. Obtain the API keys, access tokens, discord bot token, and database credentials for Kumiko. Open up the `.env` file with an editor like Vim and add the needed values. Refer to the list of API keys and tokens [here](../environment-setup/api-keys-and-access-tokens.md).

3. Once everything is set, literally just fire up the whole entire docker compose stack. All of the database creation, and seeding of the data will be handled automatically

    ```bash
    sudo docker compose up -d
    ```

4. Invite your bot into your server of choice, and have fun!