$(function(){

    var valor1, valor2;
    var novoNumero = false;
    
    //função de clicar nos números
    $("input[name=bt]").click(function(){
        if(novoNumero){
            $("#resultado").val('');
            $("#resultado").val($("#resultado").val() + $(this).val());
            novoNumero = false;
        }
        else{
            $("#resultado").val($("#resultado").val() + $(this).val());
        }
    });

    //botão somar 
    $("input[name=soma]").click(function(){
        if($("resultado").val() != ''){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor!');
        }
    });
    
    //botão subtrair
    $("input[name=sub]").click(function(){
        if($("resultado").val() != ''){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor!');
        }
    });
    
    //botão multiplicação
    $("input[name=mult]").click(function(){
        if($("resultado").val() != ''){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor!');
        }
    });
    
    //botão divisão
    $("input[name=div]").click(function(){
        if($("resultado").val() != ''){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor!');
        }
    });
    
    //botão igual/resultado
    $("input[name=igual]").click(function(){
        if($("#resultado").val() != ''){
            valor2 = parseFloat($("#resultado").val());
            if ($("#op").text() == "+"){
                $("#resultado").val(valor1 + valor2);
                $("#op").text('');
                novoNumero = true;
            }
            else if ($("#op").text() == "-"){
                $("#resultado").val(valor1 - valor2);
                $("#op").text('');
                novoNumero = true;
            }
            else if ($("#op").text() == "*"){
                $("#resultado").val(valor1 * valor2);
                $("#op").text('');
                novoNumero = true;
            }
            else if ($("#op").text() == "/"){
                $("#resultado").val(valor1 / valor2);
                $("#op").text('');
                novoNumero = true;
            }
            else{
                alert('Defina uma operação!');
            }
        }
    });
    
    //botão apagar caracter
    $("input[name=c]").click(function(){
        var aux = $("#resultado").val().length;
        var valor = $("#resultado").val();
        valor = valor.replace(valor.charAt(aux - 1), "");
        $("#resultado").val(valor);
    });

    //botão resetar CE
    $("input[name=CE]").click(function(){
        $("#resultado").val('');
        $("#op").text('');
        valor1 = null;
        valor2 = null;
    });

     //botão ponto
     $("input[name=ponto]").click(function(){
        if($("#resultado").val() != '' && $("#resultado").val().indexOf(".") === -1){
            $("#resultado").val($("#resultado").val() + $(this).val());
        }
    });

});