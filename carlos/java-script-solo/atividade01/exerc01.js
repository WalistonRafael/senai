let numero01, numero02

numero01 = parseFloat(prompt("Digite um número inteiro"))
numero02 = parseFloat(prompt("Digite outro"))

if (numero01 > numero02) {
    document.write(`O seu maoir número digitado foi: ${numero01}`)
    
} else {
    document.write(`O seu maior número digitado foi: ${numero02}`)
}