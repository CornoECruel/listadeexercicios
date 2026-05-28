function listaDeConvidados() {
    let convidados = ["Rock", "Nina", "Frida", "Argos", "Zeus"];
    /* window.alert("Lista de Convidados:\n\n" + convidados.join("\n"));
    Só vi agora que os nomes devem ser apresentados usando o for.
    */
    for (let i = 0; i < convidados.length; i++) {
        window.alert("Convidado " + (i + 1) + ": " + convidados[i]);
    }
}