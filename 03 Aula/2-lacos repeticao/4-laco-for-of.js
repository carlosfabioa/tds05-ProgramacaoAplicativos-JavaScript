nome = "carlos fabio andrade";

//exemplo com for classico para acessar as letras da string
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log("______________");
// exemplo usando o for in para acessar cada letra da string
for (let i in nome){
    console.log(nome[i]);
}

console.log("______________");
//Em ambos os casos acima nós pegamos o índice
//Caso eu queira pegar o valor diretamente usamos o for of

for(let valor of nome){
    console.log(valor);
}
