function diagonalPrincipal() {
    let matriz = [
        [1, 2, 3, 6],
        [4, 5, 6, 15],
        [7, 8, 9, 24],
        [10, 11, 12, 33],
    ];
    let diagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                diagonal.push(matriz[i][j]);
            }
        }
    }
    console.log(matriz);
    window.alert("A diagonal principal da matriz é: " + diagonal);
}