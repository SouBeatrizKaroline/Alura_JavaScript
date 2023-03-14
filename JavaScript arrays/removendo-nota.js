const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

const notas1 = [10, 6, 8, 5.5, 10];

notas1.pop();

console.log(notas1);

const notas2 = [10, 6, 8, 5.5, 10];

notas2.pop();

const media = ((notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length);

console.log(media);

console.log(`A média é ${media}.`);