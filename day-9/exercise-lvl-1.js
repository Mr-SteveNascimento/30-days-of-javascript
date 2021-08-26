
// Exercícios do dia 9 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

let sum = 0;
numbers.forEach(num => sum += num)

console.log(sum)
console.log(numbers);


/**
 *  For each executa um laço no array, passando como parâmetros o valor no índice e uma 
 *  função callback, a cada valor do array, a callback é executada com o valor do índice
 *  como entrada. Não modifica o array original.
 * 
 *  Map executa um laço em um array e não modifica o array original. Ele recebe uma callback com
 *  os elementos : índice, array e parametro. A callback retorna o novo valor para a posição
 *  atual do laço em um novo array.
 * 
 *  Filter executa um laço em todo o array e retorna um novo array apenas com os elementos que
 *  passam pela função callback como verdadeiros
 * 
 *  Reduce recebe uma função callback. A função callback recebe um acumulador, o valor atual
 *  do laço na lista e o valor inicial do acumulador (opcional). O retorno da callback é
 *  passado para o próximo laço como acumulador automaticamente.
 * 
 */


// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

const precoAbaixoDeSete = products.filter((produto) => produto.price < 7);
console.log(precoAbaixoDeSete); // Filtra produtos que tem valor abaixo de 7


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

countries1.forEach((country) => console.log(country))


// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

console.log('Repetitiva!!!!');


// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

console.log('Repetitiva!!!!');

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

let newArray6 = countries1.map((element, index, arr) => element.toUpperCase())
console.log(newArray6);


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');

console.log('Repetitiva!!!!');


// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ');

console.log('Repetitiva!!!!');


// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ');

console.log('Repetitiva!!!!');


// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ');

const precosDosProdutos = products.map((element, index, arr) => {
    return `${element.product}: R$ ${element.price}`
})
console.log(precosDosProdutos);


// =========> 11 <=========
console.log('\n\nQuestão 11 \n\n ');

const countriesWithLand = countries1.filter((element) => element.toLowerCase().includes('land'))
console.log(countriesWithLand);


// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ');

console.log('Repetitiva!!!!');


// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ');

console.log('Repetitiva!!!!');


// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ');

console.log('Repetitiva!!!!');


// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ');

console.log('Repetitiva!!!!');


// =========> 16 <=========
console.log('\n\nQuestão 16 \n\n ');

function getStringLists(matrix) {
    let apenasStringArray = matrix.filter((element) => {
        return typeof element ==='string'
    })
    return apenasStringArray
}
console.log(getStringLists(["This is a string", 6, "Antonio", 7, 26]));


// =========> 17 <=========
console.log('\n\nQuestão 17 \n\n ');

let soma = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(soma);


// =========> 18 <=========
console.log('\n\nQuestão 18 \n\n ');

const frase = countries1.reduce((acc, curr) => acc + ', ' + curr, 'Estonia') + ' são países do norte da Europa.'
console.log(frase);

// =========> 19 <=========
console.log('\n\nQuestão 19 \n\n ');

/**
 * Some é usado para verificar se pelo menos um dos elementos do array satisfaz ma condição,
 * já o Every é para verificar se TODOS os elementos satisfazem uma condição
 */


// =========> 20 <=========
console.log('\n\nQuestão 20 \n\n ');

console.log(names.some(element => element.length > 7));

// =========> 21 <=========
console.log('\n\nQuestão 21 \n\n ');

console.log(countries1.every(element => element.toLowerCase().includes('land')))

// =========> 22 <=========
console.log('\n\nQuestão 22 \n\n ');

/**
 *  O Find retorna o primeiro elemento que satisfaz a condição, o Findindex 
 *  retorna o índice do elemento
 */

// =========> 23 <=========
console.log('\n\nQuestão 23 \n\n ');

console.log(countries1.find(element => element.length === 6));


// =========> 24 <=========
console.log('\n\nQuestão 24 \n\n ');

console.log(countries1.findIndex(element => element === 'Noruega'));


// =========> 25 <=========
console.log('\n\nQuestão 25 \n\n ');

console.log(countries1.findIndex(element => element === 'Rússia'));

