/* 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

const prompt = require("prompt-sync")();
function questao15(){
    numeros = [];
    for(let i = 0; i<10; i++){
        numeros[i] = parseInt(prompt("Digite um numero "));
    }
    for (let j = 0; j<10; j++){
        if(numeros[j] % 2 == 0){
            console.log("O numero "+numeros[j]+" é par e esta na posição: "+(j+1));
        }
    }
}
questao15();