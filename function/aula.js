/*function sayMyName(name){
    console.log('Your name is:' + name);
}

sayMyName('Renan');
sayMyName('Vitor');

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadrado(10) + quadrado(20))


function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));

*/

function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){

if (imc < 18.5){
    console.log('Seu IMC é: ' + imc.toFixed(2) + ';' +' Você está Abaixo do Peso!');
} else if( imc >= 18.5 && imc < 25){
    console.log('Seu IMC é: ' + imc.toFixed(2) + ';' + ' Você está com Peso Normal!');
} else if( imc >= 25 && imc < 30){
    console.log('Seu IMC é: ' + imc.toFixed(2) + ';' + ' Você está Acima do Peso!');
} else if( imc >= 30 && imc < 40){
    console.log('Seu IMC é: ' + imc.toFixed(2) + ';' + ' Você está Obeso!');
} else {
    console.log('Seu IMC é: ' + imc.toFixed(2) + ';' + ' Você está com Obesidade Grave!');
}
}
//main
(function main(){
const peso = 140;
const altura = 1.80;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
})();













