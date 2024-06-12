/* 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

const prompt = require("prompt-sync")();

function atv39(){
    let A = [], B = [], cont = 0;
    for(let i = 0; i < 4; i++){
        A[i] = parseInt(prompt("Digite um numero "));
    }

    for(let i = 0; i < 4; i++){
        if ((A[i] >= 0) && (A[i] != "")){
            B[cont] = [];
            B[cont] = A[i];
            cont++
        }
    }
    console.log(B)
}

atv39();