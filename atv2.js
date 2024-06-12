/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")();
let velocidade = 0;
velocidade = parseFloat(prompt("Digite a velocidade do carro: "));
function multaPorVel(velocidade){
    let multa;
    if (velocidade > 80){
        velocidade = velocidade - 80;
        multa = velocidade * 5.00;
        multa.toFixed(2);
        return multa;
    }
}

if (multaPorVel(velocidade) > 0){
    console.log("O valor da multa é: R$"+multaPorVel(velocidade));
}else console.log("Velocidade permitida");


