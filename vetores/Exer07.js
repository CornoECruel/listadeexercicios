function mediadaTurmacomVetores() {
    var notas = []; 
    var soma = 0;

    for (var i = 0; i < 5; i++) {
        var nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
        notas.push(nota);
        soma += nota;
    }

    var mediaTurma = soma / notas.length;

    var alunosAcimaDaMedia = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] > 6.5) {
            alunosAcimaDaMedia++;
        }/*é para usar a media geral para verificar quem ficou com media maior do que a media geral ?*/
    }

    window.alert(
        "Média geral da turma: " + mediaTurma.toFixed(2) + 
        "\nQuantidade de alunos acima da média: " + alunosAcimaDaMedia);
}
/*li uma linha da questão e tentei prever o que deveria ser feito? mas como eu parei nisso?
function mediadaTurmacomVetores() {
    var aluno1 = [];
    var aluno2 = [];
    var aluno3 = [];
    var aluno4 = [];
    var aluno5 = [];
    var mediaAluno1 = 0;
    var mediaAluno2 = 0;
    var mediaAluno3 = 0;
    var mediaAluno4 = 0;
    var mediaAluno5 = 0;
    var soma = 0;
    for (var i = 0; i < 4; i++) {
        var nota1 = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno 1:"));
        aluno1.push(nota1);
        soma += nota1;
    }
    mediaAluno1 = soma / aluno1.length;
    soma = 0;
    for (var i = 0; i < 4; i++) {
        var nota2 = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno 2:"));
        aluno2.push(nota2);
        soma += nota2;
    }
    mediaAluno2 = soma / aluno2.length;
    soma = 0;
    for (var i = 0; i < 4; i++) {
        var nota3 = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno 3:"));
        aluno3.push(nota3);
        soma += nota3;
    }
    mediaAluno3 = soma / aluno3.length;
    soma = 0;
    for (var i = 0; i < 4; i++) {
        var nota4 = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno 4:"));
        aluno4.push(nota4);
        soma += nota4;
    }
    mediaAluno4 = soma / aluno4.length;
    soma = 0;
    for (var i = 0; i < 4; i++) {
        var nota5 = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno 5:"));
        aluno5.push(nota5);
        soma += nota5;
    }
    mediaAluno5 = soma / aluno5.length;
    var mediaTurma = (mediaAluno1 + mediaAluno2 + mediaAluno3 + mediaAluno4 + mediaAluno5) / 5;
    window.alert("A média da turma é: " + mediaTurma.toFixed(2));
}
*/