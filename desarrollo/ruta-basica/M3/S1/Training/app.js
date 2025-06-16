/*
//Display messages in console
console.error("Este es un mensaje de error!");
console.warn("This is a warning message.");
console.info("This is a info message.");

console.group("Try with console group.");
console.log("Name: Vanesa Carrillo")
console.log("Edad: 29 años");
console.log("Color favorito: Lila");
console.groupEnd("This is the end of consolegroup");

console.time("time");
console.info("testing");
console.timeEnd("time");

//Request data in the browser
prompt("ingresa tu nombre", "Hola, soy ");
alert("Trying with Alert");
confirm("Are you of legal age?")*/



//Basic Syntax in JavaScript - Declaration of variables
let name = 'Enith';  //let:can be modified
name = 'Vanesa'
const yearBirth = '1996';   //can not be modified
console.log(name, "naciste en", yearBirth);

/*const edad = 'Mi edad es 29 años';
edad = 'Mi edad es 28 años' */   //app.js:31  Uncaught TypeError: Assignment to constant variable.

let nameDos = 'jose', company = 'Riwi', year = '2025';      //Declaring multiple variables at once.
console.log('Hola', nameDos, 'de la compañía', company, ',', 'año', year, '.');


//Primitive Data
//Number
const year2 = 2025, pi = 3.141_592_653; //Underscore(_) as visual separators in long numbers.
//String
console.log(`Imprimiendo con 'Template String' año ${year2}, además el número Pi que es: ${pi}`);
//Booleans
let hasComplpetedModule = false;
console.log(hasComplpetedModule);
//Undefined - Variable declared but no value assigned
let marca
console.log(marca);
//Empty Value
let emptyValue = null;
console.log(emptyValue);
//Symbol - Represents Unique Identifiers
let uniqueID = Symbol('id');
console.log(uniqueID)
//BigInt-safe Big Number - an 'n' is added at the end Just whole numbers, not decimals.
let bigNumber = 112_345_052_334_914_900_025_172n;
console.log(bigNumber);


/* Operators
//Logics
&& AND 'TRUE if both conditions are true'
|| OR 'TRUE if at least one of the conditions is true'
! NOT 'Inverts the logical value, converts true to false and vice versa.'
// Arithmetic
+,-,*, /, %, ++, --, **

//comparison operators - The result of a comparison is always true or false, and is used to make decisions in the code.
1=='1' true
0==='0' False
10 != '10' False
2 !== '2'  True
> < >= <= 

//Assignment operators
= Assignment
year += 1  === year = year +1
day -= 2 === year = year-2
year *= 1 === year=year+1
year /=2 === year=year/2
year %= 2025 === year = year %2025
year **= 3 === year=year**3
+  It is also used to concatenate text strings.*/


//IF-ELSE IF-ELSE
let age = 18;

if (age < 2) {
    console.log("Yoy are a baby")
} else if (age >= 18) {
    console.log("You are an adult")
} else {
    console.log("You are a minor")
}

//Ternary operator -Compact form of conditional, used when there is only one simple condition to evaluate
let age2 = 18;
let status = (age2 >= 18) ? 'Adult' : 'Minor';
console.log(status);

//console.assert() - If the condition is false, display the error message, otherwise nothing is displayed.
let skills = "HTML, CSS";
console.assert(skills.includes("JavaScript"), "The coder does not know JavaScript.");

