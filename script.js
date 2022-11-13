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

    //switchState c'est la position du switcher
    //colorScheme c'est le theme de l'utilisateur



    // Detect default color scheme
    if( localStorage.getItem('colorScheme') ) {
        var switchState = localStorage.getItem('colorScheme');
   	}


    switchTheme();

    // Detect change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        var colorScheme = event.matches ? "dark" : "light";

        if ( colorScheme === "dark" ) {
            switchState = "dark";
        } else {
            switchState = "light";
        }

        switchTheme();
    });


    // Switch
	$('.site-header__left__theme-switcher').on('click', function() {
		if( switchState === 'dark' ) {
			switchState = 'light';
		} else {
			switchState = 'dark';
		}

		switchTheme();
	});


    // Function
    function switchTheme() {
		if ( switchState == 'dark' ) {
			localStorage.setItem('colorScheme', 'dark');
			$('html').addClass('dark').removeClass('light');
			$('.indicator').addClass('dark').removeClass('light');
			
		} else if ( switchState == 'light' ) {
			localStorage.setItem('colorScheme', 'light');
			$('html').addClass('light').removeClass('dark');
			$('.indicator').addClass('light').removeClass('dark');
			
		}
	}










    //Prototype

    // $(".site-header__left__theme-switcher").on('click', function()  {

    //     if ( colorScheme == 'light' ) {
    //         localStorage.setItem('colorScheme', 'dark');
    //         $('html').addClass('dark').removeClass('light');
    //         $('.indicator').addClass('dark').removeClass('light');
            
    //     } else if ( colorScheme == 'dark' ) {
    //         localStorage.setItem('colorScheme', 'light');
    //         $('html').addClass('light').removeClass('dark');
    //         $('.indicator').addClass('light').removeClass('dark');
            
    //     }

    // });

    // $(".site-header__left__theme-switcher").on('click', function()  {

    //     if ( $('html').hasClass('light') ) {

    //         localStorage.setItem('currentScheme', 'dark');
    //         $('html').addClass('dark').removeClass('light');
    //         $('.indicator').addClass('dark').removeClass('light');
    
    //     } else if ( $('html').hasClass('dark') ) {
    
    //         localStorage.setItem('currentScheme', 'light');
    //         $('html').addClass('light').removeClass('dark');
    //         $('.indicator').addClass('light').removeClass('dark');
    
    //     }

    // });

    


//Tout fonctionne suaf au reload
    // $(".site-header__left__theme-switcher").on('click', function() {

    //     if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {

    //         $("html").removeClass("light");
    //         $("html").toggleClass("dark");
    //         $(".indicator").removeClass("light");
    //         $(".indicator").toggleClass("dark");

    //     } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            
    //         $("html").removeClass("dark");
    //         $("html").toggleClass("light");
    //         $(".indicator").removeClass("dark");
    //         $(".indicator").toggleClass("light");

    //     }
    // });


});