const botao = document.querySelectorAll(".btn-num");
const display = document.querySelector(".display");
console.log(display);


document.addEventListener("click", function(e){
    const evento = e.target;
    if (evento.classList.contains("btn-num")){
        const textoBtn = evento.textContent;
        mostrarDisplay(textoBtn);
    }
});

function mostrarDisplay(textoBtn){ //função para adicionar a informação no display
    const p = document.createElement("p");
    p.textContent = textoBtn;
    p.classList.add('paragrafo');
    display.appendChild(p);
    
}