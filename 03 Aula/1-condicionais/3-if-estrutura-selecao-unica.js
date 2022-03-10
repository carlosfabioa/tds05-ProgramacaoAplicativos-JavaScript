/**
IF - ESTRUTURA DE SELEÇÃO ÚNICA
* vai fazer um teste lógico, se
* for verdadeiro (true) executa os comandos dentro da chave
* se for falso, ele volta para o fluxo normal do programa

        if(condicao){
            bloco de código;
        }

*/

let num1 = Number(prompt('Digite o primeiro numero: '));
let num2 = Number(prompt('Digite o segundo numero: '));


if (num1 > num2){
    alert(`O maior número é ${num1}`)
}

if (num2 > num1){
    alert(`O maior número é ${num2}`)
}

if (num1 === num2){
    alert(`Os números são iguais: ${num1}`)
}