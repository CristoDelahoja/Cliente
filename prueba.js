//function mostrarMensaje() {
//console.log("¡Has hecho clic en el botón!");
//}

//let nombre = prompt("¿Cuál es tu nombre");
//let edad = parseInt(prompt("¿Cual es tu edad?"));
//console.log('Nombre: ', nombre, 'Edad: ', edad);
//document.write('Nombre: ', nombre, 'Edad: ', edad);

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// Esperamos la respuesta del usuario.
var userName = readlineSync.question('¿Puedo conocer tu nombre? ');
console.log('Hi ' + userName + '!');

// Manejo de texto secreto (por ejemplo, contraseñas).
var favFood = readlineSync.question('¿Cuál es tu comida favorita? ', {
  hideEchoBack: true // El texto introducido se oculta en pantalla.
});
console.log('¡A ' + userName + ' le gusta ' + favFood + '!');