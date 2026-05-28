function atabela3x3 () {
    var matriz = [
        [11, 21, 31],
        [42, 52, 62],
        [73, 83, 93]
    ];

    for (var i = 0; i < matriz.length; i++) {
        var textoLinha = "";

        for (var j = 0; j < matriz[i].length; j++) {
            textoLinha += matriz[i][j] + "   "; 
        }

        window.alert("Linha " + (i + 1) + ": [ " + textoLinha + "]");
    }
}
/*
function atabela3x3 () {
    var matriz = [
        [11, 21, 31],
        [42, 52, 62],
        [73, 83, 93]
    ]
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            window.alert(matriz[i][j]);
        }
    }
}
*/