const ingredient = (function (){
    return {
        getIngredientLength(){
            return ingredients.length;
        },
        
        getIngredientId(number){
            return parseInt(ingredients[number].idIng);
        },
        
        getIngredientName(number){
            return ingredients[number].name;
        },
        
        getIngredientLocal(number){
            if(parseInt(ingredients[number].local) == 0){
                return false;
            }
            else if(parseInt(ingredients[number].local) == 1){
                return true;
            }
            else{
                return "unknown";
            }
        },
        
        getIngredientPrice(number){
            return parseFloat(ingredients[number].prix);
        }
    }
})();