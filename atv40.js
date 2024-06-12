const prompt = require("prompt-sync")();

/* 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/

function atv40(){
    let resultado = [5], apostas = [], cont, ganhadores = [], aux = 0;
    
    for(let i = 0; i < 5; i++){
        resultado[i] = parseInt(prompt(`Digite o numero ${i + 1}: `));
    }
    
    for(let i = 0; i < 50; i++){
        apostas[i] = []
        for(let j = 0; j < 5; j++){
            apostas[i][j] = parseInt(prompt(`Digite o numero ${i + 1} do apostador ${j + 1}: `));
        }
    }

    for(let i = 0; i < 50; i++){
        cont = 0;
        for(let j = 0; j < 5; j++){
            if(resultado.includes(apostas[i][j])){
                cont++;
            }
            if (cont === 5){
                ganhadores[aux] = []
                ganhadores[aux] = i + 1;
                aux+=1;
            }
        }
    }

    console.log("Os jogadores ganhadores foram: "+ganhadores);
}

atv40();