/*
function TransposiçãodeMatriz(){
    var matriz = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    for (var i = 0; i < matriz[0].length; i++) {
        var linha = "";
        for (var j = 0; j < matriz.length; j++) {
            linha += matriz[j][i] + " ";
        }
        console.log(linha);
        window.alert(linha);
    }
}
*/

function TransposicaoDeMatriz(){
    var matriz = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    var textoOriginal = "";
    for (var i = 0; i < matriz.length; i++) {
        textoOriginal += "[ " + matriz[i].join("   ") + " ]\n";
    }

    var textoTransposta = "";
    for (var i = 0; i < matriz[0].length; i++) {
        var linha = "";
        for (var j = 0; j < matriz.length; j++) {
            linha += matriz[j][i] + "   ";
        }
        textoTransposta += "[ " + linha.trim() + " ]\n";
    }

    console.log("Original:\n" + textoOriginal);
    console.log("Transposta:\n" + textoTransposta);

    window.alert(
        " MATRIZ ORIGINAL \n" + textoOriginal + 
        "\n" +
        " MATRIZ TRANSPOSTA \n" + textoTransposta
    );
}

/*
Dica: O laço externo deve iterar sobre as colunas da matriz original,
e o laço interno sobre as linhas.
O novo valor será matrizTransposta[j][i] = matrizOriginal[i][j]. 
*/