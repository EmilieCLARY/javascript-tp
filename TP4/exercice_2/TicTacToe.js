// Class TicTacToe


class TicTacToe extends Observable {
    
    // Constructeur
    constructor() {
        super();
        // Création de la grille, on met à undefined les cases
        this.grid = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ];
        this.currentPlayer = 0; // On donne la priorité au joueur 0
    }

    // Joue un coup
    play(x, y) {
        if (this.grid[x][y] === undefined) { // si la case n'est pas attribuée
            this.grid[x][y] = this.currentPlayer; // Alors la case devient à ce joueur
            this.currentPlayer = (this.currentPlayer + 1) % 2; // Et on change de joueur
            this.trigger('play', x, y); // Et on trigger la fonction play
        }
    }

    // Getter du joueur actuel
    getCurrentPlayer() {
        let joueur = this.currentPlayer;
        return joueur;
    }

    // Getter de l'état d'une case
    getCaseState(x, y) {
        let statusGrid = this.grid[x][y];
        return statusGrid;
    }

    // Réinitialisation de la grille de jeu, on remet tout en undefined
    reset() {
        this.grid = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ];
        this.currentPlayer = 0;
    }

    // Cherche et retourne le gagnant (ou undefined)
    getWinner() {

        // Win column
        for (let y = 0; y < 3; ++y) { 
            if (this.grid[0][y] !== undefined && this.grid[0][y] === this.grid[1][y] && this.grid[0][y] === this.grid[2][y]) {
                return this.grid[0][y];
            }
        }
        // Win Lines
        for (let x = 0; x < 3; ++x) {
            if (this.grid[x][0] !== undefined && this.grid[x][0] === this.grid[x][1] && this.grid[x][0] === this.grid[x][2]) {
                return this.grid[x][0];
            }
        }
        // Win diags
        if (this.grid[0][0] !== undefined && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            return this.grid[0][0];
        }
        if (this.grid[0][2] !== undefined && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            return this.grid[0][2];
        }

        // A chaque test vrai, on retourne la ligne/colonne/diagonale gagnante

        return undefined; // Si aucun gagnant n'est trouvé, on retourne undefined
    }

    // Vérification de s'il y a un gagnant
    hasWinner() {
        return this.getWinner() !== undefined;
    }
    
    // Vérification de si la partie est terminée, winner ou égalité
    isFinished() {
        return this.hasWinner() || this.isDraw();
    }

    // Vérification de si la partie est nulle
    isDraw() {

        // On teste tous les emplacements de la grille pour voir si ils sont undefined
        for (let x = 0; x < 3; ++x) {
            for (let y = 0; y < 3; ++y) {
                if (this.grid[x][y] === undefined) {
                    return false; // Si c'est faux, alors la partie continue
                }
            }
        }
        return true; // Si c'est vrai et qu'un gagnant n'a pas été trouvé, alors on annonce l'égalité
    }

}