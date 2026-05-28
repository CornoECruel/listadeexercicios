function oMaiordaMatriz () {
    var matriz = [
        [94, 82, 171, 11],
        [17, 22, 3, 43],
        [58, 63, 77, 82],
        [9, 15, 28, 36]
    ];
    console.log(matriz);
    var maior = matriz[0][0];
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }
    window.alert("O maior numero da matriz é: " + maior);
}