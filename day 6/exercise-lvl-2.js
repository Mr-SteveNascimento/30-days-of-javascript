// Exercícios do dia 5 do curso 30 dias de javascript

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// =========> 1 <=========
console.log('Questão 1 \n\n ');

/* let letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let letrasAleator = '';
let n = parseInt(prompt('Qual o comprimento do id a ser gerado?'));
for (let i = 0; i < n; i++) {
    let aleat = Math.floor(Math.random() * letras.length);
    letrasAleator += letras[aleat];
}
console.log(letrasAleator); */

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');



let letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let letrasAle = '';
for (let i = 0; i < 6; i++) {
    let al = Math.floor(Math.random() * letras.length);
    letrasAle += letras[al];
}
console.log(`${'#' + letrasAle}`);



// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');


let rgbNum = []
for (let i = 0; i < 3; i++) {
    let aleat = (Math.floor(Math.random() * 256));
    rgbNum.push(aleat)
}
console.log(`rgb(${rgbNum[0]}, ${rgbNum[1]}, ${rgbNum[2]})`);

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);


// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);


// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

const arrayOfArrays = [];
for (const country of countries) {
    console.log([country, country.toUpperCase().slice(0, 3), country.length]);
}


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');


let countWith = []
let countWithout = []
for (const country of countries) {
    if (country.includes('land')) {
        countWith.push(country);
    } else {
        countWithout.push(country);
    }
}
console.log('Paises que contém a palavra \'land\':');
console.log(countWith);

console.log('\n');

console.log('Paises sem a palavra \'land\':');
console.log(countWithout);


// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ');


let countWithIa = []
let countWithoutIa = []
for (const country of countries) {
    if (country.slice(country.length - 2, country.length).includes('ia')) {
        countWithIa.push(country);
    } else {
        countWithoutIa.push(country);
    }
}
console.log('Paises que terminam com \'ia\':');
console.log(countWithIa);

console.log('\n');

console.log('Paises que não terminam com \'ia\':');
console.log(countWithoutIa);


// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ');

let countriesComprimento9 = [];
for (const country of countries) {
    countriesComprimento9.push(country.length);
}
let maiorComprimento9 = Math.max(...countriesComprimento9);
console.log(`O país que contém o maior número de letras é: \n\n
    ${countries[countriesComprimento9.indexOf(maiorComprimento9)]}\n\n
    Com ${maiorComprimento9} caracteres.`);


// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ');

let apenas5 = [];
for (const country of countries) {
    if (country.length === 5) {
        apenas5.push(country);
    }
}
console.log(apenas5);


// =========> 11 <=========
console.log('\n\nQuestão 11 \n\n ');


let webTechsComprimento = [];
for (const webTech of webTechs) {
    webTechsComprimento.push(webTech.length);
}
let maiorComprimento = Math.max(...webTechsComprimento);
console.log(`A tecnologia web com maior número de letras é: \n\n
    ${webTechs[webTechsComprimento.indexOf(maiorComprimento)]}\n\n
    Com ${maiorComprimento} caracteres.`);



// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ');

let arrayOfArrays12 = [];
for (const webTech of webTechs) {
    arrayOfArrays12.push([webTech, webTech.length])
}
console.log(arrayOfArrays12);

// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ');

for (const mern of mernStack) {
    console.log(mern[0])
}


// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ');

let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let tech of techs) {
    console.log(tech);
}


// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ');

let frutas = ['banana', 'orange', 'mango', 'lemon'];
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i]);
}


// =========> 16 <=========
console.log('\n\nQuestão 16 \n\n ');



const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const primeiroArray = fullStack[0];
const segundoArray = fullStack[1];
const arrayUnico = primeiroArray.concat(segundoArray);
for (const i of arrayUnico) {
    console.log(i);
}
