$(document).ready(function() {
		$("#galerybutton").click(function(){
			$("#galery").slideToggle(function(){
				if($("#galery").css("display")=="inline-block")
					$("#galerybutton").html("Ocultar");
				else
					$("#galerybutton").html("Mostrar");
			});
		});
	});
$(document).ready(function() {
		$("#galerybutton2").click(function(){
			$("#galery2").slideToggle(function(){
				if($("#galery2").css("display")=="inline-block")
					$("#galerybutton2").html("Ocultar");
				else
					$("#galerybutton2").html("Mostrar");
			});
		});
	});
			
		