function calculaVelocidadeProjetil(valorDistancia, valorTempo){

    let distancia = valorDistancia * 1000
    let tempo = valorTempo * 60

    let velocidade = distancia / tempo

    console.log(velocidade.toFixed(3))


}
calculaVelocidadeProjetil(20, 2)