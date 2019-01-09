/*Ejercicio 1*/

/*let marcador = Array.from(document.getElementsByTagName('a'));
let hostnames = links.map( link => link.hostname );
console.log(hostnames);
let result = new Set(hostnames);
console.log(result);*/



/*Ejercicio 2*/

console.log( document.querySelectorAll('.step img, a') );
//Extraer las imagenes perdidas en un elemento de la clase step-icon
console.log( document.querySelectorAll('.step-icon ~ img') );
//Elementos con el atributo href definido 
console.log( document.querySelectorAll('a[href="https://go.microsoft.com/fwlink/?linkid=862126"]') );