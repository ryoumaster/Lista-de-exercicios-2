/* 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

function fibonacci(){
    let proximo, n1 = 0, n2 = 1;
    for (let i = 1; i < 11; i++){
        console.log(n1);
        proximo = n1 + n2
        n1 = n2;
        n2 = proximo;
    }
}
fibonacci();