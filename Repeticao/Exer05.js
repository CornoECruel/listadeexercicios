function senhaIncorreta() {
    var senhaCorreta = window.prompt("Cadastre a senha:");
    var tentativa;

    do {
        tentativa = window.prompt("Digite a senha para entrar:");

        if (tentativa !== senhaCorreta) {
            window.alert("Senha incorreta, tente novamente!");
        }

    } while (tentativa !== senhaCorreta);

    window.alert("Senha correta!");
}
/*
function senhaIncorreta() {
    var senha = window.prompt(`Qual vai ser a senha?:`);
    var a = 0;

    while (senha !== a) {
        window.alert(`Senha incorreta, tente novamente!`);
        a = window.prompt(`Digite a senha:`);
    }
    window.alert(`Senha correta!`);
}
*/