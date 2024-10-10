
let numero, contador = 0 

do {
    numero = parseInt(prompt("Digite um valor a variável número"))
    if (numero <= 0 || isNaN(numero)) {
        alert("Digite um número inteiro maior que 0")
    }
} while (numero <= 0 || isNaN(numero));
//essa estrutura vai repetir de 1 até o número que o usuario vai digitar 
for(let i = 1; i <= numero; i++){
    document.write(`${numero} %${i} = ${numero%i} <br>`)
    //numero que o usuário digitou dividido pelo valor de i
    if (numero % i == 0){
        contador++ //vai receber 1 a cada divisão com o resto 0
    }
}
//fim da estrutura que vai repeyir de 1 até o número que o usuário vai digitar
if (contador === 2) {
    document.write(`O número ${numero} é primo`)
}else{
    document.write(`O número ${numero} não é primo`)
}

