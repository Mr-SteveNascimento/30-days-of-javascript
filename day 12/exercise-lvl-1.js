
// Exercícios do dia 12 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');


// =========> 1 <=========
console.log('Questão 1 \n\n ');

let texto = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

let exprReg1 = /\d+/g;
let result1 = texto.match(exprReg1);
console.log(result1);

let totalAnual = Number(result1[0] * 12) + Number(result1[1]) + Number(result1[2] * 12);
console.log(`Essa pessoa tem uma renda anual total de ${totalAnual} euros`);

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

let texto2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"

let Pontos = texto2.match(/-*\d+/g);
console.log(Pontos);

let pontosOrdenados = Pontos.sort(function (a, b) { // Caso eles não estejam ordenados
    return a - b;
});
console.log(pontosOrdenados);

let distancia = pontosOrdenados[pontosOrdenados.length - 1] - pontosOrdenados[0];
console.log(`A distância entre as duas partículas é ${distancia}`);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

let expressao = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/g  // Expressão para validar identificadores válidos
function isValid(str) {
    return(str.match(expressao) != null)
}
console.log(isValid('first_name'));