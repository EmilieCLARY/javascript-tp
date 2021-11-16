/*  Fonctions pour les meals  */

function getMealLength(){
    return meal.length;
}

function getMealId(){
    return parseInt(meal.idMeal);
}

function getMealName(number){
    return meal[number].name;
}

function getMealPreparationTime(number){
    return meal[number].preparationTime;
}

function getMealIngredients(number){
    return meal[number].ingredients;
}

function getMealIngredientsLength(number){
    return meal[number].ingredients.length;
}

function getMealIngredientsNumber(number1, number2){
    return meal[number1].ingredients[number2];
}

function getMealPreparationPrice(number){
    return parseFloat(meal[number].preparationPrice);
}

/*  Fonctions pour les ingredients  */

function getIngredientLength(){
    return ingredients.length;
}

function getIngredientId(number){
    return parseInt(ingredients[number].idIng);
}

function getIngredientName(number){
    return ingredients[number].name;
}

function getIngredientLocal(number){
    if(parseInt(ingredients[number].local) == 0){
        return false;
    }
    else{
        return true;
    }
}

function getIngredientPrice(number){
    return parseFloat(ingredients[number].prix);
}