function mealsList(){
    let ul = document.getElementById('list');

    for (let i = 0; i < meal.length; i++){
        let li = document.createElement('li');
        
        let prixIngTotal = 0;
        let ing = [];

        for(let j = 0; j < meal[i].ingredients.length; j++){
            prixIngTotal += parseFloat(ingredients[meal[i].ingredients[j]].prix);
            if(j == meal[i].ingredients.length - 1){
                ing += ingredients[meal[i].ingredients[j]].name + `.`;
            }   
            else{
                ing += ingredients[meal[i].ingredients[j]].name + `, `;
            }
            
        }
        let prixTotal = parseFloat(meal[i].preparationPrice) + prixIngTotal;
        

        let title = meal[i].name + '\t' + `: ` + prixTotal + `€`;
        
        li.innerHTML = `<b> ${title} </b>` + '\t' + `<p> ➡️ <i> Ingrédients :  ${ing} </i> </p>` + '\t' + `<p> ⏱️ <i> Temps de préparation : ${meal[i].preparationTime} minutes </i> </p>` ;    

        ul.appendChild(li);

    }
}

function ingredientsList(){
    let table = document.getElementById('table');   // Récupération de l'élément tableau
    //console.log(ingredients.length);

    let tbody = document.createElement('tbody');    // Création d'un élément tbody (corps du tableau)

    for (let i = 0; i < ingredients.length; i++){   // Parcours du tableau d'ingrédients
        
        let tr = document.createElement('tr');      // Création d'un élément tr (ligne)
        let th = document.createElement('th');      // Vrétaion d'un élément th (cellule)

        th.innerHTML = `${ingredients[i].name}`;    // Remplissage de la cellule

        tr.appendChild(th);                         // Ajout d'une cellule à la ligne


        let td1 = document.createElement('td');     // Création d'un élément td (cellule)
        if(ingredients[i].local == 0){              // Si ce n'est pas local alors on affiche ❌ sinon on affiche ✔️
            td1.innerHTML = `❌`; 
        }
        else{
            td1.innerHTML = `✔️`; 
        }
        
        tr.appendChild(td1);                        // Ajout d'une cellule à la ligne

        let td2 = document.createElement('td');     // Création d'un élément td (cellule)
        td2.innerHTML = `${ingredients[i].prix}` + ` €`; //Remplissage de la cellule

        tr.appendChild(td2);                        // Ajout d'une cellule à la ligne
        
        tbody.appendChild(tr);                      // Ajout de la ligne au corps du tableau
        
    }

    table.appendChild(tbody);                       // Ajout du corps au tableau

    // Stylisation avec bootstrap
    table.className += "table table-striped align-middle";
    
}

mealsList();
ingredientsList();