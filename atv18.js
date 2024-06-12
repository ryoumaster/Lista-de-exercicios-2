/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require("prompt-sync")();

let funcionario = {
    nome: "",
    cargo: "", 
    salario: 0,
    construtor: function(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario
    },
}

let nome, cargo, salario;
nome = String(prompt("Digite o nome: "));
cargo = String(prompt("Digite o cargo: "));
salario = parseFloat(prompt("Digite o salario: "));

funcionario.construtor(nome, cargo, salario);

console.log("----------- FUNCIONARIO ---------"+"\nNome: "+funcionario.nome+"\nCargo: "+funcionario.cargo+"\nSalario: R$"+funcionario.salario);