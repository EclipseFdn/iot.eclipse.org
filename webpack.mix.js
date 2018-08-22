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

mix = require('laravel-mix');
mix.options({
    processCssUrls: false,
});
mix.setPublicPath('static');

// CSS
mix.sass('static/assets/stylesheets/bootstrap.scss', 'static/assets/css/bootstrap.css');
mix.styles([
    'static/assets/css/bootstrap.css',
    'node_modules/cookieconsent/build/cookieconsent.min.css',
    'static/assets/css/icomoon.css',
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/plugins/prism-line-highlight.css',
    'node_modules/prismjs/plugins/prism-line-numbers.css'
], 'static/assets/css/bootstrap.css');
mix.copy('./node_modules/jquery-oembed-all/jquery.oembed.css', 'static/assets/css/jquery.oembed.css');
mix.copy('./node_modules/font-awesome/css/font-awesome.min.css', 'static/assets/css/font-awesome.css');

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
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js'
], './static/assets/js/main.js');
mix.copy('./node_modules/bootstrap-sass/assets/javascripts/*.js', 'static/js/bootstrap');
mix.copy('./node_modules/jquery-oembed-all/jquery.oembed.js', 'static/js');

// Fonts
mix.copy('./node_modules/font-awesome/fonts', 'static/assets/fonts');
mix.copy('./node_modules/bootstrap/fonts', 'static/assets/fonts/bootstrap');