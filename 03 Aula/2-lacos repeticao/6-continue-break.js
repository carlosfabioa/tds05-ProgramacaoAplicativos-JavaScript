/**
 CONTINUE
 * 
 */

 const nomes = ['natan', 'kauan', 'rafael', 'eduardo'];
 

 console.log("Lista dos alunos aprovados");

 for (let i = 0; i < nomes.length; i++){
    if(i === 3){
        continue;    
    }
    console.log(nomes[i]);
 }