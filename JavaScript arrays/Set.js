const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set([1, 1, 2, 3, 4, 4]);

// const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)];

// console.log(meuSet);

console.log(nomesAtualizados);