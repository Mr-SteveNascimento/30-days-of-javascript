
// Exercícios do dia 14 do curso 30 dias de javascript
console.log('Exercícios dia 14 :)\n\n');


try {
    let a = 'Olá, ';
    /* let b = 'Mundo!'; */
    console.log(a + b);
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Independente que ocorra erro ou não isso será executado!');
}