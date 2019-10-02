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

rm -f static/assets/js/eclipsefdn.adopters.js
touch static/assets/js/eclipsefdn.adopters.js
(echo -n "var json_adopters = '"; ./node_modules/yamljs/bin/yaml2json data/adopters.yml | tr -d '\n'; echo "';"; cat ./node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.adopters.js ) \
  > static/assets/js/eclipsefdn.adopters.js