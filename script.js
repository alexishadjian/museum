jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Header nav fix scroll
    --------------------------------------------------------------*/

    $(window).on('scroll', function() {	
 
        if ($(window).scrollTop() > 10 ) { 
            $('header').addClass('scroll');
       
        } else if ($(window).scrollTop() < 10 )  { 
            $('header').removeClass('scroll');
       
        }
    
    });

    /*--------------------------------------------------------------
    Switch dark / light mode
    --------------------------------------------------------------*/
    
    $(".site-header__left__theme-switcher").on('click', function() {

        if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {

            $("html").removeClass("light");
            $("html").toggleClass("dark");
            $(".indicator").removeClass("light");
            $(".indicator").toggleClass("dark");

        } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            
            $("html").removeClass("dark");
            $("html").toggleClass("light");
            $(".indicator").removeClass("dark");
            $(".indicator").toggleClass("light");

        }
    });



    // Detect default color scheme




    //Detect change

    // window.matchMedia('(prefers-color-scheme: dark)').on('change', function() {
        
    //     if () {

    //     }

    // });


    // $(".site-header__left__theme-switcher").on('click', function() {

    //     if ( $("html").hasClass("os-default") ) {

    //         if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {

    //             $("html").removeClass("os-default");
    //             $("html").addClass("dark");
    
    //         } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
                
    //             $("html").removeClass("os-default");
    //             $("html").addClass("light");
    
    //         }

    //     } else if ( $("html").hasClass("light") ) {
            
    //         $("html").removeClass("light");
    //         $("html").addClass("dark");

    //     } else if ( $("html").hasClass("dark") ) {
            
    //         $("html").removeClass("dark");
    //         $("html").addClass("light");

    //     }
    // });

});