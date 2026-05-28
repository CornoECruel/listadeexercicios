function semana() {
    var dia;
    dia = Number (window.prompt(`Informe um número de 1 a 7 para verificar o dia da semana:`));
    switch (dia) {
        case 1:
            window.alert(`O número ${dia} é Domingo.`);
            break;
        case 2:
            window.alert(`O número ${dia} é Segunda-feira.`);
            break;
        case 3:
            window.alert(`O número ${dia} é Terça-feira.`);
            break;
        case 4:
            window.alert(`O número ${dia} é Quarta-feira.`);
            break;
        case 5:
            window.alert(`O número ${dia} é Quinta-feira.`);
            break;
        case 6:
            window.alert(`O número ${dia} é Sexta-feira.`);
            break;
        case 7:
            window.alert(`O número ${dia} é Sábado.`);
            break;
        default:
            window.alert(`Número inválido, informe um número de 1 a 7.`);
    }
}   