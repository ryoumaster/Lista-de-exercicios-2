/* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require("prompt-sync")();
let modelo = 0;
modelo = parseInt(prompt("Digite o tipo de carro: \n1 - carro de luxo\n2 - carro popular\n"));

function aluguel(modelo){
    let dias, km, total;
    dias = parseInt(prompt("Digite a quantidade de dias: "));
    km = parseFloat(prompt("Digite a kilometragem percorrida: "));
    if (modelo == 1){
        total = 150 * dias;
        if (km <= 200){
            total += 0.30 * km;
        }
        else if (km > 200){
            total += 0.25 * km;
        }
        return total;
    }
    else if (modelo == 2){
        total = 90 * dias;
        if (km <= 200){
            total += 0.20 * km;
        }
        else if (km > 200){
            total += 0.10 * km;
        }
        return total;
    }
}

console.log("Total a pagar: R$"+aluguel(modelo));