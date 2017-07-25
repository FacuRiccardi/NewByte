$(document).ready(function(){
    var alto = $(window).height();
	var ancho = $(window).width();
	$('.header__title').css('height', alto+'px');
	if(alto<ancho){		
		$('.header__title__title').css('font-size', alto/6+'px');
		$('.header__title__subtitle').css('font-size', alto/20+'px');
	} else{
		$('.header__title__title').css('font-size', ancho/6+'px');
		$('.header__title__subtitle').css('font-size', ancho/20+'px');
	}
	$(window).scroll(function(){
		if ($(this).scrollTop() > alto-70) {

			$('header').addClass('header2');
		} else{
			$('header').removeClass('header2');
		}
	});
});