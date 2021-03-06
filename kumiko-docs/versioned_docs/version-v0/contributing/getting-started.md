---
title: Getting Started
sidebar_position: 2
---

# Getting Started

This will have everything needed in order to get started with development for Kumiko.

## Requirements

To get started, you'll need these things installed: 

- [Git](https://git-scm.com/)
- [Python 3.10](https://www.python.org/)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/) (If working on Windows)
- Discord Account + Discord App

## Installing Dependencies

Getting the environment set up for the bot is a kinda complex process. If you want to get set up, here are the instructions to do so:

## Windows 

1. Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/). Pick your distro of choice. In this example, we will use Ubuntu 22.04
2. Install the suggested build dependencies for pyenv. 

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

3. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

4. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```


6. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```

## Linux
    
### Ubuntu

1. Install the suggested build dependencies for pyenv. 

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

5. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```

### OpenSUSE

1. Install the suggested build dependencies for pyenv.

    ```sh
    sudo zypper install gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel \
    readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel python310-devel
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

5. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```

### Fedora/CentOS

1. Install the suggested build dependencies for pyenv

    Fedora 22 and above:

    ```sh
    sudo dnf install make gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl
    ```

    CentOS or Fedora 22 and below:

    ```sh
    sudo yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

5. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```
### Arch/Manjaro

1. Install the suggested build dependencies for pyenv

    ```sh
    sudo pacman -S --needed base-devel openssl zlib xz tk python libffi
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

5. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```

## MacOS

1. Install Xcode Command Line Tools (`xcode-select --install`) and [Homebrew](https://brew.sh/)

2. Install the suggested build dependencies for pyenv

    ```sh
    brew install openssl readline sqlite3 xz zlib tcl-tk git curl make
    ```
3. Install Pyenv via Homebrew

    ```sh
    brew update
    brew install pyenv
    ```

4. Install Python

    ```sh
    pyenv update
    pyenv install 3.10.5
    pyenv global 3.10.5
    pyenv rehash
    ```

5. Follow the rest of the steps, starting on [Set Up Your shell Environment For Pyenv](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

6. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```
## Getting Started

### Getting the Discord Bot

First things first, you'll more than likely need a dev bot to run Kumiko. Luckily you'll find the steps below to help you on that

![images](/getting-started-assets/create-app.png)

1. Create the app that will be needed for the bot. Once done, you should see the page as shown above

![yesyes](/getting-started-assets/create-bot.png)

2. Now head done to the bot section, and click on the button that says "Add Bot". 

![ewom](/getting-started-assets/allow-bot.png)

3. You'll see a pop-up that asks you if you want to create the bot. 

![intents](/getting-started-assets/allow-intents.png)

4. Make sure to have all 3 of the buttons enabled. Kumiko will need all 3 of them to work.

![whyyy](/getting-started-assets/reset-token.png)

5. You'll see a page just like the one above. We'll need access the the token for the bot, and the only way to do it is to reset the token.

![confirm](/getting-started-assets/allow-reset-token.png)

6. Allow for the token to be reset. Note that if your account is hooked up with 2FA, it will ask you to enter your 2FA code. Go to your authenticator app and enter the code from the app.

![copytoken](/getting-started-assets/copy-token.png)

7. Now click on the copy button and copy the token

8. Head back into the root directory of the repo, and run this command: 

   ```sh
   make init BOT_TOKEN="token"
   ```

   This will create a `.env` file and add the token into it.

### Developing Kumiko

Once you have the discord bot up, there's a few things that needs to be done before development can begin. 

1. Follow the steps in [Installing Dependencies](#installing-dependencies) to get all of the dependencies installed.
2. Now create a shell that pipenv needs. Run the following command:

    ```sh
    pipenv shell
    ```

3. To run Kumiko, run the following command:

   ```sh
   make
   ```

   You could also run this command, which does the same thing:

   ```sh
   make run
   ```

   To exit out of Kumiko, hit Ctrl + C to kill the process. 

### Things to keep in mind

Make sure to always keep this in mind: Always add exception handling for Kumiko. And make sure it is done correctly. A poor example would be this:

   ```py
   try:
      async with aiohttp.ClientSession(json_serialize=ujson.dumps) as session:
         async with session.get(url) as resp:
            data = await resp.content.read()
            dataMain = parser.parse(data, recursive=True)
            print(dataMain["data"]["children"][0]["data"]["title"]) # Doesn't exist within JSON data
   except Exception as e:
      await ctx.respond(e)
   ```
   But rather actually specify the exception that you want to handle.

   ```py
   try:
      async with aiohttp.ClientSession(json_serialize=ujson.dumps) as session:
         async with session.get(url) as resp:
            data = await resp.content.read()
            dataMain = parser.parse(data, recursive=True)
            print(dataMain["data"]["children"][0]["data"]["title"]) # Doesn't exist within JSON data
   except ValueError:
      await ctx.respond("That item doesn't exist! Please try again")
   ```

## Database Setup

Kumiko requires PostgreSQL and MongoDB to get started. 

### PostgreSQL Setup

Kumiko's Economy requires PostgreSQL first. The easiest way to do so is to use PostgreSQL on Docker. You can find instructions on how to do this [here](https://hub.docker.com/_/postgres). In short, when you are going to run it, input these 2 env variables: `POSTGRES_PASSWORD` and `POSTGRES_USER`. `POSTGRES_USER` should be named `Kumiko` ideally, but you could change it. Make sure to keep note of it some secure. When making the password, please don't include anything with `@` in it. Asyncpg will complain about it and not connect to the database. Now use psql and login into the Postgres server with the password and username that you just created. Once you are in, create a database called kumiko_eco_users. Next, cd into the bot folder, and create an `.env` file. This is where you are going to store all of the credentials. The file should look like this:

```
# Bot/.env
TOKEN = "Discord Bot Tokens"
Postgres_Password = "Password for Postgres"
Postgres_IP = 127.0.0.1 # if localhost doesn't work, use your ipv4 address instead
Postgres_User = "Kumiko"
Postgres_Database = "database"
```

Now run `postgres-init.py` located within the scripts folder. This will create the table within the database that will store all of the data. 

### MongoDB Setup

Kumiko's Economy (specifically the marketplace) relies on MongoDB to deal with the database storage. And the easiest way to deal with that is to use MongoDB on Docker. You'll need to put in 2 env variables, which are `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD`. `MONGO_INITDB_ROOT_USERNAME` should be named `Kumiko`, and `MONGO_INITDB_ROOT_PASSWORD` is the password you choose to set. Make sure to keep note of it some secure. When making the password, please don't include anything with `@` in it. Beanie may also start complaining about special characters and then refuses to connect because of it (also blame MongoDB for that as well). Assuming you have the `Bot/.env` file made, insert these env variables into the file:

```
# Bot/.env
MongoDB_Password_Dev = "MongoDB Password"
MongoDB_Username_Dev = "Kumiko"
MongoDB_Server_IP_Dev = "127.0.0.1" # also could use ipv4 address if localhost doesn't work
```

Now connect to the MongoDB server with MongoDBCompass or Mongosh and create a database called `kumiko_marketplace`. There is no need to create any collections, since beanie will create them when needed. 

### RabbitMQ Setup

Kumiko's Economy (specifically the auction house) rely on routed pub/sub connections. RabbitMQ is used instead of Redis due to stability with each queue message and being able to route each queue message to the correct auction house item. The best way to deal with this is to fire up a RabbitMQ Docker container. You'll need to insert in 2 env variables, which are `RABBITMQ_DEFAULT_USER` and `RABBITMQ_DEFAULT_PASS`. The username should be named `Kumiko` while the password should be a password of secure length. Once again, this assumes that you have the `Bot/.env` file already set. Now just insert these env variables into the file:

```
# Bot/.env
RabbitMQ_Password_Dev = "password"
RabbitMQ_Username_Dev = "Kumiko"
RabbitMQ_Server_IP_Dev = "your ipv4 address"
RabbitMQ_Port_Dev = "5672"
```
By default, this will use the root vhost. But on production, you might want to set the vhost to be something different. Once you start Kumiko, the logger will output a message saying that the RabbitMQ consumer is started.

### Redis Setup

Kumiko's Auction House relies on Redis to temporarily store the uuid, and the bid price of each item. As per usual, Docker is your best friend here. For production, ideally you want to set the passwords, but since this is for development, there are no users or passwords to set. You'll want to add these to your `Bot/.env` file:

```
# Bot/.env
Redis_Server_IP_Dev = your ipv4 address
Redis_Port_Dev = 6379
```

Once it is set, now you can use Redis as a cache. Kumiko will write the data from Redis to Postgres once every 5 or 30 minutes. This guarantees data validity and persistence while also going really fast in production thanks to Redis as a caching layer.
