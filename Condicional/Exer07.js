function triangulo() {
    var lado1, lado2, lado3;
    lado1 = Number (window.prompt(`Informe o tamanho do primeiro lado :`));
    lado2 = Number (window.prompt(`Informe o tamanho do segundo lado :`));
    lado3 = Number (window.prompt(`Informe o tamanho do terceiro lado :`));
    if (lado1 == lado2 && lado2 == lado3) {
        window.alert(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo equilátero!`);
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        window.alert(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo isósceles!`);
    } else {
        window.alert(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo escaleno!`);
    }
    /*if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        window.alert(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo!`);
    } else {
        window.alert(`Os lados ${lado1}, ${lado2} e ${lado3} não formam um triângulo!`);
    }*/
}



/*
Equilátero: Todos os lados iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados diferentes.
*/