let saveDatas = (function (){
    op1 = null;
    op2 = null;
    operator = null;
    result = null;
    
    return{
        // Fonction qui récupère les nombres
        saveNumber(number){
            if(operator == null){
                if(op1 == null){
                    op1 = number;
                }
                else{
                    op1 += number;
                }
            }
            else{
                if(op2 == null){
                    op2 = number;
                }
                else{
                    op2 += number;
                }
            }
            showFunctions.displayOperation(number);
            console.log(number);
        },

        // Fonction qui récupère les opérations et fait les calculs au fur et à mesure
        saveOperator(newOperator){
            if(operator == null && result == null || operator != null && result != null){
                operator = newOperator;
                console.log(operator);
                showFunctions.displayOperation(operator);
            }
            else if(result == null && operator != null){
                switch (operator) {
                    case '+':
                        result = operations.addition(op1, op2);
                        break;
                    case '-':
                        result = operations.soustraction(op1, op2);
                        break;
                    case '*':
                        result = operations.multiplication(op1, op2);
                        break;
                    case '/':
                        result = operations.division(op1, op2);
                        break;
                
                    default:
                        console.log('There is a problem...');
                        break;
                }
                operator = newOperator;
                op1 = null;
                op2 = null;
                //showFunctions.displayResult(result);
                showFunctions.displayOperation(operator);
                console.log(operator, result);
            }
            else if(operator != null && result == null){
                let tmpResult = result;
                switch (operator) {
                    case '+':
                        result = operations.addition(tmpResult, op2);
                        break;
                    case '-':
                        result = operations.soustraction(tmpResult, op2);
                        break;
                    case '*':
                        result = operations.multiplication(tmpResult, op2);
                        break;
                    case '/':
                        result = operations.division(tmpResult, op2);
                        break;
                
                    default:
                        console.log('There is a problem...');
                        break;
                }
                operator = newOperator;
                op1 = null;
                op2 = null;
                //showFunctions.displayResult(result);
                showFunctions.displayOperation(operator);
                console.log(operator, result);
            }
        },

        // Fonction qui traite le résultat et l'affiche
        getResult(){
            if(result == null && op1 == null && op2 == null && operator == null){
                //Fonction affichage 0
                showFunctions.displayResult(0);
                console.log(result, 0);
            }
            else if(result == null && op2 == null&& operator == null && op1 != null){
                //Fonction affichage op1
                showFunctions.displayResult(op1);
                console.log(op1)
            }
            else if(result == null && op1 != null&& op2 != null && operator != null){
                switch (operator) {
                    case '+':
                        result += operations.addition(op1, op2);
                        break;
                    case '-':
                        result += operations.soustraction(op1, op2);
                        break;
                    case '*':
                        result += operations.multiplication(op1, op2);
                        break;
                    case '/':
                        result += operations.division(op1, op2);
                        break;
                
                    default:
                        console.log('There is a problem...');
                        break;
                }
                op1 = null;
                op2 = null;
                //Fonction d'affichage de result
                showFunctions.displayResult(result);
            }
            else if(result != null && op2 != null){
                let tmpResult = result;
                switch (operator) {
                    case '+':
                        result = operations.addition(tmpResult, op2);
                        break;
                    case '-':
                        result = operations.soustraction(tmpResult, op2);
                        break;
                    case '*':
                        result = operations.multiplication(tmpResult, op2);
                        break;
                    case '/':
                        result = operations.division(tmpResult, op2);
                        break;
                
                    default:
                        console.log('There is a problem...');
                        break;
                }
                op1 = null;
                op2 = null;
                //Fonction d'affichage de result
                showFunctions.displayResult(result);
            }
            else{
                showFunctions.displayResult("ERROR");
            }

            console.log(result)
        },

        // Fonction qui réinitialise la calculatrice
        clearCalculator(){
            op1 = null;
            op2 = null;
            operator = null;
            result = null;
            //Fonction d'affichage de rien
            showFunctions.displayResult('');
            console.log("Clear effectué !");
            //console.log(op1, op2, operator, result);
        }
    }
})();