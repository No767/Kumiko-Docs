---
title: Cloud Deployment
sidebar_position: 4
---

# Cloud Deployment

Deploying Kumiko on the cloud is a much more better option. You'll need to have each of the 3 services running on your cloud platform (for running PostgreSQL on Azure, you'll want to use Azure Databases for PostgreSQL for example). Once you have those set up, it's just a matter of running Kumiko as a Docker container. You'll need to specify to pull down the Docker image from Docker Hub, and then insert any environment variables as you would need just like the `.env-docker-example` shows. Once those are in, you are done.

:::danger Hosts such as PebbleHost, Railway, Heroku, Render, etc are not supported

The way Kumiko has to be deployed is via Docker, and most of those hosts listed above do not support it. If they do, often it is a free service with tons of limitations. For this reason, support for hosting Kumiko on free hosts are not supported.

:::