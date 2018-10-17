/**

* Ejercicio: Articulos

* Dar de alta articulo

* Dar de baja articulo

* Buscar un articulo y mostrarlo por pantalla

*/



const readline = require('readline-sync');



class Autor {



constructor(nombre, apellidos, id_autor) {

this.nombre = nombre;

this.apellidos = apellidos;

this.id_autor = id_autor;

}

getNombre() {

return this.nombre;

}

getApellidos() {

return this.apellidos;

}

getId_Autor() {

return this.id_autor;

}

}



class ArtRevis {



constructor(titulo, autor, n_pag, anyoPub, numMen, revistCien, tituRevis, editorial) {

this.titulo = titulo;

this.autor = autor;

this.n_pag = n_pag;

this.anyoPub = anyoPub;

this.numMen = numMen;

this.tituRevis = tituRevis;

this.editorial = editorial;

this.revis = false;



}

getTitulo() {

return this.titulo;

}

getAutor() {

return this.autor;

}

getN_pag() {

return this.n_pag;

}

getAnyoPub() {

return this.anyoPub;

}

getNumMen() {

return this.numMen;

}

getTituRevis() {

return this.tituRevis;

}

getEditorial() {

return this.editorial;

}



}



class ArtConf {



constructor(titulo, autor, n_pag, anyoPub, numMen, libConf, nombreConf, lugar) {

this.titulo = titulo;

this.autor = autor;

this.n_pag = n_pag;

this.anyoPub = anyoPub;

this.numMen = numMen;

this.libConf = libConf;

this.nombreConf = nombreConf;

this.lugar = lugar;

this.conf = false;



}

getTitulo() {

return this.titulo;

}

getAutor() {

return this.autor;

}

getN_pag() {

return this.n_pag;

}

getAnyoPub() {

return this.anyoPub;

}

getNumMen() {

return this.numMen;

}

getLibConf() {

return this.libConf;

}

getNombreConf() {

return this.nombreConf;

}

getLugar() {

return this.lugar;

}



}



class Patente {



constructor(titulo, autores, anyoPub, anyoBen) {

this.titulo = titulo;

this.autores = autores;

this.anyoPub = anyoPub;

this.anyoBen = anyoBen;

this.patente = false;



}



getTitulo() {

return this.titulo;

}

getAutores() {

return this.autores;

}

getAnyoPub() {

return this.anyoPub;

}

getAnyoBen() {

return this.anyoBen;

}



}



class Publicaciones {



constructor(tituloPub, autorPub) {

this.tituloPub = tituloPub;

this.autorPub = autorPub;

}

getTituloPub() {

return this.tituloPub;

}

getAutorPub() {

return this.autorPub;

}



}



let listaPubli = [];

let atras = false;

