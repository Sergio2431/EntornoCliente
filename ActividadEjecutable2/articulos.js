/**
 * Ejercicio: Articulos
 * Dar de alta articulo
 * Dar de baja articulo                            
 * Buscar un articulo y mostrarlo por pantalla
 */

const readline = require('readline-sync');

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
 
    getMatricula(){
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
 
    getMatricula(){
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
 
    getMatricula(){
        return this.autores;
    }
 
 } 

let listaPubli = [];
let salir = false;
while(!salir){
   console.log('Bienvenidos al sistema de gestión de articulos');
   console.log('1) Dar de alta un articulo');
   console.log('2) Dar de baja un articulo');
   console.log('3) Buscar un articulo y mostrar información');
   console.log('4) Salir del sistema');
   let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
   
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
                let titulo=readline.question('Por favor, introduce una titulo: ');
                let autor=readline.question('Por favor, introduce una autor: ');
                let n_pag=readline.question('Por favor, introduce un numero de paginas: ');
                let anyoPub=readline.question('Por favor, introduce un anyo de publicacion: ');
                let numMen=readline.question('Por favor, introduce un numero de menciones: ');
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
      
   }if(opcion===3){
       //Buscar un Articulo Cientifico
       let titulo = readline.question('Por favor introduce un titulo: ');
       for(let ArtCient of listaPubli){
           if(ArtCient.titulo===titulo){
               console.log(ArtCient);
               break;
           }
       }
       /**
        * let arrayArtCient = listaArtCient.filter( c=> c.titulo===titulo)
        * console.log(arrayArtCient[0]);
        */
   } else if(opcion===4){
       salir=true;
   }

}
   }
