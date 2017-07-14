/* Holiii acá va tu código también */

/*validacion campos index.html*/

$(document).ready(function(){
	$(".boton-inicio").click(function(){
		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-correo").parent().append("<span>Ingrese correo valido</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese un correo valido</span>");
  		}

  		if(($("#input-pass").val() == "pass") || ($("#input-pass").val() == 123456) || ($("#input-pass").val() == 098765) || (($("#input-pass").val()).length < 5)){
  			$("#input-pass").parent().append("<span>Ingrese contraseña valida</span>");
  		}

  });
});

/*uniendo index*/

$("#enviar").click(function(e){
            e.preventDefault();
            window.location = "index1.html";
        });

$("#saldo-tarj").click(function(e){
            e.preventDefault();
            window.location = "index4.html";
        });

$("#tarifa").click(function(e){
            e.preventDefault();
            window.location = "index5.html";
        });

$("#perfil-usuario").click(function(e){
            e.preventDefault();
            window.location = "index2.html";
        });

$("#preg-frecuentes").click(function(e){
            e.preventDefault();
            window.location = "index3.html";
        });

/*enlazando botones del menu a los index*/

$("#saldo-tarj-menu").click(function(e){
            e.preventDefault();
            window.location = "index4.html";
        });

$("#tarifa-menu").click(function(e){
            e.preventDefault();
            window.location = "index5.html";
        });

$("#perfil-menu").click(function(e){
            e.preventDefault();
            window.location = "index2.html";
        });

$("#preguntas-menu").click(function(e){
            e.preventDefault();
            window.location = "index3.html";
        });

$("#home-menu").click(function(e){
            e.preventDefault();
            window.location = "index1.html";
        });

/* API */

$(document).ready(function(){
	$("#calculo-saldo").on("click", function(){ //id boton
		var saldoFinal = $("#guardar-saldo").val(); //id input donde se ingresa num de bip
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoFinal, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$("#resultado-saldo").append("<div id='resultado-saldo'>"+ response.saldoTarjeta + "</div>") //id div vacio donde se imprime el saldo de bip
            console.log(response.saldoTarjeta); //se llama desde json el elem que contiene la info que se necesita(saldo)
        })

        .fail(function(error){
            console.log("error");
        })
    });
	})
	




