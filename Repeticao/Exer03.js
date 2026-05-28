function somaTurbo() {
    var numero1, numero2, resultado;
    numero1 = Number (window.prompt(`Informe quantos numeros deseja somar`));
    resultado = 0;
    for (var i = 1; i <= numero1; i++) {
        numero2 = Number (window.prompt(`Informe o ${i}º numero`));
        resultado+= numero2;
    }
    window.alert(`O resultado da soma é: ${resultado}`);
}