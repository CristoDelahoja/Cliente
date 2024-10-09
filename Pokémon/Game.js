import {
    Movimiento
} from './Moves.js';
import {
    Pokémon
} from './Pokémon.js';
import {
    Batalla
} from './Battle.js';

const tipoVentajas = {
    'Fire': {
        'Grass': 2,
        'Water': 0.5,
        'Fire': 1
    },
    'Water': {
        'Fire': 2,
        'Grass': 0.5,
        'Water': 1
    },
    'Grass': {
        'Water': 2,
        'Fire': 0.5,
        'Grass': 1
    },
    'Electric': {
        'Water': 2,
        'Grass': 1,
        'Electric': 1
    },
    'Ghost': {
        'Ghost': 1,
        'Normal': 0
    },
    'Rock/Ground': {
        'Water': 1,
        'Grass': 0.5,
        'Electric': 1
    },
};

export class Juego {
    constructor() {
        const lanzallamas = new Movimiento('Flamethrower', 40, 'Fire');
        const placaje = new Movimiento('Tackle', 20, 'Normal');
        const hidrobomba = new Movimiento('Hydro Pump', 50, 'Water');
        const latigoCepa = new Movimiento('Vine Whip', 30, 'Grass');
        const hiperrayo = new Movimiento('Hyper Beam', 60, 'Normal');
        const bolaSombra = new Movimiento('Shadow Ball', 45, 'Ghost');
        const puñoFuego = new Movimiento('Fire Punch', 35, 'Fire');
        const trueno = new Movimiento('Thunder', 55, 'Electric');
        const terremoto = new Movimiento('Earthquake', 65, 'Ground');

        this.pokemones = [
            new Pokémon('Charizard', 'Fire', 120, 35, 25, [lanzallamas, placaje]),
            new Pokémon('Blastoise', 'Water', 130, 30, 30, [hidrobomba, placaje]),
            new Pokémon('Venusaur', 'Grass', 150, 28, 35, [latigoCepa, placaje]),
            new Pokémon('Pikachu', 'Electric', 100, 40, 20, [trueno, placaje]),
            new Pokémon('Gengar', 'Ghost', 110, 45, 20, [bolaSombra, placaje]),
            new Pokémon('Dragonite', 'Dragon', 160, 50, 40, [hiperrayo, puñoFuego]),
            new Pokémon('Golem', 'Rock/Ground', 140, 48, 50, [terremoto, placaje])
        ];
    }

    elegirPokemonAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * this.pokemones.length);
        return this.pokemones[indiceAleatorio];
    }

    elegirPokemonesAleatorios(cantidad) {
        const seleccionados = [];
        for (let i = 0; i < cantidad; i++) {
            seleccionados.push(this.elegirPokemonAleatorio());
        }
        return seleccionados;
    }

    iniciar() {
        const pokemonesJugador = this.elegirPokemonesAleatorios(3);
        const pokemonesOponente = this.elegirPokemonesAleatorios(3);

        console.log(`You chose: ${pokemonesJugador.map(p => p.nombre).join(', ')}`);
        console.log(`Your opponent chose: ${pokemonesOponente.map(p => p.nombre).join(', ')}`);

        const batalla = new Batalla(pokemonesJugador, pokemonesOponente);
        batalla.iniciar();
    }
}