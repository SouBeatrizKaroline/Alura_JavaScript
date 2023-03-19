import chalk from "chalk";

function extraiLinks (arrLinks) {
    //loop
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                return response.status;
            }catch (erro){
                return manejaErros(erro);
            }

        })
    )
    return arrStatus;
    //return listaURLs.map(async (url) => {
    }

    function manejaErros (erro){
        //console.log(chalk.red('algo deu errado'), erro);
        if (erro.cause.code === 'ENOTFOUND') {
            return 'link não encontrado';
        } else {
            return 'ocorreu algum erro';
        }
    }

export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    //console.log(status);
    //return status;
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
    
    //return 'entrou na função';
    //return extraiLinks(listaDeLinks);
}

/*
const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
*/

/*
[Teste de retorno 400](https://httpstat.us/404).
[gatinho salsicha](http://gatinhosalsicha.com.br/)
*/