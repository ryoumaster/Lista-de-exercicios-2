const prompt = require("prompt-sync")();

/* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */
function atv35(){
    let impar = [5], par = [5], numeros, contPar = 0, contImpar = 0;
    for(let i = 0; i < 30; i++){
        numeros = parseInt(prompt("Digite um numero: "));
        if(numeros%2 === 0){
            par[contPar] = numeros;
            contPar += 1;
            if(contPar >= 5){
                contPar = 0;
                console.log("Vetor par Cheio: "+par);
            }
        }
        else{
            impar[contImpar] = numeros;
            contImpar +=1;
            if (contImpar >= 5){
                contImpar = 0;
                console.log("Vetor impar cheio: "+ impar);
            }
        }
            
            
    }
    console.log("Vetor impar: "+impar);
    console.log("Vetor par: "+par);
}

atv35();