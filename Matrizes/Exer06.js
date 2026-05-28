function multiplicandoporumEscalar(){
    var matriz = [[3, 5], [7, 11]];
    var matriz2 = [];
    var escalar;

    console.log(matriz);

    var escalar = parseInt(window.prompt("informe um valor inteiro:"));

    for (var i = 0; i < matriz.length; i++){
        for (var j = 0; j < matriz[i].length; j++){
            matriz[i][j] *= escalar;
            matriz2.push(matriz[i][j]);
        }
    }
    window.alert("A nova matriz multiplicada pelo escalar é: " + matriz2);
} 