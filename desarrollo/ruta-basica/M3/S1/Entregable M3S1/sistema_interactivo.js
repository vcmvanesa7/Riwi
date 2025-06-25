// Mostrar mensaje inicial en consola
console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");
alert("¡Bienvenido al Sistema Interactivo de Mensajes!");

// Captura de datos y validaciones

// Validar el nombre (solo letras y espacios)
let nombre;
while (true) {
    nombre = prompt("Por favor, ingresa tu nombre:");

    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {   // Solo acepta letras (con tildes, Ñ) y espacios
        break; // Nombre válido
    } else {
        alert("Por favor, ingresa un nombre válido. Solo letras, sin números ni símbolos.");
    }
}

// Validar la edad (solo números enteros positivos)
let edad;
while (true) {
    let edadTexto = prompt("Por favor, ingresa tu edad:");

    if (/^\d+$/.test(edadTexto)) {   //Solo acepta números (0 a 9), y debe tener al menos un dígito.
        edad = parseInt(edadTexto);
        break; // Edad válida
    } else {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        alert("Edad inválida. Solo se permiten números enteros positivos, sin letras ni símbolos.");
    }
}

// Mostrar mensaje según la edad
if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}

// Finalizar el programa
alert("Fin del programa. ¡Gracias por participar!");
console.log("Fin del programa. ¡Gracias por participar!");
