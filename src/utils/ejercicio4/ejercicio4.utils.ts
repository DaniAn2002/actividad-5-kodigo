class Cuenta {
    nombre: string
    apellido: string
    cantidad: string
    tipoCuenta: string
    numeroCuenta: string
    cantidadDepositar: string

    constructor(nombre: string, apellido: string, cantidad: string, tipoCuenta: string, numeroCuenta: string, cantidadDepositar: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.cantidad = cantidad
        this.tipoCuenta = tipoCuenta
        this.numeroCuenta = numeroCuenta
        this.cantidadDepositar = cantidadDepositar
    }

    depositar() {
        const show = document.createElement('h1')
        let cantidadInt = parseFloat(this.cantidadDepositar)
        if (cantidadInt < 5.00) {
            show.innerHTML = `La cantidad minima a ingresar es de $5.00`
            return document.querySelector<HTMLDivElement>('#ingresar')?.appendChild(show)
        }
        else {
            show.innerHTML = `Se ha ingresado correctamente la cantidad de $${this.cantidadDepositar}`
            return document.querySelector<HTMLDivElement>('#ingresar')?.appendChild(show)
        }
    }
    retirar(valorRetirar: number) {
        const show = document.createElement('h1')
        let cantidadInt = parseFloat(this.cantidad)

        if (cantidadInt < 5.00) {
            show.innerHTML = `No tienes saldo suficiente en tu cuenta`
            return document.querySelector<HTMLDivElement>('#retiro')?.appendChild(show)
        } else {
            const valorCuenta = cantidadInt - valorRetirar
            show.innerHTML = `Has hecho un retiro de $${valorRetirar} tu saldo total ahora es de: $${valorCuenta}`
            return document.querySelector<HTMLDivElement>('#retiro')?.appendChild(show)
        }



    }

    mostrarDatos() {
        const show = document.createElement('h1')
        show.innerHTML = `Bienvenido ${this.nombre} ${this.apellido} a su ${this.tipoCuenta} con numero ${this.numeroCuenta} usted posee $${this.cantidad} `
        return document.querySelector<HTMLDivElement>('#informacion')?.appendChild(show)
    }
}

export default Cuenta