/*
    let x = "";
    console.log(x)
    x = "oi";
*/

// DECLARAÇÃO DE FUNÇÃO

// 1)declara a função
                        //string
function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi")
imprimeTexto("outro texto")

// três formas de escrever funções

/*
    function soma(){
        const resultado = 2 + 2;
    }
*/

//soma()

//console.log(soma())

function soma(){
    //outros códigos
    //vários console.log()
    return 2 + 2;
    //o que for escrito depois do return não será executado
}

console.log(soma())

/*
                        //2 -> valor de soma()
    function imprimeTexto(texto){
        console.log(texto)
    }
*/

imprimeTexto(soma())