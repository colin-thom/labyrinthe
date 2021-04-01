for (i = 3; i <= 25; i++) {
    let option = document.createElement("option");
    option.setAttribute('value', i);
    option.textContent = i;
    document.getElementById("select-taille").append(option);
}
for (i = 1; i <= 3; i++) {
    let option = document.createElement("option");
    option.setAttribute('value', i - 1);
    option.textContent = i;
    document.getElementById("select-exemple").append(option);
}
let goodWay = [];
let laby;
let position;

document.getElementById("createLab").addEventListener("click", () => {
    if (document.getElementById("board")) {
        document.getElementById("board").remove();
    }
    let longueur = document.getElementById("select-taille").value;
    let exemple = document.getElementById("select-exemple").value;
    laby = new Labyrinthe(data, longueur, exemple);
    laby.createLab();
    position = laby.tab[0][0];
    console.log(laby.tab)
    goodWay = [];
});
document.getElementById("avancer").addEventListener("click", () => position = resolveLab(position));

function resolveLab(position) {
    position.checkNeighburs(laby.tab);
    if (!position.start) {
        for (let neighbur of position.neighburs) {
            if (neighbur.visited) {
                position.parent = neighbur;
            }
        }
    }
    position.setVisitedTrue();

    if (position.end) {
        position.setbackgroundColor('#EDBB99');
        goodWay.unshift(position);
        remonter(position);
        console.log(goodWay)
        for (let i = 0; i < goodWay.length; i++) {
            setTimeout(() => {
                goodWay[i].setbackgroundColor('#CD5C5C')
            }, 50 * i)
        }
    } else {
        for (let neighbur of position.neighburs) {
            if (!neighbur.visited) {
                position = laby.tab[neighbur.posX][neighbur.posY]
                resolveLab(position);
            }
        }
    }
    return position
}

function remonter(position) {
    if (position.parent !== undefined) {
        goodWay.unshift(position.parent)
        remonter(position.parent)
    }

}

