var json_adopters = '{"adopters":{"projects":[{"name":"Eclipse Ditto","id":"iot.ditto","adopters":[{"name":"Bosch Software Innovations","homepage_url":"https://www.bosch-iot-suite.com/service/things/","logo":"logo-bosch.svg","logo_white":"logo-bosch-white.svg"},{"name":"Aloxy","homepage_url":"http://www.aloxy.io/","logo":"logo-aloxy.svg","logo_white":"logo-aloxy-white.svg"},{"name":"othermo","homepage_url":"https://othermo.de","logo":"logo-othermo.svg","logo_white":"logo-othermo-white.svg"}]},{"name":"Eclipse Vorto","id":"iot.vorto","adopters":[{"name":"Aloxy","homepage_url":"http://www.aloxy.io/","logo":"logo-aloxy.svg","logo_white":"logo-aloxy-white.svg"},{"name":"othermo","homepage_url":"https://othermo.de","logo":"logo-othermo.svg","logo_white":"logo-othermo-white.svg"},{"name":"Bosch Software Innovations","homepage_url":"https://www.bosch-iot-suite.com/service/things/","logo":"logo-bosch.svg","logo_white":"logo-bosch-white.svg"}]},{"name":"Eclipse Hono","id":"iot.hono","adopters":[{"name":"Red Hat","homepage_url":"https://www.redhat.com/en/technologies/jboss-middleware/amq","logo":"Logo-RedHat-A-Color-RGB.svg","logo_white":"Logo-RedHat-A-Reverse-RGB.svg"},{"name":"Aloxy","homepage_url":"http://www.aloxy.io/","logo":"logo-aloxy.svg","logo_white":"logo-aloxy-white.svg"},{"name":"Bosch Software Innovations","homepage_url":"https://www.bosch-iot-suite.com/service/things/","logo":"logo-bosch.svg","logo_white":"logo-bosch-white.svg"}]},{"name":"Eclipse Paho","id":"iot.paho","adopters":[{"name":"Microsoft","homepage_url":"https://microsoft.com/iot","logo":"logo-microsoft.svg","logo_white":"logo-microsoft-white.svg"}]},{"name":"Eclipse Cyclone DDS","id":"iot.cyclonedds","adopters":[{"name":"Open Robotics","homepage_url":"https://www.openrobotics.org/","logo":"logo-open-robotics.svg","logo_white":"logo-open-robotics-white.svg"}]},{"name":"Eclipse hawkBit","id":"iot.hawkbit","adopters":[{"name":"Bosch Software Innovations","homepage_url":"https://www.bosch-iot-suite.com/service/things/","logo":"logo-bosch.svg","logo_white":"logo-bosch-white.svg"}]}]}}';
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
            img.setAttribute('alt', name);
            img.setAttribute('src', "https://iot.eclipse.org/assets/images/adopters/" + logo);

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