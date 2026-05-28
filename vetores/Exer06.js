function deTrasparaFrente() {
    var vetor = [];
    var vetorInvertido = [];
    for (var i = 4; i >= 0; i--) {
        var numero = parseFloat(prompt("Digite o número " + (5 - i) + ":"));
        vetor.push(numero);
    }
    for (var i = vetor.length - 1; i >= 0; i--) {
        vetorInvertido.push(vetor[i]);
    }
    window.alert("Vetor invertido: [" + vetorInvertido.join(", ") + "]");
}