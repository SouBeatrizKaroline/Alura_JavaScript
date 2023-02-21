const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero === segundoNumero);


const primeiroNumero2 = 5;
const segundoNumero2 = 5;

console.log(primeiroNumero2 === segundoNumero2);


let cadastroAtivado = true;
console.log(cadastroAtivado);


const texto1 = "Alura";
const texto2 = "a";

console.log(texto1 === texto2)


const text1 = "Alura";
const text2 = "alura";

console.log(text1 === text2)

//test1

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

//test2

let input1 = null;

if (input1 === null) {
 console.log('não há informação');
} else {
 console.log(input1);
}

//test3

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

//test4

console.log(null == undefined); // true
console.log(null === undefined); // false