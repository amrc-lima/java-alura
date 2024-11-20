console.log('Boas vindas!');

let nome = 'Eduardo';
console.log("Olá, " + nome);

alert('Olá, ' + nome);

let favoriteLanguage = prompt("Qual linguagem de programação você mais gosta?");
console.log(favoriteLanguage);

let valor1 = 12, valor2 = 18;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

valor1 = 50, valor2 = 30;
resultado = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt("Insira sua idade: ");
if (idade < 18){
    console.log("Você é um menor de idade");
} else {
    console.log('Você é de maior');
}

let numero = prompt('Insira um valor');
if (numero < 0){
    alert('O número é negativo');
} else if (numero > 0){
    alert('O número é positivo')
} else { 
    alert ('O número é zero')
}

let count = 1;
while (count <= 10){
    console.log('Count = ' + count);
    count++;
}

let nota = 8;
if (nota >= 7){
    console.log('Aprovado');
} else {
    console.log("Reprovado");
}

console.log(Math.random());

console.log(parseInt(Math.random() * 10) + 1)

console.log(parseInt(Math.random() * 1000) + 1)