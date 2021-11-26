let saveDatas = (function (){
    //Déclaration des variables
    op1 = null;         //Variable pour l'opérateur 1
    op2 = null;         //Variable pour l'opérateur 2
    operator = null;    //Variable pour l'opération
    result = null;      //Variable pour le résultat

    isResultDisplay = false;    //Variable pour savoir si le résultat est affiché
    isOperatorDisplay = false;  //Variable pour savoir si une opération est affichée
    
    return{
        // Fonction qui récupère les nombres 
        saveNumber(number){
            //S'il n'y a pas de résultat affiché OU s'il est affiché mais qu'il y a un opérateur
            if(isResultDisplay == false || isResultDisplay == true && isOperatorDisplay == true){
                //S'il n'y a pas d'opérateur donc on continue à remplir le premier opérateur
                if(operator == null){
                    //Si l'opérateur 1 est vide on fait = sinon on fait +=
                    if(op1 == null){
                        op1 = number;
                    }
                    else{
                        op1 += number;
                    }
                }
                else{
                    //Si l'opérateur 2 est vide on fait = sinon on fait +=
                    if(op2 == null){
                        op2 = number;
                    }
                    else{
                        op2 += number;
                    }
                }
            }
            else{
                //On clear
                this.clearCalculator();
                //S'il n'y a pas d'opérateur donc on continue à remplir le premier opérateur
                if(operator == null){
                    //Si l'opérateur 1 est vide on fait = sinon on fait +=
                    if(op1 == null){
                        op1 = number;
                    }
                    else{
                        op1 += number;
                    }
                }
                else{
                    //Si l'opérateur 2 est vide on fait = sinon on fait +=
                    if(op2 == null){
                        op2 = number;
                    }
                    else{
                        op2 += number;
                    }
                }
                isResultDisplay = false; //Le résultat n'est plus le dernier affiché
            }
            //Fonction d'affichage pour le nombre
            showFunctions.displayOperation(number);
            isOperatorDisplay = false;  //L'opérateur n'est plus le dernier affiché
            console.log(number);
        },

        // Fonction qui récupère les opérations et fait les calculs au fur et à mesure
        saveOperator(newOperator){
            //Si il n'y a pas d'operation et de résultat déjà calculé OU si il y a une opération et un résultat déjà affiché
            if(operator == null && result == null && isOperatorDisplay == false || result != null && isResultDisplay == true && isOperatorDisplay == false){
                operator = newOperator;     //Attribution de la nouvelle opération
                isOperatorDisplay = true;   //L'opérateur est affiché
                isResultDisplay = false;    //Le résultat n'est plus le dernier affiché   
                console.log(operator);
                showFunctions.displayOperation(operator); //Affichage
            }
            //Si le résultat est nul et l'opération n'est pas null
            else if(result == null && operator != null && isOperatorDisplay == false){
                //On fait l'opération selon l'opérateur
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
                operator = newOperator;     //Attribution de la nouvelle opération
                op1 = null;     //Remise de la variable à null
                op2 = null;     //Remise de la variable à null
                //showFunctions.displayResult(result);
                isOperatorDisplay = true;   //L'opérateur est affiché
                showFunctions.displayOperation(operator);   //Affichage
                console.log(operator, result);
            }
            //Si le résultat n'est pas null et l'opération n'est pas null
            else if(operator != null && result != null && isOperatorDisplay == false){
                let tmpResult = result;
                //On fait l'opération selon l'opérateur
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
                operator = newOperator;     //Attribution de la nouvelle opération
                op1 = null;     //Remise de la variable à null
                op2 = null;     //Remise de la variable à null
                //showFunctions.displayResult(result);
                isOperatorDisplay = true;   //L'opérateur est affiché
                showFunctions.displayOperation(operator);   //Affichage
                console.log(operator, result);
            }
            //Si 2 operations sont mises à la suite
            else if(isOperatorDisplay == true){
                showFunctions.displayResult("Impossible !");    //Affichage
                setTimeout(this.clearCalculator, 1000);     //Délai de 1 seconde
            }
        },

        // Fonction qui traite le résultat et l'affiche
        getResult(){
            //S'il n'y a pas encore de résultat et les deux opérateurs/l'opération sont null
            if(result == null && op1 == null && op2 == null && operator == null){
                //Fonction affichage 0
                isOperatorDisplay = false;  //L'opérateur n'est plus le dernier affiché
                isResultDisplay = true;     //Le résultat est affiché
                showFunctions.displayResult(0); //Affichage
                console.log(result, 0);
            }
            //S'il n'y a pas encore de résultat et l'opérateur 2 et l'opération sont null
            else if(result == null && op2 == null && operator == null && op1 != null){
                //Fonction affichage op1
                isOperatorDisplay = false;  //L'opérateur n'est plus le dernier affiché
                isResultDisplay = true;     //Le résultat est affiché
                showFunctions.displayResult(op1);   //Affichage
                console.log(op1)
            }
            //S'il n'y a pas encore de résultat et que les opérateurs et l'opération ne sont pas null
            else if(result == null && op1 != null && op2 != null && operator != null){
                //On fait l'opération selon l'opérateur
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
                op1 = null;         //Remise de la variable à null
                op2 = null;         //Remise de la variable à null
                operator = null;    //Remise de la variable à null
                //Fonction d'affichage de result
                isOperatorDisplay = false;  //L'opérateur n'est plus le dernier affiché
                isResultDisplay = true;     //Le résultat est affiché
                showFunctions.displayResult(result);    //Affichage
            }
            //S'il y a déjà un résultat et que l'opérateur 2 n'est pas null
            else if(result != null && op2 != null){
                let tmpResult = result; //On stocke temporairement le résultat pour le modifier
                //On fait l'opération selon l'opérateur
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
                op1 = null;     //Remise de la variable à null
                op2 = null;     //Remise de la variable à null
                //Fonction d'affichage de result
                isOperatorDisplay = false;  //L'opérateur n'est plus le dernier affiché
                isResultDisplay = true;     //Le résultat est affiché
                showFunctions.displayResult(result);    //Affichage
            }
            else{
                showFunctions.displayResult("ERROR");   //Affichage
            }

            console.log(result)
        },

        // Fonction qui réinitialise la calculatrice
        clearCalculator(){
            //Remise de toute les variables à null / false
            op1 = null;
            op2 = null;
            operator = null;
            result = null;
            isResultDisplay = false;
            isOperatorDisplay = false;
            //Fonction d'affichage de rien
            showFunctions.displayResult('');
            console.log("Clear effectué !");
            //console.log(op1, op2, operator, result);
        }
    }
})();