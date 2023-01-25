---
title: Installing Requirements
sidebar_position: 2
---

# Installing Requirements

## Requirements

In order to get started, you'll need some tools installed:

- [Git](https://git-scm.com)
- [Python 3](https://python.org) (Python 3.8, 3.9, 3.10, and 3.11 are officially supported)
- [Poetry](https://python-poetry.org/)
- [Pyenv](https://github.com/pyenv/pyenv) (Optional, Recommended)
- [Docker](https://docker.com)
- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) (If working on windows)
- [Docker](https://www.docker.com/) (Use [Docker Engine](https://docs.docker.com/engine/) on Linux, [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Windows/WSL2, MacOS and Linux (beta))
- Discord Account + Discord App


## Development Prerequisites

These are the prerequisites packages for development

### Debian/Ubuntu

```sh 
sudo apt-get install libffi-dev python3-dev libnacl-dev libopus-dev libopus0 libopusenc-dev build-essentials \
libssl-dev curl wget git
```

:::info `uvloop` requires openssl 1.1

`uvloop` depends on shared libs from OpenSSL 1.1. You'll need to use the backport versions for Ubuntu 22.04 and higher

:::
### RHEL/CentOS/Fedora 22 or below

```sh
sudo yum install make gcc libffi-devel python-devel \
openssl-devel opus-devel opus curl wget git
```
### Fedora 23+

```sh
sudo dnf install make automake gcc gcc-c++ kernel-devel \
libffi-devel python3-libnacl python3.10-devel openssl11-devel \
openssl-devel opus opus-devel curl wget git
```

### OpenSUSE

```sh
sudo zypper install gcc make automake openssl-devel openssl-1_1  \
libffi-devel python310-devel python310-libnacl opus libopus0 wget git curl
```

### Arch

```sh
sudo pacman -S --needed base-devel openssl openssl-1.1 libffi python python-libnacl opus
```

### MacOS/Homebrew

```sh
brew install openssl openssl@1.1 libffi git curl make opus
```

### Windows

**Unsupported**. For Windows development, use [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) and install the prerequisites based on your chosen distro.

## Development Setup

1. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Kumiko.git && cd Kumiko
    ```

    Or if you have the `gh` cli tool installed:

    ```sh
    gh repo clone [username]/Kumiko
    ```


2. Install all of the dependencies (including dev dependencies)

    ```sh
    poetry install --with=dev,test
    ```

:::info Developing on Windows?

To those developing on Windows, you'll need to use WSL2 for most of these. Once you have WSL2 installed and configured, install the dependencies for your distro, and then follow the steps here.

:::

3. Start the Docker Compose stack

    ```sh
    sudo docker compose -f docker-compose-dev.yml up -d
    ```