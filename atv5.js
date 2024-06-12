/* 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")();
let player1, player2;
console.log("Digite a sua opção\n1 - Pedra\n2 - Tesoura\n3 - Papel");
while(player1 != 1 && player1 != 2 && player1 != 3){
player1 = parseInt(prompt("Jogador 1 faça sua escolha: "));
}
while(player2 != 1 && player2 != 2 && player2 !=  3){
player2 = parseInt(prompt("Jogador 2 faça sua escolha: "));
}
if ((player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 3)||(player1 == 3 && player2 == 1)){
    console.log("Player 1 venceu!");
}
else if((player2 == 2 && player1 == 3)||(player2 == 1 && player1 == 2)||(player2 == 3 && player1 == 1)){
    console.log("Player 2 venceu!");
}
else console.log("EMPATE");
