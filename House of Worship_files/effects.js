jQuery(document).ready(function($) {

	$('.show_menu').click(function(){
			$('.headermenu').fadeIn();
			$('.show_menu').fadeOut();
			$('.hide_menu').fadeIn();
	});
	$('.hide_menu').click(function(){
			$('.headermenu').fadeOut();
			$('.show_menu').fadeIn();
			$('.hide_menu').fadeOut();
	});
});
if ((screen.width>=760))
{
var main_menu=new main_menu.dd("main_menu");
main_menu.init("main_menu","menuhover");
}
