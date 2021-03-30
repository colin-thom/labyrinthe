class Labyrinthe {

    tab = [];
    constructor(data, taille, exemple) {
        this.exemple = data[taille.toString()]['ex-' + exemple.toString()];
        this.taille = taille;
    }
    getExemple() {
        return this.exemple
    }
    createLab() {
        let board = document.createElement('div');
        board.setAttribute('id', 'board');
        board.style.width = (this.taille * 50) + 'px';
        board.style.height = (this.taille * 50) + 'px';

        for (let elem of this.exemple) {
            let carre = new Case(elem, this.taille);

            if (this.tab[carre.posX] == undefined) {
                this.tab.push([])
            }
            this.tab[carre.posX].push(carre)

            board.append(carre.createCase());
        }
        document.querySelector('body').append(board);
    }
    isVisited(x, y) {
        if (this.tab[x][y].visited == true) {
            return true;
        } else {
            return false;
        }
    }
    isCulDeSac(x, y) {
        let compteur = 0;
        if (this.tab[x][y].wallRight == true) {
            compteur++
        }
        if (this.tab[x][y].wallDown == true) {
            compteur++
        }
        if (this.tab[x][y].wallLeft == true) {
            compteur++
        }
        if (this.tab[x][y].wallUp == true) {
            compteur++
        }
        if (compteur == 3) {
            if (x !== 0 && y !== 0) {
                this.tab[x][y].setbackgroundColor('#FF0000')
            }
            return true
        } else {
            return false
        }
    }
    isEmbranchement(x, y) {
        let compteur = 0;
        if (this.tab[x][y].wallRight == false) {
            compteur++
        }
        if (this.tab[x][y].wallDown == false) {
            compteur++
        }
        if (this.tab[x][y].wallLeft == false) {
            compteur++
        }
        if (this.tab[x][y].wallUp == false) {
            compteur++
        }
        if (compteur == 3) {
            return true
        } else {
            return false
        }
    }
    getPossibleMove(position, x, y) {
        // return les possibles moves
        let possibleMoves = [];

        if (y !== (this.taille - 1) && position.wallRight == false && this.isVisited(x, y + 1) == false) {
            possibleMoves.push('right')
        }
        if (x !== (this.taille - 1) && position.wallDown == false && this.isVisited(x + 1, y) == false) {
            possibleMoves.push('down')
        }
        if (y !== 0 && position.wallLeft == false && this.isVisited(x, y - 1) == false) {
            possibleMoves.push('left')
        }
        if (x !== 0 && position.wallUp == false && this.isVisited(x - 1, y) == false) {
            possibleMoves.push('up')
        }
        return possibleMoves;


    }
    moveWithoutVisited(position, x, y) {
        // retourne les move possible sans tenir compte de visited
        let possibleMoves = [];

        if (y !== (this.taille - 1) && position.wallRight == false) {
            possibleMoves.push('right')
        }
        if (x !== (this.taille - 1) && position.wallDown == false) {
            possibleMoves.push('down')
        }
        if (y !== 0 && position.wallLeft == false) {
            possibleMoves.push('left')
        }
        if (x !== 0 && position.wallUp == false) {
            possibleMoves.push('up')
        }
        return possibleMoves;
    }
    moveX(pos, x, y) {
        if (this.isCulDeSac(x, y) || this.isVisited(x, y)) {
            if (this.moveWithoutVisited(pos, x, y).find(e => e == 'up') == 'up') {
                this.isCulDeSac(x, y);
                x--;
                return x
            } else if (this.moveWithoutVisited(pos, x, y).find(e => e == 'down') == 'down') {
                this.isCulDeSac(x, y);
                x++;
                return x
            } else {
                this.isCulDeSac(x, y);
                return x
            }
        } else {
            if (this.getPossibleMove(pos, x, y).find(e => e == 'down') == 'down') {
                x++;
                return x
            } else if (this.getPossibleMove(pos, x, y).find(e => e == 'up') == 'up') {
                x--;
                return x
            } else {
                return x
            }
        }
    }
    moveY(pos, x, y) {
        if (this.isCulDeSac(x, y) || this.isVisited(x, y)) {
            if (this.moveWithoutVisited(pos, x, y).find(e => e == 'left') == 'left') {
                this.isCulDeSac(x, y);
                y--;
                return y
            } else if (this.moveWithoutVisited(pos, x, y).find(e => e == 'right') == 'right') {
                this.isCulDeSac(x, y);
                y++;
                return y
            } else {
                return y
            }
        } else {
            if (this.getPossibleMove(pos, x, y).find(e => e == 'right') == 'right') {
                this.verdurer(x, y);
                y++;
                return y
            } else if (this.getPossibleMove(pos, x, y).find(e => e == 'left') == 'left') {
                this.verdurer(x, y);
                y--;
                return y
            } else {
                this.verdurer(x, y);
                return y
            }
        }
    }
    verdurer(x, y) {
        //colorer en vert la case sur laquelle on est pour laisser une trace de son passage
        if (x < longueur && y < longueur) {
            this.tab[x][y].setVisitedTrue();
            if (this.tab[x][y].visited == true) {
                this.tab[x][y].setbackgroundColor('#32CD32')
            }
            console.log(this.tab);
        }
    }





}

