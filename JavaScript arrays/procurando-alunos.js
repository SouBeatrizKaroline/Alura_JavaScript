const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

/*function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João"); */

/*function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        console.log(indice);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");*/

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(mediaDoAluno);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");