const mealsList = (function (){
    return {
        makeMealsList(){
            let ul = document.getElementById('list');                                       // Récupération de l'élément liste

            for (let i = 0; i < meals.getMealLength(); i++){                                      // Parcours du tableau d
                
                let li = mealListLine.makeMealsListLine(i);

                ul.appendChild(li);                                                         // Ajout de la liste


                ul.className+= "list-group list-group-flush list-group-numbered";
            }
            return ul;
        }
    }
})();