/* 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

function atv32(){
    m = [], maior = [], n = [];
    for(let i = 0; i < 12; i++){
        m[i] = [];
        maior[i] = 0;
        for(let j = 0; j < 13; j++){
            let num = (Math.floor(Math.random() * 200) - 100);
            m[i][j] = num;
            if(num < 0){
                num = num * (-1)
            }
            if(num > maior[i]){
                maior[i] = num
            }
        }
    }

        for(let i = 0; i < m.length; i++){
            n [i] = []
            for(let j = 0; j < m.length; j++){
                n[i][j] = (m[i][j] / maior[i]).toFixed(2);
            }
        }

    for(let i = 0; i < m.length; i++){
        console.log(m[i]+"")
    }
    console.log(maior)
    for(let i = 0; i < n.length; i++){
        console.log(n[i]+"")
    }
}

atv32();