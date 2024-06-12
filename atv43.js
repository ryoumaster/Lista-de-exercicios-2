/* 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

function atv43(){
    const obj1 = {
        nome:"Paulo",
        idade:23,
        endereco:"Algum lugar ai",
        cidade:"cidade do paulo"
     },
     obj2 = {
        nome:"Erik",
        idade:29,
        endereco:"Fim do mundo",
        musica:"sympathy is a knife"
     },
     comb = {

     };

     for(propriedade in obj1){
        comb[propriedade] = obj1[propriedade];
     }

     for(propriedade in obj2){
        comb[propriedade] = obj2[propriedade]
     }

     for(propriedade in comb){
        console.log(`${propriedade} : ${comb[propriedade]}`)
     }
}

atv43();