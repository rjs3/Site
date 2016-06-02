jQuery(document).ready(function() {
	
	function uplightbox() {
	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
	animationSpeed:'fast',
	slideshow:5000,
	theme:'light_square'
	});
	
	}
	
	if(jQuery().prettyPhoto) {
	
	uplightbox(); 
	
	}

});