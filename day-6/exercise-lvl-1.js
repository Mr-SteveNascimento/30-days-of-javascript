
// Exercícios do dia 6 do curso 30 dias de javascript

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


for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('\n');

i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('\n');

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);
console.log('\n');


// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');


for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('\n');

i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
console.log('\n');

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);
console.log('\n');


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');


/* let n = parseInt(prompt("enter number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
} */


// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ')

/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/


let hashtag = '';
for (let i = 0; i <= 6; i++) {
    hashtag += "#";
    console.log(hashtag);
}


// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ')

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ')

/*
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/


for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log('i  i^2  i^3');
    }
    console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ')


for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i}`);
    }
}


// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ')


for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`${i}`);
    }
}


// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ')


for (let i = 0; i <= 100; i++) {
    let divisãoExata = (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0);
    let quocienteMenorQueDivisor = (i / 2) < 2 || (i / 3) < 3 || (i / 5) < 5 || (i / 7) < 7 || (i / 11) < 11;
    if (!divisãoExata && quocienteMenorQueDivisor) {
        console.log(i)
    } else if (i == 0) {
        console.log('2, 3, 5, 7, 11 são também números primos');
    }
}


// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ')

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`O somatório de todos os números de 0 a 100 é: ${sum}.`);

// =========> 11 <=========
console.log('\n\nQuestão 11 \n\n ')

let pares = 0;
let impares = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        pares += i;
    } else if (i % 2 !== 0) {
        impares += i;
    }
}
console.log(`O somatório de todos os números pares: ${pares}. Somatório de todos os números ímpares: ${impares}.`);

// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ')


let somaParImpar = [0, 0];
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        somaParImpar[0] += i;
    } else if (i % 2 !== 0) {
        somaParImpar[1] += i;
    }
}
console.log(somaParImpar);


// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ')

let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random() * 10)); // Numero aleatório entre 0 e 10
}
console.log(arr);

// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ')

let unicoArray = [];
for (let i = 5; unicoArray.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (unicoArray.indexOf(random) === -1) {
        unicoArray.push(random);
    }
}
console.log(unicoArray);

// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ')

let letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let letrasAleat = '';
for (let i = 0; i < 6; i++) {
    let aleat = Math.floor(Math.random() * letras.length);
    letrasAleat += letras[aleat];
}
console.log(letrasAleat);