/**
Criar um objeto carro com os seguintes atributos:
 – Cor
 – Marca
 – Número de portas
 – Ano de fabricação
 – Tipo de combus[vel  
e, com os seguinte métodos:
 – Acelerar (pega o valor da velocidade atual e acrescenta 10 a cada acelerada)
 – Frear (pega o valor da velocidade atual e diminiu 10 a cada freiada)
 – Virar para direita (exibe mensagem dizendo que está virando para a direita)
 – Virar para esquerda (exibe mensagem dizendo que está virando para a esquerda)
 * 
 */


 var carro = {
     cor:"amarelo",
     marca:"ford",
     numeroPortas: 2,
     anoFabricacao: 1990,
     tipoCombustive: "gasolina",

     acelerar: velocidadeAtual => velocidadeAtual + 10,
     reduzir: velocidadeAtual => velocidadeAtual - 10,
     virarEsquerda:()=> console.log("Estou virando a esquerda"),
     virarDireita: () => console.log("Estou virando a Direita")
 }



 const botao = document.querySelector("#botao");
 

 document.addEventListener("submit", function(e) {
     e.preventDefault();
     criarObjeto();
 })


 function criarObjeto(){
     carro.cor = document.querySelector("#cor").value;
     
 }