/*!
 * Copyright (c) 2019 Eclipse Foundation, Inc.
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

import 'eclipsefdn-solstice-assets'
import './src/home-members'
import './src/projects'
import './src/resources'

(function($, document) {
   $('.media-video').matchHeight();
   $('.matchheight-item').matchHeight();

   var random_testimonial_item = Math.floor(Math.random() * $('.testimonial-item').length);
   $('.testimonial-item').hide().eq(random_testimonial_item).show();

})(jQuery, document);

