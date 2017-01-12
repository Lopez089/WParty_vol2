$(document).on("ready", main);

function main(){
	$("#menu_navegacion a, #menu_pie a").on("click", irA)
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top
	}, 900);
	
	return   false;
}