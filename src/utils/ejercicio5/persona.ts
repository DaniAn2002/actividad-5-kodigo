import 'bootstrap/dist/css/bootstrap.min.css'
import { Empleados, Persona } from './ejercicio5.utils'

document.querySelector<HTMLDivElement>('#persona')!.innerHTML = `

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
                <a class="nav-link"   href="../ejercicio4/cuenta.html">Ejercicio-4</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../ejercicio5/persona.html">Ejercicio-5</a>
            </li>
        </ul>
    </div>
</div>
</nav>



    <div class="container text-start">

        <form class="row g-3">
            <div class="col-md-4">
                <label for="nombre" class="form-label">Ingrese su nombre:</label>
                <input type="text" class="form-control" id="nombre" required>
            </div>
            <div class="col-md-4">
                <label for="apellido" class="form-label">Ingrese su apellido:</label>
                <input type="text" class="form-control" id="apellido" required>
            </div>
            <div class="col-md-2">
                <label for="edad" class="form-label">Ingrese su edad:</label>
                <div class="input-group">
                    <input type="number" class="form-control" id="edad" aria-describedby="inputGroupPrepend2" required>
                </div>
            </div>

            <div class="col-md-2">
                <label for="edad" class="form-label">Ingrese su sueldo:</label>
                <div class="input-group">
                    <input type="number" class="form-control" id="sueldo" aria-describedby="inputGroupPrepend2" required>
                </div>
            </div>

            <div class="col-md-6">
                <label for="validationDefault03" class="form-label">Ingrese su direccion: </label>
                <input type="text" class="form-control" id="direccion" required>
            </div>
            <div class="col-md-6">
                <label for="validationDefault03" class="form-label">Ingrese su numero de telefono: </label>
                <input type="text" class="form-control" id="telefono" required>
            </div>

        
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>

        <div id="mostrarEdad"></div>

        <div id="mostrarDatos"></div>

        <div id="imprimirSueldo"></div>
    </div>



</div>
`

document.querySelector('form')!.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
    const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value
    const direccion = document.querySelector<HTMLInputElement>('#direccion')!.value
    const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value
    const edad = document.querySelector<HTMLInputElement>('#edad')!.value
    const sueldo = document.querySelector<HTMLInputElement>('#sueldo')!.value


    const persona1 = new Persona(nombre, apellido, direccion, telefono, edad)
    const empleado1 = new Empleados(nombre, apellido, direccion, telefono, edad, sueldo)


    persona1.mostrarDatos()
    persona1.verificarEdad()
    empleado1.imprimirSueldo()


})