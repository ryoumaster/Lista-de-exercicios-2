/* 47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

function atv47(){
    obj = {
        nome:"paulo",
        idade:23,
        salario:1500
    };

    function alterarObj(obj){
        const novoObj = {}
        for(let chave in obj){
           if(typeof(obj[chave]) === "number"){
            novoObj[chave] = obj[chave] * 2;
           }else{
            novoObj[chave] = obj[chave];
           }
        }
        return novoObj
    }

    let a = alterarObj(obj);
    console.log(a)
}

atv47();