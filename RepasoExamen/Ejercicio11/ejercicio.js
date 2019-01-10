/*Crea una funciÃ³n que tome por parÃ¡metro una cadena de texto y 
retorne en un array todos aquellos elementos que han aparecido 
al menos tres veces en la cadena de texto. Emplea la estructura de datos map*/
/**
 * Retorna aquellas palabras que han aparecido al menos 3 veces en el texto
 * @param {String} text el texto a analizar 
 */
function palabrasRepetidas(text){
    let words = text.split(new RegExp(' |!|\\.|\\,|\\?'));
    let mapOfwords = new Map();
    let arrayResult = [];
    for(let word of words){
        if(word){
            let counter = 1;
            if (mapOfwords.has(word)){
                counter = counter + mapOfwords.get(word);
            }
            mapOfwords.set(word, counter);
        }
    }
    for( let word of mapOfwords.keys() ){
        if(mapOfwords.get(word)>=3){
            arrayResult.push(word);
        }
    }
    return arrayResult;
}