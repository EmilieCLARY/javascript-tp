let operations = (function (){

    return {

        addition(val1, val2){
            return(parseFloat(val1)+parseFloat(val2));
        },

        soustraction(val1, val2){
            return(parseFloat(val1)-parseFloat(val2));
        },

        multiplication(val1, val2){
            return(parseFloat(val1)*parseFloat(val2));
        },

        division(val1, val2){
            if(val2 == 0){
                return("Error : Can't divide by 0.");
            }
            else{
                return(parseFloat(val1)/parseFloat(val2));
            }
        }
    }
})();