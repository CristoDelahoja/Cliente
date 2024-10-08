import { Pokemon } from './Pokémon.js';
import readlineSync from 'readline-sync';

export class Batalla {
    constructor(pokemonJugador, pokemonOponente) {
        this.pokemonJugador = pokemonJugador;
        this.pokemonOponente = pokemonOponente;
        this.turno = 'jugador';
    }

    iniciar() {
        console.log('The battle has started!');
        while (!this.pokemonJugador.estaDerrotado() && !this.pokemonOponente.estaDerrotado()) {
            if (this.turno === 'jugador') {
                this.turnoJugador();
            } else {
                this.turnoOponente();
            }
        }

        if (this.pokemonJugador.estaDerrotado()) {
            console.log('Your Pokémon has been defeated! The machine wins.');
        } else {
            console.log('You have won the battle!');
        }
    }

    turnoJugador() {
        console.log(`\nIt's ${this.pokemonJugador.nombre}'s turn.`);
        console.log(`Your HP: ${this.pokemonJugador.hp.toFixed(2)}`);
        console.log(`Opponent's HP: ${this.pokemonOponente.hp.toFixed(2)}`);

        const opciones = ['Attack', 'Heal'];
        const accion = readlineSync.keyInSelect(opciones, 'What do you want to do?');

        if (accion === 0) {
            this.jugadorAtaca();
        } else if (accion === 1) {
            this.jugadorCura();
        }

        if (!this.pokemonOponente.estaDerrotado()) {
            this.turno = 'oponente';
        }
    }

    jugadorAtaca() {
        const indiceMovimiento = readlineSync.keyInSelect(this.pokemonJugador.movimientos.map(mov => mov.nombre), 'Choose a move:');
        if (indiceMovimiento >= 0) {
            const movimiento = this.pokemonJugador.movimientos[indiceMovimiento];
            this.pokemonJugador.atacar(this.pokemonOponente, movimiento);
        }
    }

    jugadorCura() {
        this.pokemonJugador.curarse();
    }

    turnoOponente() {
        console.log(`\nIt's ${this.pokemonOponente.nombre}'s turn.`);
        const accion = Math.random() < 0.5 ? 'attack' : 'heal';

        if (accion === 'attack') {
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
