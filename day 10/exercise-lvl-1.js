
// Exercícios do dia 10 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

const set1 = new Set();
console.log(set1);

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

let set2 = new Set();
for (let i = 0; i <= 10; i++) {
    set2.add(i);
}
console.log(set2);


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let set3 = new Set([...a]);
console.log(set3);
set3.delete(8)
console.log(set3);

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

let set4 = new Set([...a]);
console.log(set4);
set4.clear()
console.log(set4);

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

let set5 = new Set(countries);
console.log(set5);
set5.add('Brasil');
set5.add('Canada');
console.log(set5);


// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

let map1 = new Map();
countries.forEach(element => {
    map1.set(element, element.length)
})
console.log(map1);