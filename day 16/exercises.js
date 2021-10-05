
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}


// Alteração na feature


// Exercícios do dia 16 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

const s = JSON.stringify(skills, undefined, 4)
console.log(s);


// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

const ageJSON = JSON.stringify(age, undefined, 4);
console.log(ageJSON);


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

const i = JSON.stringify(isMarried, undefined, 4);
console.log(i);


// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

const st = JSON.stringify(student, undefined, 4);
console.log(st);

// Exercícios do dia 16 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

const filterStudentJSON = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log(filterStudentJSON);
