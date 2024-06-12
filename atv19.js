/* 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

const prompt = require("prompt-sync")();

function horario(){
    let hora = [], minuto = [], segundo = [];
    for(let i = 0; i < 5; i++){
        console.log("Horario "+(i+1));
        hora[i] = parseInt(prompt("Digite as horas: "));
        minuto[i] = parseInt(prompt("Digite os minutos: "));
        segundo[i] = parseInt(prompt("Digite os segundos: "));
    }
    for (let j = 0; j < 5; j++){
        if (hora[j] <0 || hora[j] > 24 || minuto[j] <0 || minuto[j] > 60 || segundo[j] <0 || segundo[j] > 60){
            console.log("horario " + (j+1) + " invalido");
        }
        else {
            console.log(hora[j]+":"+minuto[j]+":"+segundo[j]);
        }
    }
}

horario()