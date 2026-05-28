function caixaRegistradora() {
    var valorTotal, valorProduto;
    valorTotal = 0;
    while (true) {
        valorProduto = Number (window.prompt(`Informe o valor do produto ou 0 para finalizar a compra`));
        if (valorProduto === 0) {
            break;
        }
        valorTotal += valorProduto;
    }
    window.alert(`O valor total da compra é: R$ ${valorTotal}`);
}