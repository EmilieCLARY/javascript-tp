function mealsList(){

    let ul = document.getElementById('list');                                       // Récupération de l'élément liste

    for (let i = 0; i < meal.length; i++){                                          // Parcours du tableau de recettes

        let li = document.createElement('li');                                      // Création d'un élément liste
        
        li.className += "card";

        let prixIngTotal = 0;
        let ing = [];

        for(let j = 0; j < meal[i].ingredients.length; j++){                        // Parcours du tableau d'ingrédients

            prixIngTotal += parseFloat(ingredients[meal[i].ingredients[j]].prix);   // Calcul du prix des ingrédients de la recette

            if(j == meal[i].ingredients.length - 1){                                // Affichage des ingrédients
                ing += ingredients[meal[i].ingredients[j]].name + `.`;              // Si c'est le dernier, on met un "."
            }   
            else{
                ing += ingredients[meal[i].ingredients[j]].name + `, `;             // Sinon une virgule
            }
            
        }

        let prixTotal = parseFloat(meal[i].preparationPrice) + prixIngTotal;        // Calcul du prix Total (Prix de préparation + Prix des Ingrédients)

        let title = meal[i].name + '\t' + `: ` + prixTotal + `€`;                   // Création du titre (Nom du plat + Prix total)
        
        li.innerHTML = `<b> ${title} </b>` + '\t' + `<p> ➡️ <i> Ingrédients :  ${ing} </i> </p>` + '\t' + `<p> ⏱️ <i> Temps de préparation : ${meal[i].preparationTime} minutes </i> </p>` ;               // Affichage des informations : Titre, Ingrédients, Temps de préparation

        ul.appendChild(li);                                                         // Ajout de la liste


        ul.className+= "list-group list-group-flush list-group-numbered";

    }
}

function ingredientsList(){
    let table = document.getElementById('table');   // Récupération de l'élément tableau
    //console.log(ingredients.length);

    let tbody = document.createElement('tbody');    // Création d'un élément tbody (corps du tableau)

    for (let i = 0; i < ingredients.length; i++){   // Parcours du tableau d'ingrédients
        
        let tr = document.createElement('tr');      // Création d'un élément tr (ligne)
        let th = document.createElement('th');      // Création d'un élément th (cellule)

        th.innerHTML = `${ingredients[i].name}`;    // Remplissage de la cellule

        th.style.padding = '15px';                  // Style de la cellule

        tr.appendChild(th);                         // Ajout d'une cellule à la ligne


        let td1 = document.createElement('td');     // Création d'un élément td (cellule)

        if(ingredients[i].local == 0){              // Si ce n'est pas local alors on affiche ❌ 
            td1.innerHTML = `❌`; 
        }
        else if(ingredients[i].local == 1){         // Si c'est local on affiche ✔️
            td1.innerHTML = `✔️`; 
        }
        else {
            td1.innerHTML = `❓`;                   // Si non spécifié, on affiche ❓
        }
        
        td1.style.padding = '15px';                 // Style de la cellule

        tr.appendChild(td1);                        // Ajout d'une cellule à la ligne

        let td2 = document.createElement('td');     // Création d'un élément td (cellule)
        td2.innerHTML = `${ingredients[i].prix}` + ` €`; //Remplissage de la cellule

        td2.style.padding = '15px';                 // Style de la cellule

        tr.appendChild(td2);                        // Ajout d'une cellule à la ligne
        
        tbody.appendChild(tr);                      // Ajout de la ligne au corps du tableau
        
    }

    table.appendChild(tbody);                       // Ajout du corps au tableau

    // Stylisation avec bootstrap
    table.className += "table table-striped align-middle";    
}

mealsList();            //Appel des fonctions
ingredientsList();