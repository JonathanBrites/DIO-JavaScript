const produto = 100;

const cpDebito = (produto / 100) * 90;
const cpDinPix = (produto / 100) * 85;
const cpDuasParc = produto;
const cpAcimaDuasParc = (produto / 100) * 110;

const tipoPagamento = cpAcimaDuasParc;



if (tipoPagamento === cpDebito){
    console.log('O valor final do produto é R$ ' + cpDebito.toFixed(2));
}else if(tipoPagamento === cpDinPix){
    console.log('O valor final do produto é R$ ' + cpDinPix.toFixed(2));
}else if(tipoPagamento === cpDuasParc){
    console.log('O valor final do produto é R$ ' + cpDuasParc.toFixed(2));
}else{
    console.log('O valor final do produto é R$ ' + cpAcimaDuasParc.toFixed(2));
}
