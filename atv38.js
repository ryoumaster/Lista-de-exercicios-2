/* 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require("prompt-sync")();

function atv38(){
    let numeros = [6], operacao;

    for(let i = 0; i < 6; i++){
        numeros[i] = parseInt(prompt(`Digite o numero da posição ${i + 1}: `))
    }

    console.log("1 - Soma | 2 - Produto | 3 - Media | 4 - Ordenar em ordem crescente | 5 - Imprimir vetor");
    operacao = parseInt(prompt("Digite a operação: "))

    while(operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4 && operacao != 5){
        console.log("1 - Soma | 2 - Produto | 3 - Media | 4 - Ordenar em ordem crescente | 5 - Imprimir vetor");
        operacao = parseInt(prompt("Digite a operação: "))
    }

    if(operacao === 1){
        let soma = 0;
        for(let i = 0; i < 6; i++){
            soma += numeros[i];
        }
        console.log("A soma dos valores é: "+ soma);
    }else if(operacao === 2){
        let prod = 1;
        for(let i = 0; i < 6; i++){
            prod *= numeros[i]
        }
        console.log("O produto dos valores é: "+ prod)
    }else if(operacao === 3){
        let media = 0;
        for(let i = 0; i < 6; i++){
            media += numeros[i];
        }
        media = media/6;
        console.log("A media dos numeros é: "+media);
    }else if(operacao === 4){
        numeros.sort();
        console.log(numeros);
    }else if(operacao === 5){
        console.log(numeros);
    }

}

atv38();