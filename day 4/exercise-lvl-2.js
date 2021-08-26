
// Exercícios do dia 4 do curso 30 dias de javascript


// =========> 1 <=========
console.log('Questão 1 \n\n ');

let score = parseInt(prompt('Insira a nota de 0 a 100: '))
let isValid = true
let letter = ''
switch (true) {
    case ((score >= 0) && (score <= 49)):
        letter = 'F'
        break;
    case ((score >= 50) && (score <= 59)):
        letter = 'D'
        break;
    case ((score >= 60) && (score <= 69)):
        letter = 'C'
        break;
    case ((score >= 70) && (score <= 89)):
        letter = 'B'
        break;
    case ((score >= 90) && (score <= 100)):
        letter = 'A'
        break;
    default:
        isValid = false
        break;
}
isValid ? alert(`A nota é um ${letter}`) : alert(`A nota não é válida`)


// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');


let month = (prompt('Digite qual o mês atual: ')).toUpperCase()
isValid = true
let temp = ''
switch (month) {
    case 'SETEMBRO':
        temp = 'outono'
        break;
    case 'OUTUBRO':
        temp = 'outono'
        break;
    case 'NOVEMBRO':
        temp = 'outono'
        break;
    case 'DEZEMBRO':
        temp = 'inverno'
        break;
    case 'JANEIRO':
        temp = 'inverno'
        break;
    case 'FEVEREIRO':
        temp = 'inverno'
        break;
    case 'MARÇO':
        temp = 'primavera'
        break;
    case 'ABRIL':
        temp = 'primavera'
        break;
    case 'MAIO':
        temp = 'primavera'
        break;
    case 'JUNHO':
        temp = 'verão'
        break;
    case 'JULHO':
        temp = 'verão'
        break;
    case 'AGOSTO':
        temp = 'verão'
        break;
    default:
        isValid = false
        break;
}
isValid ? alert(`A temporada é ${temp}.`) : alert('O mês indicado é inválido.')



// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let dia = prompt('Insira o dia: ')
const semana = ['SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA',
    'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SEGUNDA', 'TERÇA',
    'QUARTA', 'QUINTA', 'SEXTA']
const fds = ['SÁBADO', 'DOMINGO']
let diaSemana = semana.includes((dia).toUpperCase())
let diaFDS = fds.includes((dia).toUpperCase())
if (diaSemana) {
    alert(`${dia} é um dia de semana.`)
} else if (diaFDS) {
    alert(`${dia} é um fim de semana.`)
} else {
    alert('O dia inserido não é válido.')
}