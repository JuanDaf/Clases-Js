class estudiante {
    
    #nombre
    asignaturas = ["Javascript","HTML","CSS"]

    constructor(nombre){
        this.#nombre = nombre
    }

    obtenDatos(){
        const obj = {
            nombre: this.#nombre,
            Asignaturas: this.asignaturas
        }

        return obj
    }

}

const est = new estudiante("Carlos Andres")

console.log(est.obtenDatos())