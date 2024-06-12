/* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function atv28(){

let matriz = [
    [5, 7, 1, 8, 5, 2, 3, 4, 6, 9],
    [3, 6, 9, 0, 4, 7, 5, 1, 8, 2],
    [5, 2, 8, 3, 6, 1, 7, 9, 0, 4],
    [7, 4, 0, 5, 3, 9, 2, 6, 1, 8],
    [1, 9, 2, 6, 7, 8, 4, 0, 5, 3],
    [6, 3, 5, 1, 9, 0, 8, 7, 2, 4],
    [9, 8, 4, 2, 1, 6, 0, 5, 3, 7],
    [4, 5, 7, 9, 2, 3, 6, 8, 1, 0],
    [2, 1, 3, 7, 0, 5, 9, 4, 8, 6],
    [8, 0, 6, 4, 5, 7, 1, 3, 9, 2]
];

let diagAcima = 0, diagAbaixo = 0, matrizAcima = [], matrizAbaixo = [];

for (let l = 0; l < matriz.length; l++){
    matrizAcima[l] = []
    for(let c = 0; c < matriz.length; c++){
        if (c > l){
            diagAcima += matriz[l][c];
            matrizAcima [l][c] = matriz [l][c];
        }
        else {
            matrizAcima[l][c] = 0;
        }
    }
}

for (let l = 0; l < matriz.length; l++){
    matrizAbaixo [l] = []
    for(let c = 0; c < matriz.length; c++){
        if (c < l){
            diagAbaixo += matriz[l][c];
            matrizAbaixo[l][c] = matriz[l][c];
        }
        else {
            matrizAbaixo[l][c] = 0
        }
    }
}

console.log("A soma dos valores acima da diagonal principal é: "+diagAcima);
console.log("A soma dos valores abaixo da diagonal principal é: "+diagAbaixo);

for(let i = 0; i < matrizAcima.length; i++){
    console.log(matrizAcima[i] +"");
}
console.log("------------------------------")
for(let i = 0; i < matrizAcima.length; i++){
    console.log(matrizAbaixo[i] +"");
}
}

atv28();