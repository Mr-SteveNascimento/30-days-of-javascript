
// Exercícios do dia 4 do curso 30 dias de javascript


// =========> 1 <=========
console.log('Questão 1 \n\n ');

let idade1 = parseInt(prompt('Digite sua idade: '))
if (idade1 >= 18) {
    alert('Você tem idade para dirigir!')
} else {
    alert(`Em ${18 - idade1} ${(18 - idade1 === 1) ? 'ano' : 'anos'} você poderá dirigir!`)
}

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

const myAge = 25
let yourAge = parseInt(prompt('Digite sua idade: '))
if (yourAge >= myAge) {
    console.log(`Você é ${yourAge - myAge} anos mais velho que eu.`);
} else {
    console.log(`Você é ${myAge - yourAge} anos mais novo que eu.`);
}


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

const a = 4
const b = 3
if (a > b) {
    console.log('a é maior que b.');
} else {
    console.log('b é maior que a');
}
console.log(`${(a > b) ? 'a é maior que b' : 'b é maior que a'}`);



// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

let num = parseInt(prompt(`Insira um número: `))
alert(`${num} é um número ${(num % 2 === 0) ? 'par' : 'ímpar'}`)
