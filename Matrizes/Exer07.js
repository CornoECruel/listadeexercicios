function matrizIdentidade(){
    var matriz = [];

    var numeroLinhaColunas = parseInt(window.prompt("informe um valor inteiro:"));

    for (let i = 0; i < numeroLinhaColunas; i++) {
        matriz[i] = [];
        for (let j = 0; j < numeroLinhaColunas; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    console.log(matriz);
    window.alert(`OBS NO CONSOLE LOG ELA APARECE IGUAL UMA MATRIZ, 
    A matriz identidade é: ${matriz}`);
} 