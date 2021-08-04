// Exercícios do dia 7 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

// =========> 1 <=========
console.log('\n\nQuestão 1 \n\n ');

/* let a = prompt('Digite o valor de a: ');
let b = prompt('Digite o valor de b: ');
let c = prompt('Digite o valor de c: ');
function resolverEq(a, b, c) {
    const x = (-b - c) / a
    const y = (-c - (-a * -x)) / b;
    return `x é ${x} e y é ${y}`;
}
console.log(resolverEq(a, b, c)); */

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

/* let a = prompt('Digite o valor de a: ');
let b = prompt('Digite o valor de b: ');
let c = prompt('Digite o valor de c: ');
function equacaoQuad(a, b, c) {
    let raiz1, raiz2;
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return (`{${raiz1} , ${raiz2}}`);
    }
    else if (delta == 0) {
        raiz1 = raiz2 = -b / (2 * a);
        return (`{${raiz1}}`);
    }
    else {
        return (`Não existem raíses reais para os valores indicados`);
    }
}
console.log(equacaoQuad(a, b, c)) */


// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

function printArray(array) {
    for (const value of array) {
        console.log(value);
    }
}
printArray([6, 12, 1, 24]);

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

function mostrarTempo() {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
console.log(mostrarTempo())

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

function trocarValores(a, b) {
    let x = b
    let y = a
    console.log(`x = ${x}, y = ${y}`);
}
trocarValores(3, 4)

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

function arrayInvertido(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr);
}
arrayInvertido(['banana', 'orange', 'mango', 'lemon'])

// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ')

capitalizeArray = (array) => {
    let capitalizedarray = []

    for (const arr of array) {
        capitalizedarray.push(arr[0].toUpperCase() + arr.slice(1))
    }

    return console.log(capitalizedarray)
}
capitalizeArray(['spain', 'portugal', 'france', 'italy'])

// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ')

addItem = (item) => {
    let array = []

    array.push(item)

    return console.log(array)
}
addItem('Adicionado ao Array')

// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ')

removerItem = (index) => {
    let array = ['Ferrari', 'Mercedes', 'tricycle', 'Lambo']

    array.splice(index, 1)

    return console.log(array)
}
removerItem(2)

// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ')

function somaDeNumeros(...numbers) {
    let sumOfNum = 0

    for (const num of numbers) {
        sumOfNum += num
    }

    return console.log(sumOfNum)
}
somaDeNumeros(1, 2, 3, 4)

// =========> 11 <=========
console.log('\n\nQuestão 11 \n\n ');

function somaDeImpares(...nums) {
    let imparSoma = 0

    for (const num of nums) {
        if (num % 2 !== 0) {
            imparSoma += num
        }
    }

    return console.log(imparSoma)
}
somaDeImpares(1, 2, 3, 4)

// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ');

function somaDePares(...nums) {
    let paresSom = 0

    for (const num of nums) {
        if (num % 2 === 0) {
            paresSom += num
        }
    }

    return console.log(paresSom)
}
somaDePares(1, 2, 3, 4)

// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ');

/* const numero13 = parseInt(prompt('Digite o número: '))
function paresEImpares(num) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            pares++;
        } else if (i % 2 !== 0) {
            impares++;
        }
    }

    return console.log(`O numero de ímpares é ${impares} \nO número de pares é ${pares}`);
}
paresEImpares(numero13); */

// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ');

function soma(...nums) {
    let soma = 0;

    for (const num of nums) {
        soma += num;
    }

    return console.log(soma);
}
soma(1, 2, 3, 4, 5)

// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ');

function geradorDeIP() {
    let um = Math.floor(Math.random() * 255);
    let dois = Math.floor(Math.random() * 255);
    let tres = Math.floor(Math.random() * 255);
    let quatro = Math.floor(Math.random() * 255);
    return console.log(`Seu número IP gerado é: ${um}:${dois}:${tres}:${quatro}`);
}
geradorDeIP();


// =========> 16 <=========
console.log('\n\nQuestão 16 \n\n ');

function enderecoMac() {
    let hexDig = "0123456789ABCDEF";
    let enderecoMac = "";
    for (let i = 0; i < 6; i++) {
        enderecoMac += hexDig.charAt(Math.round(Math.random() * 15));
        enderecoMac += hexDig.charAt(Math.round(Math.random() * 15));
        if (i != 5) {
            enderecoMac += ":"
        };
    }

    return console.log(`Seu endereço MAC gerado é: ${enderecoMac}`);
}
enderecoMac();


// =========> 17 <=========
console.log('\n\nQuestão 17 \n\n ');

function geradorHex() {
    let letras = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < 6; i++) {
        hex += letras[Math.floor(Math.random() * letras.length)];
    }

    return (`#${hex}`);
}
console.log(geradorHex());

// =========> 18 <=========
console.log('\n\nQuestão 18 \n\n ');

function geradorDeId() {
    let letras = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < 7; i++) {
        id += letras[Math.floor(Math.random() * letras.length)];
    }
    return (id);
}
console.log(geradorDeId())

