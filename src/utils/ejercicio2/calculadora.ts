import 'bootstrap/dist/css/bootstrap.min.css'
import './calculadora.css'
import calculadora from './ejercicio2.utils'


document.querySelector<HTMLDivElement>('#calculadora')!.innerHTML = `

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
                            <a class="nav-link active" aria-current="page"
                                href="../ejercicio2/calculadora.html">Ejercicio-2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio3/cancion.html">Ejercicio-3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio4/cuenta.html">Ejercicio-4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../ejercicio5/persona.html">Ejercicio-5</a>
                        </li>
                    </ul>
                </div>
            </div>
</nav>

    <div class="container text-center">
            <div class="grid borders p-5 text-center">
                <div class="grid text-center">

                    <div class="row">
                        <div class="col-6 borders p-2 ">
                            <label for="num1">Ingresa el primer numero: </label>
                            <input type="number" class="form-control" id="num1" placeholder="">
                        </div>
                        <div class="col-6 borders p-2 ">
                            <label for="num2">Ingresa el segundo numero: </label>
                            <input type="number" class="form-control" id="num2" placeholder="">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 borders p-2 ">
                            <button id="sumar" type="submit" class="btn btn-primary">Sumar</button>
                        </div>
                        <div class="col-4 borders  p-2 ">
                            <button id="restar" type="submit" class=" btn btn-primary">Restar</button>
                        </div>
                        <div class="col-4 borders p-2 ">
                            <button id="multiplicar" type="submit" class="btn btn-primary">Multiplicar</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 borders p-2 ">
                            <button id="dividir" type="submit" class="btn btn-primary">Dividir</button>
                        </div>
                        <div class="col-4 borders p-2 ">
                            <button id="potencia" type="submit" class="btn btn-primary">Potencia</button>
                        </div>
                        <div class="col-4 borders p-2 ">
                            <button id="factorial" type="submit" class="btn btn-primary">Factorial</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 borders p-2 mt-2 text-start">
                            <h1>Resultado final:</h1>
                            <div id="resultado"></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 borders p-2 mt-5 ">
                            <button id="limpiar" type="submit" class="btn btn-primary">Limpiar</button>
                        </div>
                    </div>

                </div>
            </div>
    </div>

   



</div>
`


const num1 = document.querySelector('#num1') as HTMLButtonElement
const num2 = document.querySelector('#num2') as HTMLButtonElement

const sumar = document.querySelector('#sumar') as HTMLButtonElement
const restar = document.querySelector('#restar') as HTMLButtonElement
const multiplicar = document.querySelector('#multiplicar') as HTMLButtonElement
const dividir = document.querySelector('#dividir') as HTMLButtonElement
const potencia = document.querySelector('#potencia') as HTMLButtonElement
const factorial = document.querySelector('#factorial') as HTMLButtonElement
const limpiar = document.querySelector('#limpiar') as HTMLButtonElement





sumar.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.sumar()

})

restar.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.resta()

})

multiplicar.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.multiplicar()

})

dividir.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.division()

})

potencia.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.potencia()

})

factorial.addEventListener('click', () => {

    const objCalculadora1 = new calculadora(num1.value, num2.value)
    objCalculadora1.factorial()

})

limpiar.addEventListener('click',()=>{
    document.querySelector<HTMLInputElement>('#num1')!.value = ""
  document.querySelector<HTMLInputElement>('#num2')!.value = ""
  document.querySelector<HTMLInputElement>('#resultado')!.innerHTML = ""
})



