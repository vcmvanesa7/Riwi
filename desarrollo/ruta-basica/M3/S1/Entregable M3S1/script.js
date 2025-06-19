/**
 * Entrenamiento – Módulo 3 Semana 1
 * Hoja de trabajo: Sistema Interactivo de Mensajes
 */

// Paso 2: Captura de datos
let nombreUsuario = prompt("¿Cuál es tu nombre?");          // Nombre
let edadTexto = prompt("¿Cuántos años tienes?");         // Edad como texto

// Paso 2.2: Conversión de edad a número con parseInt
// parseInt devuelve NaN si no puede convertir
let edadNumero = parseInt(edadTexto, 10);

// Paso 3: Validación y mensajes personalizados
if (isNaN(edadNumero)) {
    // Paso 3.c: Error si no es número válido
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else if (edadNumero < 18) {
    // Paso 3.a: Menor de edad
    const mensaje = `Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    alert(mensaje);
    console.log(mensaje);
} else {
    // Paso 3.b: Mayor o igual a 18
    const mensaje = `Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    alert(mensaje);
    console.log(mensaje);
}

// Paso 4: Pruebas
