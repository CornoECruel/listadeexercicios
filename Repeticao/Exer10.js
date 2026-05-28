// confundi o filme "O jogo da imitação" com "O jogo da adivinhação", por isso o nome de Benedict Cumberbatch.
function jogoDaAdivinhacao() {
    var numero, tentativa;
    numero = Math.floor(Math.random() * 10) + 1;
    
    for (var i = 0; i < 10; i++) {
        tentativa = Number (window.prompt(`Tente adivinhar o número entre 1 e 10`));
        if (tentativa === numero) {
            window.alert(`Parabéns! Você adivinhou o número ${numero} em ${i + 1} tentativas!`);
            return;
        }   else if (tentativa < numero) {
            window.alert(`O número é maior! Tente novamente.`);
        } else {
            window.alert(`O número é menor! Tente novamente.`);
        }
    }
}