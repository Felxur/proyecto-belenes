$(document).ready(function() {
		$("#galerybutton").click(function(){
			$("#galery").slideToggle(function(){
				if($("#galery").css("display")=="inline-block")
					$("#galerybutton").html("Ocultar");
				else
					$("#galerybutton").html("Mostrar");
			});
		});

		$("#galerybutton").click(function(){
			$("#galery").slideToggle(function(){
				if($("#galery").css("display")=="inline-block")
					$("#galerybutton").html("Ocultar");
				else
					$("#galerybutton").html("Mostrar");
			});
		});
	});
			
		lightbox.option({
			'albumLabel': "Imagen %1 de %2"
		  })