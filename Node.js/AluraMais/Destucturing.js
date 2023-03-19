const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

//const [num1, num2] = [1, 2];
//const num1 = 1;
//const num2 = 2;

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

const pessoa = {
    nome: 'Ju',
    idade: 25,
};

const pessoaComTelefone = {
    ...pessoa, telefone: 123123123,
};

//const { nome } = pessoa;

const { idade } = pessoa;

//const nome = pessoa.nome;

//console.log(nome);

//console.log(idade);

//console.log(pessoa, pessoaComTelefone)

//const [nome1 = 'Ju'] = [];

//console.log(num1, num2, ...outrosNumeros);
//console.log(num1, num2);
//console.log(numeros);

//function imprimeDados(dados)({nome, idade}){
function imprimeDados({nome, idade}){
    //const{ nome, idade } = dados
    console.log(nome, idade)
    //console.log(dados)
};

imprimeDados(pessoa);