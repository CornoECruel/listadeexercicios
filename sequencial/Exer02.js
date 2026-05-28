function vizinho() {
    var numero, vA, vB;
    numero = Number(window.prompt('Informe um número:'));
    vA = numero -1;
    vB = numero +1;
    window.alert(`O numero escolhido foi ${numero}, o seu antecessor é ${vA}, e o seu sucessor é ${vB}`);
}