function LimpandoosRepetidos() {
    var vetor = [1, 2, 2, 3, 4, 4, 4, 5];
    var vetorsemrepetição = [...new Set(vetor)];
    window.alert("O vetor original é: " + vetor.join(", "));
    window.alert("O vetor sem repetição é: " + vetorsemrepetição.join(", "));
}