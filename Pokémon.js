const readlineSync = require('readline-sync');

// Clase Movimiento que representa los movimientos de un Pokémon
class Movimiento {
    constructor(nombre, daño) {
        this.nombre = nombre;
        this.daño = daño;
    }
}

// Clase Pokemon que contiene los atributos del Pokémon
class Pokemon {
    constructor(nombre, tipo, hp, ataque, defensa, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hp = hp;
        this.hpMax = hp;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.curado = false; // Para saber si el Pokémon ya se curó
    }

    // Método para atacar a otro Pokémon
    atacar(oponente, movimiento) {
        const daño = this.calcularDaño(movimiento, oponente);
        oponente.hp -= daño;
        console.log(`${this.nombre} usó ${movimiento.nombre} e infligió ${daño.toFixed(2)} de daño a ${oponente.nombre}!`);
        if (oponente.hp <= 0) {
            console.log(`${oponente.nombre} ha sido derrotado!`);
        }
    }

    // Método para calcular el daño de un ataque
    calcularDaño(movimiento, oponente) {
        const factorAleatorio = Math.random() * (1.0 - 0.85) + 0.85; // Factor aleatorio entre 0.85 y 1.0
        return ((this.ataque / oponente.defensa) * movimiento.daño) * factorAleatorio;
    }

    // Método para curarse
    curarse() {
        if (!this.curado) {
            const cantidadCura = this.hpMax * 0.5;
            this.hp = Math.min(this.hp + cantidadCura, this.hpMax); // No puede curarse por encima de su HP máximo
            this.curado = true;
            console.log(`${this.nombre} se ha curado y recupera ${cantidadCura.toFixed(2)} HP!`);
        } else {
            console.log(`${this.nombre} ya no puede curarse.`);
        }
    }

    // Método para verificar si el Pokémon está derrotado
    estaDerrotado() {
        return this.hp <= 0;
    }
}

// Clase Batalla que controla la lógica del combate
class Batalla {
    constructor(pokemonJugador, pokemonOponente) {
        this.pokemonJugador = pokemonJugador;
        this.pokemonOponente = pokemonOponente;
        this.turno = 'jugador'; // Controla de quién es el turno
    }

    // Método para iniciar el combate
    iniciar() {
        console.log('¡El combate ha comenzado!');

        // Bucle del combate
        while (!this.pokemonJugador.estaDerrotado() && !this.pokemonOponente.estaDerrotado()) {
            if (this.turno === 'jugador') {
                this.turnoJugador();
            } else {
                this.turnoOponente();
            }
        }

        if (this.pokemonJugador.estaDerrotado()) {
            console.log('¡Tu Pokémon ha sido derrotado! La máquina gana.');
        } else {
            console.log('¡Has ganado el combate!');
        }
    }

    // Turno del jugador
    turnoJugador() {
        console.log(`\nEs el turno de ${this.pokemonJugador.nombre}.`);
        console.log(`Tu HP: ${this.pokemonJugador.hp.toFixed(2)}`);
        console.log(`HP del oponente: ${this.pokemonOponente.hp.toFixed(2)}`);

        const opciones = ['Atacar', 'Curarse'];
        const accion = readlineSync.keyInSelect(opciones, '¿Qué deseas hacer?');

        if (accion === 0) {
            this.jugadorAtaca();
        } else if (accion === 1) {
            this.jugadorCura();
        }

        if (!this.pokemonOponente.estaDerrotado()) {
            this.turno = 'oponente';
        }
    }

    // Método para el ataque del jugador
    jugadorAtaca() {
        const indiceMovimiento = readlineSync.keyInSelect(this.pokemonJugador.movimientos.map(mov => mov.nombre), 'Elige un movimiento:');
        if (indiceMovimiento >= 0) {
            const movimiento = this.pokemonJugador.movimientos[indiceMovimiento];
            this.pokemonJugador.atacar(this.pokemonOponente, movimiento);
        }
    }

    // Método para la curación del jugador
    jugadorCura() {
        this.pokemonJugador.curarse();
    }

    // Turno de la máquina
    turnoOponente() {
        console.log(`\nEs el turno de ${this.pokemonOponente.nombre}.`);
        const accion = Math.random() < 0.5 ? 'atacar' : 'curarse'; // La IA elige aleatoriamente

        if (accion === 'atacar') {
            const movimiento = this.pokemonOponente.movimientos[Math.floor(Math.random() * this.pokemonOponente.movimientos.length)];
            this.pokemonOponente.atacar(this.pokemonJugador, movimiento);
        } else {
            this.pokemonOponente.curarse();
        }

        if (!this.pokemonJugador.estaDerrotado()) {
            this.turno = 'jugador';
        }
    }
}

// Clase Juego que maneja el juego en general
class Juego {
    constructor() {
        // Crear movimientos
        const lanzallamas = new Movimiento('Lanzallamas', 40);
        const placaje = new Movimiento('Placaje', 20);
        const hidrobomba = new Movimiento('Hidrobomba', 50);
        const latigoCepa = new Movimiento('Látigo Cepa', 30);

        // Crear Pokémon
        this.pokemonJugador = new Pokemon('Charizard', 'Fuego', 120, 35, 25, [lanzallamas, placaje]);
        this.pokemonOponente = new Pokemon('Blastoise', 'Agua', 130, 30, 30, [hidrobomba, placaje]);
    }

    // Método para iniciar el juego
    iniciar() {
        const batalla = new Batalla(this.pokemonJugador, this.pokemonOponente);
        batalla.iniciar();
    }
}

// Iniciar el juego
const juego = new Juego();
juego.iniciar();