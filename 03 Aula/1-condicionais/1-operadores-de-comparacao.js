/**
 * OPERADORES DE COMPARAÇÃO
    >       maior
    >=      maior e igual
    <       menor
    <=      menor e igual
    ==      igual
    ===     estritamente igual
    !=      diferente  
    !==     estritamente diferente
 */

let num1 = 10;
let num2 = 4;
let num3 = 10;
let num4 = "10";

//MAIOR
//console.log(num1, "maior que", num2, ": ", num1 > num2);
console.log(`${num1} maior que ${num2}: ${num1 > num2}`);

//MENOR
console.log("_____________________")
console.log(`${num1} menor que ${num2}: ${num1 < num2}`);

//IGUAL ==
console.log("_____________________")
console.log(`${num1} igual ${num2}: ${num1 == num2}`);
console.log(`${num1} igual ${num3}: ${num1 == num3}`);
console.log(`${num1} igual ${num4}: ${num1 == num4}`);

//ESTRITAMENTE IGUAL ===
console.log("_____________________")
console.log(`${num1} estritamente igual ${num2}: ${num1 === num2}`);
console.log(`${num1} estritamente igual ${num3}: ${num1 === num3}`);
console.log(`${num1} estritamente igual ${num4}: ${num1 === num4}`);

//DIFERENTE !=
console.log("_____________________")
console.log(`${num1} diferente ${num2}: ${num1 != num2}`);
console.log(`${num1} diferente ${num3}: ${num1 != num3}`);
console.log(`${num1} diferente ${num4}: ${num1 != num4}`);

//DIFERENTE !==
console.log("_____________________")
console.log(`${num1} estritamente diferente ${num2}: ${num1 !== num2}`);
console.log(`${num1} estritamente diferente ${num3}: ${num1 !== num3}`);
console.log(`${num1} estritamente diferente ${num4}: ${num1 !== num4}`);