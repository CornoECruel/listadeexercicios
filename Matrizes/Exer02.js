function somaMatriz() {
    var matriz = [];
    var soma = 0;

    for (var i = 0; i < 3; i++) {
        matriz[i] = [];

        for (var j = 0; j < 3; j++) {
            
            var numero = parseFloat(window.prompt("Digite o número para a posição [" + i + "][" + j + "]:"));
            
            matriz[i][j] = numero;
            
            soma += numero;
        }
    }
    console.log(matriz);
    window.alert("A soma de todos os elementos da matriz é: " + soma);
}
/* eu tentei reaproveitar o codigo que nao deu muito certo no anterior, aqui só acumulei mais erros.
function somaMatriz () {
    var matriz = [];
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            window.alert("Digite um numero para a posição [" + i + "][" + j + "]");
            matriz[i][j] = parseFloat(window.prompt());
            soma += matriz[i][j];
        }
    }
    window.alert("Soma: " + soma);
}
*/