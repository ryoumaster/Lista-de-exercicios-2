/* 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

function atv46(){
    const objs = [{vendedor:"paulo",total:14},{vendedor:"eduardo",total:15},{vendedor:"ferreira",total:12},{vendedor:"eduardo",total:5}], totalVendas = {};
    for(let cont of objs){
        let vendedor = cont.vendedor;
        let venda = cont.total;
        if(totalVendas[vendedor]){
            totalVendas[vendedor] += venda;
        }
        else {
            totalVendas[vendedor] = venda;
        }
    }
    
    for(let cont in totalVendas){
        console.log(`${cont} : ${totalVendas[cont]}`)
    }
}

atv46()