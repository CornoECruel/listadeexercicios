function moedas() {
    var vR, vD;
    vR = Number(window.prompt('Informe quantos reais você tem:'));
    vD = vR / 5;
    window.alert(`Você tem R$${vR}, que equivalem a US$${vD.toFixed(2)}.`);
}