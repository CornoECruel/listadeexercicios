function restaurante() {
    var tC, tG, vT; //tC = total da conta, tG = taxa de serviço do garçom, vT = valor total
    tC = Number (window.prompt(`Informe o valor total da conta`));
    tG = Number (window.prompt(`Informe a taxa de serviço do garçom`));
    vT = tC + (tC * tG / 100);
    window.alert(`O valor total que deve ser pago é de R$ ${vT}`);
}