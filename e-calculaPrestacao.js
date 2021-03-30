function calculaAtrasoPrestacao(valor, taxa, tempo){

    let prestacao = valor + (valor * (taxa/100) * tempo)
    console.log(prestacao)
}

calculaAtrasoPrestacao(1000, 5, 4)