
// Exercícios do dia 21 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

document.querySelector('p')

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

document.getElementById('p1')
document.getElementById('p2')
document.getElementById('p3')
document.getElementById('p4')


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let allthem = document.querySelectorAll('p')

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

allthem.forEach(title => console.log(title))

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

/* document.getElementById('p4').textContent = '4 Parágrafo Alterado' */

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');


let paragrafos = document.querySelectorAll('p')
paragrafos.forEach((e, i) => {
    e.classList = ['classeAleatoria']
    e.id = `newP${i}`
})


// Exercícios do dia 21 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

paragrafos.forEach((e) => {
    e.style.color = '#0F0'
})

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

paragrafos.forEach((e, i) => {
    if (i === 1 | i === 3) {
        e.style.color = '#F00'
    }
    if (i === 0 | i === 2) {
        e.style.color = '#0F0'
    }
})

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

paragrafos.forEach((e, i) => {
    e.textContent = `novo conteudo do paragrafo ${i}`
    e.id = `newID${i}`
    e.classList = [`newClass${i}`]
})