// Classe Observable
// Observable est un gestionnaire d'événements.

class Observable {
            
    constructor() {
        this.events = {};
    }

    // Le nom eventName est une chaîne de caractères, et la fonction sert à enregistrer une callback concernant un évènement.
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }


    // Même chose qu'au-dessus mais ici on supprime un callback
    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(function(cb) {
                return cb !== callback;
            });
        }
    }

    // Et ici on l'exécute avec le nom et les arguments donnés
    trigger(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(cb) {
                cb.apply(null, args);
            });
        }
    }

}