---
title: Deployment - Intro
sidebar_position: 2
---

# Deployment - Intro

Deploying Kumiko is a fairly easy and straight forwards process.

## What Does Deployment Mean

In this case, **deploying** a Discord bot means to have it running, online, and accessible for end users to use. For normal bots, this just means running the code needed. Often times, some folks run it in a `screen` or `tmux` session, and go from there. Or in other cases, they will just run the bot as a `systemd` service. Both ways are not the best way to handle things. The way Kumiko runs in production is via Docker.  

## Deployment Methods

You really have 3 choices for deploying Kumiko:

1. Manually deploying Kumiko, along with the rest of the services
2. Running Kumiko on a VPS, such as DigitalOcean, Vultr, or Linode (uses the same methods as method 1)
3. Running Kumiko on the cloud using a cloud service, such as AWS, Azure, or Google Cloud Platform (GCP)

This guide will cover 1 and 2, and will touch on 3 slightly. Methods 1 and 2 fall under [Manual Deployment](./manual-deployment.md). While 3 falls under [Cloud Deployment](./cloud-deployment.md).