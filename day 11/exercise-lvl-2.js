
// Exercícios do dia 11 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

/**
 * 
 *      Execute esse código no browser através do arquivo Index.html
 * 
 *      O Code Runner do VS Code não funciona nesse caso
 * 
 */


// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
};

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

for (const {name, scores, skills, age} of users) {
    if (skills.length <= 2) {
        console.log(name, scores, skills, age);
    };
};