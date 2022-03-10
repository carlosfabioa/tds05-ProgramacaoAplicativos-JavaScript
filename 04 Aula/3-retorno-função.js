/**
 * RETORNO DE FUNÇÃO
 */

//essa função não retorna valor
let mensagem = function(numero){
    document.write(`Este é o maior valor:  ${numero}`);
}

let mostrarMaior = function(num1, num2){
    if(num1 > num2){
        return mensagem(num1);
    }else{
        return mensagem(num2);
    }
}

mostrarMaior(12, 3);
