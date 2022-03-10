frutas = ['morango', 'maça', 'mamão'];

//forma clássica
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log("___________________")

//for in - lê os indices ou chaves do objeto
for (let indice in frutas){
    console.log(frutas[indice]);
}

console.log("___________________")
//for in criando um objeto
pessoa  = {
    nome: 'Maria',
    sobrenome: "Silva",
    idade: 54
};

for (let i in pessoa){
    console.log(i, pessoa[i]);
}