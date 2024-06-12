/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. */
    
    function fibonacci(){
    let guardar = [];
    let proximo, n1 = 0, n2 = 1;
    for (let i = 1; i < 15; i++){
        guardar.push(n1);
        proximo = n1 + n2
        n1 = n2;
        n2 = proximo;
    }
    for (let i = 0; i < 14; i++){
        console.log(guardar[i]);
    }
}
fibonacci();