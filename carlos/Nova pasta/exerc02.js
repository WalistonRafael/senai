alert("Digite 0 para sair do programa")
let numero

do {numero = parseInt(prompt("Digite um número"))
    
   if (numero === 0 || isNaN(numero)) {
    //confirmar a saída 
    let sair = prompt("Confirmar saída")
    if (sair) {
        break
    }else{
        continue
    }
   }

    
} while (true);

