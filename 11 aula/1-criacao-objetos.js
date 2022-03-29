/*
Um objeto é uma variável que contéum uma coleção de dados (atributos) e funcionalidades (metodos)
*/

//CRIAÇÃO DE UM OBJETO VAZIO
var pesssoa = {};
var pessoa = []; //criando um array

//CRIAÇÃO DE UM OBJETO LITERAL ()
var pessoa = {
    nome:['carlos', 'andrade'],
    idade:44,
    sexo:'masculino',
    interesse: ['programação', 'redes'],
    quemEh:function(){
        document.write(`${this.nome[0]} ${this.nome[1]} tem ${this.idade} de idade
        . Ele gosta de ${this.interesse[0]} e ${this.interesse[1]}.`)
    },
    saudacao:function(){
        alert(`Oi. Eu sou o ${this.nome[0]}`)
    }
};

//NOTAÇÃO DE PONTO
// O objeto "pessoa" atua como um namespace (espaço de nome)
document.write(`<hr> <h1> Notação de ponto</h1> 
                Nome: ${pessoa.nome[0]} <br>
                Idade: ${pessoa.idade}`)

//SUB-NAMESPACES
// - É possível fazer o valor de um membro de um objeto ser de outro
var pessoa = {
    nome:{
        primeiro:'Carlos',
        ultimo: 'Andrade'
    },
    idade:44,
    sexo:'masculino',
    interesse: ['programação', 'redes'],
    quemEh:function(){
        document.write(`${this.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} de idade
        . Ele gosta de ${this.interesse[0]} e ${this.interesse[1]}.`)
    },
    saudacao:function(){
        alert(`Oi. Eu sou o ${this.nome[0]}`)
    }
};

document.write(`<hr> <h1> Subspaces</h1> 
                Nome: ${pessoa.nome.primeiro} <br>
                Sobrenome: ${pessoa.nome.ultimo}`)

/**
NOTAÇÃO DE COLCHETES
- É uma outra forma de acessar as propriedades do objeto
    pessoa1['idade']
- É igual a um array, mas usa-se o nome associado ao valor para selecionar o item
 * 
 */

document.write(`<hr> <h1>Notação de colchetes\s </h1>
            Primeiro nome: ${pessoa['nome']['primeiro']} <br>
            Idade: ${pessoa['idade']} `)

//SETANDO VALORES AO MEU OBJETO (atualizar os objetos)
pessoa.idade = 23;
pessoa['nome']['ultimo'] = 'silva';
document.write(`<hr> <h1>ATUALIZANDO OS OBJETOS\s </h1>
            Primeiro nome: ${pessoa['nome']['primeiro']}  ${pessoa['nome']['ultimo']}<br>
            Idade: ${pessoa['idade']} `)

//criar novos membros para o objeto
pessoa['cor-olhos'] = 'castanhos';
pessoa.despedida = function(){alert("Hora do intervalo!")}

document.write(`<hr> <h1>Criando novos membros </h1>
                ${pessoa['cor-olhos']}`)

console.log(pessoa);

/*
THIS
* A palavra this se refere ao objeto atual em que o código está sendo escrito
*/

var nome = 'ganso';

var animal = {
    nome: 'gato',
    mostrar: function(){
        console.log(nome)
    },

    mostrar1:function(){
        console.log(this.nome)
    }
};


var animal1 = {
    nome: 'pato',
    mostrar: function(){
        console.log(nome)
    },

    mostrar1:function(){
        console.log(this.nome)
    }
};
