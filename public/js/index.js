(function($, window, document) {
        $(function() {
                $('.logos .row').shuffle();

                $('.logos .row').children().filter(function(index) {
                    return index < 9;
                }).css( "display", "inline-block");
        });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
