function geradordemultiplos() {
    var numero = parseInt(prompt("Digite um número:"));
    var quantidade = parseInt(prompt("Digite a quantidade de múltiplos:"));
    var multiplos = [];
    // comecei com i = 0, e deu errado, só precisei trocar para i = 1, e i <= quantidade, antes estava apenas como i < quantidade.
    for (var i = 1; i <= quantidade; i++) {
        multiplos.push(numero * i);
    }
    window.alert("Os múltiplos são: " + multiplos.join(", "));
}