function quatroOperacoes() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var operacao = prompt("Digite a operação desejada (+, -, *, /):");

    switch (operacao) {
        case "+":
            window.alert(`O resultado da soma é: ${num1 + num2}`);
            break;
        case "-":
            window.alert(`O resultado da subtração é: ${num1 - num2}`);
            break;
        case "*":
            window.alert(`O resultado da multiplicação é: ${num1 * num2}`);
            break;
        case "/":
            if (num2 === 0) {
                window.alert("Divisão por zero não pode");
            } else {
                window.alert(`O resultado da divisão é: ${num1 / num2}`);
            }
            break;
        default:
            window.alert("Operacao inválida!");
    }
}