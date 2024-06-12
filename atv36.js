/* 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

const prompt = require("prompt-sync")();

function atv36(){
    let numerosSorteados = [13], apostadores = [], ganhadores = [], cont = 0, acertou = 0;
    for(let i = 0; i < 13; i++){
        numerosSorteados [i] = parseInt(prompt("Digite os numeros sorteados: "))
    }
    for (let i = 0; i < 100; i++){
        apostadores[i] = []
        for(let j = 0; j < 13; j++){
            apostadores[i][j] = parseInt(prompt(`Digite os numeros de aposta do jogador ${i + 1}: `));
        }
    }

    for (let i = 0; i < 100; i++){
        acertou = 0;
        for(let j = 0; j < 13; j++){
            if (apostadores [i][j] === numerosSorteados[j]){
                acertou++
                if (acertou === 13){
                    ganhadores[cont] = i + 1;
                    cont++
                }
                }
            }
        }

    console.log("Os vencedores são: "+ganhadores);
}

atv36();