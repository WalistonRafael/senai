let tempAnual = []
let mediaTemp, acumuladora = 0

//1 - Armazenar dados na estrutura de dados -> ARRAY (VETOR)
for(let i = 0; i <12; i++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês 01"))
}
//2 - Mostrar/processar os valores do array de forma individual
for(let i = 0; i< tempAnual.length; i++){
    acumuladora = acumuladora + tempAnual[i] //dentro dos cochetes será o número do qual eu vou armazenar esse vetor
}

mediaTemp = tempAnual / tempAnual.length
console.log(typeof acumuladora) //number
console.log(typeof 12) //number
console.log(mediaTemp)
document.write(`<p>TempAnual:${tempAnual}</p>`)
document.write(<p>Média TempAnual: ${mediaTemp}</p>)

// tempAnual[0] = Number(prompt("Digite a temperatura do mês 00"))
// tempAnual[1] = Number(prompt("Digite a temperatura do mês 01"))
// tempAnual[2] = Number(prompt("Digite a temperatura do mês 02"))
// tempAnual[3] = Number(prompt("Digite a temperatura do mês 03"))
// tempAnual[4] = Number(prompt("Digite a temperatura do mês 04"))
