$(document).ready(function(){
	$('.bxslider').bxSlider({
		pager: false,
		adaptiveHeight: true
	});

	$('#snowden-nav').on('click',function(){
		$('.bxslider').goToSlide(1);
	});

});
