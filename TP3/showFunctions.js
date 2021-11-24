let showFunctions = (function (){
    return {

        displayResult(data){
            let id = document.getElementById('result');
            id.innerHTML = data;
        },

        displayOperation(data){
            let id = document.getElementById('result');
            id.innerHTML += data;
        }
    }
})();