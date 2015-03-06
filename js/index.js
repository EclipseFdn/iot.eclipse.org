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

    // var FEED_URL = "https://pipes.yahoo.com/pipes/pipe.run?_id=aedbf3bc8ceeda32ebc49a51a40be9d5&_render=rss";
    // $.ajax({
    //     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
    //     dataType: 'json',
    //     success: function(data) {
    //         if (data.responseData.feed && data.responseData.feed.entries) {
    //             $.each(data.responseData.feed.entries, function(i, e) {
    //                 console.log("------------------------");
    //                 console.log(e);
    //                 console.log("title      : " + e.title);
    //                 console.log("author     : " + e.author);
    //                 console.log("description: " + e.description);
    //             });
    //         }
    //     }
    // });



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
