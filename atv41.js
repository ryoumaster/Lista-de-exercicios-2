/* 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

const prompt = require("prompt-sync")();

function atv41(){
    let pessoa = {
        nome:"Paulo",
        idade:23
    };

    console.log(pessoa.idade);

    pessoa.email = String(prompt("Digite um email ex: paulo@gmail.com: " ));

    for(key in pessoa){ //usa ne obj
        console.log(pessoa[key]);
    }

}

atv41();