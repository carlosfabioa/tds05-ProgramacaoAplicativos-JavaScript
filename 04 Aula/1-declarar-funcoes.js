/**
 * é usada para não repetir código
 * depois de declarara a função pode ser chamada em qualquer lugar do codigo
 * as funções podem ter nome ou ser anonimas
        SINTAXE:
            function nome_da_funcao(parametro1, parametro2, parametro_n){
                declarações
            }
*/

//FUNÇÃO DECLARATIVA
function mensagem(){ //declarando a função
    alert('Função declarativa')
}

mensagem() //chamando a função mensagem

//FUNÇÃO ANONIMA / FUNCTION EXPRESSION
/**
 * a função anonima é atribuida a uma variavel
 * cada vez que a função é chamada ela é executada
 */

let mensagem1 = function(){
    alert('função anônima');
}

mensagem1() //chamando a função

//ARROW FUNCTION
const funcaoArrow = () =>{
    alert("arrow function");
};

funcaoArrow();