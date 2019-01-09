function getNumberPiecesFromUser() {
    let piezas = prompt("Introduce el numero de piezas que formaran el puzzle");
    let raizCuadrada = Math.sqrt;
    let condition = true;
    while (condition) {
        if (piezas % raizCuadrada === 0) {
            alert("El numero introducido es valido");
            condition = false;
        } else {
            piezas = prompt("Elije un número con raiz cuadrada");
            raizCuadrada = Math.sqrt(piezas);
        }
    }
    return alert("Tu puzzle tiene " + piezas + " piezas");
}

getNumberPiecesFromUser();

function getMaxScore(piezas){
    return piezas*2;
}

function getScore(){
    let score = document.getElementById('score').textContent;

    sacarResultado = score.split(':');
        return parseInt(sacarResultado[1]);
}

console.log(getScore());

function updateScore(newScore){
    document.getElementById('score').textContent = "Score:" + newScore;

    document.getElementById("score").textContent[0]+document.getElementById("score").textContent[1];

}

function decreaseScore(restarScore){
    let puntuacionIntroducida = getScore() - restarScore;
    updateScore(puntuacionIntroducida);
}


function getNewSizes(altura,anchura){
    let newAltura;
    let newAnchura;
    if(altura > anchura){
        newAltura = 200;
        newAnchura = (anchura * newAltura) / altura;
        newAnchura = parseInt(newAnchura);
    }else{
        newAnchura = 200;
        newAltura = (altura*newAnchura)/anchura;
        newAltura = parseInt(newAltura);
    }
    return[newAltura,newAnchura];
}


function shuffle(arrayObjetos){
    for(let index = arrayObjetos.length - 1; index >= 0; index--) {
        let numRandom = Math.floor(Math.random() * index);
        let auxiliar = arrayObjetos[numRandom];
        arrayObjetos[numRandom] = arrayObjetos[index];
        arrayObjetos[index] = auxiliar;
    }

    return arrayObjetos;
}

arrayObjetos = [1,2,3,4,5,6,7,8,9];
console.log(shuffle(arrayObjetos));


function pieceNumberToRowsColumns(numeroPieza,numeroTotalPiezas){
    let raizCuadrada = Math.sqrt(numeroTotalPiezas);
}