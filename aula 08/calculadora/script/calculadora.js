const botao = document.querySelectorAll(".btn-num");
const display = document.querySelector(".display");

document.addEventListener("click", function(e){
    const elemento = e.target;
    
    if(elemento.classList.contains("btn-num")) mostrarDisplay(elemento);
    if(elemento.classList.contains("limpar")) limparDisplay();
    if(elemento.classList.contains("btn-igual")) calcularDisplay();
    if(elemento.classList.contains("btn-apagar")) apagarDisplay();
    
})

function mostrarDisplay(elemento){ //função sever para adicionar no display
    const textoBotao = elemento.textContent;
    display.textContent += textoBotao;
}

function limparDisplay(){ //função para limpar o display
    display.textContent = '';
}

function calcularDisplay(){
    const conta = eval(display.textContent);
    display.textContent = conta;
}

function apagarDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}