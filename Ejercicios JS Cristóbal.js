//Nivel 1 - Principiante

// 1
const readline = require('readline-sync');

// Pide el nombre del usuario y lo almacena en la variable 'nombre'
let nombre = readline.question("Dime tu nombre:");

// Pide la edad del usuario, la convierte a entero y la almacena en 'edad'
const edad = parseInt(readline.question("Dime tu edad:"));

// Pregunta si le gusta programar y almacena la respuesta como un booleano en 'gustaProgramar'
var gustaProgramar = readline.keyInYN("¿Te gusta programar?");

// Muestra el nombre, la edad y si le gusta programar
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Le gusta programar:", gustaProgramar);

// 2
// Pide dos valores numéricos y los convierte a float
let a = parseFloat(readline.question("Valor de a: "));
let b = parseFloat(readline.question("Valor de b: "));

// Calcula la suma de 'a' y 'b'
let summa = a + b;

// Muestra la suma
console.log(`La suma de ${a} y ${b} es: ${summa}`);

// 3
// Pide el nombre y apellido del usuario
let nomb = readline.question("Tu nombre: ");
let apellido = readline.question("Tu apellido: ");

// Concatena el nombre y el apellido para formar el nombre completo
let nombreCompleto = nomb + " " + apellido;

// Muestra el nombre completo
console.log("Nombre completo:", nombreCompleto);

// 4
// Pide un valor numérico en forma de texto
let valor = readline.question("Valor numérico en forma de texto (pon 50): ");

// Convierte el texto a un número
let numero = Number(valor);

// Muestra el valor convertido y su tipo
console.log("Valor convertido:", numero);
console.log("Tipo resultante:", typeof numero);

// 5
// Pide dos números al usuario
let num1 = parseFloat(readline.question("Dime un número: "));
let num2 = parseFloat(readline.question("Dime otro: "));

// Realiza las operaciones matemáticas básicas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

// Muestra los resultados de las operaciones
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

// 6
// Pide un número al usuario
let numeroUsuario = parseFloat(readline.question("Dime un número: "));

// Compara el número con 10 y muestra si es mayor, menor o igual a 10
if (numeroUsuario > 10) {
    console.log("El número es mayor que 10.");
} else if (numeroUsuario < 10) {
    console.log("El número es menor que 10.");
} else {
    console.log("El número es igual a 10.");
}

//Nivel 2 - Intermedio

// 1
// Pide un número al usuario
let num = parseInt(readline.question("Dime un número: "));

// Determina si el número es par o impar
if (num % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

// 2
// Muestra los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3
// Pide un número al usuario para calcular su factorial
let nuum = parseInt(readline.question("Dime un número para calcular su factorial: "));

// Inicializa el valor del factorial y el contador
let factorial = 1;
let i = 1;

// Calcula el factorial del número
while (i <= nuum) {
    factorial *= i;
    i++;
}

// Muestra el factorial calculado
console.log(`El factorial de ${nuum} es: ${factorial}`);

// 4
// Pide un número al usuario para mostrar su tabla de multiplicar
let numm = parseInt(readline.question("Dime un número para ver su tabla de multiplicar: "));

// Muestra la tabla de multiplicar del número
console.log(`Tabla de multiplicar del ${numm}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numm} x ${i} = ${numm * i}`);
}

// 5
// Pide una cadena de texto al usuario
let cadena = readline.question("Dime una cadena de texto: ");

// Inicializa el contador de vocales
let contadorVocales = 0;

// Recorre cada carácter de la cadena y cuenta las vocales
for (let char of cadena) {
    if ("aeiouAEIOUáéíóúÁÉÍÓÚ".includes(char)) {
        contadorVocales++;
    }
}

// Muestra el número de vocales en la cadena
console.log(`La cantidad de vocales en la cadena es: ${contadorVocales}`);

// 6
// Declara un array de nombres
const nombres = ["Pedro", "Paula", "Sergio"];

// Muestra todos los nombres en el array
console.log("Nombres: ");
for (let nombre of nombres) {
    console.log(nombre);
}

//Nivel 3 - Avanzado

// 1
// Pide dos números al usuario y un operador
let numm1 = parseFloat(readline.question("Dime un número: "));
let numm2 = parseFloat(readline.question("Dime otro: "));
let operador = readline.question("Dime un operador (+, -, *, /): ");

// Declara una variable para almacenar el resultado
let resultado;

