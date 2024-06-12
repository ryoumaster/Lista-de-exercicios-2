/* 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

const prompt = require("prompt-sync")();

function atv22(){
    let populacao = [], adicionar = 0, salario = 0, filhos = 0;
    do{
        adicionar = 2;
        salario = parseFloat(prompt("Digite o Salario: "));
        filhos = parseInt(prompt("Digite a quantidade de filhos: "));
        let pessoa = {
            salario: salario,
            filhos: filhos
        }
        populacao.push(pessoa);
        while((adicionar != 1) && (adicionar != 0)){
        adicionar = parseInt(prompt("Para adicionar outra pessoa Digite 1, para sair digite 0: "));
        }
    } while(adicionar == 1);

    let totalSalarios = 0, mediaSalarios = 0, mediaFilhos = 0, totalFilhos = 0, maiorSalario = 0, percentual = 0, totalPessoas = 0; 

    for(let i = 0; i < populacao.length; i++){
        totalSalarios += populacao[i].salario;
        totalFilhos += populacao[i].filhos;
        totalPessoas++;
        if(totalPessoas == 1 || populacao[i].salario > maiorSalario){
            maiorSalario = populacao[i].salario;
        }
        if (populacao[i].salario > 350.00){
            percentual++;
        }
    }
    
    percentual = (percentual/totalPessoas)*100;
    mediaSalarios = totalSalarios/totalPessoas;
    mediaFilhos = totalFilhos/totalPessoas;

    console.log("A media salarial é: "+mediaSalarios+"\nA media de filhos é: "+mediaFilhos+"\nO maior salario é:"+maiorSalario+"\nPercentual: "+percentual+"%");
}

atv22();