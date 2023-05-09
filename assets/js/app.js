$(document).ready(function(){
	
	// Typing Text
	let typed = new Typed('.typing', {
		strings: ['Front-end Web Developer', 'Wordpress Developer'],
		typeSpeed : 50,
		startDelay: 100,
		backSpeed : 20,
		backDelay: 3000,
		loop : true,
		cursorChar: "|",
		contentType: 'html'
	});

	// nav-bar
	$(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if (scroll >200) {
            $('.navbar').addClass('black-bg')
        }
        else {
             $('.navbar').removeClass('black-bg')
        }
    });
});

// Wow
new WOW().init();