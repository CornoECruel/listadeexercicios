function somaDasLinhas(){
    let matriz = [
        [1, 2, 3, 10],
        [4, 5, 6, 11],
        [7, 8, 9, 12]
    ];
    let somas = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        somas.push(soma);
    }
    console.log(matriz);
    window.alert("As somas das linhas da matriz são: " + somas);
}