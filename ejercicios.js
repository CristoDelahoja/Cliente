//Nivel 1 Principiante
//1
const readline = require('readline-sync');

let nombre = readline.question("Dime tu nombre:");
const edad = parseInt(readline.question("Dime tu edad:"));
var gustaProgramar = readline.keyInYN("¿Te gusta programar?");

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Le gusta programar:", gustaProgramar);

//2

let a = parseFloat(readline.question("Valor de a: "));
let b = parseFloat(readline.question("Valor de b: "));
let suma = a + b;

console.log(`La suma de ${a} y ${b} es: ${suma}`);

//3

let nomb = readline.question("Tu nombre: ");
let apellido = readline.question("Tu apellido: ");
let nombreCompleto = nomb + " " + apellido;
console.log("Nombre completo:", nombreCompleto);

//4

let valor = readline.question("Valor numérico en forma de texto (pon 50): ");
let numero = Number(valor);
console.log("Valor convertido:", numero);
console.log("Tipo resultante:", typeof numero);

//5

let num1 = parseFloat(readline.question("Dime un número: "));
let num2 = parseFloat(readline.question("Dime otro: "));

let sssum = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let división = num1 / num2;

console.log("Suma:", ssum);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", división);

//6

let numeroUsuario = parseFloat(readline.question("Dime un número: "));

if (numeroUsuario > 10) {
    console.log("El número es mayor que 10.");
} else if (numeroUsuario < 10) {
    console.log("El número es menor que 10.");
} else {
    console.log("El número es igual a 10.");
}

//Nivel 2 Intermedio
//1

let num = parseInt(readline.question("Dime un número: "));

if (num % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

//2
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//3

let nuum = parseInt(readline.question("Dime un número para calcular su factorial: "));
let factorial = 1;
let i = 1;

while (i <= nuum) {
    factorial *= i;
    i++;
}

console.log(`El factorial de ${nuum} es: ${factorial}`);

//4

let numm = parseInt(readline.question("Dime un número para ver su tabla de multiplicar: "));

console.log(`Tabla de multiplicar del ${numm}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numm} x ${i} = ${numm * i}`);
}

//5

let cadena = readline.question("Dime una cadena de texto: ");
let contadorVocales = 0;

for (let char of cadena) {
    if ("aeiouAEIOUáéíóúÁÉÍÓÚ".includes(char)) {
        contadorVocales++;
    }
}

console.log(`La cantidad de vocales en la cadena es: ${contadorVocales}`);

//6
const nombres = ["Pedro", "Paula", "Sergio"];

console.log("Nombres: ");
for (let nombre of nombres) {
    console.log(nombre);
}

// Nivel 3 Avanzado
//1

let numm1 = parseFloat(readline.question("Dime un número: "));
let numm2 = parseFloat(readline.question("Dime otro: "));
let operador = readline.question("Dime un operador (+, -, *, /): ");

let resultado;
switch (operador) {
    case '+':
        resultado = numm1 + numm2;
        break;
    case '-':
        resultado = numm1 - numm2;
        break;
    case '*':
        resultado = numm1 * numm2;
        break;
    case '/':
        if (num2 !== 0) {
            resultado = numm1 / numm2;
        } else {
            console.log("No se puede dividir entre 0.");
            return;
        }
        break;
    default:
        console.log("Operador no válido.");
        return;
}

console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);

//2

let frase = readline.question("Dime una frase: ");
let palabras = frase.split(/\s+/);

console.log(`La frase tiene ${palabras.length} palabras.`);

//3

let cadena1 = readline.question("Dime una cadena de texto: ");
let cadenaInvertida = cadena1.split('').reverse().join('');

console.log(`La cadena invertida es: ${cadenaInvertida}`);

//4

let nummm1 = parseFloat(readline.question("Dime un primer número: "));
let nummm2 = parseFloat(readline.question("Dime un segundo número: "));
let nummm3 = parseFloat(readline.question("Dime un tercer número: "));

let mayor;

if (nummm1 >= nummm2 && nummm1 >= nummm3) {
    mayor = nummm1;
} else if (nummm2 >= nummm1 && nummm2 >= nummm3) {
    mayor = nummm2;
} else {
    mayor = nummm3;
}

console.log(`El número mayor es: ${mayor}`);

//5

let numm3 = parseInt(readline.question("Dime un número: "));
let esPrimo = true;

if (numm3 <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numm3; i++) {
        if (numm3 % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(`${numm3} es un número primo.`);
} else {
    console.log(`${numm3} no es un número primo.`);
}


//6
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio ** 2;
    }
}

let radio = parseFloat(readline.question("Dime el radio: "));

let circulo = new Circulo(radio);

console.log(circulo.area());

//7

let calificacion = parseFloat(readline.question("Dime tu calificación: "));

if (calificacion >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//8
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }

    mostrarEstado() {
        return `${this.nombre} - ${this.completada ? "Completada" : "Pendiente"}`;
    }
}

const tareas = [];

function agregarTarea(nombre) {
    let tarea = new Tarea(nombre);
    tareas.push(tarea);
}

function mostrarTareas() {
    console.log("Tareas: ");
    tareas.forEach(function (tarea) {
        console.log(tarea.mostrarEstado());
    })
};

