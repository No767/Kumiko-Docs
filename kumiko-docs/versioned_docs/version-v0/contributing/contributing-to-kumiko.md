---
title: Contributing to Kumiko
sidebar_position: 3
---

# Contributing to Kumiko

We are glad that you're willing to contribute to this project. We are usually very lenient and relaxed with the submissions of PRs, and Issues reports. But there are some stuff that you need to know before contributing.

## Getting Started

The info for how to get started can be found [here](./getting-started.md)

## Issue and Feature Requests Reports

If there is an issue or a feature you want to be added, use the built-in GitHub issue tracker. Though a system like Jira could be used, it would be more efficient to just use the issue tracker that GitHub provides. 

- If submitting a issue report, follow the template. Duplicates will not receive support
- If submitting a feature request, follow the template as well. As with issue reports, duplicate requests will not receive support

## Deploying a Production Release

All production releases of Kumiko are located in the `master` branch. To deploy a full production release, there has to be a few things:

- A full audit of the release needs to be done (every command, and tons of edge cases will be needed to be tested)
- Changelogs need to be written 
- Tests by the owner (Noelle should be the one who does this) to make sure it meets quality control and standards

Once everything is approved, then only a pr to the master branch is merged

# Tags
In order to automate the release system, you have to make sure that in order to use it, the git commit message must be done correctly. Only use this if there is a new update that is ready to be released. Kumiko uses [SemVer](https://semver.org/) as the standard. From there, the release workflow will handle and take the changelog and use it as the release body, and tag it. Once tagged, the docker build workflows will start up, which will build a production release of Kumiko. Here's a table that should help with explaining this:

| Type of Release, Update, or Patch | Example Commit Message | Version Bump |
|              :--:                 | :--:    |    :--:                 |   
| Major Release                     | `Release: v3` | `v2` --> `v3`                |
| Minor Release                     | `Update: v2.5`| `v2.4.0` --> `v2.5.0`               |
| Patch Release                     | `Fix: v2.5.1` |  `v2.5.0` --> `v2.5.1`  |


## Git Commit StyleGuides

- If updating any other files that aren't project files or not important (stuff like README.md, contributing.md, etc), add the [skip ci] label in the front
- With each new commit, the message should be more or less describing the changes. Please don't write useless commit messages...