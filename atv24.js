/* 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

function atv24(){
    let matriz = []
    let c = [];
    let cont = 0;
    for (i = 0; i < 6; i++){
        matriz[i] = [];
        cont = 0;
        for (j = 0; j < 8; j++){
            let aleatorio = Math.floor(Math.random() * 21) - 10;
            matriz[i][j] = aleatorio;
            if (matriz[i][j] < 0){
                cont++
            }
        }
        c[i] = cont;
    }

    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i] +"");
    }
    console.log(c);


}

atv24();