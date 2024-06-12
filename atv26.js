/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

function atv26(){
    matriza = [
        [3, 7, 1, 9, 2],
        [6, 4, 5, 8, 0],
        [5, 2, 3, 7, 6]
    ];

    matrizb = [
        [4, 9, 3],
        [2, 6, 8],
        [1, 0, 7],
        [5, 3, 2],
        [8, 4, 1]
    ];

    matrizmult = [];



    for (let l = 0; l < matriza.length; l++) {
        matrizmult[l] = [];
        for (let c = 0; c < matrizb[0].length; c++) {
            matrizmult[l][c] = 0;
        }
    }

    for (let l = 0; l < matriza.length; l++) {
        for (let c = 0; c < matrizb[0].length; c++) {
            for (let a = 0; a < matriza[0].length; a++) {
                matrizmult[l][c] += matriza[l][a] * matrizb[a][c];
            }
        }
    }

    for(let i = 0; i < matrizmult; i++){
        console.log(matrizmult[i] +"");
    }

}

atv26();
