/**
 * Onload handler
 */
$(document).ready(function() {
	// Enable dropdowns
	$('.dropdown-toggle').dropdown();

	// Start carousel
	$('.carousel').carousel({
		interval : 4000,
		pause : 'hover'
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
