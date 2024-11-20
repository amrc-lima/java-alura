alert('Boas vindas ao jogo do número secreto');

let maxNumber = 5000
let numeroSecreto = parseInt(Math.random() * maxNumber) + 1;
let chute;
let attempts = 0;
// enquanto o chute não for igual ao número secreto

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e ' + maxNumber);
    attempts++;
    console.log('Tentativas: ' + attempts)
    console.log('Valor do chute: ' + chute);
    console.log('Resultado da comparação:', chute == numeroSecreto);

    // se o chute for igual ao numero secreto

    if (chute == numeroSecreto) {
        // o while para
        break;        
    } else {
        console.log('Valor do número secreto: ' + numeroSecreto);
        let lowerOrHigher = chute < numeroSecreto ? 'maior' : 'menor';
        alert(`O número secreto é ${lowerOrHigher} que ${chute}`);
    }
}

let palavraTentativa = attempts > 1 ? 'tentativas': 'tentativa'

alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${attempts} ${palavraTentativa}.`);