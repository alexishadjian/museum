jQuery(document).ready(function($){

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

});