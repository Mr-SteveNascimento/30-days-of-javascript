// Exercícios do dia 3 do curso 30 dias de javascript

/*

++++++++++++++++ ATENÇÃO >>>>>> IMPORTANTE ++++++++++++++++


AO TESTAR O INDEX HTML NO NAVEGADOR, DESCOMENTE APENAS A QUESTÃO
QUE VOCÊ VAI TESTAR, POIS TODAS AS QUESTÕES UTILIZAM O ALERT...
LOGO É INVIÁVEL TER QUE PASSAR POR TODOS OS ALERT ANTERIORES PARA
CHEGAR NO QUE VOCÊ QUER


 */

// =========> 1 <=========
/* console.log('Questão 1 \n\n ')

let baseTri = prompt("Insira a base: ")
let heightTri = prompt("Insira a altura: ")
alert(`A área do triângulo é : ${(baseTri * heightTri) / 2}`) */



// =========> 2 <=========
/* console.log('\n\nQuestão 2 \n\n ');

let A = parseFloat(prompt("Insira o lado a: "))
let B = parseFloat(prompt("Insira o lado b: "))
let C = parseFloat(prompt("Insira o lado c: "))
alert(`O perímetro do triângulo é : ${A + B + C}`) */



// =========> 3 <=========
/* console.log('\n\nQuestão 3 \n\n ');

let sideRecA = parseFloat(prompt("Insira a largura: "))
let sideRecB = parseFloat(prompt("Insira a altura: "))
alert(`
    O perímetro do retângulo é : ${(sideRecA + sideRecB) * 2}\n
    A área do retângulo é : ${(sideRecA * sideRecB)}
        `) */





// =========> 4 <=========
/* console.log('\n\nQuestão 4 \n\n ');

let radiusCircle = parseFloat(prompt("Insira o raio: "))
alert(`
        Área do círculo é: ${3.14 * (radiusCircle ** 2)}\n
        Circunferência do círculo é: ${2 * 3.14 * radiusCircle}
`) */


// =========> 5 <=========
/* console.log('\n\nQuestão 5 \n\n ');

const a = 2, b = -2
let x = 0
let y = a * x + b
const incl5 = a
alert(`
    Inclinação é: ${a}\n
    Interceptação-x é: ${-b / a}\n
    Interceptação-y é: ${b}
`) */


// =========> 6 <=========
/* console.log('\n\nQuestão 6 \n\n ');

const x1 = 2, y1 = 2, x2 = 6, y2 = 10
let incl6 = (y2 - y1) / (x2 - x1)

alert(`
    Entre os pontos (${x1},${y1}) e (${x2},${y2})\n
    a inclinação é: ${incl6}
`) */


// =========> 7 <=========
/* console.log('\n\nQuestão 7 \n\n ');

alert(`
    A inclinação entre as questões 5 e 6 é respectivamente:\n
    ${incl5} e ${incl6}
`)
 */


// =========> 8 <=========
/* console.log('\n\nQuestão 8 \n\n ');

let a8 = 1
let b8 = 6
let c8 = 9
let x = -3
let y = a8 * (x ** 2) + b8 * x + c8

alert(`
    O valor de y é: ${y} para:\n
    x = ${x}
`) */



// =========> 9 <=========
/* console.log('\n\nQuestão 9 \n\n ');


let horasTrab = parseInt(prompt("Insira as horas: "))
let taxaHora = parseFloat(prompt('Insira a taxa por hora: '))
alert(`Seus ganhos semanais são: R$:${(horasTrab * taxaHora).toFixed(2)}`)
 */


// =========> 10 <=========
/* console.log('\n\nQuestão 10 \n\n ');

let nome10 = prompt("Insira seu nome: ")
alert(`${nome10.length > 7 ? 'Seu nome é longo' : 'Seu nome é curto'}`)
 */


// =========> 11 <=========
/* console.log('\n\nQuestão 11 \n\n ');

let primeiroNome11 = prompt("Insira seu nome: ")
let sobrenome11 = prompt("Insira seu sobrenome: ")
alert(`${primeiroNome11.length > sobrenome11.length ?
    ('Seu nome \'' + primeiroNome11 + '\' é mais longo que seu sobrenome \'' + sobrenome11 + '\'') :
    ('Seu sobrenome \'' + sobrenome11 + '\' é mais longo que seu nome \'' + primeiroNome11 + '\'')
    }
`) */


// =========> 12 <=========
/* console.log('\n\nQuestão 12 \n\n ');

let myAge12 = 250
let yourAge12 = 25

alert(` Eu sou ${myAge12 > yourAge12 ? myAge12 - yourAge12 : yourAge12 - myAge12} anos mais ${myAge12 > yourAge12 ? 'velho' : 'novo'} que você.`)
 */


// =========> 13 <=========
/* console.log('\n\nQuestão 13 \n\n ');

let anoNasc = parseInt(prompt('Qual ano você nasceu: '))
let now = new Date()

alert(`Você tem ${now.getFullYear() - anoNasc} anos. Você ${now.getFullYear() - anoNasc >= 18 ?
    'tem idade suficiente para dirigir' :
    'poderá dirigir após ' + (18 - (now.getFullYear() - anoNasc)) + ' anos.'
    }
`) */



// =========> 14 <=========
/* console.log('\n\nQuestão 14 \n\n ');

let anoNasc = parseInt(prompt('Quantos anos você viveu: '))
var zeroyear = new Date(2000, 0, 1, 0, 0, 0)
var year100 = new Date(2100 - anoNasc, 0, 1, 0, 0, 0)
alert(`Você ainda irá viver ${(year100.getTime() - zeroyear.getTime()) / 1000} segundos.`)
 */


// =========> 14 <=========
/* console.log('\n\nQuestão 14 \n\n ');

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

alert(`${year}-${month}-${date} ${hours}:${minutes}\n
${date}-${month}-${year} ${hours}:${minutes}\n
${date} / ${month} / ${year} ${hours}:${minutes}`) */