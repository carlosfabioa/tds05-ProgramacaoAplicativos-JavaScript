/**
OPERADORES LÓGICOS
    &&      AND - E         se ambas expressões forem verdadeiras, retorna TRUE
    ||      OR - OU         se uma das expressões for verdadeira, retorna TRUE
    !       Not - não       negação (inverte o valor lógico)
*/

//AND - &&
console.log(true && true);
console.log(true && true && true);
console.log(true && true && false);

console.log("________________")

//OR - ||
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || false || true);

console.log("________________")

//Not - !
console.log(!true);
console.log(!!true); //quando eu nego duas vezes ele retorna o valor original
