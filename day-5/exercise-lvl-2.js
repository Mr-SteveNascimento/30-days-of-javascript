// Exercícios do dia 5 do curso 30 dias de javascript

// =========> 1 <=========
console.log('Questão 1 \n\n ');

// Main.js

// =========> 2 <=========
console.log('\n\nQuestão 2 \n\n ');

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/[.,]/g, "").split(" "));
console.log((text.replace(/[.,]/g, "").split(" ")).length);

// =========> 3 <=========
console.log('\n\nQuestão 3 \n\n ');

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

shoppingCart.indexOf("Meat") === -1 ? shoppingCart.unshift("Meat") : null;
console.log(shoppingCart);

shoppingCart.indexOf("Sugar") === -1 ? shoppingCart.push("Sugar") : null;
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);

// =========> 4 <=========
console.log('\n\nQuestão 4 \n\n ');

countries.indexOf("Ethiopia") === -1 ? countries.push("Ethiopia")
    : console.log("ETHIOPIA");

// =========> 5 <=========
console.log('\n\nQuestão 5 \n\n ');

webTechs.indexOf("Sass") === -1
    ? webTechs.push("Sass")
    : webTechs.log("Sass is a CSS preprocess");

// =========> 6 <=========
console.log('\n\nQuestão 6 \n\n ');

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);