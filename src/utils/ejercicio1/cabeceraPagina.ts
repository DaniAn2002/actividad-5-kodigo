import cabeceraPagina from "./ejercicio1.utils"
import 'bootstrap/dist/css/bootstrap.min.css'
import './cabeceraPagina.css'

document.querySelector<HTMLDivElement>('#cabeceraPagina')!.innerHTML = `


<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="/index.html">Actividad #5</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav"> 
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="../ejercicio1/cabeceraPagina.html">Ejercicio-1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ejercicio2/calculadora.html">Ejercicio-2</a>
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



<form class="container mt-5">

<h1 class="mb-5 text-center">Obten tu cabecera de pagina con tu propio titulo, color y fuente de pagina</h1>

<div class="mb-3">
  <label for="titulo" class="form-label h2">Ingresa tu titulo:</label>
  <input class="form-control" id="titulo"></input>
</div>

<select id="fuente" class="form-select form-select-lg mb-3">
  <option selected>Selecciona la fuente de tu titulo:</option>
  <option class="poppins" value="poppins">Poppins</option>
  <option class="doodle" value="doodle">Doodle</option>
  <option class="maps" value="maps">Maps</option>
</select>

<select id="centrado" class="form-select form-select-lg mb-3">
  <option selected>Seleciona el centrado de tu titulo:</option>
  <option value="centrado">Centrado</option>
  <option value="izquierda">Izquierda</option>
  <option value="derecha">Derecha</option>
</select>

<label for="ColorInput" class="form-label h2">Selecciona el color de tu titulo:</label>
<input type="color" class="form-select form-control-color" id="ColorInput" value="#563d7c"
  title="Choose your color">

<button class="btn btn-light mt-3" type="submit">Obtener encabezado</button>


<div id="new-title"></div>

</form>


   
`
document.querySelector('form')!.addEventListener('submit', (event) => {
    event.preventDefault()

    const titulo = document.querySelector<HTMLInputElement>('#titulo')!.value
    const fuente = document.querySelector<HTMLSelectElement>('#fuente')!.value
    const centrado = document.querySelector<HTMLSelectElement>('#centrado')!.value
    const color = document.querySelector<HTMLSelectElement>('#ColorInput')!.value

    document.querySelector<HTMLDivElement>('#new-title')!.innerHTML = ''

    const objCabecera1 = new cabeceraPagina(titulo, color, fuente, centrado)
    objCabecera1.posicionTitulo()

})