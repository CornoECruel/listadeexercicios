function fatorial() {
    var numero, resultado;
    numero = Number (window.prompt(`Informe um numero inteiro para calcular o fatorial`));
    resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    window.alert(`O fatorial de ${numero} é ${resultado}`);
}