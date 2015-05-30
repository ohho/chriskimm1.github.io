console.log("loaded bro")
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	var scrollPos = $(window).scrollTop();
	var navOffset = $("nav").offset().top;
	

	$(".logo").css({
		'transform' : 'translate(0px, '+ wScroll /2.3 +'%)'
	});

	if (scrollPos >= navOffset){
		$(".nav").addClass("fixed");
	} 
	
	if (scrollPos < 620){
		$("nav").removeClass("fixed")
	}

	if (wScroll + 255 > $('.work').offset().top){
			$(".work img").each(function(i){


					setTimeout(function(){
						
					$(".work img").eq(i).addClass("is-showing");
					}, 350 * (i+1));

			});
	}

	if (wScroll > $(".me_window").offset().top - $(window).height()){
		
		var opacity = (wScroll - $(".me_window").offset().top + 400) / (wScroll / 2.4) 
		
		$(".tint").css({'opacity': opacity})
	}


});