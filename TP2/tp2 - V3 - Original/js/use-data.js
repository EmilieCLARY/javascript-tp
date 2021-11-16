function mealsList(){

    let ul = document.getElementById('list');                                       // Récupération de l'élément liste

    for (let i = 0; i < getMealLength(); i++){                                      // Parcours du tableau de recettes

        let li = document.createElement('li');                                      // Création d'un élément liste
        
        li.className += "card";

        let prixIngTotal = 0;
        let ing = [];

        for(let j = 0; j < getMealIngredientsLength(i); j++){                       // Parcours du tableau d'ingrédients

            prixIngTotal += getIngredientPrice(getMealIngredientsNumber(i,j));      // Calcul du prix des ingrédients de la recette
            
            if(j == getMealIngredientsLength(i) - 1){                               // Affichage des ingrédients
                ing += getIngredientName(getMealIngredientsNumber(i,j)) + `.`;      // Si c'est le dernier, on met un "."
            }   
            else{
                ing += getIngredientName(getMealIngredientsNumber(i,j)) + `, `;     // Sinon une virgule
            }
            
        }

        let prixTotal = getMealPreparationPrice(i) + prixIngTotal;                  // Calcul du prix Total (Prix de préparation + Prix des Ingrédients)

        let title = getMealName(i) + '\t' + `: ` + prixTotal.toFixed(2) + `€`;                 // Création du titre (Nom du plat + Prix total)
        
        li.innerHTML = `<b> ${title} </b>` + '\t' + `<p> ➡️ <i> Ingrédients :  ${ing} </i> </p>` + '\t' + `<p> ⏱️ <i> Temps de préparation : ${getMealPreparationTime(i)} minutes </i> </p>` ;               // Affichage des informations : Titre, Ingrédients, Temps de préparation

        ul.appendChild(li);                                                         // Ajout de la liste


        ul.className+= "list-group list-group-flush list-group-numbered";

    }
}

function ingredientsList(){
    let table = document.getElementById('table');       // Récupération de l'élément tableau
    //console.log(ingredients.length);

    let tbody = document.createElement('tbody');        // Création d'un élément tbody (corps du tableau)

    for (let i = 0; i < getIngredientLength(); i++){    // Parcours du tableau d'ingrédients
        
        let tr = document.createElement('tr');          // Création d'un élément tr (ligne)
        let th = document.createElement('th');          // Création d'un élément th (cellule)

        th.innerHTML = `${getIngredientName(i)}`;       // Remplissage de la cellule

        th.style.padding = '15px';                      // Style de la cellule

        tr.appendChild(th);                             // Ajout d'une cellule à la ligne


        let td1 = document.createElement('td');         // Création d'un élément td (cellule)

        if(getIngredientLocal(i) == false){             // Si ce n'est pas local alors on affiche ❌ 
            td1.innerHTML = `❌`; 
        }
        else if(getIngredientLocal(i) == true){         // Si c'est local on affiche ✔️
            td1.innerHTML = `✔️`; 
        }
        else {
            td1.innerHTML = `❓`;                       // Si non spécifié, on affiche ❓
        }
        
        td1.style.padding = '15px';                     // Style de la cellule

        tr.appendChild(td1);                            // Ajout d'une cellule à la ligne

        let td2 = document.createElement('td');         // Création d'un élément td (cellule)
        td2.innerHTML = `${getIngredientPrice(i).toFixed(2)}` + ` €`; //Remplissage de la cellule

        td2.style.padding = '15px';                     // Style de la cellule

        tr.appendChild(td2);                            // Ajout d'une cellule à la ligne
        
        tbody.appendChild(tr);                          // Ajout de la ligne au corps du tableau
        
    }

    table.appendChild(tbody);                           // Ajout du corps au tableau

    // Stylisation avec bootstrap
    table.className += "table table-striped align-middle";    
}