function solucion() {

    let numeros = [1, 500, 230, 40, 4, 65, 28, 32, 45, 1002]

    document.getElementById("mostrar_array").innerHTML = "[" + numeros + "]"

    let orden1 = numeros.sort(function (a, b) {
        return (a - b)
    })
    console.log(orden1)

    let orden2 = numeros.sort(function (a, b) {
        return (b - a)
    })
    console.log(orden2)

    let eliminar = numeros.shift()
    console.log("El numero eliminado es: "+eliminar)

    let concatenar =orden1.concat(orden2)
    console.log(concatenar)

    let agregar = numeros.unshift(85,65,103,25)
    console.log(agregar)
    console.log(numeros)
}