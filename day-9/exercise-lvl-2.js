
// Exercícios do dia 9 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

/**
 * 
 * 
 *          Este Exercício é executável apenas no Browser
 *          por conta da importação dos Countries e as variáveis
 *          globais do Level 1
 * 
 * 
 */


// =========> 1 <=========
console.log('\n\nQuestão 1 \n\n ');

const precoTotal1 = products.map(element => element.price)
    .filter(element => typeof element === 'number')
    .reduce((acc, current) => acc + current, 0);
console.log(precoTotal1);

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

const precoTotal2 = products.reduce((acc, curr) => {
    if (typeof curr.price === 'number') {
        return ((acc + parseInt(curr.price)));
    } else {
        return (acc);
    }
}, 0);
console.log(precoTotal2);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

/* let string = prompt('Vou encontrar países nos quais os nomes incluem a palavra que você digitar: ')
function categorizeCountries() {
    return countries2.map(element => element.name).filter(element => element.toLowerCase().includes(string))
}
console.log(categorizeCountries()); */

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

/* let letter = prompt('Vou encontrar países nos quais os nomes começam com a letra que você digitar: ').toLowerCase()
function numberOfTimes() {
    const countriesWithLetter = countries2.map(element => element.name)
        .filter(element => element.toLowerCase().startsWith(letter))
    return({letter: letter, number: countriesWithLetter.length})
}
console.log(numberOfTimes()); */

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

const getFirstTenCountries = countries2
    .splice(0, 10)
    .map(country => country.name)
    .sort();

console.log(getFirstTenCountries);


// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

const getLastTenCountries = countries2
    .splice(countries2.length - 10, countries2.length)
    .map(country => country.name)
    .sort();

console.log(getLastTenCountries);


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');

let conjunt = {}
countries2.forEach(element => {
    const firstLetter = element.name[0].toLowerCase()
    conjunt[firstLetter] ? conjunt[firstLetter] += 1 : conjunt[firstLetter] = 1;
})
let mostUsed = {letter: '', number: 0}
for (const key in conjunt) {
    if (conjunt[key] > mostUsed.number) {
        mostUsed.letter = key.toString()
        mostUsed.number = conjunt[key]
    }
}
console.log(mostUsed);