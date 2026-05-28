function fibonacci() {
    var numero, a = 0, b = 1, resultado;
    numero = Number (window.prompt(`Informe um numero inteiro para calcular a sequência de Fibonacci`));
    var sequencia = `Sequencia de Fibonacci: ${a}, ${b}`;
    for (var i = 2; i <= numero; i++) {
        resultado = a + b;
        sequencia += `, ${resultado}`;
        a = b;
        b = resultado;
    }
    window.alert(sequencia);
}
