$(document).ready(function(){
	
	$('#nav-menu').hide();

	$('#nav-button').click(function(){
		$('#nav-menu').slideToggle(300);
		return false;
	});

	var slider = $('.bxslider').bxSlider({
		pager: false,
		adaptiveHeight: true
	});

	$('#snowden-nav').on('click',function(){
		slider.goToSlide(1);
	});

	$('#pope-nav').on('click',function(){
		slider.goToSlide(2);
	});

	$('#redsox-nav').on('click',function(){
		slider.goToSlide(3);
	});

	$('#redwedding-nav').on('click',function(){
		slider.goToSlide(4);
	});

	$('#vine-nav').on('click',function(){
		slider.goToSlide(5);
	});

	$('#gravity-nav').on('click',function(){
		slider.goToSlide(6);
	});

	$('#bostonbombings-nav').on('click',function(){
		slider.goToSlide(7);
	});

	$('#batkid-nav').on('click',function(){
		slider.goToSlide(8);
	});

	$('#syria-nav').on('click',function(){
		slider.goToSlide(9);
	});

	$('#breakingbad-nav').on('click',function(){
		slider.goToSlide(10);
	});

	$('#haim-nav').on('click',function(){
		slider.goToSlide(11);
	});

	$('#monteith-nav').on('click',function(){
		slider.goToSlide(12);
	});

	$('#lorde-nav').on('click',function(){
		slider.goToSlide(13);
	});

	$('#att-nav').on('click',function(){
		slider.goToSlide(14);
	});

	$('#arod-nav').on('click',function(){
		slider.goToSlide(15);
	});

	$('#cronuts-nav').on('click',function(){
		slider.goToSlide(16);
	});

	$('#oitnb-nav').on('click',function(){
		slider.goToSlide(17);
	});

	$('#kanye-nav').on('click',function(){
		slider.goToSlide(18);
	});

	$('#bynes-nav').on('click',function(){
		slider.goToSlide(19);
	});

	$('#frozen-nav').on('click',function(){
		slider.goToSlide(20);
	});

	$('#mandela-nav').on('click',function(){
		slider.goToSlide(21);
	});

	$('#reed-nav').on('click',function(){
		slider.goToSlide(22);
	});

	$('#doctorwho-nav').on('click',function(){
		slider.goToSlide(23);
	});

	$('#mvotc-nav').on('click',function(){
		slider.goToSlide(24);
	});

	$('#glass-nav').on('click',function(){
		slider.goToSlide(25);
	});
});
