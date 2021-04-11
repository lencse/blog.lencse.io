---
layout: post
title: Hiking trails — progress
date: 2021-04-11 17:3ö
categories: Projects
author: Lencse
tags:
    - Hiking
    - Pet project
    - Hiking trails app
    - React
    - Next.js
summary: >-
    What I achieved in the last few weeks with my pet project
---

During the winter lockdown I had no time and energy to work on my [pet project](https://blog.lencse.io/2020/11/24/hiking-trails-a-sideproject/), but successfully put myself back on track in the last few weeks.

## What I achieved

Built [and deployed](https://turaosvenyek.hu/) a demo version on a new codebase. It's only an experiment with the development methods and the functionality — The final product will look completely diferrent.

* The code is now built with [Next.js](https://nextjs.org/) and React components on the frontend
    * I succesfully found a workaround to render components only on client side in Next.js — the map couldn' be displayed without this.
* The map and the hiking tracks are now updating live when the user changes the settings.
* Multiple hiking tracks can be added.
* Started to refactor the code into small, [unit-tested](https://coveralls.io/github/lencse/hikingtrails) components.

## Next steps

Tomorrow will be the first meeting with my team where we'll decide about the functionality and discuss a lot of technical questions. After the timeline is set up and we know what to include in the MVP, I'll continue the development.
