function imc() {
    var peso, altura, imc;
    peso = Number (window.prompt(`Informe o peso em kg:`));
    altura = Number (window.prompt(`Informe a altura em metros:`));
    imc = peso / (altura * altura);
    if (imc < 18.5) {
        window.alert(`Seu IMC é ${imc.toFixed(2)}, abaixo do peso!`);
    } else if (imc >= 18.5 && imc < 25) {
        window.alert(`Seu IMC é ${imc.toFixed(2)}, peso normal!`);
    }   else if (imc >= 25 && imc < 30) {
        window.alert(`Seu IMC é ${imc.toFixed(2)}, sobrepeso!`);
    } else {
        window.alert(`Seu IMC é ${imc.toFixed(2)}, obesidade`);
    }
}


    /*
    Abaixo de 18.5: Abaixo do peso 
    Entre 18.5 e 24.9: Peso normal 
    Entre 25.0 e 29.9: Sobrepeso 
    Acima de 30.0: Obesidade 
    */