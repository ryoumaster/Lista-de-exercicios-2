/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require("prompt-sync")();
let distancia = 0;
distancia = parseFloat(prompt("Digite a distancia que deseja percorrer em KM: "));

function precoPassagem(distancia){
    let total = 0;
    if (distancia <= 200){
        total = distancia * 0.50;
        return total;
    }else{
        total = distancia * 0.45;
        return total;
    }
}

console.log("O total a pagar é: R$"+precoPassagem(distancia).toFixed(2));
