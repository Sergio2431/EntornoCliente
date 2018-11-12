//Parte Sergio
//Creamos la clase corredores

class Corredores {

    constructor(nombre,apellidos,edad,club,categoria,marca){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.club = club;
        this.categoria = categoria;
        this.marca = marca;
    }

    getNombre(){
        return this.nombre;
    }

    getApellidos(){
        return this.apellidos;
    }

    getEdad(){
        return this.edad;
    }

    getClub(){
        return this.club;
    }

    getCategoria(){
        return this.categoria;
    }
}

//Añadir marca al corredor
let marca = readline.questio('Por favor, intoduce una marca ');





//Parte de Victor
class Corredor {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.categoria = undefined;
        this.edad = undefined;
        this.club =undefined;
        this.marcas = []; //new Array();
    }

    anyadirMarca(marca){
        this.marcas.push(marca);
    }

    esMenorEdad(){
        return this.edad < 18;
    }

    menorMarca(){
        let minimo = Infinity;
        for(let marca of this.marcas){
            if(marca<minimo){
                minimo = marca;
            }
        }
        return minimo;
    }
    mayorMarca(){
        let maximo = Number.NEGATIVE_INFINITY;
        for(let marca of this.marcas){
            if(marca>maximo){
                maximo = marca;
            }
        }
        return maximo;
    }
}