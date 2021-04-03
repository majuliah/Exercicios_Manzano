function verificaResultadoMaiorQue100(numero1, numero2, numero3){

    const maximo = 100;
    let soma = (numero1 + numero2 + numero3);
    let inteiro = Number.isInteger(numero1, numero2, numero3)

    if(inteiro == true){
        if(soma >= maximo){
            console.log(`O resultado da soma é: ${soma}`)
        }else{
            console.log(`O resultado da soma é menor que 100`)
        }
    }else{
        console.log(`Soma somente permitida para números INTEIROS.`)
    }   
}
verificaResultadoMaiorQue100(51.2 , 20 , 30)