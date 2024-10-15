// Importa la clase Juego desde el archivo 'Game.js'
// Esto permite usar la clase Juego definida en ese archivo dentro de este script
import {
    Juego
} from './Game.js';

// Crea una nueva instancia del juego
// Al crear una instancia de Juego, inicializamos el objeto que contendrá toda la lógica del juego
const juego = new Juego();

// Llama al método iniciar() del objeto juego
// Este método probablemente contiene toda la lógica para iniciar el juego, configurando las reglas, los personajes, etc.
juego.iniciar();