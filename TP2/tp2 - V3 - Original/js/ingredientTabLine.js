const ingredientTabLine = (function (){
    return {
        makeIngredientTabLine(number){
            let tr = document.createElement('tr');          // Création d'un élément tr (ligne)
            let th = document.createElement('th');          // Création d'un élément th (cellule)

            th.innerHTML = `${ingredient.getIngredientName(number)}`;       // Remplissage de la cellule

            th.style.padding = '15px';                      // Style de la cellule

            tr.appendChild(th);                             // Ajout d'une cellule à la ligne


            let td1 = document.createElement('td');         // Création d'un élément td (cellule)

            if(ingredient.getIngredientLocal(number) == false){             // Si ce n'est pas local alors on affiche ❌ 
                td1.innerHTML = `❌`; 
            }
            else if(ingredient.getIngredientLocal(number) == true){         // Si c'est local on affiche ✔️
                td1.innerHTML = `✔️`; 
            }
            else {
                td1.innerHTML = `❓`;                       // Si non spécifié, on affiche ❓
            }
            
            td1.style.padding = '15px';                     // Style de la cellule

            tr.appendChild(td1);                            // Ajout d'une cellule à la ligne

            let td2 = document.createElement('td');         // Création d'un élément td (cellule)
            td2.innerHTML = `${ingredient.getIngredientPrice(number).toFixed(2)}` + ` €`; //Remplissage de la cellule

            td2.style.padding = '15px';                     // Style de la cellule

            tr.appendChild(td2);                            // Ajout d'une cellule à la ligne
            
            return tr;
        }
    }
})();