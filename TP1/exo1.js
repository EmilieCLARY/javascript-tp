// Fonction d'addition
function addition(a, b){
    res = a + b;
    return res;
}

// Fonction de soustraction
function soustraction(a, b){
    res = a - b;
    return res;
}

// Fonction de multiplication
function multiplication(a, b){
    res = a * b;
    return res;
}

// Fonction de division
function division(a, b){
    if(b != 0){ // On vérifie s'il n'y a pas de division par 0
        res = a / b;
        return res;
    }
    else{
        return('Impossible de diviser par 0');
    }
}

// Fonction carré
function carre(a){
    res = a*a;
    return res;
}

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