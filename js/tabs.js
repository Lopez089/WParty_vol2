
/*var tabInicial = 1;
$(document).on("ready", main);

function main(){
	$("#tabServicios a").on("click", abrirTab);
	$(".tabContent").eq(tabInicial - 1).fadeIn();
	$("#tabServicios a").eq(tabInicial - 1).addClass("tabActual");
}

function abrirTab(){
	alert("sdfsdf")
	$(".tabContent").hide();
	$("#tabs a")removeClass(".tabActual");
	$(".tabContent")eq($(this).index()).fadeIn();
	$(this)addClass(".tabActual");
	return false;
}*/


$(document).ready(function() {
$(".contenido_tab").hide(); //Ocultar capas
$("ul.tabs li:first").addClass("activa").show(); //Activar primera pestaña
$(".contenido_tab:first").show(); //Mostrar contenido primera pestaña

// Sucesos al hacer click en una pestaña
$("ul.tabs li").click(function() {
$("ul.tabs li").removeClass("activa"); //Borrar todas las clases "activa"
$(this).addClass("activa"); //Añadir clase "activa" a la pestaña seleccionada
$(".contenido_tab").hide(); //Ocultar todo el contenido de la pestaña
var activatab = $(this).find("a").attr("href"); //Leer el valor de href para identificar la pestaña activa 
$(activatab).fadeIn(); //Visibilidad con efecto fade del contenido activo
return false;
});
});
