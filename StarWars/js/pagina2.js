$(document).ready( function()
{
    /*
         // alert("Parado ai corno!!!!!! Vai passando a esposa");
    */
    $("#enviar").click( function()
    {
        var a = "Eu, ";
        var b = " vou atirar ";
        var c = "10 vezes em um negro";
        var nome = $("#nome").val();

        if(nome==""){
            alert("Informe o nome!");
        }
        else{

        
        // alert(a+nome+b+c);
        var resultado = a+nome+b+c;
        $("#resultado").val(resultado);
        $("#nome").val("");
        }
    });
    $("#add").click(function()
    {
        $("#bloco").addClass("bloco2");
    });
    $("#remove").click(function()
    {
        $("#bloco").removeClass("bloco2");
    });


});