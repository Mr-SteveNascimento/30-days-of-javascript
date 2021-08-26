
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
    'Kenya',
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


// =========> 1 <=========
console.log('Questão 1 \n\n ');

const emptyArray = []

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

const array1 = [9, 1, 19, 6, 2, 4]


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

console.log(array1.length);

// =========> 4 <=========
console.log(array1[0]);
let middlePos = parseInt(array1.length - (array1.length / 2))
console.log(array1[array1.length - 1]);
console.log(array1[middlePos]);


// =========> 5 <=========
console.log('\n\nQuestão 4 \n\n ');

let mixedDataType = ['a', 1, true, { nome: 'steve' }, undefined]
console.log(mixedDataType.length);


// =========> 6 <=========
console.log('\n\nQuestão 5 \n\n ');

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');

console.log(itCompanies);

// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ');

console.log(itCompanies.length);


// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ');

middlePos = parseInt(itCompanies.length - (itCompanies.length / 2))
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[middlePos]);


// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ');

console.log(itCompanies.toString());


// =========> 11 <=========
console.log('\n\nQuestão 10 \n\n ');

console.log(itCompanies.toString().toUpperCase());


// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ');

console.log(`${itCompanies.toLocaleString}`);

// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ');

let company = 'Facebook'
let index13 = itCompanies.indexOf(company)
if (index13 != -1) {
    console.log(itCompanies[index13]);
} else {
    console.log('Empresa não encontrada.');
}

// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ');

let out14 = []
for (const i of countries) {
    if ((i.match(/o/gi) != null) && (i.match(/o/gi).length > 1)) {
        out14.push(i)
    }
}

// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ');

console.log(countries.sort());


// =========> 16 <=========
console.log('\n\nQuestão 16 \n\n ');

console.log(countries.reverse());


// =========> 17 <=========
console.log('\n\nQuestão 17 \n\n ');

const countries1 = [
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
    'Kenya',
]

console.log(countries1.slice(0, 3));


// =========> 18 <=========
console.log('\n\nQuestão 18 \n\n ');

console.log(countries1.slice(0, 3));



// =========> 19 <=========
console.log('\n\nQuestão 19 \n\n ');

if (webTechs.length % 2 == 1) {
    let k = parseInt(webTechs.length / 2)
    console.log(webTechs[k]);
} else {
    let start = (webTechs.length / 2)
    console.log(webTechs.slice(start, start + 1));
}

// =========> 20 <=========
console.log('\n\nQuestão 20 \n\n ');

console.log(webTechs.shift());


// =========> 21 <=========
console.log('\n\nQuestão 21 \n\n ');

const webTechs21 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]


if (webTechs21.length % 2 == 1) {
    let k = parseInt(webTechs21.length / 2)
    console.log(webTechs21.splice(k, 1));
} else {
    let start = (webTechs21.length / 2) - 1
    console.log(webTechs21.splice(start, 2));
}

// =========> 22 <=========
console.log('\n\nQuestão 22 \n\n ');

console.log(webTechs.pop());


// =========> 23 <=========
console.log('\n\nQuestão 23 \n\n ');

let webTechs23 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechs23 = webTechs23.splice()
console.log(webTechs23);