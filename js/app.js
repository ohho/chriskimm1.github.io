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

	if (wScroll > $('.work').offset().top){
			$(".work img").each(function(i){


					setTimeout(function(){
						
					$(".work img").eq(i).addClass("is-showing");
					}, 150 * (i+1));

			});
	}

});