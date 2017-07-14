/* Holiii acá va tu código también */
$(document).ready(function(){
	$(".boton-inicio").click(function(){
		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-correo").parent().append("<span>Ingrese correo valido</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese correo valido</span>");
  		}

  		if(($("#input-pass").val() == "pass") || ($("#input-pass").val() == 123456) || ($("#input-pass").val() == 098765) || (($("#input-pass").val()).length < 5)){
  			$("#input-pass").parent().append("<span>Ingrese contraseña valida</span>");
  		}

  });
});