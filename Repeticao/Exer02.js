function taboada() {
    var numero;
    numero = Number (window.prompt(`Informe o valor que deseja veririficar a taboada`));
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        window.alert(`${numero} x ${i} = ${resultado}`);
    }
}