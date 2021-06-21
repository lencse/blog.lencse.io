---
layout: post
title: Yay! I launched an app
date: 2020-09-06 01:40
category: Projects
author: Lencse
tags:
    - Netlify
    - Jekyll
    - Typescript
    - Hiking
    - Sideproject
    - Tailwind CSS
    - Blue Trail Parts
summary: |
    Overengineering for the win.

---

Recently I made a huge leap forward: published one of my side projects: [The Blue Trail Parts](https://kektura-szakaszok.lencse.io/). The main purpose of the app is generating GPS data of hiking paths. Well, it's not 100% finished, but I had the confidence to post a link to a related Facebook group. In this post I'll cover:

- What this app does
- Some technical details
- A description of the build process (which I'm pretty sure looks like a bit overengineered at the first glance)
- Some possible future improvements
- What I learned from this

## The problem this app solves

To understand why I grabbed a keyboard and started the development, we need to know about the domain.

### The National Blue Trail

The National Blue Trail (in Hungarian: *Országos Kéktúra*) is an 1160 km long hiking trail across Hungary. There are checkpoints with stamps on the way and if you gather all the ~230 stamps in your booklet, you'll receive a certificate and an enamel pin. I've been walking the Blue Trail for two years and completed half of it.

![Map of the Blue Trail with the drawing of the pin](/content-assets/img/yay-i-launched-an-app/kektura-map.jpg)


It's a beautiful adventure and I definitely recommend trying it out to anyone who has the chance to hike a few days in Hungary.


![Me with my friend's dog on the Blue Train in Vértes Mountain](/content-assets/img/yay-i-launched-an-app/lencse-on-the-blue-trail.jpg)


### How I generated maps before

I'm using [maps.me](https://maps.me/) on my iPhone to navigate during hiking. It can only parse `.kml` files when importing trail paths, so everytime I went for a hike, I had to do these steps the day before:


1. Open [tervezo.heyjoe.hu](https://tervezo.heyjoe.hu)  or [turistautak.openstreetmap.hu](https://turistautak.openstreetmap.hu) on a desktop computer. These are very powerful, clever tools with a lot of setup options, draggable track anchors and dozens of map layers.
2. Clicked on the map to plan the trails.
3. Exported the track in `.gpx`
4. Open [gpx2kml.com](https://gpx2kml.com) and export it to `.kml`
5. Send the file to my iPhone.
6. And finally: import the paths to *maps.me*

Idea: a simple web app with 2 dropdowns and a download button

Result:

![](/content-assets/img/yay-i-launched-an-app/kektura-szakaszok-main-screenshot.png)

![](/content-assets/img/yay-i-launched-an-app/kektura-szakaszok-map-screenshot.png)

![](/content-assets/img/yay-i-launched-an-app/maps.me-1.png)

### The map

Analytics.

## The technologies

### Jekyll?

### Tailwind.css

### Leaflet

### Geolib

### Netlify functions



## The build process

### Daily rebuild

Zapier

## Possible future improvements

- GPX download
- DDK and Alföldi kéktúra