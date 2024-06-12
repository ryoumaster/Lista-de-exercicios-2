const prompt = require("prompt-sync")();

/* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */
function atv27(){
    let matriz = [
        [4, 7, 1, 8, 5, 2],
        [3, 6, 9, 0, 4, 7],
        [5, 2, 8, 3, 6, 1],
        [7, 4, 0, 5, 3, 9],
        [1, 9, 2, 6, 7, 8],
        [6, 3, 5, 1, 9, 0]
    ];

    let A = [], V = [], cont = 0;
    A = parseFloat(prompt("Digite um valor para A: "));
    for (l = 0; l < matriz.length; l++){
        for(c = 0; c < matriz.length; c++){
            V[cont] = matriz[l][c] * A; 
            cont++
        }
    }

    console.log(V)
}

atv27();