/**
OPERADOR TERNÁRIO - ?
*
 */

//Calculo de bonificação
// Salario for maior que 1000 reias, bonus de 10%
// Salario for menor ou igual a 1000, bonus de 15%

//resolução usando o IF
let salario = 1000;
let bonus;

if(salario > 1000){
    bonus = salario * 0.10;
}else{
    bonus = salario * 0.15;
}

alert(`O bonus a receber será de ${bonus}`);

//resolução usando o operador ternário ?
let bonus1 = salario * (salario > 1000 ? 0.10 : 0.15);

alert(`O bonus a receber será de ${bonus1}`);