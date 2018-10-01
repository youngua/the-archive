$(document).ready(function() {
	$('').hide();
	$('#enter').click(function () {

		$('.directions').animate({
			width: '10%',
		});
	});
});

$(function() {
	$(".digital img").draggable();
} );