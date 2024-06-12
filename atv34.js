/* 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

function atv34(){
    let m = [], result = [], mult;
    for(let i = 0; i < 50; i++){
        m[i] = [];
        for(let j = 0; j < 50; j++){
            let numero = (1 + Math.random() * (10 - 1)).toFixed(2);
            m[i][j] = numero;
        }
    }
    for(let i = 0; i < 50; i++){
        console.log(m[i]+"");
    }
    for(let i = 0; i < 50; i++){
        mult = m[i][i];
        for(let j = 0; j < 50; j++){
            m[i][j] = (m[i][j] * mult).toFixed(2);
        }
    }

    for(let i = 0; i < 50; i++){
        console.log(m[i]+"");
    }
}

atv34();