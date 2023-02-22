function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90

   console.log(operacaoMatematica(15, 30, 45))

//test

/*
if (condicao) {
    // código a ser executado
}
*/

const num = 10;

if (num === null) {
    console.log('número não fornecido');
}

/*
const num = 10;

if (num !== null) {
    console.log(`o número é ${num}`);
}
*/


if (num) {
    console.log(`o número é ${num}`);
}

/*
const num = null;

if (num === null) {
 console.log('número não fornecido');
}
*/


if (!num) {
    console.log('número não fornecido');
}

/*
const num = 11;

if (num > 10 || !num) {
 console.log('número não válido');
}
*/

/*
const num = 11;

if (num > 10 && num < 20) {
 console.log('número válido');
}
*/


function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10

/*
const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}
*/