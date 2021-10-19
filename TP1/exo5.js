/* Aidons le BDE */


// Nombre attendu : 250 +- 50 personnes
// 78% ont envie de goûter


function simulationSoirée(nombreASimuler){

    
    let nombrePersonnes = 0; // On définit le nombre de personne à venir à la soirée
    let nombreCocktails = 0; // Et le nombre de cocktails à faire

    for (let i = 1; i<= nombreASimuler; i++){   // On fait une boucle pour itérer le nombre de fois où l'utilisateur veut réaliser une simulation

        nombrePersonnes = 199 + (Math.random() * 101); // On définit le nombre de personnes à venir à 199 + un nombre random entre 1 et 101 pour arriver à un nombre entre 200 et 300

        nombreCocktails += 0.78 * nombrePersonnes; // On ajoute au nombre de cocktails à préparer 0.78 fois le nombre de personnes à venir
        
    }
    console.log("Super ! Une soirée au BDE !\nVoyons ce que nous devons préparer :")
    
    return nombreCocktails/nombreASimuler;  // Puis on retourne la moyenne du nombre de cocktails sur toutes les simulations
}

console.log("--- Nombre de coktails moyens :", Math.round(simulationSoirée(1000)));