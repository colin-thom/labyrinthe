class Case {
    color = '#696969';
    tailleCase = "50px";
    carre = document.createElement('div');
    visited = false;
    parent;
    constructor(objet, taille) {
        this.posX = objet.posX;
        this.posY = objet.posY;
        this.wallUp = objet.walls[0];
        this.wallRight = objet.walls[1];
        this.wallDown = objet.walls[2];
        this.wallLeft = objet.walls[3];
        this.taille = taille
    }
    neighburs = []

    checkNeighburs(tab) {
        if (!this.wallUp) {
            this.neighburs.push(tab[this.posX - 1][this.posY])
        }
        if (!this.wallRight) {
            this.neighburs.push(tab[this.posX][this.posY + 1])
        }
        if (!this.wallDown) {
            this.neighburs.push(tab[this.posX + 1][this.posY])
        }
        if (!this.wallLeft) {
            this.neighburs.push(tab[this.posX][this.posY - 1])
        }
    }
    createCase() {
        this.carre.style.width = this.tailleCase;
        this.carre.style.height = this.tailleCase;
        this.carre.style.backgroundColor = '#DCDCDC'
        if (this.wallUp) {
            this.carre.style.borderTop = 'solid 2px' + this.color
        }
        if (this.wallRight) {
            this.carre.style.borderRight = 'solid 2px' + this.color
        }
        if (this.wallDown) {
            this.carre.style.borderBottom = 'solid 2px' + this.color
        }
        if (this.wallLeft) {
            this.carre.style.borderLeft = 'solid 2px' + this.color
        }
        return this.carre
    }
    setbackgroundColor(couleur) {
        this.carre.style.backgroundColor = couleur;
    }
    setVisitedTrue() {
        this.visited = true;
        this.carre.style.backgroundColor = '#FFDAB9'
    }
    isCulDeSac() {
        if (this.neighburs.length === 1 && !this.start && !this.end) {
            return true
        }
    }
}

class Start extends Case {
    start = true
    constructor(objet, taille) {
        super(objet, taille);
    }
    createCase() {
        super.createCase();
        this.carre.style.backgroundColor = '#F5F5DC'
        return this.carre
    }
}
class End extends Case {
    constructor(objet, taille) {
        super(objet, taille);
    }
    end = true
    createCase() {
        super.createCase();
        this.carre.style.backgroundColor = '#EDBB99'
        return this.carre
    }
}
