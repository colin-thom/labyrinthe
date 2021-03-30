class Case {
    color = '#696969';
    tailleCase = "50px";
    carre = document.createElement('div');
    visited = false;
    constructor(objet, taille) {
        this.posX = objet.posX;
        this.posY = objet.posY;
        this.wallUp = objet.walls[0];
        this.wallRight = objet.walls[1];
        this.wallDown = objet.walls[2];
        this.wallLeft = objet.walls[3];
        this.taille = taille
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
        if (this.posX === 0 && this.posY === 0) {
            this.carre.style.backgroundColor = '#F5F5DC'
        }
        if (this.posX === (this.taille - 1) && this.posY === (this.taille - 1)) {
            this.carre.style.backgroundColor = '#EDBB99'
        }
        return this.carre
    }
    setbackgroundColor(couleur){
        this.carre.style.backgroundColor = couleur;
    }
    setVisitedTrue(){
        this.visited = true;
    }
}
