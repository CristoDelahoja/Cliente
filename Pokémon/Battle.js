import readlineSync from 'readline-sync';

export class Batalla {
    constructor(pokemonsJugador, pokemonsOponente) {
        this.pokemonsJugador = pokemonsJugador;
        this.pokemonsOponente = pokemonsOponente;
        this.turno = 0;
    }

    iniciar() {
        console.log('====================');
        console.log('The battle has begun!');
        console.log('====================');

        while (this.pokemonsJugador.length > 0 && this.pokemonsOponente.length > 0) {
            const pokemonJugador = this.pokemonsJugador[this.turno];
            const pokemonOponente = this.pokemonsOponente[this.turno];

            if (pokemonJugador.estaDerrotado()) {
                console.log(`\n${pokemonJugador.nombre} has been defeated!`);
                this.pokemonsJugador.splice(this.turno, 1);
                continue;
            }

            if (pokemonOponente.estaDerrotado()) {
                console.log(`\n${pokemonOponente.nombre} has been defeated!`);
                this.pokemonsOponente.splice(this.turno, 1);
                continue;
            }

            console.log('\n====================');
            console.log(`It's ${pokemonJugador.nombre}'s turn`);
            console.log(`Current HP: ${pokemonJugador.hp.toFixed(2)} / ${pokemonJugador.hpMax.toFixed(2)}`);
            console.log(`Opponent's HP: ${pokemonOponente.hp.toFixed(2)} / ${pokemonOponente.hpMax.toFixed(2)}`);
            console.log('====================');

            const opciones = ['Attack', 'Heal'];
            const accion = readlineSync.keyInSelect(opciones, 'What do you want to do?');

            if (accion === 0) {
                this.jugadorAtaca(pokemonJugador, pokemonOponente);
            } else if (accion === 1) {
                this.jugadorCura(pokemonJugador);
            }

            if (!pokemonOponente.estaDerrotado()) {
                this.turnoOponente(pokemonOponente, pokemonJugador);
            }
        }

        if (this.pokemonsJugador.length === 0) {
            console.log('\nYour team has been defeated! The machine wins.');
        } else {
            console.log('\nYou have won the battle!');
        }
    }

    jugadorAtaca(pokemonJugador, pokemonOponente) {
        const indiceMovimiento = readlineSync.keyInSelect(pokemonJugador.movimientos.map(mov => mov.nombre), 'Choose a move:');
        if (indiceMovimiento >= 0) {
            const movimiento = pokemonJugador.movimientos[indiceMovimiento];
            pokemonJugador.atacar(pokemonOponente, movimiento);
        }
    }

    jugadorCura(pokemonJugador) {
        pokemonJugador.curarse();
    }

    turnoOponente(pokemonOponente, pokemonJugador) {
        console.log(`\nIt's ${pokemonOponente.nombre}'s turn.`);
        const accion = Math.random() < 0.5 ? 'attack' : 'heal';

        if (accion === 'attack') {
            const movimiento = pokemonOponente.movimientos[Math.floor(Math.random() * pokemonOponente.movimientos.length)];
            pokemonOponente.atacar(pokemonJugador, movimiento);
        } else {
            pokemonOponente.curarse();
        }
    }
}