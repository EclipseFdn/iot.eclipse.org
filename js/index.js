/**
 * Onload handler
 */
$(document).ready(function() {
    // Enable dropdowns
    $('.dropdown-toggle').dropdown();

    $('#iot-definition').popover({
        placement: 'bottom',
        trigger: 'hover'
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