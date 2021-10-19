let myArray = [20, 1, 13, 8, 10, 6, 15, 25, 2, 10, 14, 18, 9]

function Histogramme(array){
    //Recherche de la valeur maximale du tableau
    var max = Math.max(...array);
    console.log(max);
    console.log(array.length)

    //Initialisation du tableau
    newArray = [];
    
    //Réalisation de l'histogramme
    for(j = max; j >= 0; j--){
        arrayTmp = []; //Tableau temporaire qui sera affiché un certain nombre de fois correspondant à la valeur maximal contenue dans le tableau
        //Réalisation de l'axe des ordonnées
        if(j%5){ //On affiche les valeurs multiples de 5 pour une meilleure visibilité
            arrayTmp.push('| ');
        }
        else{
            if(j<10){
                arrayTmp.push(j,'')
                
            }
            else{
                arrayTmp.push(j)
            }
        } 
        //On commence le remplissage du tableau
        for(i = 0; i < array.length; i++){ //On parcours le tableau de valeur
            if(array[i] > j){ //Si la valeur est supérieure à la valeur correspondant à l'ordonnée
                arrayTmp.push('▇▇▇▇▇');
            }
            else{
                arrayTmp.push('     ');
            }
        }
        console.log(arrayTmp.join(' '));
    }
    //Réalisation de l'axe des abscisses
    arrayTmp = ['_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_'];
    console.log(arrayTmp.join(''));
    
    return ("Histogramme");
}

console.log(Histogramme(myArray));