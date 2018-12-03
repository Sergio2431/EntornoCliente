function getNumberPiecesFromUser() {
    let piezas = prompt("Introduce el numero de piezas que formaran el puzzle");
    let raizCuadrada = Math.sqrt;
    let condition = true;
    while (condicion) {
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