class TicTacToeView{

    game;
    name;

    // Contructeur
    constructor(_game, _name){
        
        this.game = _game;
        this.name = _name;

        // Affichage
        this.showTicTacToe();
        this.game.event.on("click", (e) => this.click(e)); // Création d'un événement de click
        
        // Puis on l'utilise lorsque l'une des cases du jeu est cliquée
        document.querySelectorAll("td").forEach(e => e.addEventListener("click", () => this.game.event.trigger("click", e)));
        
        // Bouton reset
        document.getElementById("resetButton").addEventListener("click", event => this.resetTicTacToe());
    }

    click(element){
        
        // On récupère une data entre 1 et 9
        // Selon la disposition des td on doit calculer les valeurs de x et de y afin d'avoir les bonnes valeurs dans notre tableau
        let x = Math.floor((element.getAttribute("data") - 1) / 3);
        let y = Math.floor((element.getAttribute("data") - 1) % 3);
        console.log(x , y);
        
        // Si case vide cliquée ET que le jeu est en cours
        if(this.game.getCaseState(x, y) === undefined && !this.game.isFinished()){
            this.game.play(x, y);
            // Affichage
            this.showTicTacToe();
        }
        
        // Sinon
        else{
            // On vérfie si le jeu est fini
            if(this.game.isFinished()){
                this.game.reset();
                // Affichage
                this.showTicTacToe();
            }
            // Sinon on ne fait rien
        }
    }

    showTicTacToe(){
        
        // Si le jeu est terminé
        if(this.game.isFinished()){
            
            // Cas de l'égalité
            if(this.game.isDraw()){
                console.log("Égalité !!");
                document.getElementById("player_number").textContent = "Égalité !!";
            }
            
            // Sinon il y a un gagnant
            else{
                let playerName = parseInt(this.game.getWinner()) + 1;
                document.getElementById("player_number").textContent = "Victoire du joueur " + playerName;
            }
        }
        
        // Sinon le jeu est en cours
        else{
            
            let playerName = parseInt(this.game.getCurrentPlayer()) + 1;
            console.log("C'est au joueur " + playerName);
            document.getElementById("player_number").textContent = "C'est au joueur " + playerName;
            
            if(this.game.getCurrentPlayer() === 0){
                document.getElementById("currentShape").innerHTML = '<i class="fas fa-times"></i>';
            }
            else{
                document.getElementById("currentShape").innerHTML = '<i class="far fa-circle"></i>';
            }
        }

        // Affichage des valeurs dans les cases du jeu
        for(let i = 0; i < 3; i++){
            
            for(let j = 0; j < 3; j++){
                
                let id = i * 3 + j + 1; // Transformation des coordonnées en fonction du tableau dans le html
                let currentElement;
                
                // Récupération de la case
                document.querySelectorAll("td").forEach(e => e.getAttribute("data") === id.toString() ? currentElement = e : '');
                
                // Si la case n'est pas vide, affichage
                if(this.game.getCaseState(i, j) !== undefined){
                    
                    if(this.game.getCaseState(i, j) === 0){
                        currentElement.innerHTML = '<div><i class="fas fa-times"></i></div>';
                    }
                    else{
                        currentElement.innerHTML = '<div><i class="far fa-circle"></i></div>';
                    }
                }
                
                // Sinon pas d'affichage comme la case est vide
                else{
                    currentElement.innerHTML = "";
                }
            }
        }
    }

    resetTicTacToe(){
        this.game.reset();
        this.showTicTacToe();
    }
}