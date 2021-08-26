
// Exercícios do dia 10 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

u = [...a, ...b];

console.log(a);
console.log(b);
console.log(u);

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

let i = a.filter(element  => b.includes(element));
console.log(i);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let w = new Map();
if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
        w.set(a[i], b[i]);       
    }
    console.log(w);
} else {
    alert('Questão 3 Nível 2\nOs Arrays não possuem o mesmo tamanho!')
}