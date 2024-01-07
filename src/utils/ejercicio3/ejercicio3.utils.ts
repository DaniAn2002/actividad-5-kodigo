class cancion {
    titulo: string
    genero: string
    private autor: string

    constructor(titulo: string, genero: string, autor: string) {
        this.titulo = titulo
        this.genero = genero
        this.autor = autor
    }

    getAutor() {
        return this.autor
    }

    setAutor(autor: string) {
        this.autor = autor

    }

    mostrarDatos() {
        const mostrar = document.createElement('h1')
        mostrar.innerHTML = `La cancion es: ${this.titulo}, el autor es ${this.autor} y el genero de la cancion es ${this.genero} `
        return document.querySelector<HTMLDivElement>('#datosCancion')?.appendChild(mostrar)
    }
}

export default cancion