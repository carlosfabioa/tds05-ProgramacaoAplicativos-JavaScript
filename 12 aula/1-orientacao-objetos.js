//CRIAR OBJETO A PARTIR DE UMA FUNÇÃO CONSTRUTORA
function Pessoa(primeiroNome, ultimoNome, idade, sexo, interesses){
    this.nome = {
        'primeiroNome': primeiroNome,
        'ultimoNome': ultimoNome
    }
    this.idade = idade;
    this.sexo = sexo;
    this.interesses = interesses;


    this.saudacao = function(){
        alert(`Olá. O meu nome é ${this.nome}`);
    }
}

//A palavra new indica que vai ser instânciado um novo objeto
let pessoa1 = new Pessoa('Maria', 'silva', 23, 'feminino', ['futebol', 'bebida']);

//CONSTRUTOR OBJECT
let pessoa3 = new Object();
pessoa3.nome = "Wagner";
pessoa3['idade'] = 23;
pessoa3.saudacao = function(){alert(`Eu sou o ${this.nome}`)}

//USANDO O MÉTODO CREATE   
var pessoa4 = Object.create(pessoa3); //cria usando as mesmas propriedades
