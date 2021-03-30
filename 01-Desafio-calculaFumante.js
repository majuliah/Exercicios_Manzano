function calculaTempoPerdido(cigarrosPorDia, anosFumados){
    const ano = 365
    const minutos = 10
    const tempoDia = 1440

    let totalTempo = anosFumados * ano
    let totalCigarros = cigarrosPorDia * totalTempo

    let tempoPerdido = totalCigarros * minutos
    let minutoParaDia = tempoPerdido / tempoDia

    console.log(minutoParaDia.toFixed(2))
}

calculaTempoPerdido(10, 6)


