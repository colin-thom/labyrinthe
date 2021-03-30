if (pos.wallRight === false) {
    if (y !== (longueur - 1) && laby.tab[x][y + 1].visited === false) {
        y++
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallUp === false) {
            x--
        } else {
            x++
        }
    }
} else if (pos.wallDown === false) {
    if (x !== (longueur - 1) && laby.tab[x + 1][y].visited === false) {
        x++
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallUp === false) {
            x--
        } else {
            y++
        }
    }
} else if (pos.wallUp === false) {
    if (x !== 0 && laby.tab[x - 1][y].visited === false) {
        x--
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallDown === false) {
            x++
        } else if (pos.wallLeft == true && pos.wallDown == true && pos.wallRight == true) {
            x--
        } else {
            y++
        }
    }
} else {
    y--
}
//colorer en vert la case sur laquelle on est pour laisser une trace de son passage
if (x < longueur && y < longueur) {
    laby.tab[x][y].setVisitedTrue();
    if (laby.tab[x][y].visited == true) {
        laby.tab[x][y].setbackgroundColor('#32CD32')
    }
    console.log(laby.tab);

    // donner a position sa nouvelle valeur
    position = laby.tab[x][y];
}

if (x == longueur - 1 && y == longueur - 1) {
    window.alert('et voila !')
}
console.log(position);