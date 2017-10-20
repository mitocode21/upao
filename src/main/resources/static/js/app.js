$(document).ready(
		function() {
			
			$.ajax({
				type : "GET",
				url : "https://demo-upao-mitocode.herokuapp.com/persona/listar", //http://localhost:8080/
				contentType : "application/json; charset=utf-8",
				dataType : "json",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var id = data[i].id;
						var nombres = data[i].nombres;
						var apellidos = data[i].apellidos;
						
						var nombre_completo = nombres + ", " + apellidos;
												
						var lista = $('#lista');						
						lista.append("<li><a>"+nombre_completo+"<span class='pull-right'>"+id+"</span><a></li>");
					}
				},

				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert("Request: " + XMLHttpRequest.toString()
							+ "\n\nStatus: " + textStatus + "\n\nError: "
							+ errorThrown);
				}
			});

		});