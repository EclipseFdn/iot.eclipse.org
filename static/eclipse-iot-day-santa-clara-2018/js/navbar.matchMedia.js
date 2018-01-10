/***************************************************************************/
/* NAVIGATION VISIBLE ON SCROLL */
/***************************************************************************/
$(document).ready(function () {
    mainNav();
});

$(window).scroll(function () {
    mainNav();
});

if (matchMedia( "(min-width: 992px), (max-width: 768px)" ).matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) { 
            $('.sticky-navbar').stop().animate({"top": '0'});
        } else {
            $('.sticky-navbar').stop().animate({"top": '-120'});
        }
    }
}

if (matchMedia( "(min-width: 768px) and (max-width: 991px)" ).matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) {
            $('.sticky-navbar').stop().animate({"top": '0'});
        } else {
            $('.sticky-navbar').stop().animate({"top": '-120'});
        }
    }
}


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

if (matchMedia( "(max-width: 768px)" ).matches) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}