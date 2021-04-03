function verificaParOuImpar(numero){

    let inteiro = Number.isInteger(numero)

    if(inteiro == true){
        if(numero % 2 == 0){
            console.log(`O número ${numero} é par!`)
        }else{
            console.log(`O número ${numero} é impar!`)
        }
    }else{
        console.log(`Entrada permitida somente de números inteiros`)
    }
}

verificaParOuImpar(6.1)