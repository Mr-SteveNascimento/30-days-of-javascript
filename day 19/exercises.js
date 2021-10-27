
// Exercícios do dia 19 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

function outerFunction() {
  let count = 0
  function innerFunction() {
    count ++
    return count
  }
  return innerFunction
}
const innerFunction = outerFunction()
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());


// Exercícios do dia 19 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

function outerFunction2() {
  let count = 5
  function add() {
    count++;
    return count
  }
  function sub() {
    count--;
    return count
  }
  function zero() {
    count = 0
    return count
  }
  return{
    add: add(),
    sub: sub(),
    zero: zero()
  }
}

const innerFuncs = outerFunction2()
console.log(innerFuncs.add);
console.log(innerFuncs.add);
console.log(innerFuncs.add);
console.log(innerFuncs.sub);
console.log(innerFuncs.sub);
console.log(innerFuncs.add);
console.log(innerFuncs.zero);
