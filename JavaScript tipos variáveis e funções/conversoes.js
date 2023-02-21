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