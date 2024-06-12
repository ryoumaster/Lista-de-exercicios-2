/* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

function atv29(){
    let m = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
    let somas = 0;

    for(let i = 0; i < m.length; i++){
        somas += m[4][i];
    }
    console.log("a soma da linha 4 é: "+somas);
    somas = 0;

    for(let i = 0; i < m.length; i++){
        somas += m[i][1]
    }
    console.log("a soma da coluna 2 é: "+somas);
    somas = 0;

    for(let i = 0; i < m.length; i++){
        somas += m[i][i]
    }
    console.log("a soma da diagonal principal é: "+somas);
    somas = 0;

    for(let i = 0; i < m.length; i++){
        for (let j = 0; j < m.length; j++){
            somas += m[i][j]
        }
    }
    console.log("a soma de todos os valores é: "+somas);

}

atv29();