// Realiza la operación según el operador indicado
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
        if (numm2 !== 0) {
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

// Muestra el resultado de la operación
console.log(`El resultado de ${numm1} ${operador} ${numm2} es: ${resultado}`);

// 2
// Pide una frase al usuario
let frase = readline.question("Dime una frase: ");

// Divide la frase en palabras usando espacios como delimitadores
let palabras = frase.split(/\s+/);

// Muestra el número de palabras en la frase
console.log(`La frase tiene ${palabras.length} palabras.`);

// 3
// Pide una cadena de texto al usuario
let cadena1 = readline.question("Dime una cadena de texto: ");

// Invierte la cadena de texto
let cadenaInvertida = cadena1.split('').reverse().join('');

// Muestra la cadena invertida
console.log(`La cadena invertida es: ${cadenaInvertida}`);

// 4
// Pide tres números al usuario
let nummm1 = parseFloat(readline.question("Dime un primer número: "));
let nummm2 = parseFloat(readline.question("Dime un segundo número: "));
let nummm3 = parseFloat(readline.question("Dime un tercer número: "));

// Determina cuál es el mayor de los tres números
let mayor;
if (nummm1 >= nummm2 && nummm1 >= nummm3) {
    mayor = nummm1;
} else if (nummm2 >= nummm1 && nummm2 >= nummm3) {
    mayor = nummm2;
} else {
    mayor = nummm3;
}

// Muestra el número mayor
console.log(`El número mayor es: ${mayor}`);

// 5
// Pide un número al usuario
let numm3 = parseInt(readline.question("Dime un número: "));

// Asume que el número es primo
let esPrimo = true;

// Verifica si el número es primo
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

// Muestra si el número es primo o no
if (esPrimo) {
    console.log(`${numm3} es un número primo.`);
} else {
    console.log(`${numm3} no es un número primo.`);
}

// 6
// Define una clase 'Circulo' con un constructor que recibe el radio
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    // Método para calcular el área del círculo
    area() {
        return Math.PI * this.radio ** 2;
    }
}

// Pide el radio al usuario y crea un círculo
let radio = parseFloat(readline.question("Dime el radio: "));
let circulo = new Circulo(radio);

// Muestra el área del círculo
console.log(circulo.area());

//7

// Pide al usuario que introduzca su calificación y la convierte a número flotante
let calificacion = parseFloat(readline.question("Dime tu calificación: "));

// Si la calificación es 60 o mayor, muestra "Aprobado"
// Si es menor de 60, muestra "Reprobado"
if (calificacion >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
//8

// Definición de la clase Tarea
class Tarea {
    // El constructor inicializa la tarea con un nombre y establece su estado como no completada
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    // Método para marcar la tarea como completada
    completar() {
        this.completada = true;
    }

    // Método para mostrar el estado de la tarea (completada o pendiente)
    mostrarEstado() {
        return `${this.nombre} - ${this.completada ? "Completada" : "Pendiente"}`;
    }
}

// Lista para almacenar las tareas creadas
const tareas = [];

// Función para agregar una tarea a la lista de tareas
function agregarTarea(nombre) {
    let tarea = new Tarea(nombre); // Crea una nueva tarea
    tareas.push(tarea); // Agrega la tarea a la lista
}

// Función para mostrar todas las tareas y su estado
function mostrarTareas() {
    console.log("Tareas: ");
    tareas.forEach(function (tarea) { // Itera sobre cada tarea en la lista
        console.log(tarea.mostrarEstado()); // Muestra el estado de cada tarea
    });
}

// Función para marcar una tarea como completada dado su índice en la lista
function completarTarea(index) {
    if (index >= 0 && index < tareas.length) {
        tareas[index].completar(); // Marca la tarea como completada si el índice es válido
    } else {
        console.log("Índice de tarea no válido."); // Muestra un mensaje si el índice no es válido
    }
}

//Nivel 4 Desafío

//1
// Función para generar una contraseña aleatoria de una longitud especificada
function generarContraseña(longitud) {
    // Conjunto de caracteres permitidos en la contraseña
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';

    // Genera la contraseña caracter por caracter
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length); // Selecciona un índice aleatorio
        contraseña += caracteres.charAt(indiceAleatorio); // Añade el carácter correspondiente a la contraseña
    }

    return contraseña; // Devuelve la contraseña generada
}

// Solicita al usuario la longitud de la contraseña
const longitud = parseInt(readline.question('Dime la longitud de la contraseña: '));

// Genera y muestra la contraseña aleatoria
const contraseñaGenerada = generarContraseña(longitud);
console.log(`Tu contraseña aleatoria es: ${contraseñaGenerada}`);

