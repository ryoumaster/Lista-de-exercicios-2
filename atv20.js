/* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require("prompt-sync")();
function atv20(){
    let folhaPagamento = []

    let nome, salario, matricula;

    for(let i = 0; i < 80; i++){
        nome = String(prompt("Digite o nome do funcionario: "));
        salario = parseFloat(prompt("Digite o Salario: "));
        matricula = parseInt(prompt("Digite a matricula: "));
        let funcionario = {
            matricula: matricula,
            nome: nome,
            salarioBruto: salario,
            deducaoINSS: 0,
            salarioLiquido: 0,
            calculoINSS: function(){
                this.deducaoINSS = this.salarioBruto * 12 / 100;
                return this.deducaoINSS;
            },
            calculoSalLiq: function(){
                this.salarioLiquido = this.salarioBruto - this.deducaoINSS;
                return this.salarioLiquido;
            }
    
        }
        folhaPagamento.push(funcionario);
    }

    for(let j = 0; j < 80; j++){
        console.log("-------------- Folha de pagamento --------------"+"\nMatricula: "+folhaPagamento[j].matricula+"\nNome: "+folhaPagamento[j].nome+"\nSalario: R$"+folhaPagamento[j].salarioBruto+"\nDedução inss: R$"+folhaPagamento[j].calculoINSS()+"\nSalario liquido: R$"+folhaPagamento[j].calculoSalLiq());
    }
}
atv20();