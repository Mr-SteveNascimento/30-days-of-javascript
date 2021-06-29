// Exercícios do dia 2 do curso 30 dias de javascript


// =========> 1 <=========

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

// =========> 2 <=========

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

// =========> 3 <=========

console.log(typeof '10' === 10);
console.log(parseInt('10') === 10);

// =========> 4 <=========

console.log(parseFloat('9.8') === 10);
console.log(parseInt(parseFloat('9.8')) + 1 === 10);

// =========> 5 <=========

console.log('python'.includes('on'));
console.log('jargão'.includes('on'));

// =========> 6 <=========

console.log('I hope this course is not full of jargon'.includes('jargon'));

// =========> 7 <=========

console.log(parseInt(Math.random() * 100));

// =========> 8 <=========

console.log(parseInt(50 + Math.random() * 50));

// =========> 9 <=========

console.log(parseInt(Math.random() * 255));

// =========> 10 <=========

console.log('JavaScript'.charAt(parseInt(Math.random() * 10)));

// =========> 11 <=========

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

// =========> 12 <=========

const string = 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
const first = string.indexOf('porque');
const last = string.lastIndexOf('porque') + 6;
console.log(string.substring(first, last));