/**
WHILE
* usando quando não se sabe ao certo o número de vezes em que o bloco de código será repetido
        SINTAXE:
            while(condicao){
                bloco de código;
            }

 */

/** 
let x = 0;

while(x < 5){
    document.write(`${x} <br>`);
    x++; //definir um critério de parada
}
*/

function random(min, max){
    const r = Math.random() * (max - min ) * min;
    return Math.floor(r);
}

const min = 1;
const max = 30;
let num = min;

document.write("<h3> Gerar numero randomincamente </h3>")
while( num != 5){
    num = random(min, max);
    document.write(`${num} <br>`)
}