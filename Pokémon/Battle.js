import readlineSync from 'readline-sync';

export class Batalla {
    constructor(pokemonesJugador, pokemonesOponente) {
        this.pokemonesJugador = pokemonesJugador;
        this.pokemonesOponente = pokemonesOponente;
        this.turnoJugador = 0;
        this.turnoOponente = 0;
    }

    iniciar() {
        console.log('The battle has started!');
        while (!this.pokemonesJugador[this.turnoJugador].estaDerrotado() && !this.pokemonesOponente[this.turnoOponente].estaDerrotado()) {
            this.turnoJugadorAction();
            if (!this.pokemonesOponente[this.turnoOponente].estaDerrotado()) {
                this.turnoOponenteAction();
            }
        }

        if (this.pokemonesJugador[this.turnoJugador].estaDerrotado()) {
            console.log('Your Pokémon has been defeated! The machine wins.');
        } else {
            console.log('You have won the battle!');
        }
    }

    turnoJugadorAction() {
        const pokemonActual = this.pokemonesJugador[this.turnoJugador];
        console.log(`\nIt's ${pokemonActual.nombre}'s turn.`);
        console.log(`Your HP: ${pokemonActual.hp.toFixed(2)}`);
        console.log(`Opponent's HP: ${this.pokemonesOponente[this.turnoOponente].hp.toFixed(2)}`);

        const opciones = ['Attack', 'Heal'];
        const accion = readlineSync.keyInSelect(opciones, 'What do you want to do?');

        if (accion === 0) {
            this.jugadorAtaca(pokemonActual);
        } else if (accion === 1) {
            this.jugadorCura(pokemonActual);
        }

        if (pokemonActual.estaDerrotado()) {
            this.turnoJugador++;
            if (this.turnoJugador >= this.pokemonesJugador.length) {
                console.log('All your Pokémon have been defeated!');
            }
        }
    }

    jugadorAtaca(pokemonActual) {
        const indiceMovimiento = readlineSync.keyInSelect(pokemonActual.movimientos.map(mov => mov.nombre), 'Choose a move:');
        if (indiceMovimiento >= 0) {
            const movimiento = pokemonActual.movimientos[indiceMovimiento];
            pokemonActual.atacar(this.pokemonesOponente[this.turnoOponente], movimiento);
        }
    }

    jugadorCura(pokemonActual) {
        pokemonActual.curarse();
    }

    turnoOponenteAction() {
        const pokemonOponenteActual = this.pokemonesOponente[this.turnoOponente];
        console.log(`\nIt's ${pokemonOponenteActual.nombre}'s turn.`);
        const accion = Math.random() < 0.5 ? 'attack' : 'heal';

        if (accion === 'attack') {
            const movimiento = pokemonOponenteActual.movimientos[Math.floor(Math.random() * pokemonOponenteActual.movimientos.length)];
            pokemonOponenteActual.atacar(this.pokemonesJugador[this.turnoJugador], movimiento);
        } else {
            pokemonOponenteActual.curarse();
        }

        if (pokemonOponenteActual.estaDerrotado()) {
            this.turnoOponente++;
            if (this.turnoOponente >= this.pokemonesOponente.length) {
                console.log('All opponent Pokémon have been defeated!');
            }
        }
    }
}