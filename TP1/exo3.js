let myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];

//Extraire les nombres impairs du tableau
const impairs = (array) => array.filter(value => 0 != value%2); //On garde que les nombres impairs 

console.log("Nombres impairs contenus dans le tableau : ",impairs(myArray));

//Générer un nouveau tableau qui contient le sinus des valeur du tableau
function sinus(array){
    newArray= [];   //Initialisation du tableau
    for(i = 0; i < array.length; i++){  //On parcourt le tableau
        newArray[i] = Math.sin(array[i]);   //Calcul du sinus
    }
    return newArray;
}

console.log("Sinus des nombres contenus dans le tableau : ",sinus(myArray));

//Déterminer la quantité de nombres dont le logarithme en base 10 correspond à leurs indices dans le tableau
function logarithme(array){
    newArray = [];  
    for(i = 0; i < array.length; i++){  // On itère tant que le tableau n'est pas vide
        let tmp = Math.log10(array[i]); // On créé une variable temporaire qui contient le logarithme en base 10 de la valeur de array[i]
        if(tmp == i){   // Si le logarithme en base 10 d'une valeur vaut son indice dans le tableau
            newArray.push(array[i]); // Alors on le met dans un nouveau tableau
        }
    }
    console.log('Il y a', newArray.length, 'nombres dont la logarithme en base 10 correspond à leurs indices dans le tableau :')
    return newArray;
}

console.log("Les nombres sont : ",logarithme(myArray));