/* 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

function atv44(){
    const obj = {
        nomes:"paulo",
        idades:23,
        estado:"minas"
    };

    function propriedades(obj){
        let cont = 0;
        for(prop in obj){
            if((typeof(obj[prop]) === "string")){
                cont++;
            }
        }
        return cont;
    }

    console.log(`Ha ${propriedades(obj)} Strings`);

}

atv44()