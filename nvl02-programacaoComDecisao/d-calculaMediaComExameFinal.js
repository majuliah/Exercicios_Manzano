function mediaComRecuperacao(nota1, nota2, nota3, nota4, notaExameFinal){

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let media2 = (notaExameFinal + media) / 2

    if ( media >= 7 ){
        console.log("APROVADO!")
        console.log(`A média obtida foi de: ${media}`)
    }else if( media2 >= 5) {
        console.log("APROVADO COM EXAME FINAL!")
    }else{
        console.log("REPROVADO!!")
    }
}

mediaComRecuperacao(5, 3, 4, 2, 2)


