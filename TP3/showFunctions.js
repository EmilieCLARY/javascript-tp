let showFunctions = (function (){
    return {
        //Fonction d'affichage du résultat
        displayResult(data){
            let id = document.getElementById('result');
            id.innerHTML = data;
        },
        //Fonction d'affichage de l'opération en cours opérateur ou opération
        displayOperation(data){
            let id = document.getElementById('result');
            id.innerHTML += data;
        }
    }
})();