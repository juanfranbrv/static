const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

boton.addEventListener("click", cambiarMensaje);

function cambiarMensaje() {
  mensaje.innerHTML == "Hola, soy estático"
    ? (mensaje.innerHTML = "...bueno, no siempre")
    : (mensaje.innerHTML = "Hola, soy estático");
}
