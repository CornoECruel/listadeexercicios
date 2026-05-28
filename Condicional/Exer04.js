function saudacaoDoSistema() {
    var hora;
    hora = Number (window.prompt(`Informe a hora atual (0-23):`));
    if (hora >= 0 && hora < 12) {
        window.alert("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
        window.alert("Boa tarde!");
    } else if (hora >= 18 && hora <= 23) {
        window.alert("Boa noite!");
    } else {
        window.alert("Hora inválida");
    }
}