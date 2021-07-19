/*!
 * Copyright (c) 2018, 2020 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
 */

let mix = require('laravel-mix');
require('laravel-mix-transpile-node-modules')
mix.transpileNodeModules(['eclipsefdn-solstice-assets']);

mix.setPublicPath('static/assets');
mix.setResourceRoot('../');

// CSS
mix.less('./less/styles.less', 'static/assets/css/styles.min.css');

mix.webpackConfig({
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
});

mix.js('js/main.js', 'assets/js/scripts.min.js');

// Update existing adopter widget with new version
mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/api/eclipsefdn.adopters.js'],
  './static/assets/js/eclipsefdn.adopters.js'
);
