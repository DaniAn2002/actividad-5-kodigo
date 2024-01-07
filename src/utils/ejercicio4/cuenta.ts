import 'bootstrap/dist/css/bootstrap.min.css'
import Cuenta from './ejercicio4.utils'

document.querySelector<HTMLDivElement>('#cuenta')!.innerHTML = `

<div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">Actividad #5</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio1/cabeceraPagina.html">Ejercicio-1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"
                                href="../ejercicio2/calculadora.html">Ejercicio-2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio3/cancion.html">Ejercicio-3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"  href="../ejercicio4/cuenta.html">Ejercicio-4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio5/persona.html">Ejercicio-5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container mt-3">

        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="apellido">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Elija su tipo de cuenta:</label>
                <select id="tipoCuenta" name="cuenta" class="form-select">
                    <option selected>Cuenta corriente</option>
                    <option>Cuenta de ahorros</option>
                    <option>Tarjeta de credito</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Ingrese su numero de cuenta:</label>
                <input type="text" class="form-control" id="numeroCuenta">
            </div>

            <div class="col-md-2 align-items-center ">
                <label for="inputZip" class="form-label">Digite la cantidad de dinero:</label>
                <div class="d-flex">
                    <div class="input-group-text">$</div>
                    <input type="password" class="form-control col-md-2" id="cantidad">
                </div>
            </div>

            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Acepto los terminos y condiciones
                    </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Validar</button>
            </div>
            <div id="informacion"></div>
        </form>
        <div class="col-md-6 align-items-center ">
            <div class="d-flex">
                <div class="input-group-text mt-3">$</div>
                <input id="cantidadDepositar" class="form-control mt-3" type="text" placeholder="Ingresa el valor a depositar: "
                    aria-label="default input example">
                <button type="submit" id="depositar" class="btn btn-primary mt-3">Depositar</button>

            </div>
            <div id="ingresar"></div>
            
        </div>

        <div class="col-md-6 align-items-center ">
            <div class="d-flex">
                <div class="input-group-text mt-3">$</div>
                <input id="cantidadRetirar" class="form-control mt-3" type="text" placeholder="Ingresa el valor a retirar: "
                    aria-label="default input example">
                <button type="submit" id="retirar" class="btn btn-primary mt-3">Retirar</button>

            </div>
        </div>
        <div id="retiro"></div>
    </div>
</div>
`


document.querySelector('form')!.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
    const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value
    const cantidad = document.querySelector<HTMLInputElement>('#cantidad')!.value
    const tipoCuenta = (<HTMLSelectElement>document.querySelector('#tipoCuenta')).value
    const numeroCuenta = document.querySelector<HTMLInputElement>('#numeroCuenta')!.value

    const cuenta1 = new Cuenta(nombre, apellido, cantidad, tipoCuenta, numeroCuenta,'')
    cuenta1.mostrarDatos()

    document.querySelector('#depositar')?.addEventListener('click', () => {
        const cantidadDepositar = document.querySelector<HTMLInputElement>('#cantidadDepositar')!.value
    
        const cuenta1 = new Cuenta('', '', '', '', '',cantidadDepositar)
        cuenta1.depositar()
        
    })

    document.querySelector('#retirar')?.addEventListener('click', () => {
        const cantidadRetirar = document.querySelector<HTMLInputElement>('#cantidadRetirar')!.value
    
        const cuenta1 = new Cuenta('', '', cantidad, '', '','')
        cuenta1.retirar(parseFloat(cantidadRetirar))
        
    })
})



