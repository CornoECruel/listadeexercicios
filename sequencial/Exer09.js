function dias() {
    var dia, anos, diasVividos;
    anos = Number(window.prompt(`Informe a sua Idade`));
    diasVividos = anos * 365;
    window.alert(`Você ja viveu aproximadamente ${diasVividos} dias`);
}