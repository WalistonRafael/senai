let numero

numero = parseInt(prompt("Digite um número")) 

if ((numero%3 == 0) || (numero%5 == 0)) {
    if (numero%3 == 0) {
        document.write(`${numero} é múltiplo de 3`)
    } else {
        document.write(`${numero} é mútiplo de 5`)
    }
} else {
    document.write(`O seu número não é múltiplo de 3 ou 5`)
}