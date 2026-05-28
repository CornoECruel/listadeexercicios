function filtrandoPares() {
    var numeros = [];
    var pares = [];
    for (var i = 0; i < 10; i++) {
        numeros.push(parseInt(prompt("Digite o número " + (i + 1) + ":")));
    }  
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    window.alert("Números pares: [" + pares.join(", ") + "]");
}