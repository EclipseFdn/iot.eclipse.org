---
title: "How to be Listed as an Adopter"
description: ""
header_wrapper_class: "header-alternate-bg-img-1"
layout: "single"
---

Does your organization use Eclipse IoT projects? Organizations — whether they are members of the Eclipse Foundation or not — can be listed as Eclipse IoT technology adopters.

Adopters are organizations that voluntarily show their support for the Eclipse IoT projects they have adopted (i.e. shipping commercial products based on the projects and/or using the projects for non-commercial or internal reasons). On this website, adopters are displayed under the [/adopters](/adopters/) virtual path.

You can add your organization logo to our list of adopters by submitting a pull request or by creating an [issue](https://github.com/EclipseFdn/eclipsefdn-project-adopters/issues/new?template=adopter_request.md). You can attach files to an issue by dragging and dropping them in the text editor of the form.

If you plan on submitting a pull request, you will need to make the following changes to the eclipsefdn-project-adopters' codebase: 

1. Add a colored and a white organization logo to static/assets/images/adoptors. We expect that all submitted logos to be transparent svg.
2. Update the adopter data file: [config/adopters.json](https://github.com/EclipseFdn/eclipsefdn-project-adopters/blob/master/config/adopters.json) If your organization wishes to express support for multiple projects, another project can be added to the `projects` list within the organizations node. The values in this list should be the ID of the project.