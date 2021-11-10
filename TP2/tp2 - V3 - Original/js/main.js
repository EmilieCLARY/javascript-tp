let ul = document.getElementById('list');

for (let i = 0; i < meal.length; i++){
    var li = document.createElement('li');
    
    var prixIngTotal = 0;
    var ing = [];

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
    

    var title = meal[i].name + '\t' + `: ` + prixTotal + `€`;
    
    li.innerHTML = `<b> ${title} </b>` + '\t' + `<p> <i> Ingrédients :  ${ing} </i> </p>` + '\t' + `<p> <i> Temps de préparation : ${meal[i].preparationTime} minutes </i> </p>` ;    

    ul.appendChild(li);



}


let table = document.getElementById('table');

console.log(ingredients.length);

for (let i = 0; i < ingredients.length; i++){

    var tr = document.createElement('tr');
    var th = document.createElement('th');

    th.innerHTML = `test`;

        tr.appendChild(th);

        for (let j = 0; j < 2 ; j++){

            var td = document.createElement('td');
            td.innerHTML = `${i}` ;    

            th.appendChild(td);
        }

    table.appendChild(tr);
}