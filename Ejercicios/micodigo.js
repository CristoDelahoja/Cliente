//document.write("Holaaaaaaa");
console.log("Un mensaje directo a la consola");

var nombre = "Juan";
console.log(nombre); // Output: Juan

const PI = 3.14;
console.log(PI); // Output: 3.14

let nombre1; // Declaración sin inicialización
console.log(nombre1); // Output: undefined

nombre1 = "Carlos"; // Inicialización
console.log(nombre1); // Output: Carlos

let saludo = "¡Hola a todos!"; // Ámbito global

function mostrarSaludo() {
    console.log(saludo); // Puede acceder a 'saludo' porque es global
}

mostrarSaludo(); // Output: ¡Hola a todos!

function calcular() {
    let resultado = 42; // Ámbito local dentro de la función
    console.log(resultado); // Output: 42
}

calcular();

console.log("Así \"escapamos\" comillas dobles.");
console.log('Así \'escapamos\' comillas simples.');
console.log("Así \t tabulamos un texto.");
console.log("Así \\ escapamos la barra invertida.");
console.log("Así \n incluimos un salto de línea.");

console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1\'23\", algo considerado \"lento\" en la actualidad.");

let persona = {
    nombre: "Ana",
    edad: 28,
    esProgramador: true,
};

console.log(persona);

let colores = ["rojo", "verde", "azul"];
console.log(colores);

let a = 1;
let b = 2;
console.log(a + b);

let cadena = "456";
let numeroEntero = Number(cadena); // Conversión a número
let numeroEntero2 = parseInt(cadena); // Conversión a número entero
let numeroDecimal = parseFloat("456.78"); // Conversión a número decimal
console.log(numeroEntero, numeroEntero2, numeroDecimal); // Output: 456 456 456.78

let valor = 0; // Cualquier número distinto de 0 es true
let cadenaVacia = ""; // Cadenas vacías son false
console.log(Boolean(valor)); // Output: true
console.log(Boolean(cadenaVacia)); // Output: false

let z = 1; // Inicializa z con 1
console.log('Valor de z: ', z); // Muestra en la consola: Valor de z:  1
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  1

z++; // Incrementa z en 1 (z ahora vale 2)
console.log('Valor de z: ', z); // Muestra en la consola: Valor de z:  2
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  2

z += 5; // Aumenta z en 5 (z ahora vale 7)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  7

z -= 5; // Resta 5 a z (z ahora vale 2)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  2

z *= 5; // Multiplica z por 5 (z ahora vale 10)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  10

z /= 5; // Divide z entre 5 (z ahora vale 2)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  2

z %= 5; // Calcula z módulo 5 (z ahora vale 2)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  2

z **= 5; // Eleva z a la potencia de 5 (z ahora vale 32)
document.write('Valor de z: ', z + "<br>"); // Escribe en el documento: Valor de z:  32



