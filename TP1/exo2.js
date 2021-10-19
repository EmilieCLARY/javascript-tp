// Fonction d'addition
const addition = (a, b) => a + b;

// Fonction de soustraction
const soustraction = (a, b) => a - b;

// Fonction de multiplication
const multiplication = (a, b) => a * b;

// Fonction de division
const division= (a, b) => b != 0 ? a/b : 'Impossible de diviser par 0';

// Fonction carré
const carre = (a) => a * a;

// Déclaration des variables
let a = 3;
let b = 5;
let b2 = 0;

// Execution des fonctions
console.log(a,"+",b,"=", addition(a, b))
console.log(a, "-", b," = ", soustraction(a, b))
console.log(a,"x",b,"=", multiplication(a, b))
console.log(a,"/",b,"=", division(a, b))
console.log(a, "/", b2 ,"=", division(a, b2))
console.log(a,"^2 = ",carre(a))