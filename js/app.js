console.log("loaded bro")
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	var scrollPos = $(window).scrollTop();
	var navOffset = $("nav").offset().top;
	
	console.log(scrollPos)
	console.log(navOffset)

	$(".logo").css({
		'transform' : 'translate(0px, '+ wScroll /2.3 +'%)'
	});

	if (scrollPos >= navOffset){
		$(".nav").addClass("fixed");
	} 
	
	if (scrollPos < 620){
		$("nav").removeClass("fixed")
	}

});