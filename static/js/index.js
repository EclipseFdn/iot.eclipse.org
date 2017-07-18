(function(d){d.fn.shuffle2=function(c){c=[];return this.each(function(){c.push(d(this).clone(true))}).each(function(a,b){d(b).replaceWith(c[a=Math.floor(Math.random()*c.length)]);c.splice(a,1)})};d.shuffle=function(a){return d(a).shuffle()}})(jQuery);

(function($, window, document) {
        $(function() {

                $("#link-more-members").html( "and " + ($('.logos .row').children().length - 1 - 8) + " others…") ;

                $('.logos .row .regular-member').shuffle2();
//				$('.logos .row').children('.regular-member').shuffle2();

                $('.logos .row').children('.regular-member').filter(function(index) {
                    return index < 5;
                }).css( "display", "inline-block");

//                $('.logos .row .regular-member').css( "display", "inline-block");

                $('.logos .row .sc-member').
                	css( "display", "inline-block");

                

        });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
