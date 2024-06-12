/* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

function atv16(){
    numeros = [20];
    for (let i = 0; i<20; i++){
        numeros[i] = parseInt(Math.random() * (99 - 0) + 0);
        console.log(numeros[i]);
    }
    numeros.sort();
    console.log("-----------Numeros ordenados----------")
    for (let j = 0; j < 20; j++){
        console.log(numeros[j]);
    }
}
atv16();