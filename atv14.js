/* 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

const prompt = require("prompt-sync")();
function nomes(){
    let nomes = []
    for(let i = 0; i < 7; i++){
        nomes[i] = String(prompt("Digite um nome: "));
    }
    for(let j = 6; j>=0; j--){
        console.log(nomes[j]);
    }
}
nomes();