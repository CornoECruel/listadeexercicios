function blackFriday() {
    var valor, vD, vF; // v quase sempre representa valor, vai que eu esqueço.
    valor = Number(window.prompt(`Informe o valor do produto`));
    vD = Number(window.prompt(`Informe a porcentagem do disconto`));
    vF = valor - (valor * (vD / 100)); // Parece estranho porem funciona, de alguma forma.
    window.alert(`O valor final é de R$ ${vF}`);
}