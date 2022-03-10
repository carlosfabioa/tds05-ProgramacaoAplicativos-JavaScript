const formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", function (event){
    event.preventDefault();

//pegando os inputs peso e altura
const inputPeso = event.target.querySelector("#peso");
const inputAltura = event.target.querySelector("#altura");

//pegando os valores de peso e altura e convertendo em número
peso = Number(inputPeso.value);
altura = Number(inputAltura.value);

const validar = validarCampos(peso, altura); //chamando função que valida campos


const imc = calculaImc(peso, altura); //chamada da função calculaIMC
const classificacao = classificacaoImc(imc); //chamada da função que classifica imc

const msg = `O seu IMC ${imc} - ${classificacao}`; //mensagem HTML


setResultado(msg, validar); //chamada da função que apresenta o resultado

limpaFormulario(inputPeso, inputAltura);


});

function calculaImc(peso, altura){ //função de calculo do IMC
    imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function classificacaoImc(imc){ //função para classificação do IMC
    const classificacao = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 
                        'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if(imc > 39.9) return classificacao[5];
    if(imc >=34.9) return classificacao[4];
    if(imc >=29.9) return classificacao[3];
    if(imc >=24.9) return classificacao[2];
    if(imc >=18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];

}

function setResultado(msg, isValid){ //função para escrever mensagem na tela
    console.log(msg);
    const resultado = document.querySelector("#resultado");
    const p = document.createElement("p");
    p.innerHTML = msg;

    if(isValid){
        p.classList.add('paragrafo-resultado'); // adiciona o valor da classe à p
        resultado.appendChild(p);
    }else{
        p.classList.add('erro');
        p.innerHTML="campos preenchidos incorretamente";
        resultado.appendChild(p);
    }


    
}

function validarCampos(peso, altura){ //função para validar os campos
    if((!peso || !altura) || (peso > 600 || altura  > 2.7)){
        return false;
    }
    return true;
}

function limpaFormulario(inputPeso, inputAltura){ //função para limpar o formulário
    inputPeso.value = '';
    inputAltura.value = '';
}



