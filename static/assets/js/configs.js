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

(function($, document) {
   eclipseFdnVideos.replace({
      selector: ".eclipsefdn-video",
      resolution: "16by9",
      cookie: {
        name: "eclipse_cookieconsent_status",
        value: "allow"
      }
    });
   $('.media-video').matchHeight();
})(jQuery, document);
