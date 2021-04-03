function candidatos(candidato1, candidato2, candidato3, nulo, branco){

    let totVotos = (candidato1 + candidato2 + candidato3 + nulo + branco);
    let totValido = (candidato1 + candidato2 + candidato3);

    let percentualValido = totValido / 100
    let percentualA = (candidato1  / totVotos) * 100  
    let percentualB = (candidato2 / totVotos) * 100
    let percentualC = (candidato3 / totVotos) * 100
    let percentualNulo = (nulo / totVotos) * 100
    let percentualBranco = (branco /totVotos) * 100


    console.log(`O percentual de votos válidos é: ${percentualValido}%`)
    console.log(`O percentual de votos em relação ao candidato A é: ${percentualA.toFixed(2)}`)
    console.log(`O percentual de votos em relação ao candidato B é:${percentualB.toFixed(2)}`)
    console.log(`O percentual de votos em relação ao candidato C é: ${percentualC.toFixed(2)}`)
    console.log(`O percentual de votos em relação aos votos nulos é: ${percentualNulo.toFixed(2)}`)
    console.log(`O percentual de votos em relação aos votos brancos é: ${percentualBranco.toFixed(2)}`)

}

candidatos(1000, 2000, 4000, 600, 120)
