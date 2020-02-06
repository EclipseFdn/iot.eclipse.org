 $(function(){

    'use strict';


    /**********************************************************/
    /* NAVBAR BUTTON CHANGE                                   */
    /**********************************************************/
    var navbarCus = function(){

        if($(document).width() <= 768){
            $('.myNavbarUl').removeClass('animated'),
            $('#myNavbar').addClass('collapse'),
            $('#myNavbar').addClass('navbar-collapse')

        }else{
            $('.myNavbarUl').addClass('animated')
        }
    }


    $(window).resize(function(){

        /**********************************************************/
        /* NAVBAR BUTTON CHANGE                                   */
        /**********************************************************/
        navbarCus();
    });


    $(document).ready(function() {


        /*********************************************************/
        /*  STICKY NAVBAR                                        */
        /*********************************************************/
        //if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
           $(document).on('scroll', function() {
              var scrollPos = $(this).scrollTop();

              if( scrollPos > 100 ) {
                 $('.navbar-fixed-top').addClass('navbar-home');
              } 
              else {
                 $('.navbar-fixed-top').removeClass('navbar-home');
              }
           });
        //}



        /**********************************************************/
        /* NAVBAR BUTTON CHANGE                                   */
        /**********************************************************/
        $( "#navbar-cus" ).click(function() {
            $(this).toggleClass('navbar-colse');
        });

        $('#navbar-cus').click(function(){
            $('#myNavbar .nav').toggleClass('slideInRight slideOutRight');
            //$('.navbar-nav').slideToggle('show');
        });
        
        navbarCus();



        /***********************************************************/
        /* NAVIGATION SCROLL                                       */
        /***********************************************************/
        $('#navbar-nav').onePageNav({
            currentClass: 'active',
            scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
            scrollSpeed: 1000
        });
        $('#navbar-nav').localScroll({
            offset: -Math.abs($('#header-navbar').height())
        });

        /* SUBCRIBE  BUTTON SCROLL FROM HOME PAGE */
        $('.btn-scroll').localScroll({
            offset: -Math.abs($('#header-navbar').height())
        });

    });


});

