$(function(){

	var heightDiv = $('.topo').innerHeight()
	var numero = 10
	console.log(heightDiv)


	$(window).scroll(function(){
		var windowOff = $(window).scrollTop()
		var windowHeight = $(window).height()

		$('.topo').each(function(){
			// console.log(windowOff + windowHeight)
		})

	})

	var icon = $('.topo i')
	var sumiu = $(this).is(':hidden')


	// $('.topo i:visible').each(function(){
	// 	if (icon.is(':visible')) {
	// 		alert('sim')
	// 	}else{
	// 		alert('nao')
	// 	}
	// })



	icon.click(function(){
		$('.menu-mobile').slideToggle()
		if(numero === 10){
			$('.topo').animate({
				paddingBottom: '10px'
			},400)
			//$('.topo').css('padding-bottom','10px')
			numero = 0
		}else{
			$('.topo').animate({
				paddingBottom: '60px'
			},400)
			// $('.topo').css('padding-bottom','60px')
			numero = 10
		}
	})



	$('.topo a').click(function(){
		var href = $(this).attr('href')
		var offSetTop = $(href).offset().top

		$('html, body').animate({'scrollTop': offSetTop},"slow")


	})


})