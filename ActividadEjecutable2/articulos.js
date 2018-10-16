/**
 * Ejercicio: Articulos
 * Dar de alta articulo
 * Dar de baja articulo                            
 * Buscar un articulo y mostrarlo por pantalla
 */

const readline = require('readline-sync');

class Autor {

    constructor(nombre,apellidos,id_autor){
        this.nombre = nombre;
        this.apellidas = apellidos;
        this.id_autor = id_autor;
    }
    getNombre(){
        return this.titulo;
    }
}

class ArtRevis {

    constructor(titulo,autor,n_pag,anyoPub,numMen,revistCien,tituRevis,editorial){
        this.titulo = titulo;
        this.autor = autor;
        this.n_pag = n_pag;
        this.anyoPub = anyoPub;
        this.numMen = numMen;
        this.tituRevis = tituRevis;
        this.editorial = editorial;
        this.revis = false;
     
    }
 
    getTitulo(){
        return this.titulo;
    }
 
 }

class ArtConf {

    constructor(titulo,autor,n_pag,anyoPub,numMen,libConf,nombre,lugar){
        this.titulo = titulo;
        this.autor = autor;
        this.n_pag = n_pag;
        this.anyoPub = anyoPub;
        this.numMen = numMen;
        this.libConf = libConf;
        this.nombre = nombre;
        this.lugar = lugar;
        this.conf = false;
     
    }
 
    getTitulo(){
        return this.titulo;
    }
 
 }

 class Patente {

    constructor(titulo,autores,anyoPub,anyoBen){
        this.titulo = titulo;
        this.autores = autores;
        this.anyoPub = anyoPub;
        this.anyoBen = anyoBen;
        this.patente = false;

    }
 
    getTitulo(){
        return this.titulo;
    }
 
 } 

