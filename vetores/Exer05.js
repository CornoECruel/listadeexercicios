function buscaLinear() {
    var fruta = ["banana", "laranja",  "maçã", "melancia", "tomate"];
    var frutaProcurado = window.prompt("Digite o nome de uma fruta:");
    var encontrado = false;
    for (var i = 0; i < fruta.length; i++) {
        if (fruta[i] === frutaProcurado) {
            encontrado = true;
            var posição = i+1; // adicionei o +1 pois o vetor começa na posição 0.
            break;
        }
}
if (encontrado) {
    window.alert("Fruta encontrada na posição: " + posição);
} else {
    window.alert("Fruta não encontrada.");

    }
}