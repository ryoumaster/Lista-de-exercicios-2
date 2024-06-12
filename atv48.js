/* 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

function atv48(){
    const lojaA = {
        lapis: 12,
        canetas: 20,
        folhaA4: 50,
        lapiseira:10
    },lojaB = {
        lapis:8,
        folhaA4:50,
        tesoura:10,
        postIt:50
    }

    function somarLojas(obj, obj2){
        const somarLojas = {

        }
        for(let chave in obj){
            somarLojas[chave] = obj[chave];        
        }

        for(let chave in obj2){
            if(somarLojas[chave]){
                somarLojas[chave] += obj2[chave];
            }
            else{
                somarLojas[chave] = obj2[chave];
            }
        }
        return somarLojas;
    }

    a = somarLojas(lojaA, lojaB);
    console.log(a);

}

atv48()