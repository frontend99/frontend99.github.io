$(document).ready(function() {
	$(window).on('load', function(event) {
		setTimeout(function() {
			$('body').removeClass('preloading');
	   		$('.preloader').fadeOut('fast');
		}, 3000);
	});
	
	$('nav li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: 0}, 700);
	});
	$('.back_to_top').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: 0}, 1000);
	});
	$('nav li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.about').offset().top - 50}, 700);
	});
	$('.header_left .view_more').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.about').offset().top}, 700);
	});
	$('nav li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.experience').offset().top + 50}, 700);
	});
	$('.my_experience').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.experience').offset().top}, 700);
	});
	$('nav li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.skill').offset().top}, 700);
	});
	$('nav li:nth-child(5) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.more').offset().top}, 700);
	});
	$('nav li:nth-child(6) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.project').offset().top - 80}, 700);
	});
	$('nav li:nth-child(7) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.contact').offset().top}, 700);
	});
	$('.contact_me').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({scrollTop: $('.contact').offset().top}, 700);
	});
});