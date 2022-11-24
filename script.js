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

    //Theme synchronization
    function themeSynch() {

        if ( colorScheme == 'light' ) {

            localStorage.setItem('colorScheme', 'light');
            $('html').addClass('light').removeClass('dark');
            $('.indicator').addClass('light').removeClass('dark');
            
        } else if ( colorScheme == 'dark' ) {

            localStorage.setItem('colorScheme', 'dark');
            $('html').addClass('dark').removeClass('light');
            $('.indicator').addClass('dark').removeClass('light');
            
        }

    }

    //Theme switcher
    function themeSwitch() {

        if ( colorScheme == 'light' ) {
            
            colorScheme = 'dark';
            localStorage.setItem('colorScheme', 'dark');
            $('html').addClass('dark').removeClass('light');
            $('.indicator').addClass('dark').removeClass('light');
            
        } else if ( colorScheme == 'dark' ) {

            colorScheme = 'light';
            localStorage.setItem('colorScheme', 'light');
            $('html').addClass('light').removeClass('dark');
            $('.indicator').addClass('light').removeClass('dark');
            
        }

    }
    
    //Detect current theme
    if( localStorage.getItem('colorScheme') ) {

        colorScheme = localStorage.getItem('colorScheme');

    } else {

        if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {

            colorScheme = 'light';
            localStorage.setItem('colorScheme', 'light');

        } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            
            colorScheme = 'dark';
            localStorage.setItem('colorScheme', 'dark');

        }

    }

    themeSynch()

    //Detect system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {

		colorScheme = e.matches ? 'dark' : 'light';
		themeSynch();

	});

    //Toggle button
    $(".site-header__left__theme-switcher").on('click', function()  {

        themeSwitch();

    });

    $('html').css('display', 'block');
    $('html').css('opacity', '1');

});