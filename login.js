const formulario = document.getElementById("login1");
const mensajelogin = document.getElementById("mensaje-login");

function iniciarSesion(evento) {

evento.preventDefault();

const usuario = document.getElementById("uses-id").value;
const clave = document.getElementById("password").value;

const datos = usuarios[usuario]

if (datos && datos.clave == clave) {
    sessionStorage.setItem("usuarioActivo", usuarios)
    mensajelogin.textContent = "Welcome"
    window.location.href = "principal.html"
}

else{
    mensajelogin.textContent = "Incorrect user ID or password"
}

}

formulario.addEventListener("submit" , iniciarSesion);