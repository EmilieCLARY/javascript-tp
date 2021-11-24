let listener = (function (){
    
    return {

        makeCalculator(){
            document.getElementById('0').addEventListener('click', saveNumber(0));
            document.getElementById('1').addEventListener('click', saveNumber(1));
            document.getElementById('2').addEventListener('click', saveNumber(2));
            document.getElementById('3').addEventListener('click', saveNumber(3));
            document.getElementById('4').addEventListener('click', saveNumber(4));
            document.getElementById('5').addEventListener('click', saveNumber(5));
            document.getElementById('6').addEventListener('click', saveNumber(6));
            document.getElementById('7').addEventListener('click', saveNumber(7));
            document.getElementById('8').addEventListener('click', saveNumber(8));
            document.getElementById('9').addEventListener('click', saveNumber(9));
        },
        
        plus(){
    
            document.getElementById('plus').addEventListener('click', event => {
                let result = document.getElementById('result') = operations.addition();
            })
        },

        minus(){

            document.getElementById('minus').addEventListener('click', event =>{
                let result = document.getElementById('result') = operations.soustraction()
            })
        },

        division(){
            
            document.getElementById('div').addEventListener('click', event => {
                let result = document.getElementById('result') = operations.division()
            })
        },

    }
})();