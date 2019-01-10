function getNumberPiecesFromUser() {
    let piezas = prompt("Introduce el numero de piezas que formaran el puzzle");
    let numRaizCuadrada = Math.sqrt;
    let condition = true;
    while (condition) {
        if (piezas % numRaizCuadrada === 0) {
            alert("El numero introducido es valido");
            condition = false;
        } else {
            piezas = prompt("Elije un número con raiz cuadrada");
            numRaizCuadrada = Math.sqrt(piezas);
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
    let numRaizCuadrada = Math.sqrt(numeroTotalPiezas);
    console.log(numRaizCuadrada);
    let fila = parseInt(numeroPieza/numRaizCuadrada);
    let columna = numeroPieza % numRaizCuadrada;

    return (fila, columna);
}

console.log(pieceNumberToRowsColumns(1,5));


function createPuzzleLayaot(numeroPiezas,anchura,altura,direccion){
    let tabla = document.createElement("table");
    let contador = 0;
    let numRaizCuadrada = Math.sqrt(numeroPiezas);

    for (let i = 0; i <= numRaizCuadrada -1; i++) {
        let fila = document.createElement("tr");

    for (let i = 0; i <= numRaizCuadrada -1; i++) {
        let columna = document.createElement("td");
        columna.id = "piece" + contador;
        contador++;

        columna.style.border="3px solid black";
        columna.style.height="100px";
        columna.style.width="100px";

        columna.style.backgroundImage=direccion;
        fila.appendChild(columna);

    }
    tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

createPuzzleLayaot(9,852,1277,'cat.jpg');


function pieceToOffset(numeroPiezas,anchura,altura,numeroPiezas){
    
    let numRaizCuadrada = Math.sqrt(numeroPiezas);
    let movimiento = [];
    let posicionPieza = pieceNumberToRowsColumns(numeroPieza,numeroPiezas);

    movimiento.push(parseInt((anchura/numRaizCuadrada)*posicionPieza[1])*-1,parseInt((altura/numRaizCuadrada)*posicionPieza[0]));
    return movimiento;

}


function createReferenceSolucion(alto,ancho,numeroPiezas){
    let posicionTotal = [];
    for(let i=0; i<numeroPiezas; i++){
        posicionTotal.push(pieceToOffset(i,alto,ancho,numeroPiezas));
    }
    return posicionTotal;
}


function drawContentPuzzle(movimientos){
    let posicionPieza = [];
    for(let i=0; i<movimientos.length;i++){
        posicionPieza.push([pieceNumberToRowsColumns(i,movimientos.length),[desplazamientos[i][0], desplazamientos[i][1]]]);
    }
    for(let i=0; i<posicionPieza.length; i++){
        let 
    }
}