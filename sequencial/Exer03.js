function alunoMedia() {
    var nome, n1, n2, n3, media;
    nome = window.prompt('Informe o nome do aluno:');
    n1 = Number(window.prompt('Informe a primeira nota:'));
    n2 = Number(window.prompt('Informe a segunda nota:'));
    n3 = Number(window.prompt('Informe a terceira nota:'));
    media = (n1 + n2 + n3) / 3;
    if (media >= 7) {
        media = media.toFixed(2);
        window.alert(`O aluno ${nome}, Tem media ${media} e foi aprovado`);
    } else {
        media = media.toFixed(2);
        window.alert(`O aluno ${nome}, Tem media ${media} e foi reprovado`);
    }   
    //window.alert(`O aluno ${nome}, Tem media ${media}`);
}