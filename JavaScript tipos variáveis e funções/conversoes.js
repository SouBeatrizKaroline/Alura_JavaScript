// tipo de dado
// booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) //false
console.log(numero == numeroString) //true

// 1 = atribuir valor a variavel
// 2 == compara só o valor (só o que esta dentro)
// 3 === compara o valor e tipo (se é string ou número)

//conversão explícita
//Number()
console.log(numero + Number(numeroString)); //912

//String()
console.log(numero + numeroString); //456456

//test1

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//test2

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

//test3

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

//test4

let largura2 = "10";
let altura2 = "5";
console.log( + largura2 * + altura2); // teremos a conversão de String para números realizado usando o + antes das variáveis

//test5
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.