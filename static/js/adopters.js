/*!
 * Copyright (c) 2019 Eclipse Foundation, Inc.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * Contributors:
 *   Eric Poirier <eric.poirier@eclipse-foundation.org>
 * 
 * SPDX-License-Identifier: EPL-2.0
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['efa'], factory(root));
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('efa'));
  }
  else {
    root.eclipseFdnAdopters = factory(root, root.efa);
  }
})(this, function(efa) {

  'use strict';

  // Define object
  var eclipseFdnAdopters = {};

  // Default settings
  var default_options = {
    project_id: "",
    selector: ".eclipsefdn-adopters",
    ul_classes: "",
    logo_white: false
  };

  /**
   * Replace the adopters container
   * @public
   * @param {Object} options Videos attributes
   */
  eclipseFdnAdopters.getList = function (options) {

   // Go through the parameters of Options if its defined and is an object
    if (typeof(options) !== 'undefined' && typeof(options) === 'object') {
      for (var optionName in default_options) {
        if (typeof(options[optionName]) === 'undefined' || (typeof(options[optionName]) !== 'string' && typeof(options[optionName]) !== 'boolean')) {
          continue;
        }
        default_options[optionName] = options[optionName];
      }
    }

    window.onload = function () {

      const ul = document.createElement('ul');

      var json_object = [];
      if (typeof json_adopters != 'undefined' && json_adopters !== "") {
        try {
          json_object = JSON.parse(json_adopters);
        } 
        catch (e) {
          console.log("Invalid JSON string for Adopters");
        }
      }

      if (typeof json_object.adopters !== 'undefined' && typeof json_object.adopters.projects !== 'undefined') {
        for (const project of json_object.adopters.projects) {
          if (default_options['project_id'] !== project['id']) {
            continue;
          }

          for (const adopter of project.adopters) {
            // Get the home page url of this adopter
            var url = "";
            if (typeof adopter['homepage_url'] != 'undefined') {
              url = adopter['homepage_url'];
            }

            // Get the name of this adopter
            var name = "";
            if (typeof adopter['name'] != 'undefined') {
              name = adopter['name'];
            }

            // Get the logo of this adopter
            var logo = "";
            if (typeof adopter['logo'] != 'undefined') {
              logo = adopter['logo'];
            }
            console.log(default_options['logo_white']);
            if (default_options['logo_white'] === true && typeof adopter['logo_white'] != 'undefined') {
              logo = adopter['logo_white'];
            }

            // Create the html elements
            let li = document.createElement('li');
            let a = document.createElement('a');
            let img = document.createElement('img');

            a.setAttribute('href', url);
            img.setAttribute('name', name);
            img.setAttribute('src', logo);

            a.appendChild(img);
            li.appendChild(a);
            ul.appendChild(li);
          }
        }
      }
 
      this.el = document.querySelectorAll(default_options['selector']);

      if(self.fetch) {
        for (var i = 0; i < this.el.length; i++) {
          if (default_options["ul_classes"] !== "") {
            ul.setAttribute('class', default_options["ul_classes"]);
          }
          this.el[i].append(ul);
        }
      }
    }
  }

  return eclipseFdnAdopters;
}); 