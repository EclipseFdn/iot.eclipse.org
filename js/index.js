/**
 * Onload handler
 */
$(document).ready(function() {
    // Enable dropdowns
    $('.dropdown-toggle').dropdown();

    $('a[rel=popover]').popover({
        html: true,
        placement: 'bottom',
        trigger: 'hover'
    });

    $('.img-microej').popover({
        html: true,
        placement: 'bottom',
        trigger: 'hover',
        template: '<div class="popover" role="tooltip" style="width: 500px;"><div class="arrow"></div><div class="popover-content"><div class="data-content"></div></div></div>',
        content: function() {
            return '<img src="/open-iot-challenge/images/microej_IoT_Eclipse_Contest2015.jpg" />';
        }

    });

});

$(window).bind("load", function() {
    $('.home-box').addClass('loaded');
});


($("a[data-toggle=modal]")).click(function() {
    var target, url;
    target = ($(this)).attr('data-target');
    url = ($(this)).attr('href');
    return ($(target)).load(url);
});
