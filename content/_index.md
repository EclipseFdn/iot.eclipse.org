---
title: "Eclipse IoT WG | Business-friendly open source for IoT"
seo_title: "Eclipse IoT"
headline: "Open Source for IoT"
tagline: "Eclipse IoT technologies power the world’s leading commercial IoT solutions."
description: "Eclipse IoT fosters global industrial collaboration on an end-to-end secure and flexible IoT architecture fully focused on open source software"
keywords: ["Eclipse IoT", "IoT solutions", "IoT architecture", "open source software"]
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
show_featured_story: false
date: 2020-01-07T9:00:00-00:00
layout: "single"
links: [[href: "/projects", text: "Projects"], [href: "https://accounts.eclipse.org/contact/membership/iot", text: "Join Us"]]
container: "container-fluid"
body_classes: "homepage"
header_wrapper_class: "header-frontpage"
seo_title_suffix: " - Leading open source community for IoT innovation"
---

{{< home-stats >}}

{{< grid/section-container class="featured-news">}}
  {{< grid/div class="row" isMarkdown="false" >}}
    {{< grid/div class="col-sm-14" isMarkdown="false" >}}
      {{< newsroom/news
          title="News"
          id="news-list-container"
          publishTarget="eclipse_iot"
          count="4"
          class="col-sm-24"
          templateId="custom-news-template" templatePath="/js/templates/news-home.mustache"
          includeList="true" >}}
    {{</ grid/div >}}

    {{< grid/div class="col-sm-8 col-sm-offset-2 featured-events text-center" isMarkdown="false" >}}
      {{< newsroom/events
          title="Upcoming Events"
          publishTarget="eclipse_iot"
          class="col-sm-24"
          containerClass="event-timeline"
          upcoming="1"
          templateId="custom-events-template" templatePath="/js/templates/event-list-format.mustache"
          count="4"  includeList="true" >}}
    {{</ grid/div >}}
   {{</ grid/div >}}
{{</ grid/section-container >}}


{{< testimonials class="featured-testimonials text-center row homepage-testimimonials">}}
{{< home-members >}}
{{< home-eclipse-foundation >}}