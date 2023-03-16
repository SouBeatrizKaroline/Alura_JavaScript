const clientes = require("./cliente.json");

function filtrarApartamentoSemComplemento(cliente){
    return clientes.filter((cliente) => {
        return ( cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);