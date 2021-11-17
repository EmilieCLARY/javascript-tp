const ingredientsTab = (function (){
    return {
        makeIngredientsTab(){
            let table = document.getElementById('table');       // Récupération de l'élément tableau

            let tbody = document.createElement('tbody');        // Création d'un élément tbody (corps du tableau)

            for (let i = 0; i < ingredient.getIngredientLength(); i++){    // Parcours du tableau d'ingrédients

                let tr = ingredientTabLine.makeIngredientTabLine(i);

                tbody.appendChild(tr);                          // Ajout de la ligne au corps du tableau
                
            }

            table.appendChild(tbody);                           // Ajout du corps au tableau

            // Stylisation avec bootstrap
            table.className += "table table-striped align-middle";   
            
            return table;
        }
    }
})();