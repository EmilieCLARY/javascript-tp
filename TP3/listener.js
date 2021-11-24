let listener = (function (){
    
    return {

        makeCalculator(){
            document.getElementById('0').addEventListener('click', event => saveDatas.saveNumber(0));
            document.getElementById('1').addEventListener('click', event => saveDatas.saveNumber(1));
            document.getElementById('2').addEventListener('click', event => saveDatas.saveNumber(2));
            document.getElementById('3').addEventListener('click', event => saveDatas.saveNumber(3));
            document.getElementById('4').addEventListener('click', event => saveDatas.saveNumber(4));
            document.getElementById('5').addEventListener('click', event => saveDatas.saveNumber(5));
            document.getElementById('6').addEventListener('click', event => saveDatas.saveNumber(6));
            document.getElementById('7').addEventListener('click', event => saveDatas.saveNumber(7));
            document.getElementById('8').addEventListener('click', event => saveDatas.saveNumber(8));
            document.getElementById('9').addEventListener('click', event => saveDatas.saveNumber(9));
            document.getElementById('virg').addEventListener('click', event => saveDatas.saveNumber('.'));

            document.getElementById('plus').addEventListener('click', event => saveDatas.saveOperator('+'));
            document.getElementById('minus').addEventListener('click', event => saveDatas.saveOperator('-'));
            document.getElementById('mult').addEventListener('click', event => saveDatas.saveOperator('*'));
            document.getElementById('div').addEventListener('click', event => saveDatas.saveOperator('/'));

            document.getElementById('exe').addEventListener('click', event => saveDatas.getResult());

            document.getElementById('clear').addEventListener('click', event => saveDatas.clearCalculator());
        }
        
    }
})();