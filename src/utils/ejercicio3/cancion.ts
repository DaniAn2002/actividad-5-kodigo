import 'bootstrap/dist/css/bootstrap.min.css'
import cancion from './ejercicio3.utils'

document.querySelector<HTMLDivElement>('#cancion')!.innerHTML = `

<div>

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
                <a class="nav-link active" aria-current="page"  href="../ejercicio3/cancion.html">Ejercicio-3</a>
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
    
      <form class="row g-1">
      <div class="container text-center">
  
  
        <input class="form-control mt-3" id='nombreCancion' type="text" placeholder="Ingresa el nombre de tu cancion:"
          aria-label="default input example">
        <input class="form-control mt-3" id='generoCancion' type="text" placeholder="Ingresa el genero de la cancion:"
          aria-label="default input example">
        <input class="form-control mt-3" id='artistaCancion' type="text" placeholder="Ingresa el nombre del artista:"
          aria-label="default input example">
  
      </div>
      <div class="col-auto m-2">
        <button class="btn btn-primary mt-2 col-auto" type="submit">Ingresar informacion</button>
      </div>
      <div id="datosCancion"></div>
  
    </form>


</div>
`

document.querySelector('form')!.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombreCancion = document.querySelector<HTMLInputElement>('#nombreCancion')!.value
    const generoCancion = document.querySelector<HTMLInputElement>('#generoCancion')!.value
    const artistaCancion = document.querySelector<HTMLInputElement>('#artistaCancion')!.value

    const cancion1 = new cancion(nombreCancion, generoCancion, '')
    cancion1.setAutor(artistaCancion)
    cancion1.mostrarDatos()
})