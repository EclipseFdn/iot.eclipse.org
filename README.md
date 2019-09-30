# iot.eclipse.org

The [iot.eclipse.org](https://iot.eclipse.org) website is generated with [Hugo](https://gohugo.io/documentation/).

Eclipse IoT provides the technology needed to build IoT Devices, Gateways, and Cloud Platforms.

[![Build Status](https://travis-ci.org/EclipseFdn/iot.eclipse.org.svg?branch=master)](https://travis-ci.org/EclipseFdn/iot.eclipse.org)

## Getting started

Install dependencies, build website and start a simple webserver:

```bash
npm install
hugo server
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [EclipseFdn/iot.eclipse.org](https://github.com/EclipseFdn/iot.eclipse.org) repository
2. Clone repository: `git clone https://github.com/[your_github_username]/iot.eclipse.org.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -m 'Add some feature' -s`
5. Push feature branch: `git push origin my-new-feature`
6. Submit a pull request

## Project Adopter

Add your organization logo to our list of adopters by creating a pull-request or by creating an [issue](https://github.com/EclipseFdn/iot.eclipse.org/issues/new?template=adopter_request.md).

If you plan on submitting a pull-request, you will need to make the following changes:

1. Add a colored and a white organization logo to static/assets/images/adoptors. We expect that all submitted logos to be transparent svg.
2. Update adopter data file: [data/adopters.yml](https://github.com/EclipseFdn/iot.eclipse.org/blob/master/data/adopters.yml)

### Javascript Plugin 

Here are quick instructions on how to use the eclipsefdn-adopters.js on your Eclipse projet website:

#### Usage

Include plugin's JS to the <head> section of the page:

```html
<script src="//iot.eclipse.org/assets/js/eclipsefdn.adopters.js"></script>
```

Call the plugin:

```
<script>
  eclipseFdnAdopters.getList({
    project_id: "[project_id]"
  });
</script>
```

Create an HTML element containing the chosen selector:

```
<div class="eclipsefdn-adopters"></div>
```
* By default, the selector's value is 

#### Options

```
<script>
  eclipseFdnAdopters.getList({
    project_id: "[project_id]",
    selector: ".eclipsefdn-adopters",
    ul_classes: "list-inline",
    logo_white: false
  });
</script>
```

Attribute     | Type        | Default   | Description
---           | ---         | ---       | ---
`project_id`   | *String*   | ` `    | Select adopters from a specific project ID.
`selector`   | *String*   | `.eclipsefdn-adopters`    | Define the selector that the plugin will insert adopters into.
`ul_classes`  | *String*   | ` `   | Define classes that will be assigned to the ul element.
`logo_white`  | *Boolean*   | `false`   | Whether or not we use the white version of the logo.

### Declared Project Licenses

This program and the accompanying materials are made available under the terms
of the Eclipse Public License v. 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

SPDX-License-Identifier: EPL-2.0

## Bugs and feature requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/EclipseFdn/iot.eclipse.org/issues/new).

## Maintainers

**Christopher Guindon (Eclipse Foundation)**

- <https://twitter.com/chrisguindon>
- <https://github.com/chrisguindon>

**Eric Poirier (Eclipse Foundation)**

- <https://twitter.com/ericpoir>
- <https://github.com/ericpoirier>

## Trademarks
* Eclipse® is a Trademark of the Eclipse Foundation, Inc.
* Eclipse Foundation is a Trademark of the Eclipse Foundation, Inc.

## Copyright and license

Copyright 2018 the [Eclipse Foundation, Inc.](https://www.eclipse.org) and the [iot.eclipse.org o authors](https://github.com/EclipseFdn/iot.eclipse.org/graphs/contributors). Code released under the [Eclipse Public License Version 2.0 (EPL-2.0)](https://github.com/EclipseFdn/iot.eclipse.org/blob/src/LICENSE).
