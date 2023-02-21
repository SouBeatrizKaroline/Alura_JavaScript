const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao1 = 'O Leo disse "Oi"';
console.log(citacao1)

const citacao2 = "O Leo disse 'Oi'";
console.log(citacao2)

const citacao = "Meu nome é ";
const meuNome = "Leonardo";

//concetenação (+)

console.log(citacao + meuNome)

//template string OU template literal

//test1

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//teste2

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//teste3

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

//test4

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres
