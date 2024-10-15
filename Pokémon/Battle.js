// Importa la librería readlineSync para obtener entrada del usuario en la consola
import readlineSync from 'readline-sync';

// Define la clase Batalla que maneja una batalla entre dos equipos de Pokémon
export class Batalla {
    // El constructor toma dos listas: los Pokémon del jugador y los del oponente
    constructor(pokemonsJugador, pokemonsOponente) {
        this.pokemonsJugador = pokemonsJugador; // Lista de Pokémon del jugador
        this.pokemonsOponente = pokemonsOponente; // Lista de Pokémon del oponente
        this.turno = 0; // Variable que controla el turno actual
    }

    // Método que inicia la batalla
    iniciar() {
        console.log('====================');
        console.log('The battle has begun!');
        console.log('====================');

        // Ciclo que se ejecuta mientras ambos equipos tengan Pokémon no derrotados
        while (this.pokemonsJugador.length > 0 && this.pokemonsOponente.length > 0) {
            const pokemonJugador = this.pokemonsJugador[this.turno]; // Pokémon actual del jugador
            const pokemonOponente = this.pokemonsOponente[this.turno]; // Pokémon actual del oponente

            // Si el Pokémon del jugador ha sido derrotado, lo remueve del equipo
            if (pokemonJugador.estaDerrotado()) {
                console.log(`\n${pokemonJugador.nombre} has been defeated!`);
                this.pokemonsJugador.splice(this.turno, 1);
                continue;
            }

            // Si el Pokémon del oponente ha sido derrotado, lo remueve del equipo
            if (pokemonOponente.estaDerrotado()) {
                console.log(`\n${pokemonOponente.nombre} has been defeated!`);
                this.pokemonsOponente.splice(this.turno, 1);
                continue;
            }

            // Muestra información del estado actual del combate
            console.log('\n====================');
            console.log(`It's ${pokemonJugador.nombre}'s turn`);
            console.log(`Current HP: ${pokemonJugador.hp.toFixed(2)} / ${pokemonJugador.hpMax.toFixed(2)}`);
            console.log(`Opponent's HP: ${pokemonOponente.hp.toFixed(2)} / ${pokemonOponente.hpMax.toFixed(2)}`);
            console.log('====================');

            // Ofrece al jugador dos opciones: atacar o curarse
            const opciones = ['Attack', 'Heal'];
            const accion = readlineSync.keyInSelect(opciones, 'What do you want to do?');

            // Si elige atacar, llama al método jugadorAtaca
            if (accion === 0) {
                this.jugadorAtaca(pokemonJugador, pokemonOponente);
            }
            // Si elige curarse, llama al método jugadorCura
            else if (accion === 1) {
                this.jugadorCura(pokemonJugador);
            }

            // Si el Pokémon oponente no ha sido derrotado, el oponente toma su turno
            if (!pokemonOponente.estaDerrotado()) {
                this.turnoOponente(pokemonOponente, pokemonJugador);
            }
        }

        // Si todos los Pokémon del jugador son derrotados, la máquina gana
        if (this.pokemonsJugador.length === 0) {
            console.log('\nYour team has been defeated! The machine wins.');
        }
        // Si todos los Pokémon del oponente son derrotados, el jugador gana
        else {
            console.log('\nYou have won the battle!');
        }
    }

    // Método que permite al jugador atacar
    jugadorAtaca(pokemonJugador, pokemonOponente) {
        // Permite al jugador elegir un movimiento de su lista de movimientos
        const indiceMovimiento = readlineSync.keyInSelect(pokemonJugador.movimientos.map(mov => mov.nombre), 'Choose a move:');
        if (indiceMovimiento >= 0) {
            const movimiento = pokemonJugador.movimientos[indiceMovimiento];
            pokemonJugador.atacar(pokemonOponente, movimiento);
        }
    }

    // Método que permite al jugador curar a su Pokémon
    jugadorCura(pokemonJugador) {
        pokemonJugador.curarse();
    }

    // Método que ejecuta el turno del oponente
    turnoOponente(pokemonOponente, pokemonJugador) {
        console.log(`\nIt's ${pokemonOponente.nombre}'s turn.`);
        // El oponente tiene un 50% de probabilidad de atacar o curarse
        const accion = Math.random() < 0.5 ? 'attack' : 'heal';

        // Si elige atacar, selecciona un movimiento aleatorio de su lista de movimientos
        if (accion === 'attack') {
            const movimiento = pokemonOponente.movimientos[Math.floor(Math.random() * pokemonOponente.movimientos.length)];
            pokemonOponente.atacar(pokemonJugador, movimiento);
        }
        // Si elige curarse, intenta curarse
        else {
            pokemonOponente.curarse();
        }
    }
}