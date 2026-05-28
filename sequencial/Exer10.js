function dev() {
    var sH, hT, salario, sD; // sH = salario Hora, hT = horas Trabalhadas no mes, sD = desconto no salario impostos
    sH = Number(window.prompt(`Informe o valor da hora trabalhada`));
    hT = Number(window.prompt(`Informe a quantidade de horas trabalhadas no mês`));
    salario = sH * hT;
    window.alert(`O salario mensal do Dev é de R$ ${salario}`);
    sD = salario - (salario * 0.08 );
    window.alert(`O salario do Dev com desconto de impostos é de R$ ${sD}`);
}