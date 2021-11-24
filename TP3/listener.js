let listener = (function () {

    function logKey(event) {
        switch (event.code) {
            case 'Digit0':
                saveDatas.saveNumber('0');
                break;
            case 'Digit1':
                saveDatas.saveNumber('1');
                break;
            case 'Digit2':
                saveDatas.saveNumber('2');
                break;
            case 'Digit3':
                saveDatas.saveNumber('3');
                break;
            case 'Digit4':
                saveDatas.saveNumber('4');
                break;
            case 'Digit5':
                saveDatas.saveNumber('5');
                break;
            case 'Digit6':
                saveDatas.saveNumber('6');
                break;
            case 'Digit7':
                saveDatas.saveNumber('7');
                break;
            case 'Digit8':
                saveDatas.saveNumber('8');
                break;
            case 'Digit9':
                saveDatas.saveNumber('9');
                break;
            case 'Comma':
                saveDatas.saveNumber('.');
                break;
            case 'KeyM':
                saveDatas.saveNumber('.');
                break;
            case 'Enter':
                saveDatas.getResult();
                break;
            default:
                break;
        }
    }

    return {
        
        // Déclaration des listeneurs...
        makeCalculator() {

            // ... pour les bouttons
            document.getElementById('0').addEventListener('click', event => saveDatas.saveNumber('0'));
            document.getElementById('1').addEventListener('click', event => saveDatas.saveNumber('1'));
            document.getElementById('2').addEventListener('click', event => saveDatas.saveNumber('2'));
            document.getElementById('3').addEventListener('click', event => saveDatas.saveNumber('3'));
            document.getElementById('4').addEventListener('click', event => saveDatas.saveNumber('4'));
            document.getElementById('5').addEventListener('click', event => saveDatas.saveNumber('5'));
            document.getElementById('6').addEventListener('click', event => saveDatas.saveNumber('6'));
            document.getElementById('7').addEventListener('click', event => saveDatas.saveNumber('7'));
            document.getElementById('8').addEventListener('click', event => saveDatas.saveNumber('8'));
            document.getElementById('9').addEventListener('click', event => saveDatas.saveNumber('9'));

            // ... pour les touches du clavier
            document.addEventListener('keydown', logKey);

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