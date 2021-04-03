function calculaMediaAluno(nota1, nota2, nota3, nota4){

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 5 ){
        console.log("APROVADO!")
    }else{
        console.log("REPROVADO!")
    }

    console.log(`A média foi: ${media}`)

}

calculaMediaAluno(7, 8, 9, 10)