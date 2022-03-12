/**
FUNÇÃO eval()
 * Computa um código javaScript representado como uma string
    SINTAXE
        eval(string)

 */

let x = 10;
let y = 20;
let texto = eval("x * y");

console.log(texto);

//USUARIO VAI DAR ENTRADA USANDO O PROMPT
const texto1 = prompt("Entre com uma expressão matemática: ");
resultado = eval(texto1);
document.write(`O resultado da operação matemática é ${resultado}`)
document.write('<br>O tipo de dado do resultado é ', typeof(resultado));