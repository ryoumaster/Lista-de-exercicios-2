/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();

function quest10(){
    let i = 1, num, total = 0, menor, media, pares = 0, qtd = 0;
    do{
      num = parseInt(prompt("Digite um numero: "));
      total += num;
      qtd++
      media = total/qtd;
        if (qtd == 1 || num < menor){
            menor = num;
        }
        if (num % 2 == 0){
            pares++;
        }
      i = parseInt(prompt("Para sair digite 0 para continuar digite 1: "));    
    }while(i != 0);
    return console.log("O somatorio é: "+total+"\nA media é: "+media+"\nO menor numero é: "+menor+"\nA quantidade de pares é: "+pares);
}
quest10();