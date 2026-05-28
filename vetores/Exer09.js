function juntandoasPecas() {
    var vetor1 = [3, 5, 7];
    var vetor2 = [11, 13, 17];


    var vetores = [vetor1, vetor2].flat();
    window.alert("O vetor 1 é: " + vetor1.join(", "));
    window.alert("O vetor 2 é: " + vetor2.join(", "));
    window.alert("os vetores juntos são: " + vetores.join(", "));
}

/*
Desafio: Crie dois vetores de 3 posições cada, preenchidos com números diferentes.
Crie um terceiro vetor que seja a união dos dois primeiros, 
resultando em um vetor de 6 posições. Mostre o terceiro vetor na tela. 
• Dica: O JavaScript possui um método perfeito para isso chamado .concat(),
ou você pode usar o Spread Operator (...).
*/