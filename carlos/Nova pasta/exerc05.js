let qtdChinchilas, anosFazenda
let totalChinchilas = 1 

do {
    qtdChinchilas = parseInt(prompt("Digite a quantidade de chinchilas"))
    if (qtdChinchilas < 2 || isNaN(qtdChinchilas)) {
        alert("Números de chinchilas deve ser maior que 2")
    }
} while (qtdChinchilas < 2 || isNaN(qtdChinchilas));

do {
    anosFazenda = parseInt(prompt("Digite por quantos anos você irá criar Chinchilas"))
    if (anosFazenda < 1 || isNaN(anosFazenda)) {
        alert("Tempo de criação inválido")
    }
} while (anosFazenda < 1 || isNaN(anosFazenda))

document.write(`Quantidades Chinchilas ${qtdChinchilas}, tempo de criação:${anosFazenda}`)

totalChinchilas = qtdChinchilas

for(let i = 2; i <= anosFazenda; i++){
    totalChinchilas = totalChinchilas * 3
    //totalChinchilas *= 3
    document.write("<br>+totalChinchilas")
}

document.write(`Ao final de ${anosFazenda} você irá ter o total de ${totalChinchilas} Chinchilas`)

