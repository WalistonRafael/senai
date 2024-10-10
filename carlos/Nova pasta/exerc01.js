//primeira maneira 

let numero = 1 

while(numero != 0){
    alert("Entrou laço")
    numero = parseInt(prompt("Digite 0 para sair"))
}

//segunda maneira - continue - break

for(let i = 1; i<=10; i++){
    if (i === 5 || i ===8) {
        continue
    }

    if (i === 7) {
        break
    }
    console.log("i; "+i)
}

