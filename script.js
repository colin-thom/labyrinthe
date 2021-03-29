longueur = 10;
const laby = new Labyrinthe(data, longueur, 0);

laby.createLab();
console.log(laby.tab);

let x = 0;
let y = 0;
let position = laby.tab[x][y];
console.log(position);

// document.getElementById("avancer").onclick = function() {
//     position = resolveLab(position);
//     laby.tab[x][y].verified = true;
//     console.log(laby.tab);
// };

document.getElementById("avancer").addEventListener("click", () => position = resolveLab(position));


function resolveLab(positione){
    // objectif : si on peut aller a droite on y va, sinon en bas, sinon en haut, sinon a gauche.
    // si une case est déja visité, on y retourne pas 
    
    
        if (positione.wallRight === false){
            if (y ==! (longueur-1) && laby.tab[x][y+1].visited === false){
               y++
            } else {
                if(positione.wallDown === false){
                    x++
                } else if(positione.wallUp === false){
                    x--
                } else {
                    y--
                }
            } 
        } else if(positione.wallDown === false){
            if (x !== (longueur-1) && laby.tab[x+1][y].visited === false){
                x++
            } else {
                if (positione.wallRight === false){
                    y++
                } else if(positione.wallUp === false){
                    x--
                } else {
                    y--
                }
            }
            
        } else if(positione.wallUp === false){
            if(x !== 0 && laby.tab[x+1][y].visited === false){
               x-- 
            } else {
                if (positione.wallRight === false){
                    y++
                } else if(positione.wallDown === false){
                    x++
                } else {
                    y--
                }
            }
            
        } else {
            y--
        }
    

    //colorer en vert la case sur laquelle on est pour laisser une trace de son passage
    laby.tab[x][y].verified = true;
    if (laby.tab[x][y].verified == true){
        laby.tab[x][y].setbackgroundColor('#32CD32')
    }

    // donner a position sa nouvelle valeur
    //position = 
    return laby.tab[x][y];
    console.log(position);
}




