class cabeceraPagina {
    alineado: string
    titulo: string
    color: string
    fuente: string



    constructor(titulo: string, color: string, fuente: string, alineado: string) {
        this.alineado = alineado
        this.titulo = titulo
        this.color = color
        this.fuente = fuente

    }

    obtenerInformacion() {
        return `El titulo es ${this.titulo}, el color es ${this.color}, la fuente de la pagina web es ${this.fuente}`
    }

    posicionTitulo() {
        const show = document.createElement("h1")
        if (this.alineado === "centrado") {
            show.innerHTML = `<h1 class="titulo_centrado ${this.fuente}" style="color:${this.color}">${this.titulo}</h1>`
            return document.querySelector<HTMLDivElement>('#new-title')?.appendChild(show)
        }
        else if (this.alineado === "izquierda") {
            show.innerHTML = `<h1 class="titulo_izquierda ${this.fuente}" style="color:${this.color}">${this.titulo}</h1>`
            return document.querySelector<HTMLDivElement>('#new-title')?.appendChild(show)
        }
        else if (this.alineado === "derecha") {
            show.innerHTML = `<h1 class="titulo_derecha ${this.fuente}" style="color:${this.color}">${this.titulo}</h1>`
            return document.querySelector<HTMLDivElement>('#new-title')?.appendChild(show)
        }

    }

    imprimirPropiedades() {
        return `Las propiedades son las siguientes ${this.titulo}, ${this.color}, ${this.fuente}`
    }

}

export default cabeceraPagina