const notas = []; //array

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];   
    soma = soma + nota; 
    
}

const media = soma / notas.length;
console.log(media)






/*
alunos.push('Renan'); // para adicionar

alunos[4] = 'Vinicius'; // para adicionar na posição

console.log(alunos.pop()); // irá remover o item do fim
*/