/*!
 * Copyright (c) 2020 Eclipse Foundation, Inc.
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

(function ($, document) {
  if ($('.featured-members-list').length) {
    $.getJSON('/membership/members/index.json', function (data) {
      var items = [];
      var count = 1;
      $.each(shuffle(data['items']), function (key, val) {
        if (count <= 3) {
          items.push(
            "<li><img src='" +
              val['logo'] +
              "' alt='Logo of " +
              val['title'] +
              "'></li>"
          );
        }
        count = count + 1;
      });
      $('<ul/>', {
        class: 'list-inline',
        html: items.join(''),
      }).appendTo('.featured-members-list');
    });

    function shuffle(arr) {
      for (
        var j, x, i = arr.length;
        i;
        j = parseInt(Math.random() * i),
          x = arr[--i],
          arr[i] = arr[j],
          arr[j] = x
      );
      return arr;
    }
  }
})(jQuery, document);
