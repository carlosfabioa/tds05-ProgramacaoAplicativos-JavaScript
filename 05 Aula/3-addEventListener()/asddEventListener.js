/**
 MÉTODO: addEventListener()
 * O método anexa um manipulador de eventos a um elemento
        SINTAXE:
            element.addEventListener(Event, function, userCapture)
    *** event -> requerido
                lista de eventos possíveis: https://www.w3schools.com/jsref/dom_obj_event.asp
    *** function -> requerido
                A função que será executada quando o evento ocorrer
    *** useCapture -> opcional
                false e true
 */

//UMA FUNÇÃO QUE EXECUTA QUANDO O USUÁRIO CLIAN EM UM BOTÃO - FUNÇÃO DECLARADA EXPLICITAMENTE
const botao = document.getElementById("botao");
botao.addEventListener("click", clicarBotao);

function clicarBotao(){
    document.getElementById("senai").innerHTML = "O botão foi clicado";
    document.getElementById("senai").style.color = "blue";
    document.getElementById("senai").style.fontSize = "40px";
}

//UMA FUNÇÃO QUE EXECUTA QUANDO O USUÁRIO CLICA EM UM BOTÃO - FUNÇÃO ANONIMA
const botao1 = document.getElementById("botao1");
botao1.addEventListener("click", function(){
    document.getElementById("senai1").innerHTML = "O botão foi clicado novamente";
});

//ADICIONANDO DIFERENTES EVENTOS NO MESMO ELEMENTO
const botao2 = document.getElementById("botao2");
botao2.addEventListener("mouseover", passeMouse);
botao2.addEventListener("click", clicarMouse);
botao2.addEventListener("mouseout", retirarMouse);

function passeMouse(){
    document.getElementById("senai2").innerHTML += "Coloquei o mouse! <br>"
}

function clicarMouse(){
    document.getElementById("senai2").innerHTML += "Cliquei no mouse! <br>"
}

function retirarMouse(){
    document.getElementById("senai2").innerHTML += "Retirei o mouse! <br>"
}

//PASSANDO PARAMETROS PARA FUNÇÃO - SEMPRE USAR FUNÇÃO ANONIMA
let par1 = 5;
let par2 = 7;

document.getElementById("botao3").addEventListener("click", function(){
    multiplicar(par1, par2);
});

function multiplicar(a, b){
    document.getElementById("botao3").innerText = `${a} x ${b}`;
    document.getElementById("senai3").innerHTML = a * b;

}