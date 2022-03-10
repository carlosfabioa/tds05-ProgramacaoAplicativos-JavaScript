/**
 LAÇO FOR
 * É utilizado quando sabemos o número de vezes que o bloco do código deve ser repitido
    SINTAXE:
        for(valor inicial; condicao; incremento){
            bloco de código
        }

 */

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');

console.log("_________________");
//para resolver o problema anterior
for(let i = 0; i < 5; i++){
    console.log(`linha ${i}`)
}

// incrementando de 10 em 10
console.log("_________________");
for(let i = 0; i < 100; i += 10){
    console.log(`linha ${i}`)
}

let nome = prompt("Digite seu nome: ");

for (let i = 0; i < nome.length; i++){
    document.write(`<h1>${nome[i]} </h1><br>`)
}

