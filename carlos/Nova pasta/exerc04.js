let nomeConta = valorConta;
let qtdConta = 0
valorTotal = 0;
let i = 1;

while (i !== 0) { 
    do {
        nomeConta = prompt("Qual conta irá pagar");
        if (nomeConta === "") {
            alert("A conta precisa de uma descrição, digite novamente");
        }
    } while (nomeConta === "");

    qtdConta++

    valorTotal = valorTotal + valorConta

    document.write(`<h4>${nomeConta} \t\t ------ \t\t ${valorConta}</h4>`)
    i = parseInt(prompt("Digite 1 para continuar cadastrado e 0 para sair"))
}

document.write(`<h3>Quantidade de contas: ${qtdConta} ------ ${valorTotal}</h3>`)

