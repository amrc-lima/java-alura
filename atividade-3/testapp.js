let contador = 0;

while (contador < 10){
    contador++;
    alert('Primeira contagem: ' + contador);
}


while (contador >= 0){
    alert('Segunda contagem: ' + contador);
    contador--;
}

contador = prompt('Insira um número maior que zero');
while (contador >= 0){
    console.log('Terceira contagem: ' + contador);
    contador--;
}

contador = 0;
let goal = prompt('Insira um número maior que zero');
while (contador <= goal){
    console.log('Quarta contagem: ' + contador);
    contador++;
}