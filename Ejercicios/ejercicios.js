//Nivel 1 Principiante
//1
const readline = require('readline-sync');

let nombre = readline.question("Ingresa tu nombre:");
const edad = parseInt(readline.question("Ingresa tu edad:"));
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

//Nivel 2 intermedio
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

// Nivel 3 avanzado
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
let palabras = frase.split(' ');

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