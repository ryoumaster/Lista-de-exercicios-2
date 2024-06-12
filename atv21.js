/* 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require("prompt-sync")();
function atv21(){
    let alt, sexo, pesoIdeal = 0;
    alt = parseFloat(prompt("Digite sua altura: "));
    sexo = parseInt(prompt("Digite 1 para feminino ou 2 Para masculino: "));
    if(sexo == 1){
        pesoIdeal = 62.1 * alt - 44.7;
    }
    else if (sexo == 2){
        pesoIdeal = 72.2 * alt - 58;
    }
    console.log("Seu peso ideal é: "+pesoIdeal);
}

atv21();