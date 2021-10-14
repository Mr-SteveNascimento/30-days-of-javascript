
// Exercícios do dia 17 do curso 30 dias de javascript

localStorage.clear()

console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

localStorage.setItem('firstName', 'Steve');
localStorage.setItem('lastName', 'Nascimento');
localStorage.setItem('age', '20');
localStorage.setItem('country', 'Brasil');
localStorage.setItem('city', 'Maracanaú');
console.log(localStorage);

// Exercícios do dia 17 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

const personAccount = {
    name: 'Steve',
    lastName: 'Nascimento',
    age: 20,
    skills: ['javascript', 'react', 'plsql'],
    country: 'Brasil'
}

const user = JSON.stringify(personAccount, undefined, 4)

localStorage.setItem('personAccount', user)

console.log(localStorage);