function idadeMaiorMenor() {
    var idade, maiorIdade, menorIdade;
    idade = Number (window.prompt(`Informe a idade`));
    maiorIdade = idade;
    menorIdade = idade;
    for (var i = 1; i < 5; i++) {
        idade = Number (window.prompt(`Informe outra idade`));
        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
        if (idade < menorIdade) {
            menorIdade = idade;
        }
    }
    window.alert(`A maior idade é: ${maiorIdade} e a menor idade é: ${menorIdade}`);
}