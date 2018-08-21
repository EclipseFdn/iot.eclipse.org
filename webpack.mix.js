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
    'static/assets/css/icomoon.css'
], 'static/assets/css/bootstrap.css');
mix.copy('./node_modules/jquery-oembed-all/jquery.oembed.css', 'static/assets/css/jquery.oembed.css');
mix.copy('./node_modules/font-awesome/css/font-awesome.min.css', 'static/assets/css/font-awesome.css');

// JavaScript
mix.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/cookieconsent/src/cookieconsent.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js'
], './static/assets/js/main.js');
mix.copy('./node_modules/bootstrap-sass/assets/javascripts/*.js', 'static/js/bootstrap');
mix.copy('./node_modules/jquery-oembed-all/jquery.oembed.js', 'static/js');

// Fonts
mix.copy('./node_modules/font-awesome/fonts', 'static/assets/fonts');
mix.copy('./node_modules/bootstrap/fonts', 'static/assets/fonts/bootstrap');