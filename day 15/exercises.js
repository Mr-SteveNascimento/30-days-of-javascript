
// Exercícios do dia 15 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');


// =========> 1 <=========
console.log('Questão 1 \n\n ');

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {
        return(this.name)
    }

    get getAge() {
        return(this.age)
    }
    
    get getColor() {
        return(this.color)
    }
    
    get getLegs() {
        return(this.legs)
    }
    
    set setName(name) {
        this.name = name;
        return(this.name)
    }

    set setAge(age) {
        this.age = age;
        return(this.age)
    }
    
    set setColor(color) {
        this.color = color;
        return(this.color)
    }
    
    set setLegs(legs) {
        this.legs = legs;
        return(this.legs)
    }

    getAnimalProperties() {
        return(`${this.name} is a animal with ${this.age} years old. Your color is ${this.color} and has ${this.legs} legs.`);
    }
}

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n '); 

const dog = new Animal('Neptune', 3, 'Black', 4);
const cat = new Animal('Moon', 5, 'White', 4);

console.log(dog);
console.log(cat);
console.log(cat.getAnimalProperties());
console.log(dog.getAnimalProperties());



// Exercícios do dia 15 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');


class DogClass extends  Animal{
    constructor(name, age, color, legs, language) {
        super(name, age, color, legs);
        this.language = language;
    }

    // Here, the method is override
    getAnimalProperties() {
        return(`${this.name} is a dog with ${this.age} years old. Your color is ${this.color} and has ${this.legs} legs.`);       
    }

    talk() {
        console.log(this.language);
    }
}

const myDog = new DogClass('Neptune', 3, 'Black', 4, 'Au au');

console.log(myDog.getAnimalProperties());
myDog.talk();