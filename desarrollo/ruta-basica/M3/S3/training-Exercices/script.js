//Arrays
let animales = ["oso", "gato", "perro", "gorila", "elefante"]; // []=>Se le llama Array literal
console.log(animales[3]);
animales[5] = 'Murcelago';
console.log(animales);
console.log(animales.length);

//Funciones
function saludar() {
    console.log('Hola Vane');
}
saludar();

function suma() {
    return 2 + 2;
}
//let resultado = suma()
//console.log(resultado);
console.log(suma());


//FUNCIONES CON ARGUMENTOS
function suma2(a) { //función simple pándole un argumento
    return a + 2;
}
let resultado = suma2(5);
console.log(resultado);

//Función con  tres argumentos
function multiplicacionSuma(a, b, c) {
    console.log(arguments);
    return a * b + c;
}
let resultadoMultiplicacion = multiplicacionSuma(12, 2, 20); // le paso argumentos
console.log(resultadoMultiplicacion);
console.log(typeof multiplicacionSuma); // De tipo function

//LOOPS
//While
let i = 0 //Por convención i
while (i < 11) {       //El ciclo while es infinito, necesitvo una condición!!! que me le de la salida. 
    if (i % 2 == 0) {
        console.log('# par: ', i);
    }
    i++;
}
console.log('Fin del loop While');

//Do while
// No evalúa la condición al comienzo, la evalúa al final. 
// sintaxis:'do{} while(condición)'

let j = 0
do {
    if (j % 2 !== 0) {
        console.log('# impar: ', j);
    }
    j++;
} while (j < 11);
console.log('Fin del loop DoWhile');

//For
//for (inicialización;comparación;TerminarIteración){}
//   inicio-la comparamos con algo -Salida loop inifinito
for (let v = 0; v < 21; v += 4) {
    if (j % 2 !== 0) {
        console.log('# aumentado: ', v);
    }
}
console.log('Fin del loop for');

//For of Loop
let animalesMiticos = ['fenix', 'pegaso', 'unicornio', 'sirena', 'dragon']
console.log('For of con array de animales míticos:');

for (let animal of animalesMiticos) {
    console.log(animal);
}


// For in
let infoVanesa = {
    nombreCompleto: 'Vanesa Carrillo',
    color: 'lila',
    comida: 'kimbap',
    edad: 29,
};
console.log('Esta es la info de Vanesa:');

for (let prop in infoVanesa) {
    console.log(prop, infoVanesa[prop]);
    // console.log(prop);
    // console.log(infoVanesa[prop]);
}


//Continue y Break
let k = 0;
while (k < 6) {
    k++;
    if (k === 2) {
        continue;
    }
    if (k === 4) {
        break
    }
    console.log(k);
}

//switch 
let accion = 'listar';
switch (accion) {
    case 'listar':

}

//Operador ternario
//condición ? valorSiEsVerdadero : valorSiEsFalso;