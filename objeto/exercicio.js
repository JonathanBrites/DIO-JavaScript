/*class Carros{
    marca;
    cor;
    gastoMedioCombustivelKm;

    constructor(marca, cor, gastoMedioCombustivelKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;

    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioCombustivelKm * precoCombustivel;
    }
}

const auditt = new Carros('Audi', 'Preto', 1/8);
const fordKa= new Carros('Ford', 'Cinza', 1/14);


console.log(auditt.calcularGastoViagem(70,5.49));
console.log(fordKa.calcularGastoViagem(70,5.49));

*/

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

}

const jose = new Pessoas('José', 70, 1.70);
console.log(jose.calcularIMC());