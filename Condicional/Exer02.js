function cnhDoBrasil() {
    var idade;
    idade = Number (window.prompt(`Informe sua idade:`));
    if (idade >= 18) {
        window.alert(`Você tem ${idade} anos, e pode tirar a CNH!`);
    } else {
        window.alert(`Você tem ${idade} anos, e não pode tirar a CNH!`);
    }
}