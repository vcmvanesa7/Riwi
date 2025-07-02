//EJERCICIOS
//1 

function cualEsMayor(a, b, c) {
    if (b < a && c < a) {
        return a;
    } else if (a < b && c < b) {
        return b;
    } else {
        return c;
    }
}

/* CON TERNARIO-Mas corto cuando solo hay que comparar 2 valores.
let mayor = cualEsMayor(10, 5, 14);
console.log(`El número mayor es: ${mayor}`);

function cualEsMayor(a, b,) {
    return (a > b) ? a : b;
}
let mayor = cualEsMayor(12, 13);
console.log(`El número mayor es: ${mayor}`);*/

//2
/* Resoluciones: Ancho X Alto
    * 8k: 7680 x 4320
    * 4k: 3840 X 2160
    * QWHD: 2560 x 1440
    * FHD: 1920  x 1080
    * HD: 1280 X 720

function nombreResolucion(ancho, alto) {

    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'QWHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return 'false'
    }
}
let nombre = nombreResolucion(3840, 2160)
console.log(`La resolución es ${nombre}`);*/

/*-----------------------------------
    Menú interactivo con switch
-----------------------------------*/
alert("¡Bienvenido al Menú de Pizzas Vane! Elige una de las siguientes opciones. Click para continuar ");

let opcion; // <- existe pero vale undefined

while (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4") {
    opcion = prompt(    // ahora sí tiene valor
        "🍕Menú de Pizzas🍕\n" +
        "1. Pepperoni\n" +
        "2. Pollo\n" +
        "3. Napolitana\n" +
        "4. Carnes\n" +
        "Ingresa el número de tu elección:"
    );
    if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4") {
        alert("Opción no válida. Por favor elige un número del 1 al 4.");
    }
}
// Fuera del bucle, 'opcion' ya tiene un valor válido (1, 2, 3 o 4)
//Switch para evaluar la condición 
switch (opcion) {
    case "1":
        console.log("¡Genial! Has elegido Pizza de Pepperoni 🍕.");
        alert("¡Genial! Has elegido Pizza de Pepperoni 🍕.");
        let tamañoPepperoni = prompt("¿Qué tamaño deseas? Personal, Mediana o Familiar");
        alert(`Has pedido una Pizza Pepperoni tamaño ${tamañoPepperoni} 🤤🍕🧀`);
        break;

    case "2":
        console.log("¡Genial! Has elegido Pizza de Pollo 🍕.");
        alert("¡Genial! Has elegido Pizza de Pollo 🍕.");
        let tamañoPollo = prompt("¿Qué tamaño deseas? Personal, Mediana o Familiar");
        alert(`Has pedido una Pizza de Pollo tamaño ${tamañoPollo} 🤤🍕🍗`);
        break;

    case "3":
        console.log("¡Genial! Has elegido Pizza Napolitada 🍕.");
        alert("¡Genial! Has elegido Pizza Napolitada 🍕.");
        let tamañoNapolitana = prompt("¿Qué tamaño deseas? Personal, Mediana o Familiar");
        alert(`Has pedido una Pizza Napolitana tamaño ${tamañoNapolitana} 🤤🍕🍅`);
        break;

    case "4":
        console.log("¡Genial! Has elegido Pizza de carnes 🍕.");
        alert("¡Genial! Has elegido Pizza de carnes 🍕.");
        let tamañoCarnes = prompt("¿Qué tamaño deseas? Personal, Mediana o Familiar");
        alert(`Has pedido una Pizza de Carnes tamaño ${tamañoCarnes} 🤤🍕🍖`);
        break;
}
