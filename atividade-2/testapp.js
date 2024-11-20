let points = 0;
let saldo = 0;

let today = prompt('Qual dia da semana é hoje?');

if ((today == 'Sábado') || (today == 'Domingo')){
    alert('Bom fim de semana!');
    points = points + 75;
} else {
    alert ( 'Boa semana!' );
    points = points + 25;
}

let typedNumber = prompt('Insira um número');

if (typedNumber > 0){
    alert('O número é positivo');
    points = points + 25;
} else if (typedNumber < 0) {
        alert('O número é negativo');
        points = points + 75;
    }

if (points >= 100){
    alert ('Parabéns, você venceu');
    saldo = saldo + points;
} else {
    alert('Tente novamente para ganhar');
}

alert(`Seu saldo em conta é: R$ ${saldo},00`);

let nome = prompt("Por favor, insira seu nome: ");
alert('Boas-vindas, ' + nome);