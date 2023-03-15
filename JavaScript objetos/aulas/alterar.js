const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome); //Luma

console.log(pessoa.telefone); //undifined

pessoa.telefone = "11 222333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
}

// pessoa = novaPessoa; //erro - atribuição para uma variavel constante