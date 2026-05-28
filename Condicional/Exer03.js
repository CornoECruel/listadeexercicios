function boletimEscolar() {
    var nota1, nota2, media;
    nota1 = Number (window.prompt(`Informe a primeira nota:`));
    nota2 = Number (window.prompt(`Informe a segunda nota:`));
        media = (nota1 + nota2) / 2;
        if (media >= 7) {
            window.alert(`Sua média é ${media}, você foi APROVADO!`);
        } else if (media >= 5 && media < 7) {
            window.alert(`Sua média é ${media}, você está de RECUPERAÇÃO!`);
        } else {
            window.alert(`Sua média é ${media}, você foi REPROVADO!`);
        }
}