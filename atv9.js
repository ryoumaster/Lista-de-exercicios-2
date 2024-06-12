/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();
function salarios(){
    salarioH = Array();
    salarioM = Array();
    let i = 1;
    let h = 0;
    let m = 0;
    let addH = 0, addM = 0, totalH = 0, totalM = 0; 
    while( i != 0){
        addH = parseInt(prompt("Para adicionar salario de um homem aperte 1: "));
        if(addH == 1){
            salarioH[h] = parseFloat(prompt("Digite o Salario: R$"));
            h++;
        }
        addM = parseInt(prompt("Para adicionar salario de uma mulher aperte 1: "));
        if(addM == 1){
            salarioM[m] = parseFloat(prompt("Digite o Salario: R$"));
            m++;
        }
        i = parseInt(prompt("Para adicionar outro salario aperte 1, para sair aperte 0: "));
    }
    for (let j = 0; j < salarioH.length; j++){
        totalH += salarioH[j];
    }
    for (let j = 0; j < salarioM.length; j++){
        totalM += salarioM[j];
    }
    console.log("O total feminino é: R$"+totalM+"\nO total masculino é: R$"+totalH);
}

salarios();