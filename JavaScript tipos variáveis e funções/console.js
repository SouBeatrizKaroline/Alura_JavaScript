// log -> registro
// console.log()

const minhaVar = true;

console.log(245)
console.log("eu sou um texto")
console.log(minhaVar)

// tratamento de erro!

console.error('deu erro!')

/*
    console.error() para exibir mensagens de erro;
    console.table() para visualizar de forma mais organizada informações tabulares;
    console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
    console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
*/

console.log("deu erro");
console.error("deu erro");

console.log("deu erro");
// console.error(new Error("deu erro"));
/* deu erro
    Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/