function completarTarea(index) {
    if (index >= 0 && index < tareas.length) {
        tareas[index].completar();
    } else {
        console.log("Índice de tarea no válido.");
    }
}

// Nivel 4 Desafío

//1
function generarContraseña(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }

    return contraseña;
}

const longitud = parseInt(readline.question('Dime la longitud de la contraseña: '));

const contraseñaGenerada = generarContraseña(longitud);
console.log(`Tu contraseña aleatoria es: ${contraseñaGenerada}`);

//2
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();

    const partesNacimiento = fechaNacimiento.split("-");
    const dia = parseInt(partesNacimiento[0]);
    const mes = parseInt(partesNacimiento[1]) - 1;
    let año = parseInt(partesNacimiento[2]);

    año = año < 100 ? (año >= 50 ? 1900 + año : 2000 + año) : año;

    const nacimiento = new Date(año, mes, dia);

    let edad1 = fechaActual.getFullYear() - nacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    if (mesActual < nacimiento.getMonth() || (mesActual === nacimiento.getMonth() && diaActual < nacimiento.getDate())) {
        edad1--;
    }

    return edad1;
}

const fechaNacimiento = readline.question('Dime tu fecha de nacimiento (DD-MM-YY): ');

const edad1 = calcularEdad(fechaNacimiento);
console.log(`Tienes ${edad1} años.`);

//3
function generarFibonacci(n) {
    let fibonacci = [0, 1]; // Los primeros dos términos de la secuencia de Fibonacci
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Suma los dos anteriores
    }
    return fibonacci;
}

// Generar y mostrar los primeros 10 números de la secuencia de Fibonacci
const secuenciaFibonacci = generarFibonacci(10);
console.log("Los primeros 10 términos de la secuencia de Fibonacci son:");
console.log(secuenciaFibonacci.join(", "));


//4
function ordenarNumeros(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambia los elementos si no están en orden
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Ejemplo de array desordenado
let numeros = [34, 7, 23, 32, 5, 62];
console.log("Array original: ", numeros);

// Ordenar el array
let numerosOrdenados = ordenarNumeros(numeros);
console.log("Array ordenado: ", numerosOrdenados);

//5
function adivinaElNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinanza;

    do {
        adivinanza = parseInt(readline.question('Adivina el número entre 1 y 100: '));
        intentos++;

        if (adivinanza < numeroSecreto) {
            console.log("El número es mayor.");
        } else if (adivinanza > numeroSecreto) {
            console.log("El número es menor.");
        }
    } while (adivinanza !== numeroSecreto);

    console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
}

adivinaElNumero();

//6
class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    mostrarInfo() {
        return `${this.titulo} de ${this.autor}, publicado en ${this.año}`;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    eliminarLibro(titulo) {
        this.libros = this.libros.filter(libro => libro.titulo !== titulo);
    }

    mostrarLibros() {
        if (this.libros.length === 0) {
            console.log("La biblioteca está vacía.");
        } else {
            console.log("Libros en la biblioteca:");
            this.libros.forEach(libro => console.log(libro.mostrarInfo()));
        }
    }
}

// Ejemplo de uso
const miBiblioteca = new Biblioteca();
miBiblioteca.agregarLibro(new Libro("El Quijote", "Miguel de Cervantes", 1605));
miBiblioteca.agregarLibro(new Libro("Cien años de soledad", "Gabriel García Márquez", 1967));
miBiblioteca.mostrarLibros();

miBiblioteca.eliminarLibro("El Quijote");
miBiblioteca.mostrarLibros();

//7
function calcularCompra() {
    let total = 0;
    let precioProducto;

    do {
        precioProducto = parseFloat(readline.question('Dime el precio del producto (0 para finalizar): '));
        if (precioProducto > 0) {
            total += precioProducto;
        }
    } while (precioProducto !== 0);

    if (total > 100) {
        total *= 0.90; // Aplica el 10% de descuento
        console.log("Se aplicó un descuento del 10%.");
    }

    console.log(`Total a pagar: ${total.toFixed(2)} euros.`);
}

calcularCompra();

//8
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

// Solicitar al usuario varias calificaciones
let calificaciones = [];
let calificacionn;

do {
    calificacionn = parseFloat(readline.question('Dime una calificación (o 0 para terminar): '));
    if (calificacionn > 0) {
        calificaciones.push(calificacionn);
    }
} while (calificacionn !== 0);

if (calificaciones.length > 0) {
    const promedio = calcularPromedio(calificaciones);
    console.log(`El promedio de tus calificaciones es: ${promedio.toFixed(2)}`);

    if (promedio >= 60) {
        console.log("¡Aprobaste!");
    } else {
        console.log("Suspendiste.");
    }
} else {
    console.log("No pusiste ninguna calificación.");
}

//9
function generarNumerosAleatorios() {
    let numeros = [];
    while (numeros.length < 5) {
        const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
}

// Generar y mostrar los números aleatorios sin repetir
const numerosGenerados = generarNumerosAleatorios();
console.log("Números aleatorios generados sin repetir: ", numerosGenerados.join(", "));

//10