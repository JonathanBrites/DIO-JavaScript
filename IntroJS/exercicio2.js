const peso = 140;
const altura = 1.80;

const imc = peso / Math.pow(altura, 2);



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