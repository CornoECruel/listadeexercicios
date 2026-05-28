function formaDePagamento() {
    var preço = parseFloat(prompt("Digite o preço do produto:"));
    var opção = parseInt(prompt("Escolha a forma de pagamento:\n1. À vista no Pix ou Dinheiro: 10% de desconto.\n2. À vista no Cartão de Crédito: 5% de desconto.\n3. Em 2x no Cartão: Preço normal da etiqueta.\n4. Em 3x ou mais no Cartão: 10% de juros sobre o preço normal."));
    
    switch (opção) { 
        //window.alert(`Use os numeros de 1 a 4 para escolher a forma de pagamento!`);
        // esse comando de window.alert esta impedido o loop de funcionar, e se eu coloco ele fora do loop ele só aparece apos ser escolhido a forma de pagamento.
    case 1:
        preço *= 0.9;
        window.alert(`O preço final é: R$${preço.toFixed(2)}
        Desconto de 10% aplicado!`);
        break;
    case 2:
        preço *= 0.95;
        window.alert(`O preço final é: R$${preço.toFixed(2)}
        Desconto de 5% aplicado!`);
        break;
    case 3:
        window.alert(`O preço final é: R$${preço.toFixed(2)}`);
        //faz sentido colocar que não tem desconto ou juros? deixei sem. 
        break;
    case 4:
        preço *= 1.1;
        window.alert(`O preço final é: R$${preço.toFixed(2)}
        Juros de 10% aplicados!`);
        break;
    default:
        window.alert("Opção inválida!");
}
}
/*
 1. À vista no Pix ou Dinheiro: 10% de desconto. 
 2. À vista no Cartão de Crédito: 5% de desconto. 
 3. Em 2x no Cartão: Preço normal da etiqueta. 
 4. Em 3x ou mais no Cartão: 10% de juros sobre o preço normal. 
 
 Dica: Crie um menu para o usuário escolher a opção de 1 a 4. 
 Dependendo da escolha, aplique a matemática correta sobre a variável do preço. 
*/