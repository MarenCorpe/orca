$(document).ready(function() {
	
	$("#r_1").click(function() {
		$("#r_2").fadeIn();
				$("#res").fadeIn();
		$("#t_2").fadeOut();
			$("#tran").fadeOut();
		$("#o_2").fadeOut();
			$("#off").fadeOut();

	});

	$("#t_1").click(function() {
		$("#r_2").fadeOut();
			$("#res").fadeOut();
		$("#t_2").fadeIn();
				$("#tran").fadeIn();
		$("#o_2").fadeOut();
			$("#off").fadeOut();
	});

	$("#o_1").click(function() {
		$("#r_2").fadeOut();
			$("#res").fadeOut();
		$("#t_2").fadeOut();
			$("#tran").fadeOut();
		$("#o_2").fadeIn();
			$("#off").fadeIn();
	});





});
