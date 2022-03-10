//PARAMETROS DA FUNÇÃO
/** 
function mensagem(frase){
    alert(frase);
}

mensagem("Olá mundo");
mensagem("Tchau mundo");
mensagem("Acorda Gabriel!!!!")
*/

//ARGUMENTS 
/**
 * No javascript pode-se usar argumentos sem declara-los na função
 * Ele sempre salva em uma variavel chamada arguments
 */

function teste(){
    console.log(arguments); //o javascript cria um vetor e armazena os argumentos passados
                            //posso acessar o valor indicando o indice do vetor ex: arguments[0];
}

teste('valor1', 1, 2, 3); 

console.log("_______________________")

//DIVERGINDO NUMERO DE ARGUMENTOS E PARAMENTROS
function teste1(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}

teste1(1, 2, 3);

console.log("_______________________") 

//ADICIONAR UM VALOR PADRÃO AO ARGUMENTO
//se passar apenas um argumento, sem o um valor padrão ele retorna NaN (not-a-number)
function teste2(a, b = 1){
    console.log(a + b);
}

teste2(2,3);

console.log("_______________________") 


/*
//ATRIBUIÇÃO VIA DESESTRURAÇÃO - SPREAD OPERATOR
//desestruturação de um objeto
function teste3(nome, sobrenome, idade){
    console.log(nome, sobrenome, idade);
}

const obj = {nome: 'natan', sobrenome:'silva', idade:13};
teste3({nome: 'natan', sobrenome:'silva', idade:13});

*/

/*REST OPERATOR
* Permite informar um número indeterminado de paramentros em um array
* é sempre o último argumento da função

*/

function calculadora(operador, acumulador, ...numeros){
    for(let numero of numeros){
        acumulador += numero;
    }
    console.log(acumulador);
}

calculadora('+', 0, 3, 2,3, 5, 6, 6, 6,7,9)


