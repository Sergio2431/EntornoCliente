function getNumberPiecesFromUser() {
    let piezas = prompt("Introduce el numero de piezas que formaran el puzzle");
    let numRaizCuadrada = Math.sqrt;
    let condition = true;
    while (!condition) {
        if (piezas % numRaizCuadrada === 0) {
            alert("El numero introducido es valido");
            condition = false;
        } else {
            piezas = prompt("Elige un numero con raiz cuadrada");
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
    let alto = altura / numRaizCuadrada;
    let ancho = anchura / numRaizCuadrada;

    for (let i = 0; i <= numRaizCuadrada -1; i++) {
        let fila = document.createElement("tr");

    for (let i = 0; i <= numRaizCuadrada -1; i++) {
        let columna = document.createElement("td");
        columna.id = "piece" + contador;
        contador++;

        columna.style.border="3px solid black";
        columna.style.height=alto + "px";
        columna.style.width=ancho + "px";
        columna.style.backgroundImage="url(cat.jpg)"

        columna.style.backgroundImage=direccion;
        tabla.appendChild(columna);

    }
    tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

createPuzzleLayaot(9,958,1277,'cat.jpg');


function pieceToOffset(numeroPiezas,anchura,altura,numeroPiezas){
    
    let numRaizCuadrada = Math.sqrt(numeroPiezas);
    let movimiento = [];
    let posicionPieza = pieceNumberToRowsColumns(numeroPieza,numeroPiezas);

    movimiento.push(parseInt((anchura/numRaizCuadrada)*posicionPieza[1])*-1,parseInt((altura/numRaizCuadrada)*posicionPieza[0]));
    
    return movimiento;

}


function createReferenceSolucion(alto,ancho,numeroPiezas){
    let movimiento = [];

    for (let i=0; i<=numeroPiezas-1; i++) {
        movimiento.push(pieceToOffset(i, altura, anchura, numeroPiezas));
    }

    return movimiento;
}

console.log(createReferenceSolucion(958,1277,9));


function drawContentPuzzle(movimiento) {
    for (let i = 0; i < movimiento.length; i++) {
        document.getElementById('piece'+i).style.backgroundPosition = movimiento[i][0]+'px ' +movimiento[i][1]+ 'px ';
    }
}

drawContentPuzzle(shuffle(createReferenceSolution(958,1277,9)));


function checklfSolution(solucion,actual) {
    for (let i = 0; i < solucion.length; i++) {
        if (solucion[1] !== actual[i]) {
            return false;
        }
    }
    return true;
}


function initGame(imagen, numeroPiezas) {
    let imag = new Image();
    imag.addEventListener('load', function () {
        gameLogic(img, numeroPiezas);
    });
    imag.src = imagen;
}


// function gameLogic(imagen2, numeroPiezas) {
//     let sizes = getNewSizes(imagen2.width, imagen2.height);
//     let imagen3 = new Image();
//     let seleccion = undefined;

//     //indicar la puntuación del jugador
//     document.getElementById('score').textContent += ' ' getMaxScore(numeroPiezas);

    
// }
