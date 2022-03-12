const botao = document.querySelectorAll(".btn-num");
const display = document.querySelector(".display");



document.addEventListener("click", function(e){
    const evento = e.target;
    if (evento.classList.contains("btn-num")){
        const textoBtn = evento.textContent;
        mostrarDisplay(textoBtn);
    }
});

function mostrarDisplay(textoBtn){ //função para adicionar a informação no display
    textContent = textoBtn;

    
}