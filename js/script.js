$(document).ready(function(){
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

});
