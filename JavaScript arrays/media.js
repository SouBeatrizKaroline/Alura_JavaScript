const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);

const notas = [10, 6.5, 8, 7.5];

const media1 = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
console.log(media1);

const media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media2);

const media3 = (notas[0 + 1 + 2 + 3]) / notas.length;
console.log(media3); //NaN

const media4 = (notas[0, 1, 2, 3]) / notas.length;
console.log(media4); //1.875