//2

// Función para calcular la edad a partir de una fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date(); // Obtiene la fecha actual

    // Divide la fecha de nacimiento en día, mes y año
    const partesNacimiento = fechaNacimiento.split("-");
    const dia = parseInt(partesNacimiento[0]);
    const mes = parseInt(partesNacimiento[1]) - 1; // Los meses en JavaScript son 0 indexados
    let año = parseInt(partesNacimiento[2]);

    // Ajuste para fechas de dos dígitos
    año = año < 100 ? (año >= 50 ? 1900 + año : 2000 + año) : año;

    const nacimiento = new Date(año, mes, dia); // Crea un objeto de fecha con la fecha de nacimiento

    // Calcula la diferencia de años entre la fecha actual y la fecha de nacimiento
    let edad1 = fechaActual.getFullYear() - nacimiento.getFullYear();

    const mesActual = fechaActual.getMonth(); // Obtiene el mes actual
    const diaActual = fechaActual.getDate(); // Obtiene el día actual

    // Si aún no ha pasado el cumpleaños este año, resta 1 a la edad
    if (mesActual < nacimiento.getMonth() || (mesActual === nacimiento.getMonth() && diaActual < nacimiento.getDate())) {
        edad1--;
    }

    return edad1; // Devuelve la edad calculada
}

// Solicita al usuario su fecha de nacimiento
const fechaNacimiento = readline.question('Dime tu fecha de nacimiento (DD-MM-YY): ');

// Calcula y muestra la edad del usuario
const edad1 = calcularEdad(fechaNacimiento);
console.log(`Tienes ${edad1} años.`);

//3

// Función para generar los primeros 'n' términos de la secuencia de Fibonacci
function generarFibonacci(n) {
    let fibonacci = [0, 1]; // Los primeros dos términos de la secuencia de Fibonacci
    for (let i = 2; i < n; i++) {
        // Cada nuevo término es la suma de los dos anteriores
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci; // Devuelve la secuencia de Fibonacci generada
}

// Genera y muestra los primeros 10 números de la secuencia de Fibonacci
const secuenciaFibonacci = generarFibonacci(10);
console.log("Los primeros 10 términos de la secuencia de Fibonacci son:");
console.log(secuenciaFibonacci.join(", "));

//4

// Función para ordenar un array de números usando el algoritmo de burbuja
function ordenarNumeros(array) {
    let n = array.length; // Longitud del array
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, se intercambian
            if (array[j] > array[j + 1]) {
                let temp = array[j]; // Almacena el valor temporalmente
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array; // Devuelve el array ordenado
}

// Array desordenado de ejemplo
let numeros = [34, 7, 23, 32, 5, 62];
console.log("Array original: ", numeros);

// Ordena el array y muestra el resultado
let numerosOrdenados = ordenarNumeros(numeros);
console.log("Array ordenado: ", numerosOrdenados);

//5

// Función que genera un número secreto entre 1 y 100 y permite al usuario adivinarlo
function adivinaElNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    let intentos = 0; // Cuenta los intentos del usuario
    let adivinanza;

    // Bucle que pide al usuario que adivine el número hasta que lo acierte
    do {
        adivinanza = parseInt(readline.question('Adivina el número entre 1 y 100: ')); // Solicita una adivinanza
        intentos++; // Incrementa el número de intentos

        // Muestra pistas si la adivinanza es menor o mayor que el número secreto
        if (adivinanza < numeroSecreto) {
            console.log("El número es mayor.");
        } else if (adivinanza > numeroSecreto) {
            console.log("El número es menor.");
        }
    } while (adivinanza !== numeroSecreto); // El bucle se detiene cuando el número es correcto

    // Felicita al usuario por adivinar el número y muestra la cantidad de intentos
    console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
}

// Inicia el juego de adivinar el número
adivinaElNumero();


//6

// Clase Libro que representa un libro con su título, autor y año de publicación
class Libro {
    constructor(titulo, autor, año) {
        // Inicializa las propiedades del libro con los valores proporcionados
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    // Método que devuelve una cadena con la información del libro
    mostrarInfo() {
        return `${this.titulo} de ${this.autor}, publicado en ${this.año}`;
    }
}

// Clase Biblioteca que gestiona una colección de libros
class Biblioteca {
    constructor() {
        // Inicializa una lista vacía de libros
        this.libros = [];
    }

    // Método para agregar un libro a la biblioteca
    agregarLibro(libro) {
        this.libros.push(libro); // Añade el libro a la lista de libros
    }

    // Método para eliminar un libro de la biblioteca basado en su título
    eliminarLibro(titulo) {
        // Filtra la lista de libros, eliminando el libro cuyo título coincide con el proporcionado
        this.libros = this.libros.filter(libro => libro.titulo !== titulo);
    }

    // Método para mostrar todos los libros en la biblioteca
    mostrarLibros() {
        if (this.libros.length === 0) {
            console.log("La biblioteca está vacía."); // Muestra un mensaje si no hay libros
        } else {
            console.log("Libros en la biblioteca:");
            // Itera sobre cada libro y muestra su información
            this.libros.forEach(libro => console.log(libro.mostrarInfo()));
        }
    }
}

// Ejemplo de uso de la clase Biblioteca
const miBiblioteca = new Biblioteca(); // Crea una nueva instancia de Biblioteca

// Agrega algunos libros a la biblioteca
miBiblioteca.agregarLibro(new Libro("El Quijote", "Miguel de Cervantes", 1605));
miBiblioteca.agregarLibro(new Libro("Cien años de soledad", "Gabriel García Márquez", 1967));

// Muestra todos los libros de la biblioteca
miBiblioteca.mostrarLibros();

// Elimina "El Quijote" de la biblioteca
miBiblioteca.eliminarLibro("El Quijote");

// Muestra los libros restantes en la biblioteca
miBiblioteca.mostrarLibros();

//7

// Función que permite al usuario introducir los precios de productos y calcula el total
function calcularCompra() {
    let total = 0; // Inicializa el total de la compra en 0
    let precioProducto;

    // Bucle que pide el precio de cada producto al usuario
    do {
        // Solicita al usuario el precio de un producto (0 para finalizar)
        precioProducto = parseFloat(readline.question('Dime el precio del producto (0 para finalizar): '));
        if (precioProducto > 0) {
            total += precioProducto; // Suma el precio del producto al total si es mayor a 0
        }
    } while (precioProducto !== 0); // El bucle se detiene cuando el usuario introduce 0

    // Si el total es mayor a 100, aplica un descuento del 10%
    if (total > 100) {
        total *= 0.90; // Aplica el 10% de descuento
        console.log("Se aplicó un descuento del 10%.");
    }

    // Muestra el total a pagar con dos decimales
    console.log(`Total a pagar: ${total.toFixed(2)} euros.`);
}

// Llama a la función para calcular la compra
calcularCompra();

//8

// Función que calcula el promedio de un array de calificaciones
function calcularPromedio(calificaciones) {
    let suma = 0; // Inicializa la suma de las calificaciones en 0
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i]; // Suma cada calificación
    }
    return suma / calificaciones.length; // Calcula el promedio dividiendo la suma por la cantidad de calificaciones
}

