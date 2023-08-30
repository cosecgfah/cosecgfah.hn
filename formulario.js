// console.log("Funionando");

//No refrescar 
$("#formulario").submit(function(event){
    event.preventDefault(); //Almacena los datos sin refrescar el sitio web
    enviar();
});

function enviar()
{
    // console.log("ejecutado");   
    var datos = $("#formulario").serialize(); //Toma los datos y los lleva a arreglo
    $.ajax
    ({
        type: "post",
        url: "formulario.php",
        data: datos,
        success: function(texto)
        {
            if(texto=="exito")
            {
                correcto();
            }
            else
            {
                phperror(texto);
            }
        }
    })
}

function correcto()
{
    $("#mensajeexito").removeClass("d-none");
    $("#mensajeerror").addClass("d-none");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    // $("#message").val("");
    // document.getElementsByName("message").value = "";
    // document.getElementById("message").value = "";

    location.reload();


}

function phperror(texto)
{
    // $("#mensajeerror").removeClass("d-none");
    // $("#mensajeerror").html(texto);

}