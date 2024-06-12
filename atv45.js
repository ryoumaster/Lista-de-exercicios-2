/* 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function atv45(){
    const obj = {

    }, conjunto = ['paulo','paulo','eduardo','ferreira','duraes','duraes','duraes'];
    let guardar;


    for(let cont of conjunto){
        guardar = cont; //guardar pega o valor de cont
        if(obj[guardar]){ //guardar é usada como chave
            obj[guardar]++;
        }else {
            obj[guardar] = 1
        }
    }
    console.log(obj)
}

atv45();