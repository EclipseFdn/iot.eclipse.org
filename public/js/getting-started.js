/*!
 * community.js by Christopher Guindon - @chrisguindon
 * Copyright 2013 Eclipse Foundation
 * http://www.eclipse.org/org/documents/epl-v10.php
 */
(function($, window, document) {
    $(function() {

        $(function() {
            $("a.embed").oembed(null, {
                includeHandle: false,
                afterEmbed: function() {

                    $('.presentations div').filter(function() {
                        return $(this).css('margin-bottom') == '5px';
                    }).remove();

                    $('.presentations br').remove();

                    $('.presentations iframe').attr("align", "center");
                    $('.presentations iframe').css({
                        display: "block",
                        margin: "0 auto"
                    });


                },
            });
        });

    });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
