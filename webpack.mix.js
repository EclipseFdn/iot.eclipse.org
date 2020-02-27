/*!
 * Copyright (c) 2018 Eclipse Foundation, Inc.
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
mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});
mix.setPublicPath('static/assets');
mix.setResourceRoot('../');

// CSS
mix.less('./less/styles.less', 'static/assets/css/styles.css');

// JavaScript
mix.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/cookieconsent/src/cookieconsent.js',
    './node_modules/prismjs/prism.js',
    './node_modules/prismjs/components/prism-css.min.js',
    './node_modules/prismjs/components/prism-clike.min.js',
    './node_modules/prismjs/components/prism-javascript.min.js',
    './node_modules/prismjs/components/prism-java.min.js',
    './node_modules/prismjs/components/prism-bash.min.js',
    './node_modules/prismjs/plugins/prism-line-highlight.min.js',
    './node_modules/prismjs/plugins/prism-line-numbers.min.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js',
    './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.videos.js',
    './node_modules/feather-icons/dist/feather.min.js',
    './static/assets/js/configs.js'
], './static/assets/js/main.js');
