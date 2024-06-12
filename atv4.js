/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */
const prompt = require("prompt-sync")();
let lado1, lado2, lado3;
lado1 = parseFloat(prompt("Digite o lado 1: "));
lado2 = parseFloat(prompt("Digite o lado 2: "));
lado3 = parseFloat(prompt("Digite o lado 3: "));

function eTriangulo(lado1,lado2,lado3){
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
        return true;
    }
}
if (eTriangulo(lado1,lado2,lado3) === true){
    console.log("É possivel formar um triangulo");
}else console.log("Não é possivel formar um triangulo");
