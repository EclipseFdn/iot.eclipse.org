
//IIFE - Immediately Invoked Function Expression
(function($, window, document) {
  $(function() {
      
    $(window).resize(function(){resize();});
    
    $(document).on('click', '.itembox, .news-list li', function(){ 
      var link = $(this).find('.readmore').attr('href');
	  $(location).attr('href', link);
	  return false
    });
    
    $.ajax({
      type: "GET",
      url: "//projects.eclipse.org/jsonp/technology/Machine-to-Machine",
      dataType: "jsonp",
      cache: false,
      success: function(data) {
        var output = "";
        var i = 0;
          
        $("#update-project").removeClass("loading");
          
        $.each(data, function(key, value ) {
          if ((i % 4) === 0) {
            if (i !== 0) {
              output += '</div>';
            }
            output += '<div class="row-fluid">';
          }
           
          // Clean up and remove HTML.
          var t = stringJanitor(value.name);
          var id = stringJanitor(value.id);
          var d = stringJanitor(value.description, {"cut": true, "ellipsis": "..."});
          var l = value.website;
             
          output += "<div class=\"span3 itembox\">" +
            "<h3>" + t + "</h3>" +
            "<p>" + d + "</p>";
          if (!validateUrl(l)) {
            l = "http://projects.eclipse.org/projects/" + id;
          }
          output += "<a href=\"" + l + "\" class=\"readmore\">Read more <i class=\"icon-chevron-right\"></i></a>";
          output += "</div>";
          i++;
        });
        // Insert html and resize the boxes.
        $("#update-project").append('</div>' + output);
        resize();
      },
    });

  });
  // Validate URL.
  var validateUrl = function validateUrl(str) {
    return (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i).test(str);
  };
  
  // Set same height to all .itembox in a row.
  var resize = function () {
    $('.itembox').css({"height": "auto"});
    $('.row-fluid').each(function() {
      var highestBox = 0;
      $('.itembox', this).each(function() {
        if ($(this).height() > highestBox) {
          highestBox = $(this).outerHeight();
        }
      });
      $('.itembox', this).height(highestBox);
    });
  };
  
  // Remove html, add ellipsis and cut strings.
  var stringJanitor = function(str, options) {
    var settings = $.extend({
      // These are the defaults.
      start: 0,
      end: 200,
      html: false,
      ellipsis: "",
      cut: false,
    }, options);
    var text = "";
    // Remove HTML.
    if (!settings.html) {
      text = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/g, "");
    }
      
    // Shorten the string.
    if (settings.cut) {
      var cutat = text.lastIndexOf(' ', settings.end);
      if (cutat!==-1) {
        text = text.substring(settings.start, cutat) + settings.ellipsis;
      }
    }
    return text;
  };
  
}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
