longueur = 11;
const laby = new Labyrinthe(data, longueur, 1);
laby.createLab();
console.log(laby.tab);
let x = 0;
let y = 0;
let position = laby.tab[x][y];
console.log(position);
const chemin = [];

document.getElementById("avancer").addEventListener("click", () => resolveLab(position));

function resolveLab(pos) {
    let tempX = laby.moveX(pos, x, y);
    let tempY = laby.moveY(pos, x, y);
    if (laby.isCulDeSac(x, y) || laby.isVisited(x, y)) {
        y = tempY
        if (y == position.posY) {
            x = tempX
        }
    } else {
        x = tempX
        if (x == position.posX) {
            y = tempY
        }
    }


    // donner a position sa nouvelle valeur
    position = laby.tab[x][y];

    if (x == longueur - 1 && y == longueur - 1) {
        window.alert('et voila !')
    }
    console.log(position);
}

// l'algo ne fonctionne pas quand les embranchements son trop complexes
// la prochaine étape consiste a regarde s'il y a un embranchement
// si c'est le cas, on sauvegarde la position et on continue normalement
// si le chemin aboutis a un cul de sac, on reviens a la position sauvegardée
// et on met en rouge le chemin précédemment parcourru

// pour ça il faudra a chaque fois stocker la case que l'on parcourt dans un tableau
// lors d'un embranchement on stocke le parcours dans un autre tableau.
// si tout va bien on fusionne ce tableau au principal
// si ça va pas on met tout en rouge et on reprend a la derniere donnée
// du tableau principal et on part ailleurs (en utilisant une fonction de déplacement
// qui prend en compte la couleur rouge d'une case)


