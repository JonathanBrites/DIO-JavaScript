let av1 = 8;
let av2 = 8;
let av3 = 7;

let media = (av1 + av2 + av3) / 3;

if (media < 5 ){
    console.log('Média menor que 5, reprovação. Sua média foi = ' + media.toFixed(2))
} else if (media >= 5 && media < 7){
    console.log('Média entre 5 e 7, recuperação. Sua média foi = ' + media.toFixed(2))
} else {
    console.log('Média acima de 7, passou de semestre. Sua média foi = ' + media.toFixed(2))
}