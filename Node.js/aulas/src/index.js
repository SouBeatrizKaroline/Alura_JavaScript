import fs from 'fs';
import chalk from 'chalk';

//const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    //const capturas = texto.match(regex);
    //const capturas = regex.exec(texto);
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    //console.log(capturas);
    //console.log(resultados);
    //return resultados;
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

/*
[
    {titulo:URL}
]
*/

//extraiLinks(textoTeste);

function trataErro(erro) {
    //throw new Error(erro);
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        // console.log(extraiLinks(texto));
        //console.log(chalk.green(texto));
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo;

// -------------------------------------------

// pegaArquivo('./arquivos/texto.md');

// pegaArquivo('./arquivos/');

// -------------------------------------------

// promises com then()
/*
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        // .catch((erro) => trataErro(erro))
        .catch(trataErro)
}
*/

// -------------------------------------------

/*
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
};
*/

// -------------------------------------------
// const chalk = require('chalk');
// -------------------------------------------

/*
console.log(chalk.blue('olá mundo'));

console.log('olá mundo');
console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
*/

// \[[^[\]]*?\]

// \(https?:\/\/[^\s?#.].[^\s]*\)

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)