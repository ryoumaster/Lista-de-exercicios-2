/* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

const prompt = require("prompt-sync")();

function atv17(){
    let idade = [], nome = [];
    for(let i = 0; i < 9; i++){
        nome [i] = String(prompt("Digite o nome: "));
        idade [i] = parseInt(prompt("Digite a idade: "));
    }
    for (let j = 0; j < 9; j++){
        if (idade[j] < 18){
            console.log(nome[j]+" "+idade[j]);
        }
    }
}

atv17();