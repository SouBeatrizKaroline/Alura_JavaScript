const notas = [10, 6.5, 8, 7.5];

/*notas.forEach(function (){
    console.log("oi");
});*/

/*notas.forEach(function (nota){
    console.log(nota);
});*/

let somaDasNotas = 0;

notas.forEach(function (nota, indice){
    somaDasNotas += nota;
    console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);