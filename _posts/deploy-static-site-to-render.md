---
author:
  - Matt Davis
created: 2023-10-30T15:17:01-07:00
modified: 2023-10-31T13:52:44-07:00
tags:
  - render
  - nextjs
  - how-to
title: Deploy a Static Site to Render in Five Minutes
---

# Deploy a Static Site to Render in Five Minutes

Creating your site was hard enough. Get it deployed the easy way, with Render.

## tl;dr

Don't have time to read the whole post? Here's the good stuff.

1. Click the `New` button and select `Static Site` from the dropdown
2. Connect your GitHub account and click `Connect` next to the repo you want to deploy from
3. Click `Create Static Site`
4. Party

## Before You Start

To follow along, you'll need a project ready to deploy. If you don't have one yet, get coding and come back when you're ready! Or if you'd rather focus just on the deployment, you can fork this [sample project](https://github.com/mattdaviscodes/hello-render).

Examples assume a static site generated with Next.js 13, but a few settings tweaks should be enough to get your site up and running regardless.

You'll also need a Render account, so [create one](https://dashboard.render.com/register?next=%2F) if you haven't yet.

## Step One: Create a New Static Site

First, click the `New` button at the top right, and select `Static Site` from the dropdown. If this is the first project you're deploying on Render, you'll also see a helpful shortcut on the main dashboard. Either should work fine.

![Create a new static site via the dropdown](/new-static-site-dropdown.png)

![Create a new static site via the dashboard shortcut](/new-static-site-dashboard.png)

## Step Two: Connect a Repository

Deploys come from public repositories on either GitHub or GitLab. Choose which service you'd like to use, and click the appropriate `Connect` button. For this guide, we're connecting a GitHub account.

![Connect your GitHub account](/connect-github.png)

You'll be taken to GitHub.com to authorize Render to access your account.

![Authorize Render on GitHub](/gh-auth-render.png)

After authorizing, choose to either grant access to all repos or only a selection. We recommend granting full access for ease-of-use.

![Allow access to all repositories](/gh-install-render-1.png)

![Install Render on GitHub](/gh-install-render-2.png)

After following the GitHub flow, you'll be brought back to Render. You should see any repositories you selected in the `Connect a repository` dialog. Click the `Connect` button next to the one you want to deploy.

![Connect your GitHub repository](/connect-repo.png)

## Step Three: Configure Your Project

Next up, you'll need to configure your project so Render knows where to look and what commands to run. Render's defaults should get you nearly all of the way there, with one exception. You'll need to specify the `Publish Directory`, which is the directory containing the statically-generated assets for your site. This directory is called `out` by default, but if you [configured](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration) `next.config.js` to use a different directory, make sure to add it here.

![Configure the project's publish directory](/configure-project-1.png)

There are plenty more controls here to fine-tune your project, but we'll leave those for another post. Click `Create Static Site`.

![Configure your project](/configure-project-2.png)

## Step Four: Celebrate!

After a short build, your site should be live! You can follow the URL at the top of the screen to see your deployed project. It's publicly available, so check it out on your phone, send it to your mom, or [tweet it at Heroku](https://twitter.com/heroku).

![Site is live](/site-is-live-1.png)

![Live site deployed to Render](/site-is-live-2.png)

## Next Steps

This is only the beginning of what Render's capable of. Here are a few ideas of things to try next.

- Instead of using local markdown files to power this project's blog, why not [[deploy-headless-cms-to-render.md|deploy a headless CMS]] and put your content there?
- Create a [[host-forum-on-render.md|forum for Render fans]] using [PostgreSQL](https://render.com/docs/databases) and [web services](https://render.com/docs/web-services) hosted on Render.
- Check out this [[render-self-hosted-apps.md|huge list of open source apps]] you can host on Render.
