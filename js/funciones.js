function ElegirProducto(nombre){
    document.getElementById("producto").value = nombre;
    location.href = "#pedidos"

}

function MostrarResumen(evento){
    evento.preventDefault()
    let nombre = document.getElementById("nombre").value
    let producto = document.getElementById("producto").value
    document.getElementById("resumen").innerHTML= "¡Gracias " + nombre + "! 🧸❤️<p>Recibimos tu pedido de: <b>" + producto + "</b></p>"
}
    document.getElementById("formulario").addEventListener("submit", MostrarResumen)
