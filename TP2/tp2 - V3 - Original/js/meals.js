const meals = (function (){
    return {
        getMealLength(){
            return meal.length;
        },
        
        getMealId(){
            return parseInt(meal.idMeal);
        },
        
        getMealName(number){
            return meal[number].name;
        },
        
        getMealPreparationTime(number){
            return meal[number].preparationTime;
        },
        
        getMealIngredients(number){
            return meal[number].ingredients;
        },
        
        getMealIngredientsLength(number){
            return meal[number].ingredients.length;
        },
        
        getMealIngredientsNumber(number1, number2){
            return meal[number1].ingredients[number2];
        },
        
        getMealPreparationPrice(number){
            return parseFloat(meal[number].preparationPrice);
        }
    }
})();