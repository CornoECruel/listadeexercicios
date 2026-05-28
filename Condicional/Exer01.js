function parOuImpar() {
    var numero;
    numero = Number (window.prompt(`Informe um numero inteiro:`));
    if (numero % 2 === 0) {
        window.alert(`O número ${numero} é par!`);
    } else {
        window.alert(`O número ${numero} é ímpar!`);
    }
}