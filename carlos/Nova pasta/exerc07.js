
let numero, numPerfect = 0 

// 6 = 

do {
    numero = parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if (numero <= 0 || isNaN(numero)) {
        alert("Número digitado inválido")
    }
} while (numero <= 0 || isNaN(numero));

for(let i = 1; i<= numero; i++){
    if(numero % i === 0){
        numPerfect = numPerfect + i 
    }
}

if(numPerfect === numero){
    document.write(`O número ${numero} é um número perfeito.`)
}else{
    document.write(`O número ${numero} não é um número perfeito`)
}