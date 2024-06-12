/* 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

const prompt = require("prompt-sync")();

function atv42(){
    let dados = {
        nome:"Paulo",
        idade:23,
        numerosApostados:[2,3,1,4],
        irmaos:['Barbara','Camila','Leonardo']
    }, 
    novo = {

    };

    for (array in dados){
        if(Array.isArray(dados[array])){
            novo[array] = dados[array]
        }
    }

    for (let propriedade in novo){
        console.log(`${propriedade} : ${novo[propriedade]}`)
    }
    
}

atv42()