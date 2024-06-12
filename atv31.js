/* 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

const prompt = require("prompt-sync")();

function atv31(){
    let A, cont = 0, x = [], v = [], aleatorio;
    for(let i = 0; i < 30; i++){
        v[i] = [];
        for(let j = 0; j < 30; j++){
            aleatorio = Math.floor(Math.random() * 100);
            v[i][j] = aleatorio;
        }
    }
    A = parseInt(prompt("Digite um numero: "));

    for(let i = 0; i < 30; i++){
        for(let j = 0; j < 30; j++){
            if(v[i][j] === A){
                cont = cont + 1;
            }
        }
    }

    for(let i = 0; i < 30; i++){
        x [i] = []
        for(let j = 0; j < 30; j++){
            if(v[i][j] != A){
                x[i][j] = v[i][j];
            }
            else x[i][j] = '-';
        }
    }
    console.log(cont);
    for(let i = 0; i < x.length; i++){
        console.log(x[i]+"")
    }
}

atv31();