/**
 CLASSES
 - são funções especias do JavaScript
 */

 //DECLARANDO CLASSES (usa-se a palavra reservada class)

 class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //metodos
    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
 }

//instanciando uma pessoa (criando um objeto a partir da classe Pessoa)
 var pessoa1 = new Pessoa('Natan', 'Silva');
 const pessoa2 = new Pessoa('Anderson', 'Silva');


//GETTER AND SETTERS
class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }

    freiar(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    }
}

const carro1 = new Carro('Picasso');

for(i=0; i< 150; i++){
    carro1.acelerar()
}
//o programador errou e atribuiu um valor alto a velocidade
carro1.velocidade = 1330;

//CRIANDO UMA CLASSE USANDO UM ATRIBUTO PRIVADO
const _velocidade = Symbol('velocidade');

class CarroA{
    constructor(nome){
        this.nome = nome;
        this._velocidade = 10;
    }

    //set
    set velocidade(valor){
        return this[_velocidade] = valor;
    }


    //get  para pegar a velocidade da classe
    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        return this[_velocidade]++;

    }

    freiar(){
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

let carro2 = new CarroA('picassso');
carro2._velocidade = 80;
carro2.acelerar()

let carro3 = new CarroA('fusca')
carro3._velocidade = 99;


console.log(carro2._velocidade);

carro2.velocidade = 1200;
console.log()


//HERANÇA
class DispositivosEletronicos{
    constructor(nome, peso){
        this.nome = nome;
        this.peso = peso;
        this.ligado = false;
    }

    ligar(){
        this.ligado = true;
    }

    desliga(){
        this.ligado = false;
    }
}

const d1 = new DispositivosEletronicos('computador', 1);

class Smartphone extends DispositivosEletronicos{
    constructor(nome, peso, cor){
        super(nome,peso); //chamando o construtor da classe pai
        this.cor = cor;
    }

    ligar(){
        console.log('usando meu proprio ligar');
    }
}

const celular1 = new Smartphone('nokia', 3, 'preto');

class Tablet extends DispositivosEletronicos{


}

const tablet1 = new DispositivosEletronicos('Ipad', 4);






