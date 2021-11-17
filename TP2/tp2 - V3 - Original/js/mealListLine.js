const mealListLine = (function (){
    
    function makeInBold(string){
        return(`<b> ${string} </b>`);
    }

    function showIngredientList(string){
        return(`<p> ➡️ <i> Ingrédients :  ${string} </i> </p>`);
    }

    function showPreparationTime(string){
        return(`<p> ⏱️ <i> Temps de préparation : ${string} minutes </i> </p>`);
    }
    
    return {
        makeMealsListLine(number){
            let li = document.createElement('li');                                      // Création d'un élément liste
        
            li.className += "card";

            let prixIngTotal = 0;
            let ing = [];

            for(let j = 0; j < meals.getMealIngredientsLength(number); j++){                       // Parcours du tableau d'ingrédients

                prixIngTotal += ingredient.getIngredientPrice(meals.getMealIngredientsNumber(number,j));      // Calcul du prix des ingrédients de la recette
                
                if(j == meals.getMealIngredientsLength(number) - 1){                               // Affichage des ingrédients
                    ing += ingredient.getIngredientName(meals.getMealIngredientsNumber(number,j)) + `.`;      // Si c'est le dernier, on met un "."
                }   
                else{
                    ing += ingredient.getIngredientName(meals.getMealIngredientsNumber(number,j)) + `, `;     // Sinon une virgule
                }
                
            }

            let prixTotal = meals.getMealPreparationPrice(number) + prixIngTotal;                  // Calcul du prix Total (Prix de préparation + Prix des Ingrédients)

            let title = meals.getMealName(number) + '\t' + `: ` + prixTotal.toFixed(2) + `€`;                 // Création du titre (Nom du plat + Prix total)
            
            li.innerHTML = makeInBold(title) + '\t' + showIngredientList(ing) + '\t' + showPreparationTime(meals.getMealPreparationTime(number)) ;               // Affichage des informations : Titre, Ingrédients, Temps de préparation
            
            return li;
        }
    }
})();