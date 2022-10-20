/*function meuNome(name){
    console.log('Meu nome é '+ name);
}

meuNome('Jonathan');
meuNome('Chayene');


function maiorIdade(idade){
    if (idade >= 18) {
        console.log('Você é maior de Idade!');
    } else{
        console.log('Você é menor de idade!');
    }
}

maiorIdade(20);
*/

function aplicarDesconto(valor,desconto){
    return (valor - (valor *(desconto / 100)));
}

function aplicarJuros(valor,juros){
    return(valor + (valor *(juros / 100)));
}

const produto = 100;
const tipoPagamento = 4;

if (tipoPagamento === 1){
    console.log(aplicarDesconto(produto, 10 ));
}else if(tipoPagamento === 2){
    console.log(aplicarDesconto(produto, 15));
}else if(tipoPagamento === 3){
    console.log(produto);
}else{
    console.log(aplicarJuros(produto, 10));
}
