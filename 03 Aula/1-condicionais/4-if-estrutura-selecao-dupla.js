/**
IF / ELSE
* se a condiçaõ for avaliada como TRUE, o bloco de instrução if é executado
* se a condição for avaliada como FALSE, o bloco de instrução else é executado
    SINTAXE:
        if(condicao){
            bloco de código;
        }else{
            bloco de código;
        }
* 
*/
/**
//Vamos colocar 3 números em ordem crescente
let num1 = Number(prompt('Digite o primeiro número: ')),
    num2 = Number(prompt('Digite o segundo número: ')),
    num3 = Number(prompt('Digite o terceiro número: '));

if(num1 < num2 && num1 < num3){
    if(num2 < num3){
        document.write(`A ordem é: ${num1} - ${num2} - ${num3}`)
    }else{
        document.write(`A ordem é: ${num1} - ${num3} - ${num2}`)
    }
}    

if(num2 < num1 && num2 < num3){
    if(num2 < num3){
        document.write(`A ordem é: ${num2} - ${num1} - ${num3}`)
    }else{
        document.write(`A ordem é: ${num2} - ${num3} - ${num1}`)
    }
}  

if(num3 < num1 && num3 < num2){
    if(num2 < num3){
        document.write(`A ordem é: ${num3} - ${num1} - ${num2}`)
    }else{
        document.write(`A ordem é: ${num3} - ${num2} - ${num1}`)
    }
} 
 */

//IF encadeado
/** 
FAZER SAUDAÇÃO HORA:
** Entre 0h e 11h - bom dia
** Entre 12h e 17h - boa tarde
** entre 18h e 23h - boa noite
*/
const hora = 58;

if (hora >=0 && hora <= 11){
    console.log("Bom dia ");
}else if(hora >=12 && hora <= 17){
    console.log("Boa tarde");
}else if(hora >=18 && hora <= 23){
    console.log("Boa noite");
}else{
    console.log("Olá. Horário inválido!")
}



