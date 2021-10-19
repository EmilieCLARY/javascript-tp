let fact = "Vérité sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs."; // Chaîne de caractères initiale.

/* -----  Déclaration des fonctions  ----- */

function remplacement(newChaine, motARemplacer){ // Fonction permettant de remplacer Chuck Norris dans la chaîne de caractères

    while (newChaine.search('Chuck Norris') != -1){     // Tant que 'Chuck Norris' est trouvé dans la chaîne de caractères;
        newChaine = newChaine.replace('Chuck Norris', motARemplacer);   // On le remplace par l'expression ou le mot choisi.
    }
    return newChaine;
}

function tailleMoyenneMots(string){     // Fonction qui calcule la taille moyenne des mots de la chaîne de caractères.

    let compteur = 0;

    words = string.split([' ']); // On crée un tableau qui va caser chaque mot de la chaine dans une cellule de ce tableau chaque fois qu'un espace est rencontré.

    for(let i = 0; i < words.length; i++){  // On parcourt le tableau;
        
        for (let j = 0; j < words[i].length; j++){ // Et le mot de chaque cellule.
            compteur++; 
        }
    }
    return moyenne = compteur/words.length; // On calcule la moyenne en divisant le compteur par la taille de la chaine de caractère, puis on la renvoie.
}

function caractere(string){     // Fonction permettant de rechercher puis d'afficher les caractères uniques d'une chaine de caractères

    let tab = string.split('');     // On sépare la chaîne de caractères en tableau
    let newTab = [];    // On crée le tableau qui va contenir les caractères uniques
    
    for(let i = 0; i < string.length; i++){     // On parcourt le tableau i sur la chaîne de caractères

        newTab.push(tab[i]);    // On met le caractère dans le tableau

        for(let j = 1; j < string.length; j++){     // On parcourt le tableau j sur la chaîne de caractères

            if (j != i){        // Si j est différent de i (pour éviter les passages où les 2 valeurs sont égales)
                if (tab[i] ==  tab[j]){     // Si tab[i] = tab[j] (c'est-à-dire que les 2 caractères sont égaux)
                    newTab.pop();    // Alors on enlève la valeur ajoutée précédemment
                    break;  // On break pour itérer au prochain i, puisque si d'autres caractères identiques sont égaux cela ne nous intéresse pas puisque 2 sont déjà égaux
                }
            }
        }
    }
    return newTab;
}

const ordreAlphabétique = tab => tab.sort();    // Fonction permettant de trier un tableau dans l'ordre alphabétique.


/* -----  Test des fonctions dans la console  ----- */

console.log(remplacement(fact, "Eric Zemmour"));

console.log("La taille moyenne des mots contenus dans la chaîne est :",tailleMoyenneMots(fact),"lettres");

console.log("Les caractères uniques de la chaîne sont :",caractere(fact));

console.log("Tri par ordre alphabétique :",ordreAlphabétique(caractere(fact)));