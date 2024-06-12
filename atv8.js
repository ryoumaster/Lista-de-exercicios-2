/* 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

const prompt = require("prompt-sync")();

let horasAtv, totalPts, totalRs;
horasAtv = parseInt(prompt("Digite a quantidade de horas de atividade fisica no mes: "));

function vidaSaudavel(horasAtv){
    if (horasAtv <= 10){
        totalPts = horasAtv * 2;
        totalRs = totalPts * 0.05;
    }
    else if(horasAtv > 10 && horasAtv <= 20){
        totalPts = horasAtv * 5;
        totalRs = totalPts * 0.05;
    }
    else{
        totalPts = horasAtv * 10;
        totalRs = totalPts * 0.05;
    }
    console.log("O total de pontos adiquiridos foram: "+totalPts+"\nO total de Reais adiquiridos é: R$"+totalRs);
}
vidaSaudavel(horasAtv);