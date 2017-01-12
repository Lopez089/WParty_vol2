var actual=1;

$(document).on("ready", main);

function main(){
	var intervalo = setInterval("runSlider()", 4000);
}

function runSlider(){
	if(actual == $("#slider_contenedor img").size()){
		actual = 0;
	}

	$("#slider_contenedor").animate({
		marginLeft: (-1*actual*$("#slider_contenedor img").eq(0).width())
	}, 700);
	actual++;
}