let listaPubli = [];
let atras = false;
while(!atras){
   console.log('Bienvenidos al sistema de gestión de articulos');
   console.log('0) Dar de alta un autor');
   console.log('1) Dar de alta un articulo');
   console.log('2) Dar de baja un articulo');
   console.log('3) Modificar una publicacion');
   console.log('4) Busqueda de publicaciones');
   console.log('8) Salir del sistema');
   let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
   
   if(opcion===0){
    //Dar de alta un Autor
     let nombre=readline.question('Por favor, introduce el nombre del autor: ');
     let apellidos=readline.question('Por favor, introduce los apellidos: ');
     let id_autor=readline.question('Por favor, introduce el numero de ID: ');
     let newAutor = new Autor(nombre,apellidos,id_autor);
                listaPubli.push(newAutor);
                console.log(listaPubli);
   }
   if(opcion===1){
       //Seleccionar el tipo de Articulo
       let atras = false;
       while(!atras){
           console.log('1) Dar de alta un Articulo de Revista');
           console.log('2) Dar de alta un Articulo de Conferencia');
           console.log('3) Dar de alta una Patente');
           console.log('4) Salir al sistema inicial');
           let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
           if(opcion===1){
               //Dar de alta el Articulo de Revista
                let titulo=readline.question('Por favor, introduce un titulo: ');
                let autor=readline.question('Por favor, introducñe un autor: ');
                let n_pag=readline.question('Por favor, introduce un numero de paginas: ');
                let anyoPub=readline.question('Por favor, introduce un anyo de publicacion: ');
                let numMen=readline.question('Por favor, introduce un numerño de menciones: ');
                let tituRevis=readline.question('Por favor, introduce en que revista aparecio: ');
                let editorial=readline.question('Por favor, introduce la editorial: ');
                let newArtRevis = new ArtRevis(titulo,autor,n_pag,anyoPub,numMen,tituRevis,editorial);
                listaPubli.push(newArtRevis);
                console.log(listaPubli);
            }else if(opcion===2){
                //Dar de alta el Articulo en Conferencia
                let titulo=readline.question('Por favor, introduce una titulo: ');
                let autor=readline.question('Por favor, introduce una autor: ');
                let n_pag=readline.question('Por favor, introduce un numero de paginas: ');
                let anyoPub=readline.question('Por favor, introduce un anyo de publicacion: ');
                let numMen=readline.question('Por favor, introduce un numero de menciones: ');
                let libConf=readline.question('Por favor, introduce el libro de la conferencia: ');
                let nombre=readline.question('Por favor, introduce el nombre de la conferencia: ');
                let lugar=readline.question('Por favor, introduce el lugar de la conferencia: ');
                let newArtConf = new ArtConf(titulo,autor,n_pag,anyoPub,numMen,libConf,nombre,lugar);                 
                listaPubli.push(newArtConf);
                console.log(listaPubli);
            }else if(opcion===3){
                //Dar de alta una patente
                let titulo=readline.question('Por favor, introduce una titulo: '); 
                let autores=readline.question('Por favor, introduce los autores: ');
                let anyoPub=readline.question('Por favor, introduce el anyo de publicación: ');
                let anyoBen=readline.question('Por favor, introduce el anyo de bencimiento: ');
                let newPatente = new Patente(titulo,autores,anyoPub,anyoBen);
                listaPubli.push(newPatente);
                console.log(listaPubli);
            }else if(opcion===4){
                atras=true;
            }
          }
        
        }
       if(opcion===2){
          //Dar de baja articulos
          let atras = false;
            while(!atras){
                console.log('1) Dar de baja un Articulo de Revista');
                console.log('2) Dar de baja un Articulo de Conferencia');
                console.log('3) Dar de baja una Patente');
                console.log('4) Volver a las opciones');
                let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
                if(opcion===1){
                    //Dar de baja un Articulo de Revista
                    let titulo = readline.question('Por favor introduce una matricula: ');
                    let encontrado = false;
                    for(let i=0;i<listaPubli.length;i++){
                        let ArtRevis = listaPubli[i];
                        if(ArtRevis.titulo===titulo){
                            listaPubli.splice(i,1);
                            encontrado = true;
                            break;
                        }
                    }
                    if(encontrado){
                        console.log('Publicacion encontrada y borrado del sistema');+
                        console.log(listaPubli);
                    } else {
                        console.log('Publicacion no encontrado en el sistema');
                    }
                
                 }else if(opcion===2){
                     //Dar de baja un Articulo de Revista
                    let titulo = readline.question('Por favor introduce una matricula: ');
                    let encontrado = false;
                    for(let i=0;i<listaPubli.length;i++){
                        let ArtConf = listaPubli[i];
                        if(ArtConf.titulo===titulo){
                            listaPubli.splice(i,1);
                            encontrado = true;
                            break;
                        }
                    }
                    if(encontrado){
                        console.log('Publicacion encontrada y borrado del sistema');+
                        console.log(listaPubli);
                    } else {
                        console.log('Publicacion no encontrado en el sistema');
                    }
                }else if(opcion===3){
                    //Dar de baja una Patente
                    let titulo = readline.question('Por favor introduce una matricula: ');
                    let encontrado = false;
                    for(let i=0;i<listaPubli.length;i++){
                        let Patente = listaPubli[i];
                        if(Patente.titulo===titulo){
                            listaPubli.splice(i,1);
                            encontrado = true;
                            break;
                        }
                    }
                    if(encontrado){
                        console.log('Publicacion encontrada y borrado del sistema');+
                        console.log(listaPubli);
                    } else {
                        console.log('Publicacion no encontrado en el sistema');
                    }
                } if(opcion===4){
                    atras=true;
                }
            }
        }
    if(opcion===3){
       //Modificar publicaciones
       let atras = false;
       while(!atras){
           console.log('1) Modificar un Articulo de Revista');
           console.log('2) Modificar un Articulo de Conferencia');
           console.log('3) Modificar una Patente');
           console.log('4) Volver a las opciones');
           let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
            if(opcion===1){
                //Modificar un Articulo Cientifico
                let titulo = readline.question('Por favor introduce un titulo: ');
                let encontrado = falso;
                if (ArtRevis.title === titulo && ArtRevis.titulo === true) {
                    console.log('Introduce los datos que desea modificar');
                    let titulo = readline.question('Introduce el titulo: ');
                    if (titulo === '')publications[i].setTitle(titulo);

                    let autor = readline.question('Introduce el titulo: ');
                    if (autor === '')publications[i].setTitle(autor);

                    let n_pag = readline.question('Introduce el titulo: ');
                    if (n_pag === '')publications[i].setTitle(n_pag);

                    let anyoPub = readline.question('Introduce el titulo: ');
                    if (anyoPub === '')publications[i].setTitle(anyoPub);

                    let numMen = readline.question('Introduce el titulo: ');
                    if (numMen === '')publications[i].setTitle(numMen);

                    let revistCien = readline.question('Introduce el titulo: ');
                    if (revistCien === '')publications[i].setTitle(revistCien);

                    let tituRevis = readline.question('Introduce el titulo: ');
                    if (tituRevis === '')publications[i].setTitle(tituRevis);

                    let editorial = readline.question('Introduce el titulo: ');
                    if (editorial === '')publications[i].setTitle(editorial);
                }
           
            }
    }
}

        if(opcion===4){
            //Busqueda de las diferentes publicaciones
            let autor = readline.question('Introduce el autor o pulsa enter para seguir: ');
            let anyoPub = readline.question('Introduce el anyo de publicación o 0: ');
            let tipo = readline.question('Introduce el tipo de publicacion o pulsa enter para seguir: ');
            let busqueda = [];
            let encontrado = false;

            for (public of publications) { 
                if (autor!='') {
                    for (autor of publications.getNombre()){
                        if (autor === autor) {
                            encontrado = true;
                        }
                    }
                }
            }

        }


       /**
        * let arrayArtCient = listaArtCient.filter( c=> c.titulo===titulo)
        * console.log(arrayArtCient[0]);
        */
 else if(opcion===8){
    atras = true;
 }
}


