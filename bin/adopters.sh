#!/bin/bash
# ===========================================================================
# Copyright (c) 2019 Eclipse Foundation and others.
# 
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
# 
# Contributors:
# Christopher Guindon (Eclipse Foundation)
# 
# SPDX-License-Identifier: EPL-2.0
# ===========================================================================

rm -f static/assets/js/eclipsefdn.adopters.js && touch static/assets/js/eclipsefdn.adopters.js
rm -f static/assets/js/eclipsefdn.adopters.json && touch static/assets/js/eclipsefdn.adopters.json
./node_modules/js-yaml/bin/js-yaml.js -c data/adopters.yml | ./node_modules/json-minify/index.js > static/assets/js/eclipsefdn.adopters.json 
(echo -n "var json_adopters = '"; cat ./static/assets/js/eclipsefdn.adopters.json | tr -d '\n'; echo "';"; cat ./node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.adopters.js ) \
  > static/assets/js/eclipsefdn.adopters.js