while (!atras) {

console.log('Bienvenidos al sistema de gestión de articulos');

console.log('0) Dar de alta un autor');

console.log('1) Dar de alta un articulo');

console.log('2) Dar de baja un articulo');

console.log('3) Modificar una Publicaciones');

console.log('4) Busqueda de publicaciones');

console.log('5) Numero de publicaciones por autor y año');

console.log('6) Factor de impacto por autor y año');

console.log('7) Indice-h para cada autor');

console.log('8) Salir del sistema');

let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');



if (opcion === 0) {

//Dar de alta un Autor

let nombre = readline.question('Por favor, introduce el nombre del autor: ');

let apellidos = readline.question('Por favor, introduce los apellidos: ');

let id_autor = readline.question('Por favor, introduce el numero de ID: ');

let newAutor = new Autor(nombre, apellidos, id_autor);

listaPubli.push(newAutor);

console.log(listaPubli);

}



if (opcion === 1) {

//Seleccionar el tipo de Articulo

let atras = false;

while (!atras) {

console.log('1) Dar de alta un Articulo de Revista');

console.log('2) Dar de alta un Articulo de Conferencia');

console.log('3) Dar de alta una Patente');

console.log('4) Dar de alta una Publicaciones');

console.log('5) Salir al sistema inicial');

let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

if (opcion === 1) {

//Dar de alta el Articulo de Revista

let titulo = readline.question('Por favor, introduce un titulo: ');

let autor = readline.question('Por favor, introduce un autor: ');

let n_pag = readline.question('Por favor, introduce un numero de paginas: ');

let anyoPub = readline.question('Por favor, introduce un anyo de publicacion: ');

let numMen = readline.question('Por favor, introduce un numero de menciones: ');

let tituRevis = readline.question('Por favor, introduce en que revista aparecio: ');

let editorial = readline.question('Por favor, introduce la editorial: ');

let newArtRevis = new ArtRevis(titulo, autor, n_pag, anyoPub, numMen, tituRevis, editorial);

listaPubli.push(newArtRevis);

console.log(listaPubli);

} else if (opcion === 2) {

//Dar de alta el Articulo en Conferencia

let titulo = readline.question('Por favor, introduce una titulo: ');

let autor = readline.question('Por favor, introduce una autor: ');

let n_pag = readline.question('Por favor, introduce un numero de paginas: ');

let anyoPub = readline.question('Por favor, introduce un anyo de publicacion: ');

let numMen = readline.question('Por favor, introduce un numero de menciones: ');

let libConf = readline.question('Por favor, introduce el libro de la conferencia: ');

let nombre = readline.question('Por favor, introduce el nombre de la conferencia: ');

let lugar = readline.question('Por favor, introduce el lugar de la conferencia: ');

let newArtConf = new ArtConf(titulo, autor, n_pag, anyoPub, numMen, libConf, nombre, lugar);

listaPubli.push(newArtConf);

console.log(listaPubli);

} else if (opcion === 3) {

//Dar de alta una patente

let titulo = readline.question('Por favor, introduce una titulo: ');

let autores = readline.question('Por favor, introduce los autores: ');

let anyoPub = readline.question('Por favor, introduce el anyo de publicación: ');

let anyoBen = readline.question('Por favor, introduce el anyo de bencimiento: ');

let newPatente = new Patente(titulo, autores, anyoPub, anyoBen);

listaPubli.push(newPatente);

console.log(listaPubli);

} else if (opcion === 4) {

//Dar de alta una Publicacion

let tituloPub = readline.question('Por favor, introduce una titulo de la publicacion: ');

let autorPub = readline.question('Por favor, introduce los autores de la publicacion: ');

let newPublicaciones = new Publicaciones(tituloPub, autorPub);

listaPubli.push(newPublicaciones);

console.log(listaPubli);

} else if (opcion === 5) {

atras = true;

}

}



}



if (opcion === 2) {

//Dar de baja articulos

let atras = false;

while (!atras) {

console.log('1) Dar de baja un Articulo de Revista');

console.log('2) Dar de baja un Articulo de Conferencia');

console.log('3) Dar de baja una Patente');

console.log('4) Volver a las opciones');

let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

if (opcion === 1) {

//Dar de baja un Articulo de Revista

let titulo = readline.question('Por favor introduce una matricula: ');

let encontrado = false;

for (let i = 0; i < listaPubli.length; i++) {

let ArtRevis = listaPubli[i];

if (ArtRevis.titulo === titulo) {

listaPubli.splice(i, 1);

encontrado = true;

break;

}

}

if (encontrado) {

console.log('Publicacion encontrada y borrado del sistema'); +

console.log(listaPubli);

} else {

console.log('Publicacion no encontrado en el sistema');

}



} else if (opcion === 2) {

//Dar de baja un Articulo de Conferencia

let titulo = readline.question('Por favor introduce un titulo: ');

let encontrado = false;

for (let i = 0; i < listaPubli.length; i++) {

let ArtConf = listaPubli[i];

if (ArtConf.titulo === titulo) {

listaPubli.splice(i, 1);

encontrado = true;

break;

}

}

if (encontrado) {

console.log('Publicacion encontrada y borrado del sistema'); +

console.log(listaPubli);

} else {

console.log('Publicacion no encontrado en el sistema');

}

} else if (opcion === 3) {

//Dar de baja una Patente

let titulo = readline.question('Por favor introduce una matricula: ');

let encontrado = false;

for (let i = 0; i < listaPubli.length; i++) {

let Patente = listaPubli[i];

if (Patente.titulo === titulo) {

listaPubli.splice(i, 1);

encontrado = true;

break;

}

}

if (encontrado) {

console.log('Publicacion encontrada y borrado del sistema'); +

console.log(listaPubli);

} else {

console.log('Publicacion no encontrado en el sistema');

}

}

if (opcion === 4) {

atras = true;

}

}

}



if (opcion === 3) {

//Modificar publicaciones

let atras = false;

while (!atras) {

console.log('1) Modificar un Articulo de Revista');

console.log('2) Modificar un Articulo de Conferencia');

console.log('3) Modificar una Patente');

console.log('4) Volver a las opciones');

let encontrado = false;

let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

if (opcion === 1) {

//Modificar un Articulo de Revista

let titulo = readline.question('Por favor introduce el titulo de la publicacion:');

let publiEncotrada = undefined;

for(let i=0;i<listaPubli.length;i++){

let ArtRevis = listaPubli[i];

if(ArtRevis.titulo === titulo){

publiEncotrada = ArtRevis;

break;

}

}

if(publiEncotrada){

//Articulo de Revista encontrado

let newAutor = readline.question('Introduce un nuevo autor: ');

ArtRevis.autor = newAutor;

console.log('Dato modificado');

let newN_pag = readline.question('Introduce un nuevo numero de paginas: ');

ArtRevis.n_pag = newN_pag;

console.log('Dato modificado');

let newAnyoPub = readline.question('Introduce un nuevo anyo de publicacion: ');

ArtRevis.anyoPub = newAnyoPub;

console.log('Dato modificado');

let newNumMen = readline.question('Introduce un nuevo numero de menciones: ');

ArtRevis.NumMen = newNumMen;

console.log('Dato modificado');

let newRevistCien = readline.question('Introduce un nuevo numero de paginas: ');

ArtRevis.RevistCien = newRevistCien;

console.log('Dato modificado');

let newTituRevis = readline.question('Introduce un nuevo titulo de la revista: ');

ArtRevis.TituRevis = newTituRevis;

console.log('Dato modificado');

let newEditorial = readline.question('Introduce una nueva editorial: ');

ArtRevis.Editorial = newEditorial;

console.log('Dato modificado');

} else {

//Publicacion encontrada

console.log('Articulo de Revista no enontrada');

}


if (opcion === 2) {

//Modificar un Articulo de Conferencia

let titulo = readline.question('Por favor introduce el titulo de la publicacion:');

let publiEncotrada = undefined;

for(let i=0;i<listaPubli.length;i++){

let ArtConf = listaPubli[i];

if(ArtConf.titulo === titulo){

publiEncotrada = ArtConf;

break;

}

}

if(publiEncotrada){

//Articulo de Conferencia encontrado

let newAutor = readline.question('Introduce un nuevo autor: ');

ArtConf.autor = newAutor;

console.log('Dato modificado');

let newN_pag = readline.question('Introduce un nuevo numero de paginas: ');

ArtConf.n_pag = newN_pag;

console.log('Dato modificado');

let newAnyoPub = readline.question('Introduce un nuevo anyo de publicacion: ');

ArtConf.anyoPub = newAnyoPub;

console.log('Dato modificado');

let newNumMen = readline.question('Introduce un nuevo numero de menciones: ');

ArtConf.NumMen = newNumMen;

console.log('Dato modificado');

let newLibConf = readline.question('Introduce un nuevo libro de conferencia: ');

ArtConf.LibConf = newLibConf;

console.log('Dato modificado');

let newNombreConf = readline.question('Introduce un nuevo nombre de la conferencia: ');

ArtConf.NombreConf = newNombreConf;

console.log('Dato modificado');

let newLugar = readline.question('Introduce un nuevo lugar: ');

ArtConf.Lugar = newLugar;

console.log('Dato modificado');

} else {

//Publicacion encontrada

console.log('Articulo de Conferencia no enontrada');

}

}

if (opcion === 3) {

//Modificar una Patente

let titulo = readline.question('Por favor introduce el titulo de la publicacion:');

let publiEncotrada = undefined;

for(let i=0;i<listaPubli.length;i++){

let Patente = listaPubli[i];

if(Patente.titulo === titulo){

publiEncotrada = Patente;

break;

}

}

if(publiEncotrada){

//Articulo de Conferencia encontrado

let newAutores = readline.question('Introduce un nuevo autor: ');

Patente.autores = newAutores;

console.log('Dato modificado');

let newAnyoPub = readline.question('Introduce un nuevo anyo de publicacion: ');

Patente.AnyoPub = newAnyoPub;

console.log('Dato modificado');

let newAnyoBen = readline.question('Introduce un nuevo anyo de publicacion: ');

Patente.anyoBen = newAnyoBen;

console.log('Dato modificado');

} else {

//Publicacion encontrada

console.log('Articulo de Conferencia no enontrada');

}

}


if (opcion === 4) {

atras = true;

}

}

}
}


if (opcion === 4) {

//Busqueda de las diferentes publicaciones

let atras = false;

while (!atras) {

console.log('1) Buscar un Articulo de Revista');

console.log('2) Buscar un Articulo de Conferencia');

console.log('3) Buscar una Patente');

console.log('4) Volver a las opciones');

let encontrado = false;

let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

}

if (opcion === 1) {

//Buscar un Articulo de Revista

let titulo = readline.question('Por favor introduce el titulo de la publicacion que quieras buscar:');

for(let titulo of listaPubli){

  if(ArtRevis.titulo === titulo){

    console.log(titulo);

    break;

  }

}
}

if (opcion === 2) {

//Buscar un Articulo de Conferencia

let titulo = readline.question('Por favor introduce el titulo de la publicacion que quieras buscar:');

for(let titulo of listaPubli){

  if(ArtConf.titulo === titulo){

    console.log(titulo);

    break;

  }

}

}

if (opcion === 3) {

//Buscar una Patente

let titulo = readline.question('Por favor introduce el titulo de la publicacion que quieras buscar:');

for(let titulo of listaPubli){

  if(Patente.titulo === titulo){

    console.log(titulo);

    break;

  }

}

}


if (opcion === 4) {

atras = true;

}

}

/*let nombre = readline.question('Introduce el autor o pulsa enter para seguir: ');

let anyoPub = readline.question('Introduce el anyo de publicación o 0: ');

let tipo = readline.question('Introduce el tipo de publicacion o pulsa enter para seguir: ');

let busqueda = [];

let encontrado = false;


for (public of publications) {

if (nombre != '') {

for (nombre of publications.getNombre()) {

if (nombre === nombre) {

encontrado = true;

}

}

}

if (anyoPub !== 0 && Publicaciones.getAnyoPub()) encontrado = true;

if (tipo !== 0 && Publicaciones.ArtRevis || Publicaciones.ArtConf || Publicaciones.Patente) encontrado = true;

if (encontrado === true) busqueda.push(Publicaciones);

}

console.log(busqueda);
*/


} else if (opcion === 5) {

//Numero de publicaciones por autor y año

let nombre = readline.question('Introduce el autor: ');

let anyo = readline.question('Introduce el año de inicio de la busqueda');

let busqueda = 0;

let encontrado = false;



for (let Publicaciones of Publicaciones) {

if (nombre !== '' && anyo <= Publicaciones.getAnyoPub()) {

for (autorPub of Publicaciones.getAutorPub()) {

if (autorPub === nombre) {

encontrado = true;

}

}

}

if (encontrado === true) busqueda++;

}

console.log('El numero de publicaciones realizadas por ' + nombre + ' es: ' + busqueda);



} else if (opcion === 6) {

//Factor de impacto por autor y año

let nombre = readline.question('Introduce el autor: ');

let anyo = readline.questionInt('Introduce el año de inicio de busqueda que desee: ');

let busqueda = 0;

let encontrado = false;



for (let Publicaciones of Publicaciones) {

if (nombre !== '' && anyo <= Publicaciones.getAnyoPub()) {

for (autorPub of Publicaciones.getAutorPub()) {

if (autorPub === nombre) {

encontrado = true;

}

}

}

if (encontrado === true) busqueda = busqueda + Publicaciones.getFactImpact();

}

console.log('El factor de impacto de ' + nombre + ' es ' + busqueda);



/**

* let arrayArtCient = listaArtCient.filter( c=> c.titulo===titulo)

* console.log(arrayArtCient[0]);

*/

} else if (opcion === 7) {

//Calcula el indice-h de el autor que se desee

let nombre = readline.question('Introduce el autor: ');

let anyo = readline.questionInt('Introduce el año de inicio de busqueda que desee: ');

let busqueda = 0;

let encontrado = false;



for (let Publicacion of Publicaciones) {

if (nombre !== '' && anyo <= Publicaciones.getAnyoPub()) {

for (nombre of Publicaciones.getAutorPub()) {

if (autorPub === nombre) {

encontrado = true;

}



}

}

if (encotrado === true) busqueda = busqueda + Publicaciones.getFactImpact();

}

console.log('El factor de impacto de ' + autor + ' es ' + busqueda);

} else if (opcion === 8) {

atras = true;
