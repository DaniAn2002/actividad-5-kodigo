class calculadora {
    num1: string
    num2: string

    constructor(num1: string, num2: string) {
        this.num1 = num1
        this.num2 = num2
    }

    sumar(): number {
        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)

        result = n1 + n2

        printResult.innerHTML = `El resultado de ${this.num1} + ${this.num2} es = ${result.toString()}`
        document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
        return result
    }

    resta(): number {

        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)

        result = n1 - n2

        printResult.innerHTML = `El resultado de ${this.num1} - ${this.num2} es = ${result.toString()}`
        document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
        return result
    }

    multiplicar(): number {
        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)

        result = n1 * n2

        printResult.innerHTML = `El resultado de ${this.num1} x ${this.num2} es = ${result.toString()}`
        document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
        return result
    }

    division(): number {
        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)

        result = n1 / n2

        printResult.innerHTML = `El resultado de ${this.num1} / ${this.num2} es = ${result.toString()}`
        document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
        return result
    }

    potencia(): number {
        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)

        result = Math.pow(n1, n2)

        printResult.innerHTML = `El resultado de ${this.num1} a la potencia de ${this.num2} es = ${result.toString()}`
        document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
        return result
    }

    factorial(): number {

        const printResult = document.createElement('h1')
        let result: number = 0

        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)


        if ((n1 === 0 || n1 === 1) && (n2 === 0 || n2 === 1)) {
            result = 1
            printResult.innerHTML = `El resultado de ${this.num1} factorial es de = ${result.toString()}`
            document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
            return result
        }
        else {
            result = 1
            for (let i = 1; i <= n1; i++) {
                result = result * i  
            }
            printResult.innerHTML = `El resultado de ${this.num1} factorial es de = ${result.toString()}`
            document.querySelector<HTMLDivElement>('#resultado')?.appendChild(printResult)
            return result
        }
    }
}

export default calculadora