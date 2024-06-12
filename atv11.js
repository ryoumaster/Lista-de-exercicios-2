/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência. */

const prompt = require("prompt-sync")();

    function progressaoAr(){
      let razao, termo, priTermo, total;
      total = 0;
      priTermo = parseInt(prompt("Digite o primeiro termo: "));
      razao = parseInt(prompt("Digite a razao: "));
      for (let i = 0; i < 10; i++){
        termo = priTermo + i *razao;
        console.log(termo);
        total += termo;
      }
      return console.log("A soma dos termos: "+total);
    }
    progressaoAr();