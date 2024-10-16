import readlineSync from 'readline-sync';

export class Batalla {
    constructor(pokemonsJugador, pokemonsOponente) {
        this.pokemonsJugador = pokemonsJugador; // Pokémon del jugador
        this.pokemonsOponente = pokemonsOponente; // Pokémon del oponente
        this.turno = 1; // Contador de turnos
    }

    // Método para iniciar la batalla
    iniciar() {
        console.log('====================');
        console.log('The battle has begun!');
        console.log('====================');

        while (this.pokemonsJugador.length > 0 && this.pokemonsOponente.length > 0) {
            const pokemonJugador = this.pokemonsJugador[0]; // Siempre el primer Pokémon
            const pokemonOponente = this.pokemonsOponente[0]; // Siempre el primer Pokémon

            // Verificar si el Pokémon del jugador está derrotado
            if (pokemonJugador.estaDerrotado()) {
                console.log(`\n${pokemonJugador.nombre} has been defeated!`);
                this.pokemonsJugador.splice(0, 1); // Elimina al Pokémon derrotado
                continue;
            }

            // Verificar si el Pokémon del oponente está derrotado
            if (pokemonOponente.estaDerrotado()) {
                console.log(`\n${pokemonOponente.nombre} has been defeated!`);
                this.pokemonsOponente.splice(0, 1); // Elimina al Pokémon derrotado
                continue;
            }

            console.log('\n====================');
            console.log(`Turno ${this.turno}`); // Mostrar el número de turno
            console.log(`It's ${pokemonJugador.nombre}'s turn`);
            console.log(`Current HP: ${pokemonJugador.hp.toFixed(2)} / ${pokemonJugador.hpMax.toFixed(2)}`);
            console.log(`Opponent's HP: ${pokemonOponente.hp.toFixed(2)} / ${pokemonOponente.hpMax.toFixed(2)}`);
            console.log('====================');

            // Opciones de acción para el jugador
            const opciones = ['Attack', 'Heal'];
            const accion = readlineSync.keyInSelect(opciones, 'What do you want to do?');

            // Ejecutar la acción seleccionada
            if (accion === 0) {
                this.jugadorAtaca(pokemonJugador, pokemonOponente);
            } else if (accion === 1) {
                this.jugadorCura(pokemonJugador);
            }

            // Verificar si el oponente todavía está en pie antes de su turno
            if (!pokemonOponente.estaDerrotado()) {
                this.turnoOponente(pokemonOponente, pokemonJugador);
            }

            // Incrementar el contador de turnos
            this.turno++;
        }

        // Verificar el resultado de la batalla
        if (this.pokemonsJugador.length === 0) {
            console.log('\nYour team has been defeated! The machine wins.');
        } else {
            console.log('\nYou have won the battle!');
        }
        // Mostrar el número total de turnos
        console.log(`Total turns: ${this.turno - 1}`); // Restar 1 porque incrementamos al final del bucle
    }

    // Método para que el jugador ataque
    jugadorAtaca(pokemonJugador, pokemonOponente) {
        const indiceMovimiento = readlineSync.keyInSelect(pokemonJugador.movimientos.map(mov => mov.nombre), 'Choose a move:');
        if (indiceMovimiento >= 0) {
            const movimiento = pokemonJugador.movimientos[indiceMovimiento];
            pokemonJugador.atacar(pokemonOponente, movimiento); // Ejecutar el ataque
        }
    }

    // Método para que el jugador cure a su Pokémon
    jugadorCura(pokemonJugador) {
        pokemonJugador.curarse(); // Ejecutar curación
    }

    // Método para el turno del oponente
    turnoOponente(pokemonOponente, pokemonJugador) {
        console.log(`\nIt's ${pokemonOponente.nombre}'s turn.`);
        const accion = Math.random() < 0.5 ? 'attack' : 'heal'; // Acción aleatoria para el oponente

        // Ejecutar acción del oponente
        if (accion === 'attack') {
            const movimiento = pokemonOponente.movimientos[Math.floor(Math.random() * pokemonOponente.movimientos.length)];
            pokemonOponente.atacar(pokemonJugador, movimiento);
        } else {
            pokemonOponente.curarse();
        }
    }
}
