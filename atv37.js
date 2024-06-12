/* 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const prompt = require("prompt-sync")();

function atv37(){
    let G = [20], R = [], cont = [];

    for(let i = 0; i < 20; i++){
        G[i] = []
        G[i] = String(prompt(`Digite a resposta da questão ${i + 1}: `)); 
        while(G[i] != 'a' && G[i] != 'A' && G[i] != 'b' && G[i] != 'B' && G[i] != 'c' && G[i] != 'C' && G[i] != 'd' && G[i] != 'D'){
            G[i] = [];
            G[i] = String(prompt(`Digite a resposta da questão ${i + 1}: `))
        }
    }

    for(let i = 0; i < 50; i++){
        R[i] = [];
        for(let j = 0; j < 20; j++){
            R[i][j] = String(prompt(`Digite a resposta da questão ${j + 1} do aluno ${i + 1}: `));
            while(R[i][j] != 'a' && R[i][j] != 'A' && R[i][j] != 'b' && R[i][j] != 'B' && R[i][j] != 'c' && R[i][j] != 'C' 
                && R[i][j] != 'd' && R[i][j] != 'D'){
                R[i][j] = [];
                R[i][j] = String(prompt(`Digite a resposta da questão ${j + 1} do aluno ${i + 1}: `))
            }
        }
    }

    for(let i = 0; i < 50; i++){
        cont[i] = []
        cont[i] = 0;
        for(let j = 0; j<20; j++){
            if(R[i][j] === G[j]){
                cont[i] += 1;
            }
        }
    }

    for (let i = 0; i < 50; i++){
        if(cont[i] >= 12){
            console.log(`O aluno ${i + 1} acertou ${cont[i]}, situação: APROVADO`)
        }else console.log(`O aluno ${i + 1} acertou ${cont[i]}, situação: REPROVADO`)
    }
}

atv37();