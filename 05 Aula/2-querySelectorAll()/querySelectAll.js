/**
 METODO: querySelectorAll()
 * Retorna uma coleção de elementos filhos que coincidem com o seletor CSS
 * é um objeto NodeList
        SINTAXE:
            elemento.querySelectorAll(seletores CSS)
    **os seletores são strings
    ** Especifica uma ou mais seletores para coincidir com os elementos
    ** seletores podem ser baseados em (id, class, atributos, etc)
    ** para multiplos seletores, separa cada um por vírgula

 */

//ADICIONAR UMA COR VERMELHA NO FUNDO DE TODOS OS ELEMENTOS <p> DENTRO DA DIV
function alterarElementos(){
    var elementos = document.getElementById("minhaDiv").querySelectorAll("p");
    for(let elemento of elementos){
        elemento.style.backgroundColor = "red";
    }
    
}

//ADICIONAR UM FUNDO VERMELHO PARA OS ELEMENTOS h3, div e span
function alterarTodosElementos(){
    var elementos = document.getElementById("minhaDiv1").querySelectorAll("h3, div, span");
    for(let elemento of elementos){
        elemento.style.backgroundColor = "red";
    }
}