// Solicita al usuario varias calificaciones
let calificaciones = [];
let calificacionn;

// Bucle para solicitar calificaciones al usuario
do {
    // Solicita una calificación al usuario (0 para terminar)
    calificacionn = parseFloat(readline.question('Dime una calificación (o 0 para terminar): '));
    if (calificacionn > 0) {
        calificaciones.push(calificacionn); // Añade la calificación al array si es mayor que 0
    }
} while (calificacionn !== 0); // El bucle se detiene cuando el usuario introduce 0

// Si el usuario introdujo alguna calificación
if (calificaciones.length > 0) {
    const promedio = calcularPromedio(calificaciones); // Calcula el promedio de las calificaciones
    console.log(`El promedio de tus calificaciones es: ${promedio.toFixed(2)}`);

    // Muestra si el usuario aprobó o suspendió basado en el promedio
    if (promedio >= 60) {
        console.log("¡Aprobaste!");
    } else {
        console.log("Suspendiste.");
    }
} else {
    // Si el usuario no introdujo ninguna calificación
    console.log("No pusiste ninguna calificación.");
}

//9

// Función que genera 5 números aleatorios entre 1 y 20 sin repetir
function generarNumerosAleatorios() {
    let numeros = []; // Inicializa un array vacío para los números aleatorios
    while (numeros.length < 5) {
        const numeroAleatorio = Math.floor(Math.random() * 20) + 1; // Genera un número aleatorio entre 1 y 20
        // Si el número no está ya en el array, lo añade
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros; // Devuelve el array de números generados
}

// Genera y muestra los números aleatorios sin repetir
const numerosGenerados = generarNumerosAleatorios();
console.log("Números aleatorios generados sin repetir: ", numerosGenerados.join(", "));

//10