//var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;

//let

let forma = 'retangulo';
let altura2 = 5;
let comprimento2 = 7;
let area2;

if(forma === 'retangulo'){
    area2 = altura2 * comprimento2;
}else{
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2)

//const

const forma2 = 'triangulo';
const altura3 = 5;
const comprimento3 = 7;
let area3;

if(forma2 === 'quadrado'){
    area3 = altura3 * comprimento3;
}else{
    area3 = (altura3 * comprimento3)/2;
}

console.log(area3)

//conseguimos utilizar tanto
//a var, que não é muito recomendada de se utilizar, hoje em dia, por ela ser muito solta; 
//a let, que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada;
//e a const que é fixa, o valor dela, uma vez declarado, fica preso nela e também tem que ser declarado antes.
//o var, como ele criado no começo do JavaScript quando não existia let e const,
//var era a única opção e todo mundo só podia usar var, então, pode ser que algumas documentações mais antigas ainda utilizem essa forma.