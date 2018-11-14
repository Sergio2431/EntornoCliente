/*let myMap = new Map();
myMap.set('1', 1);
myMap.set('2', 2);
myMap.set('3', 3);
myMap.set('4', 4);
myMap.set('5', 5);
myMap.set('6', 6);

let contador

while(contador>0);
    Math.floor(Math.random() * 6) + 1;
*/





//Solucion

function simularLanzamientoDados(n){
    let resultadoTiradas = new Map();
    //Inicializamos contadores
    for(let cara=1;cara<=6;cara++){
        resultadoTiradas.set(cara,0);
    }
    for(let i=0;i<n;i++){
        let resultadoDado = Math.floor(Math.random() * 6) + 1;
        //console.log(resultadoDado);
        let contador = resultadoTiradas.get(resultadoDado);
        resultadoTiradas.set(resultadoDado, contador + 1);
    }
    console.log(resultadoTiradas);
    return resultadoTiradas;
}

simularLanzamientoDados(100);