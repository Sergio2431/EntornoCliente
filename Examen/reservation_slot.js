/**
 * Ejercicio: Examen
 * 
 * 
 * 
 */

const readline = require('readline-sync');

class ReservationSlot {

    constructor(autor, clase, fechaReserva, horaInicio, duracion, descripcion) {
        this.autor = autor;
        this.clase = clase;
        this.fechaReserva = fechaReserva;
        this.horaInicio = horaInicio;
        this.duracion = duracion;
        this.descripcion = descripcion;
        this.reservas = [];
    }

    getAutor() {
        return this.autor;
    }
    getClase() {
        return this.clase;
    }
    getFechaReserva() {
        return this.fechaReserva;
    }
    getHoraInicio() {
        return this.horaInicio;
    }
    getDuracion() {
        return this.duracion;
    }
    getDescripcion() {
        return this.descripcion;
    }

}

let reservaAulas = [];
let salir = false;
while (!salir) {
    console.log('Bienvenidos al sistema de gestión de aulas');
    console.log('1) Reservar un aula');
    console.log('2) Salir del sistema');
    let opcion = readline.questionInt('Por favor, seleccione una de estas dos opciones: ');
    if (opcion === 1) {
        //Reservar un aula
        let autor = readline.question('Por favor, introduce tu nombre: ');
        let clase = readline.question('Por favor, introduce una clase: ');
        let fechaReserva = readline.question('Por favor, introduce una fecha de reserva: ');
        let horaInicio = readline.question('Por favor, introduce una hora de inicio: ');
        if (horaInicio < 8 || horaInicio > 21) {
            throw Error('El horario que has introducido no es correcto, introduce un horario entre las 8:00 y las 21:00');
        } else if (horaInicio > 8 || horaInicio < 21) {
            console.log('La hora de inicio se ha guardado correctamente');
        }
        let duracion = readline.question('Por favor, introduce una duracion: ');
        if (duracion < 0 || duracion > 180) {
            throw Error('La duracion que has introducido no esta permitida, introduce un valor entre 0 y 180 minutos');
        } else if (duracion > 0 || duracion < 180) {
            console.log('La duracion se ha guardado correctamente');
        }
        let descripcion = readline.question('Por favor, introduce una descripcion de lo que se va a realizar: ');
        let newReserva = new ReservationSlot(autor, clase, fechaReserva, horaInicio, duracion, descripcion);
        reservaAulas.push(newReserva);
        console.log(reservaAulas);

    } else if (opcion === 2) {

        salir = true;

    }
}







/**
 * 
 * @param {number} n Numero de reservas realizadas 
 */
function getMostPopularUser(n){
    let usuarioVIP = new Map();
    for(let i=0;i<n;i++){ //Calcular todas las reservas
        let reserva = calculoReservas();
        if(usuarioVIP.has(reserva)){
            //La reserva no es la primera vez que se realiza
            let cuantasVecesAntes = usuarioVIP.get( tirada );
            usuarioVIP.set( reserva, cuantasVecesAntes + 1 );
        } else{
            //La tirada es la primera vez que nos sale
            usuarioVIP.set( reserva, 1 );
        }
    }
    return usuarioVIP;
}

console.log( reserva );



/*Ejercicio 4*/
/*Una función llamada delayReservation que tome por parámetro un 
número de minutos,  y un array de objetos de tipo ReservationSlot,
 en ese mismo orden. La función debe retornar un nuevo array con 
 nuevos objetos de tipo reserva, donde las reservas hayan sido 
 retrasado en su inicio el número de horas especificado por parámetro. 
 Se deberá lanzar excepción/error en caso de que el número de horas 
 pasadas por parámetro sean negativas */
function cambioHoras(x){
    return x%60;
}

function resta(x){
    return x-cambioHoras;
}

function delayReservation(dataArray) {
    let arrayResta = dataArray.map(cambioHoras);
    return arrayResta.filter(resta);
}

console.log(delayReservation([5,7,9,12,24,31]));


/*Una función llamada getReservationsFromUser que tome por parámetro un 
nombre de usuario y un array de objetos de tipo ReservationSlot, en ese 
mismo orden. La función debe retornar un nuevo array como resultado de 
quedarse únicamente con las reservas del usuario especificado.*/
function nombreUsuario(x){
    return x;
}

function arrayObjetos(y){
    return y;
}

function getReservationsFromUser(arrayObjetos) {
    let arrayObjetos = new Array;
    return Array.filter(x);
}

console.log(getReservationsFromUser([]));




/*Ejercicio 5*/

let table = document.body.firstElementChild;
//console.log(table);
let tableBody = table.tBodies[0];
//console.log(tableBody);
let rows = tableBody.rows;
//console.log(rows);
for(let row of rows){
    let rows = row.cells;
    if(parseFloat) {
        //tendre que cambiar el color de la fila
        rows[2].style = 'background-color:red;'
    }
}

//Busco las filas donde los horarios se solapan como pide el enunciado
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

//Busco al usuario que más reservas ha realizado
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild);