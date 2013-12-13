/*!
* ecosystem.js by Christopher Guindon - @chrisguindon
* Copyright 2013 Eclipse Foundation
* http://www.eclipse.org/org/documents/epl-v10.php
*/
(function($) {
  $(function() {
      
      // Vertical alignement of members logo. 
      $(".members-info").each(function () {
        var id =  '#' + $(this).attr('id') + " ";
        var height = $(id  + ".mb-info").outerHeight(true);
        var logoh = $(id  + ".mb-logo").outerHeight(true);
        var logom = (height-logoh)/2;
        $(id  + ".mb-logo img").css({"padding-top": logom});
    }); 
  });
}(window.jQuery, window, document));
