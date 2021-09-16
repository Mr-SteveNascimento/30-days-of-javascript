
// Exercícios do dia 13 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');


// =========> 1 <=========
console.log('Questão 1 \n\n ');

console.table(countries.filter((_country,index) => index < 10)) // printing only the first 10 countries

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n '); 

// Type the name of the country 

const nameOfCountry = prompt('Type the name of the country: ').toString().toLowerCase();

let exists = false;
let objectCountry = null;
for (const country in countries) {
    if (countries[country].name.toLowerCase() === nameOfCountry) {
        objectCountry = countries[country];
        exists = true;
        break;
    }
}
if (exists) {
    console.table(objectCountry);
} else {
    console.error('The country typed not exists!');
}

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n '); 

console.group('Countries');
console.table(countries.filter((_country,index) => index < 10)); // printing only the first 10 countries
console.table(objectCountry);
console.groupEnd();