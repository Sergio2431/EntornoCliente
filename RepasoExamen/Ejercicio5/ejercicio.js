/*function dataArray(x) {
    return x**2;
}

let array = [1,4,8,12,24];
let newArray = array.map(dataArray);
console.log(newArray);

function par(x) {
    return x%2 == 0
}
let newPar = dataArray.filter(par);
console.log(newPar);*/


//Solución Profesor
function elevarCuadrado(x){
    return x**2;
}

function Par(x){
    return x%2;
}

function ejercicio5(dataArray) {
    let arrayCuadrado = dataArray.map(elevarCuadrado);
    return arrayCuadrado.filter(Par);

}



console.log(ejercicio5([1,2,3,4,5]));