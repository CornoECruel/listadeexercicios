function maiorEmenorVetor() {
    let numeros = [];
    
    let maior;
    let menor;

    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        numeros.push(numero);

        if (i === 0) {
            maior = numero;
            menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            } else if (numero < menor) {
                menor = numero;
            }
        }
    }

    window.alert("Vetor completo: [" + numeros.join(", ") + "]\n\nO maior número é: " + maior + "\nO menor número é: " + menor);
}
/*
function maiorEmenorVetor() {
    // agora o codigo não salva os numeros no vetor, mas antes tbm nao estava salvando esntoa continua igual.
    vou deixar isso aqui para me lembrar que insistir no erro é errado, passei muito tempo tentando corrigir isso, foi mais rapido fazer do zero.
    let numeros = [];
    let maior;
    let menor;
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        numeros.push(numero);
        if (numero > maior) {
            maior = numero;
        }
        else if (numero < menor) {
            menor = numero;
        }
    }
    window.alert("O maior número é: " + maior + "\nO menor número é: " + menor);
} 
*/