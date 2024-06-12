/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

function atv33(){
    let m  = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let media = 0, diagPri = 0;
    for (let i = 0; i < 3; i++){
        media += m[i][2 - i];
    }
    media = media/3
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            if(i === j){
                m[i][j] = m[i][j] * media;
            }
        }
    }
    console.log("A média é: "+media)
    for(let i = 0; i<3; i++){
        console.log(m[i]+"")
    }
}

atv33()