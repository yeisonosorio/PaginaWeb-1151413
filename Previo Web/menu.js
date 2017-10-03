 $(document).ready(main);

var contador=1;

function main(){

	$('.menu_bar').click(function(){

		$('nav').toggle();



	})
}


$(function(){
	$('#contenedor div:gt(0)').hide();
		setInterval(function(){
			$('#contenedor div:first-child').fadeOut(1000)
			.next('div').fadeIn(1000)
			.end().appendTo('#contenedor');

		},4000)

})