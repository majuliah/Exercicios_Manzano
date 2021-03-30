function calculaVolumeEsfera(raio){

    const valorPi = 3.14159
    let volume = (4/3) * valorPi * (Math.pow(raio, 3))

    console.log(volume.toFixed(2))

}

calculaVolumeEsfera(2)