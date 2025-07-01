//Conectar los botones
const boton1 = document.getElementById("boton1");
let resultado1 = document.getElementById("resultado1");
let clickHecho = false //Variable para Cambiar el valor según el caso (de false a true y viceversa)

//Definir la función que se ejecutará
function mostrarMensaje() {
    if (clickHecho === false) {
        clickHecho = true;
        resultado1.innerText = "¡Hola Vane! Has hecho clic con éxito 🎉.";
    } else {
        clickHecho = false;
        resultado1.innerText = "¡Volviste a hacer clic! 😄";
    }
};
//Añadir el event listener
boton1.addEventListener("click", mostrarMensaje);



// JUEGO PIEDRA PAPEL O TIJERA
// Conectar los botones
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

const resultadoJuego = document.getElementById("resultadoJuego");
const jugadaUsuarioDOM = document.getElementById("jugadaUsuario");
const jugadaComputadoraDOM = document.getElementById("jugadaComputadora");

// Marcadores
let victorias = 0;
let derrotas = 0;
let empates = 0;

// Elementos del DOM para mostrar los marcadores
const marcadorVictorias = document.getElementById("victorias");
const marcadorDerrotas = document.getElementById("derrotas");
const marcadorEmpates = document.getElementById("empates");

// Botón para reiniciar
const botonReiniciar = document.getElementById("reiniciar");


// Función principal del juego
function jugar(jugadaUsuario) {
    // Opciones posibles
    const opciones = ["piedra", "papel", "tijera"];

    // Mostrar animación mientras "la compu piensa"
    const esperando = document.getElementById("esperandoTurno");
    let contador = 0;
    const iconos = ["✊", "✋", "✌️"];

    // Mostrar efecto de cambio de íconos cada 200ms
    const animacion = setInterval(() => {
        esperando.innerText = `La computadora está eligiendo... ${iconos[contador % 3]}`;
        contador++;
    }, 200);

    // Esperar 2 segundos y luego mostrar jugada real
    setTimeout(() => {
        clearInterval(animacion); // Detener la animación

        // Jugada aleatoria de la computadora
        const indiceAleatorio = Math.floor(Math.random() * 3);
        const jugadaComputadora = opciones[indiceAleatorio];

        // Comparar jugadas
        let resultado = "";
        if (jugadaUsuario === jugadaComputadora) {
            resultado = "¡Empate! 😐";
            empates++;
            marcadorEmpates.innerText = empates;
        } else if (
            (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
            (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
        ) {
            resultado = "¡Ganaste! 🎉";
            victorias++;
            marcadorVictorias.innerText = victorias;
        } else {
            resultado = "¡Perdiste! 😢";
            derrotas++;
            marcadorDerrotas.innerText = derrotas;
        }

        // Mostrar jugadas y resultado en el DOM
        jugadaUsuarioDOM.innerText = `Tú elegiste: ${jugadaUsuario}`;
        jugadaComputadoraDOM.innerText = `La computadora eligió: ${jugadaComputadora}`;
        resultadoJuego.innerText = resultado;
        esperando.innerText = ""; // Limpiar texto de animación
    }, 2000); // 2 segundos de espera
}

botonReiniciar.addEventListener("click", function () {
    victorias = 0;
    derrotas = 0;
    empates = 0;

    marcadorVictorias.innerText = 0;
    marcadorDerrotas.innerText = 0;
    marcadorEmpates.innerText = 0;

    jugadaUsuarioDOM.innerText = "";
    jugadaComputadoraDOM.innerText = "";
    resultadoJuego.innerText = "Juego reiniciado. ¡Haz tu jugada!";

    const esperando = document.getElementById("esperandoTurno");
    esperando.innerText = "";
});


// Escuchar clics en los botones
piedra.addEventListener("click", function () {
    jugar("piedra");
});
papel.addEventListener("click", function () {
    jugar("papel");
});
tijera.addEventListener("click", function () {
    jugar("tijera");
});
