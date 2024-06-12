/* 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

const prompt = require("prompt-sync")();

function atv23(){
    let matriz = []

    for(l = 0; l < 7; l++){
        matriz[l] = []
        for(c = 0; c < 7; c++){
        if (l === c){
            matriz[l][c] = 1;
        }
        else matriz [l][c] = 0;
        }
    }

    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i] +"");
    }
    
}

atv23();