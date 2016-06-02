jQuery(document).ready(function() {
	
	$(".inline-gallery-container span").hide();
	function lightboxthumbhover() {
	
	$(".inline-gallery-container").hover(function(){
		 $(this).children('span').fadeIn("slow");
	}, function() {
         $(this).children('span').fadeOut("slow");
	});
		
	}
	
	lightboxthumbhover();

});