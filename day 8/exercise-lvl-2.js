// Exercícios do dia 8 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}



// =========> 1 <=========
console.log('\n\nQuestão 1 \n\n ');


let result
let count = 0
function mostSkilled() {
    for (const key in users) {
        if (users[key].skills.length > count) {
            count = users[key].skills.length
            result = key
        }
    }
    return(`${result} é a pessoa com mais habilidades, um total de ${count} habilidades.`)
}
console.log(mostSkilled());


// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

let countLogged = 0;

function loggedIn() {
	for (const key in users) {
		if (users[key].isLoggedIn === true) {
			countLogged++;
		}
	}
	return `${countLogged} usuários estão onlines.`;
}

console.log(loggedIn());

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let MERNDevs = [];

function findMERNDevs() {
    for (const key in users) {
        if (users[key].skills.includes('Express', 'MongoDB', 'React', 'Node')) {
            MERNDevs.push(key);
        }
    }
    return MERNDevs;
}
    
console.log(findMERNDevs());

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

const newUsers = Object.assign([], users);

newUsers.push('Stevenson');

console.log(newUsers);

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

const keys = Object.keys(users)
console.log(keys);


// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

const values = Object.values(users)
console.log(values);


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');


function show(index) {
    let newCountrie
    try {
        newCountrie = Object.assign(countries[index])

    } catch (error) {
        throw new Error('O número de país inserido não existe!')   
    }
    console.log(`
    Nome: ${newCountrie.name}\n
    Capital: ${newCountrie.capital}\n
    População: ${newCountrie.population}\n
    Idiomas: ${newCountrie.languages.join(', ')}`);
}

let i = prompt('Digite o número de um país:')
show(i)