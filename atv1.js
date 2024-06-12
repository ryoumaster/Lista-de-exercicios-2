/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require("prompt-sync")();
let anos, quantidade;
anos = parseInt(prompt("Há quantos anos você fuma? "));
quantidade = parseInt(prompt("Quantos cigarros você fuma por dia? "));

function calcularReducaoTempo(anos, quantidade){
    let totalReduzido = 0;
    quantidade = quantidade * (anos * 365);
    totalReduzido = quantidade * 10;
    totalReduzido = Math.floor(totalReduzido/1440);
    return totalReduzido
}
console.log("total de dias reduzidos é: "+calcularReducaoTempo(anos, quantidade));