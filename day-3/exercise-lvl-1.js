
// Exercícios do dia 3 do curso 30 dias de javascript


// =========> 1 <=========
console.log('Questão 1 \n\n ');

let firstName = 'Steve'
let lastName = 'Nascimento'
let country = 'Brasil'
let city = 'Maracanaú'
let age = 19
let isMarried = false
let year = 2021

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age,
    typeof isMarried, typeof year);

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

console.log(typeof '10' == typeof 10);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

console.log(parseInt('9.8') == 10);

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

console.log(typeof 'steve' == 'string');
console.log(typeof 34 == 'number');
console.log(2 == '2');

console.log(5 < 2);
console.log(3 * 2 == 9);
console.log(16 == '4 * 4');

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 //  true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');


3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) // false
!(4 < 3) // true
!(false) // true
!(4 > 3 && 10 < 12) // false 
!(4 > 3 && 10 > 12) // true
!(4 === '4') // true

console.log(3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log('python'.includes('on') && 'jargon'.includes('on'));

// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');

const now = new Date()
console.log(now.getFullYear()); // Ano
console.log(now.getMonth()); // Mês
console.log(now.getDay()); // Dia da semana
console.log(now.getDate()); // Dia do mês
console.log(now.getHours()); // Hora
console.log(now.getMinutes()); // Minuto

// Quantidade de segundos desde 1 de Janeiro de 1970
console.log(now.getTime());