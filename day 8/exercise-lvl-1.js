
// Exercícios do dia 8 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

let dog = {}

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

console.log(dog);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

dog.name = 'Mars';
dog.legs = 4;
dog.color = 'Branco';
dog.age = 5;
dog.bark = () => 'Woof woof';

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());


// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

dog.breed = 'Akita'
dog.getDogInfo = function() {
    return(`${this.name} é um ${this.breed} com ${this.legs} pernas.\n
    Ele tem ${this.age} anos de idade sua cor é ${this.color}\n
    e seu latido é assim: ${this.bark()}`)
}

console.log(dog.getDogInfo());