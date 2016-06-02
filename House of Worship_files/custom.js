jQuery(document).ready(function() {
	
	function thumbhover() {
	
		$(".ftportfolio_item").hover(function(){
		 $(this).children('span').animate({top:"80px"},{queue:false,duration:300});
	}, function() {
         $(this).children('span').animate({top:"-60px"},{queue:false,duration:300});
	});
		
	}
	
	thumbhover();

});