const precoEtanol = 4.29;
const precoGasolina = 5.49;
const tipoCombustivel = 1;
const gastoMedio = 12;
const distanciaKm = 673;

const precoMedioGasolina = ((precoGasolina / gastoMedio)* distanciaKm);
const precoMedioEtanol = ((precoEtanol / gastoMedio)* distanciaKm);

if (tipoCombustivel === 2) {
    console.log('O valor gasto de Gasolina na Viagem foi de R$ ' + precoMedioGasolina.toFixed(2));
} else if(tipoCombustivel === 1){
    console.log('O valor gasto de Etanol na viagem foi de R$ ' + precoMedioEtanol.toFixed(2))
}
