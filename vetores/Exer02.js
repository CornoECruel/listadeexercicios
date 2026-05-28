function aSomaDeTudo() {
    var numeros = [1, 2, 3, 4, 5];
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    window.alert("A soma de todos os números é: " + soma);
}