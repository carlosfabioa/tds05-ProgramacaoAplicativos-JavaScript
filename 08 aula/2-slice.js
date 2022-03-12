/**
 FUNÇÃO slice()
 * Retorna uma cópia de parte de um array a partir de um subarray criada entre
        as posições iniciais e finais
        SINTAXE 
            array.slice(inicio, fim);

 */

//FATIAR UMA STRING
let nome = "Carlos Fábio Andrade";
const nomeResultado = nome.slice(7); //retirar Carlos do nome
console.log(nomeResultado);

nomeSelecionado = nome.slice(7,12);
console.log(nomeSelecionado);

nomeSelecionado1 = nome.slice(-13, -8); //fatiando usando indice negativo
console.log(nomeSelecionado1);

nomeSelecionado2 = nome.slice(7,-8);
console.log(nomeSelecionado2);

//RETORNO DE UMA PARTE DE UM ARRAY EXISTENTE
const carros = ['uno', 'palio', 'civic', 'picasso'];
const carrosFiat = carros.slice(0,2);
console.log(`Os carros da fiat são ${carrosFiat}`);