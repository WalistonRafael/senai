/**Faça um algoritmo para ler duas variáveis A e B e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. apresentada na tela os dois valores trocados (antes AB, depois AB). */

let a, b

a = parseInt(prompt("Digite o valor de A"))
b = parseInt(prompt("Digite o valor de B"))

document.write(`O valor de A: ${a} e B: ${b} <br>`)
document.write(`${a - b} <br>`)

temp = a
a = b
b = temp

document.write(`O valor de A: ${b} e B: ${b}<b>`)
document.write(`${a - b} <br>`)

