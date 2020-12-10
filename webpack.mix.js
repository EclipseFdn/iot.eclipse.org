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
mix.setPublicPath('static/assets');
mix.setResourceRoot('../');

// CSS
mix.less('./less/styles.less', 'static/assets/css/styles.min.css');

// JavaScript
mix.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
    './node_modules/jquery-eclipsefdn-api/dist/jquery.eclipsefdn-api.min.js',
    './node_modules/feather-icons/dist/feather.min.js',
    './node_modules/cookieconsent/src/cookieconsent.js',
    './node_modules/owl.carousel/dist/owl.carousel.min.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js',
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.videos.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookies.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.eventsmodal.js',
    'js/main.js'
], './static/assets/js/scripts.min.js');

mix.scripts('js/home-members.js', './static/assets/js/home-members.min.js');
mix.scripts('js/projects.js', './static/assets/js/projects.min.js');

// Update existing adopter widget with new version
mix.scripts([
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.adopters.js'
], './static/assets/js/eclipsefdn.adopters.js');