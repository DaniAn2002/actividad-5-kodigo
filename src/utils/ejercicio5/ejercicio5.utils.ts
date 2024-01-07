class Persona {
    nombre: string
    apellido: string
    direccion: string
    telefono: string
    edad: string

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.edad = edad
    }

    verificarEdad() {
        const show = document.createElement('h1')
        let edadInt = parseInt(this.edad)

        if (edadInt > 18) {
            show.innerHTML = `Eres mayor de edad`
            return document.querySelector<HTMLDivElement>('#mostrarEdad')?.appendChild(show)
        }
        else {
            show.innerHTML = `Eres menor de edad`
            return document.querySelector<HTMLDivElement>('#mostrarEdad')?.appendChild(show)
        }

    }

    mostrarDatos() {
        const show = document.createElement('h1')

        show.innerHTML = `Nombre completo: ${this.nombre} ${this.apellido}, Edad: ${this.edad} <br>
        Direccion: ${this.direccion} <br>
        Telefono: ${this.telefono}`

        return document.querySelector<HTMLDivElement>('#mostrarDatos')?.appendChild(show)

    }
}

class Empleados extends Persona {
    sueldo: string

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: string, sueldo: string) {
        super(nombre, apellido, direccion, telefono, edad)
        this.sueldo = sueldo
    }

    imprimirSueldo(){
        const show = document.createElement('h1')
        show.innerHTML=`El sueldo de ${this.nombre} ${this.apellido} es de $${this.sueldo}`
        return document.querySelector<HTMLDivElement>('#imprimirSueldo')?.appendChild(show)

    }

}

export {Persona, Empleados}
