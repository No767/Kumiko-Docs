---
title: Installing Dev Requirements
sidebar_position: 2
---

# Installing Dev Requirements

## Requirements

In order to get started, you'll need some tools installed:

- [Git](https://git-scm.com)
- [Python 3](https://python.org) (Python 3.8, 3.9, 3.10, and 3.11 are officially supported)
- [Poetry](https://python-poetry.org/)
- [Docker](https://docker.com)
- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) (If working on windows)
- Discord App + Discord Account

:::info Use Linux when developing Kumiko

Kumiko is developed on Linux. This means that you must have a good understanding on how to use Linux in the terminal. It is recommended to use Ubuntu to start with, but more advanced users may feel more comfortable with other distros such as OpenSUSE Tumbleweed or Arch. If you are using Windows, you must use WSL2.

:::

:::caution OpenSSL 1.1 is needed

The reason why Kumiko has to be developed on Linux is due to the maintainers of `uvloop` refusing to add support for Windows. See https://github.com/MagicStack/uvloop/issues/14 for more info. OpenSSL 3 by default, is used now instead of OpenSSL 1.1. This breaks uvloop, so make sure to install the shared libraries (-dev or -devel) packages as well for them

:::

## Windows 

1. Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/) if haven't done so yet. (Note this has to be WSL2, not WSL1) Pick your distro of choice. In this example, we will use Ubuntu 22.04

2. Install the suggested build dependencies for pyenv. 

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

3. Install Pyenv. The script below downloads the automatic installer, which is recommended

    ```sh
    curl https://pyenv.run | bash
    ```

4. Follow the rest of the steps to finish installing Pyenv that are listed [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv). Once you get to the section where it says to install the Python build dependencies, don't worry. That was literally done in the first step.

5. Now with Pyenv, you can install Python 3.11

    ```sh
    pyenv install 3.11:latest
    pyenv rehash
    ```

6. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```


7. Run `make` to create the venv and install dependencies. This will do any needed setup as well.

    ```sh
    make dev-setup
    ```

## Linux
    
### Ubuntu

:::caution `uvloop` requires OpenSSL 1.1

`uvloop` requires the `libssl-dev` package. On Ubuntu 22.04, this will install OpenSSL 3.0 instead of OpenSSL 1.1. You'll need to use a backport version of Ubuntu's repos (focal) in order to get access to OpenSSL 1.1. Refer to https://stackoverflow.com/questions/72133316/ubuntu-22-04-libssl-so-1-1-cannot-open-shared-object-file-no-such-file-or-di for more info

:::

1. Install the suggested build dependencies for pyenv.

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

2. Install Pyenv. The script below downloads the automatic installer, which is recommended

    ```sh
    curl https://pyenv.run | bash
    ```

3. Follow the rest of the steps to finish installing Pyenv that are listed [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv). Once you get to the section where it says to install the Python build dependencies, don't worry. That was literally done in the first step.

4. Now with Pyenv, you can install Python 3.11

    ```sh
    pyenv install 3.11:latest
    pyenv rehash
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```


6. Run `make` to create the venv and install dependencies. This will do any needed setup as well.

    ```sh
    make dev-setup
    ```

### OpenSUSE

1. Install the suggested build dependencies for pyenv.

    ```sh
    sudo zypper install gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel openssl-1_1 ncurses-devel \
    readline-devel zlib-devel tk-devel \
    libffi-devel sqlite3-devel python311-devel git curl
    ```
2. Install Pyenv. The script below downloads the automatic installer, which is recommended

    ```sh
    curl https://pyenv.run | bash
    ```

3. Follow the rest of the steps to finish installing Pyenv that are listed [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv). Once you get to the section where it says to install the Python build dependencies, don't worry. That was literally done in the first step.

4. Now with Pyenv, you can install Python 3.11

    ```sh
    pyenv install 3.11:latest
    pyenv rehash
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```

6. Run `make` to create the venv and install dependencies. This will do any needed setup as well.

    ```sh
    make dev-setup
    ```

### Fedora/CentOS

1. Install the suggested build dependencies for pyenv

    Fedora 22 and above:

    ```sh
    sudo dnf install make gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl openssl11-devel
    ```

    CentOS or Fedora 22 and below:

    ```sh
    sudo yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl
    ```

2. Install Pyenv. The script below downloads the automatic installer, which is recommended

    ```sh
    curl https://pyenv.run | bash
    ```

3. Follow the rest of the steps to finish installing Pyenv that are listed [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv). Once you get to the section where it says to install the Python build dependencies, don't worry. That was literally done in the first step.

4. Now with Pyenv, you can install Python 3.11

    ```sh
    pyenv install 3.11:latest
    pyenv rehash
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```


6. Run `make` to create the venv and install dependencies. This will do any needed setup as well.

    ```sh
    make dev-setup
    ```

### Arch/Manjaro

1. Install the suggested build dependencies for pyenv

    ```sh
    sudo pacman -S --needed base-devel openssl openssl-1.1 zlib xz tk python libffi
    ```

2. Install Pyenv. The script below downloads the automatic installer, which is recommended

    ```sh
    curl https://pyenv.run | bash
    ```

3. Follow the rest of the steps to finish installing Pyenv that are listed [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv). Once you get to the section where it says to install the Python build dependencies, don't worry. That was literally done in the first step.

4. Now with Pyenv, you can install Python 3.11

    ```sh
    pyenv install 3.11:latest
    pyenv rehash
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```


6. Run `make` to create the venv and install dependencies. This will do any needed setup as well.

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
    pyenv install 3.11:latest
    pyenv rehash
    ```

5. Follow the rest of the steps, starting on [Set Up Your shell Environment For Pyenv](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```

6. Run Make to create the venv and install dependencies

    ```sh
    make dev-setup
    ```