/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")();
let chute, valor;
valor = Math.floor(Math.random() * 10);
let acertou = false;
 while(acertou == false){
    chute = parseInt(prompt("Digite o chute: "));
    if (chute > valor){
        console.log("Chute um valor mais baixo");
    }
    else if (chute < valor){
        console.log("chute um valor mais alto");
    }
    else {
        acertou = true
        console.log("Você acertou!!");
    }
 }