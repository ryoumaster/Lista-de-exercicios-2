/* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */

function atv30(){
    let m = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
    let sl = [], sc = [];

    for (let i = 0; i < 5; i++) {
        sl[i] = 0;
        sc[i] = 0
        for (let j = 0; j < 5; j++) {
            sl[i] += m[i][j];
            sc[j] += m[i][j];
        }
    }

    for(let i = 0; i < m.length; i++){
        console.log(m[i] +"");
    }
    console.log(sl);
    console.log(sc)
}

atv30();