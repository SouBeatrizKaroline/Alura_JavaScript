const cliente = require("./cliente.json");

//console.log(cliente);

function encontrar(lista, chave, valor){
    //return lista.find((item) => item[chave] === valor);
    return lista.find((item) => item[chave].includes(valor));
}

//console.log(encontrar())

const encontrado = encontrar(cliente, "nome", "Kirby");

const encontrado2 = encontrar(cliente, "telefone", "1918820860")

//console.log(encontrado);

console.log(encontrado2);