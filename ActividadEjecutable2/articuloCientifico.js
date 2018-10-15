/**
 * Ejercicio: Articulo Cientifico
 * Dar de alta articulo
 * Dar de baja articulo                            
 * Buscar un articulo y mostrarlo por pantalla
 */

const readline = require('readline-sync');

class ArtCient {

   constructor(titulo,autor,nºpag,anyoPub,numMen){
       this.titulo = titulo;
       this.autor = autor;
       this.nºpag = nºpag;
       this.anyoPub = anyoPub;
       this.numMen = numMen;
    
   }

   getMatricula(){
       return this.titulo;
   }

}

let listaArtCient = [];
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
       let listaArtCient = [];
       let atras = false;
       while(!atras){
           console.log('1) Dar de alta un Articulo de Revista');
           console.log('2) Dar de alta un Articulo de Conferencia');
           console.log('3) Volver a las opciones');
           let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
           if(opcion===1){
               //Dar de alta el Articulo de Revista
                let titulo=readline.question('Por favor, introduce una titulo: ');
                let autor=readline.question('Por favor, introduce una autor: ');
                let nºpag=readline.question('Por favor, introduce un numero de paginas: ');
                let anyoPub=readline.question('Por favor, introduce un anyo de publicacion: ');
                let numMen=readline.question('Por favor, introduce un numero de menciones: ');
                let newArtCient = new ArtCient(titulo,autor,nºpag,anyoPub,numMen);
                listaArtCient.push(newArtCient);
                console.log(listaArtCient);
            }else if(opcion===2){
                //Dar de alta el Articulo en Conferencia
                let titulo=readline.question('Por favor, introduce una titulo: ');
                let autor=readline.question('Por favor, introduce una autor: ');
                let nºpag=readline.question('Por favor, introduce un numero de paginas: ');
                let anyoPub=readline.question('Por favor, introduce un anyo de publicacion: ');
                let numMen=readline.question('Por favor, introduce un numero de menciones: ');
                let newArtCient = new ArtCient(titulo,autor,nºpag,anyoPub,numMen);                    
                listaArtCient.push(newArtCient);
                console.log(listaArtCient);
            }else if(opcion===3){
                atras=true;
            }
        }
       
     } if(opcion===2){
            //Dar de baja un Articulo Cientifico
            let titulo = readline.question('Por favor introduce un titulo: ');
            let encontrado = false;
             console.log(listaArtCient);
             for(let i=0;i<listaArtCient.length;i++){
                 let ArtCient = listaArtCient[i];
                 console.log(ArtCient,titulo);
                 if(ArtCient.titulo===titulo){
                  listaArtCient.splice(i);
                   encontrado = true;
                   break;
             }
         }
       if(encontrado){
           console.log('Articulo encontrado y borrado del sistema');+
           console.log(listaArtCient);
       } else {
           console.log('Articulo no encontrado en el sistema');
       }
   }if(opcion===3){
       //Buscar un Articulo Cientifico
       let titulo = readline.question('Por favor introduce un titulo: ');
       for(let ArtCient of listaArtCient){
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
