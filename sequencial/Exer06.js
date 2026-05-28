function terreno() {
    var largura, comprimento, area;
    largura = Number(window.prompt(`Informe a largura do terrenbo`));
    comprimento = Number(window.prompt(`Informe o comprimento do terreno`));
    area = largura * comprimento;
    window.alert(`Área do terreno é ${area}m²`);
}