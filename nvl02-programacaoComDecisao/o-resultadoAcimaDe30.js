function resultadoAcimaDe30(numero){
    const dois = 2;
    let inteiro = Number.isInteger(numero)
    let multiplicacao = numero * dois;
    
    if (inteiro == true){
        if(multiplicacao >= 30){
            console.log(`O resultado da multiplicação é : ${multiplicacao}`)

        }else{
            console.log(`O resultado não é maior que 30.`)
        }

    }else{
        console.log(`O número digitado não é inteiro.`)
    }
}

resultadoAcimaDe30(20)