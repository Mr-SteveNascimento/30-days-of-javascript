
// Exercícios do dia 7 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

function fullName() {
    console.log('Stevenson Melo Silva Nascimento');
}
fullName();

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

function full2Name(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(full2Name('Stevenson Melo', 'Silva Nascimento'));

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

function addNumbers(num1, num2) {
    let soma = num1 + num2;
    return soma;
}
console.log(addNumbers(6, 1));

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ')

function areaRetangulo(altura, largura) {
    let area = altura * largura;
    return area;
}
console.log(areaRetangulo(10, 6));

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ')

function perimetroRetangulo(altura, largura) {
    let perimetro = 2 * (altura + largura);
    return perimetro;
}
console.log(perimetroRetangulo(10, 6));

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ')

function volumePrism(comprimento, largura, altura) {
    let volume = comprimento * largura * altura;
    return volume;
}
console.log(volumePrism(10, 6, 8));


// =========> 7 <=========
console.log('\n\nQuestão 7 \n\n ');


function areaDoCirculo(raio) {
    let area = Math.PI * raio * raio;
    return area;
}
console.log(areaDoCirculo(10));


// =========> 8 <=========
console.log('\n\nQuestão 8 \n\n ');

function circCirculo(raio) {
    let circ = 2 * Math.PI * raio;
    return circ;
}
console.log(circCirculo(10));


// =========> 9 <=========
console.log('\n\nQuestão 9 \n\n ');

function densiSub(massa, volume) {
    let densidade = massa / volume;
    return densidade;
}
console.log(densiSub(6, 26));


// =========> 10 <=========
console.log('\n\nQuestão 10 \n\n ');

function velociadeObjeto(distancia, tempo) {
    let veloc = distancia / tempo;
    return veloc;
}
console.log(velociadeObjeto(100, 30));


// =========> 11 <=========
console.log('\n\nQuestão 11 \n\n ');

function pesoSub(massa, gravidade) {
    let peso = massa * gravidade;
    return peso;
}
console.log(pesoSub(5.972, 9.807));


// =========> 12 <=========
console.log('\n\nQuestão 12 \n\n ');

function celsiusFaren(tempCel) {
    let tempFar = (tempCel * 9 / 5) + 32;
    return tempFar;
}
console.log(celsiusFaren(37));


// =========> 13 <=========
console.log('\n\nQuestão 13 \n\n ');

/* const peso = prompt('Digite seu peso em Kg: ');
const altura = prompt('Digite sua altura em M: ');
function IMC(peso, altura) {
    const IMC = peso / (altura * altura);
    switch (true) {
        case IMC < 18.5:
            return console.log(`Seu IMC é ${IMC.toFixed(2)}, você está abaixo do peso.`);
            break;

        case IMC <= 24.9:
            return console.log(`Seu IMC é ${IMC.toFixed(2)}, você está com peso normal.`);
            break;

        case IMC <= 29.9:
            return console.log(`Seu IMC é ${IMC.toFixed(2)}, você está acima do peso`);
            break;

        case IMC >= 30:
            return console.log(`Seu IMC é ${IMC.toFixed(2)}, você está obeso`);
            break;

        default:
            console.log(`Erro, tente novamente! :)`);
            break;
    }
}
IMC(peso, altura); */

// =========> 14 <=========
console.log('\n\nQuestão 14 \n\n ');

/* const mes = (prompt('Digite o mês: ')).toLowerCase();
function temporada(mes) {
    switch (mes) {
        case 'setembro':
        case 'outubro':
        case 'novembro':
            return 'A estação é Outono';
            break;
        case 'dezembro':
        case 'janeiro':
        case 'fevereiro':
            return 'A estação é Inverno';
            break;
        case 'março':
        case 'abril':
        case 'maio':
            return 'A estação é Primavera';
            break;
        case 'junho':
        case 'julho':
        case 'agosto':
            return 'A estação é Verão';
            break;
        default:
            return 'Mês inserido inválido.'
    }
}
console.log(temporada(mes)); */


// =========> 15 <=========
console.log('\n\nQuestão 15 \n\n ');

/* let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');
let num3 = prompt('Digite o terceiro número: ');
function findMax(num1, num2, num3) {
    switch (true) {
        case num1 > num2 && num1 > num3:
            return `${num1} é o maior número que você inseriu`;
            break;
        case num2 > num1 && num2 > num3:
            return `${num2} é o maior número que você inseriu`;
            break;
        case num3 > num1 && num3 > num2:
            return `${num3} é o maior número que você inseriu`;
            break;

        default:
            return `Erro, Tente novamente.`;
            break;
    }
}
console.log(findMax(num1, num2, num3)); */