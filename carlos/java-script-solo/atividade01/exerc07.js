let lado1, lado2, lado3

lado1 = parseInt(prompt("Digite o valor do lado 1"))
lado2 = parseInt(prompt("Digite o valor do lado 2"))
lado3 = parseInt(prompt("Digite o valor do lado 3"))

if ((lado1 + lado2 >lado3) || (lado3 + lado1 >lado2) || (lado2 + lado3 >lado1)) {
    document.write(`Seu triangulo é valido`)
} else {
    document.write(`Seu triangulo não é válido`)    
}