/**
 MÉTODO: querySelector()
 * retornar o primeiro elemento filho que combina com o seletor CSS de um elemento
        SINTAXE:
            elemento.querySelector(Seletor CSS)
    ** o seletor CSS é sempre uma string
    ** É usado para selecionar elementos HTML (id, classes, tipos, atributos, etc)
 */

// ALTERAR O TEXTO DO PRIMEIRO ELEMENTO <p>
function alterarElemento(){
    var elemento = document.getElementById("minhaDiv"); //todos os elementos da div
    elemento.querySelector("p").innerHTML = "ola mundo"; //vou alterar o primeiro <p>
}

// ALTERAR O TEXTO DO PRIMEIRO ELEMENTO <p> COM A classe="senai" NA DIV
function alterarClasse(){
    var elemento = document.getElementById("minhaDiv1"); //todos os elementos da div
    elemento.querySelector("p.senai").innerHTML = "TDS - Senai"; 
}

// ALTERAR O TEXTO DO ELEMENTO <p> COM id="meuID"
function alterarID(){
    var elemento = document.getElementById("minhaDiv2");
    elemento.querySelector("#meuID").innerHTML = "TDS - Senai"
}

//ADICIONAR  UMA BORDA EM VERMELHO AO PRIMEIRO ELEMENTO <a> QUE TEM O ATRIBUTO TARGET
function alterarTarget(){
    var morango = document.getElementById("minhaDiv3");
    morango.querySelector("a[target]").style.border = "5px solid red"; 
}