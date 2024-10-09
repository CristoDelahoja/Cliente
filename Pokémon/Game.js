import {
    Movimiento
} from './Moves.js';
import {
    Pokémon
} from './Pokémon.js';
import {
    Batalla
} from './Battle.js';

export const tipoVentajas = {
    'Normal': {
        'Fighting': 2,
        'Ghost': 0,
        'Steel': 0.5,
        'Rock': 0.5,
        'Fairy': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Poison': 1,
        'Bug': 1,
        'Psychic': 1,
        'Dragon': 1,
        'Dark': 1,
        'Fairy': 1
    },
    'Fighting': {
        'Normal': 2,
        'Ghost': 0.5,
        'Fairy': 0.5,
        'Rock': 1,
        'Steel': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Poison': 1,
        'Bug': 1,
        'Psychic': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Flying': {
        'Fighting': 1,
        'Bug': 1,
        'Grass': 1,
        'Electric': 0.5,
        'Rock': 0.5,
        'Steel': 1,
        'Fairy': 1,
        'Fire': 1,
        'Water': 1,
        'Ice': 1,
        'Poison': 1,
        'Psychic': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Poison': {
        'Grass': 2,
        'Fairy': 1,
        'Steel': 0,
        'Rock': 1,
        'Fire': 1,
        'Water': 1,
        'Electric': 1,
        'Ice': 1,
        'Bug': 1,
        'Fighting': 1,
        'Ghost': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Ground': {
        'Electric': 2,
        'Fire': 1,
        'Rock': 1,
        'Water': 1,
        'Grass': 0.5,
        'Poison': 1,
        'Steel': 1,
        'Bug': 1,
        'Fighting': 1,
        'Ghost': 1,
        'Flying': 0.5,
        'Fairy': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Rock': {
        'Flying': 2,
        'Bug': 2,
        'Fire': 1,
        'Fighting': 0.5,
        'Ground': 1,
        'Steel': 0.5,
        'Fairy': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Poison': 1,
        'Psychic': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Bug': {
        'Grass': 2,
        'Psychic': 1,
        'Fighting': 0.5,
        'Flying': 0.5,
        'Rock': 0.5,
        'Fairy': 1,
        'Fire': 0.5,
        'Water': 1,
        'Electric': 1,
        'Ice': 1,
        'Poison': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Ghost': {
        'Psychic': 1,
        'Ghost': 2,
        'Normal': 0,
        'Fighting': 1,
        'Rock': 1,
        'Ground': 1,
        'Fairy': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Poison': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Steel': {
        'Fairy': 2,
        'Rock': 1,
        'Ice': 1,
        'Fighting': 0.5,
        'Ground': 1,
        'Fire': 0.5,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Bug': 1,
        'Poison': 1,
        'Ghost': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Fire': {
        'Grass': 2,
        'Bug': 2,
        'Steel': 1,
        'Ice': 1,
        'Rock': 0.5,
        'Water': 0.5,
        'Ground': 1,
        'Flying': 1,
        'Fairy': 1,
        'Poison': 1,
        'Electric': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Water': {
        'Fire': 2,
        'Ground': 1,
        'Rock': 1,
        'Grass': 0.5,
        'Electric': 1,
        'Fairy': 1,
        'Ice': 1,
        'Bug': 1,
        'Fighting': 1,
        'Steel': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Grass': {
        'Water': 2,
        'Rock': 1,
        'Ground': 1,
        'Fire': 0.5,
        'Bug': 0.5,
        'Electric': 1,
        'Poison': 1,
        'Ice': 1,
        'Fighting': 1,
        'Fairy': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Electric': {
        'Water': 2,
        'Flying': 1,
        'Ground': 0.5,
        'Grass': 1,
        'Electric': 1,
        'Fire': 1,
        'Steel': 1,
        'Ice': 1,
        'Bug': 1,
        'Fighting': 1,
        'Ghost': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Psychic': {
        'Fighting': 2,
        'Poison': 1,
        'Steel': 1,
        'Normal': 1,
        'Bug': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Fairy': 1,
        'Ghost': 1,
        'Dragon': 1,
        'Dark': 0.5
    },
    'Ice': {
        'Grass': 2,
        'Flying': 2,
        'Ground': 2,
        'Fire': 0.5,
        'Water': 0.5,
        'Steel': 0.5,
        'Fighting': 1,
        'Fairy': 1,
        'Bug': 1,
        'Electric': 1,
        'Psychic': 1,
        'Ghost': 1,
        'Dragon': 1,
        'Dark': 1
    },
    'Dragon': {
        'Dragon': 2,
        'Fairy': 0.5,
        'Steel': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Bug': 1,
        'Fighting': 1,
        'Ghost': 1,
        'Normal': 1,
        'Dark': 1,
        'Psychic': 1,
        'Poison': 1
    },
    'Dark': {
        'Psychic': 2,
        'Ghost': 2,
        'Fighting': 0.5,
        'Fairy': 0.5,
        'Steel': 1,
        'Normal': 1,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Bug': 1,
        'Ice': 1,
        'Poison': 1,
        'Dragon': 1
    },
    'Fairy': {
        'Fighting': 2,
        'Dark': 2,
        'Dragon': 0.5,
        'Steel': 0.5,
        'Fire': 1,
        'Water': 1,
        'Grass': 1,
        'Electric': 1,
        'Ice': 1,
        'Bug': 1,
        'Poison': 1,
        'Normal': 1,
        'Psychic': 1,
        'Ghost': 1,
        'Dragon': 1
    }
};
export class Juego {
    constructor() {
        const movimientos = [
            new Movimiento('Flamethrower', 40, 'Fire'),
            new Movimiento('Hydro Pump', 50, 'Water'),
            new Movimiento('Vine Whip', 30, 'Grass'),
            new Movimiento('Thunder', 55, 'Electric'),
            new Movimiento('Shadow Ball', 45, 'Ghost'),
            new Movimiento('Fire Punch', 35, 'Fire'),
            new Movimiento('Earthquake', 65, 'Ground'),
            new Movimiento('Hyper Beam', 60, 'Normal'),
            new Movimiento('Ice Beam', 50, 'Ice'),
            new Movimiento('Bug Bite', 30, 'Bug'),
            new Movimiento('Psyshock', 40, 'Psychic'),
            new Movimiento('Fairy Wind', 30, 'Fairy'),
            new Movimiento('Rock Slide', 50, 'Rock'),
            new Movimiento('Poison Fang', 40, 'Poison'),
            new Movimiento('Fighting Spirit', 45, 'Fighting'),
            new Movimiento('Dragon Pulse', 50, 'Dragon'),
            new Movimiento('Fury Cutter', 35, 'Bug'),
            new Movimiento('Ancient Power', 40, 'Rock'),
            new Movimiento('Aqua Tail', 50, 'Water')
        ];

        // Pokémon (18 tipos)
        this.pokemons = [
            new Pokémon('Charizard', 'Fire', 120, 35, 25, [movimientos[0], movimientos[6]]), // Fire
            new Pokémon('Blastoise', 'Water', 130, 30, 30, [movimientos[1], movimientos[18]]), // Water
            new Pokémon('Venusaur', 'Grass', 150, 28, 35, [movimientos[2], movimientos[6]]),
            new Pokémon('Pikachu', 'Electric', 100, 40, 20, [movimientos[3], movimientos[18]]),
            new Pokémon('Gengar', 'Ghost', 110, 45, 20, [movimientos[4], movimientos[18]]), // Ghost
            new Pokémon('Dragonite', 'Dragon', 160, 50, 40, [movimientos[15], movimientos[18]]), // Dragon
            new Pokémon('Golem', 'Rock', 140, 48, 50, [movimientos[12], movimientos[18]]), // Rock
            new Pokémon('Lucario', 'Fighting', 110, 50, 30, [movimientos[13], movimientos[18]]), // Fighting
            new Pokémon('Alakazam', 'Psychic', 90, 40, 25, [movimientos[11], movimientos[18]]),
            new Pokémon('Jolteon', 'Electric', 95, 40, 30, [movimientos[3], movimientos[18]]),
            new Pokémon('Lapras', 'Ice', 130, 35, 30, [movimientos[8], movimientos[1]]),
            new Pokémon('Scyther', 'Bug', 120, 50, 30, [movimientos[9], movimientos[18]]), // Bug
            new Pokémon('Togekiss', 'Fairy', 120, 50, 25, [movimientos[10], movimientos[18]]), // Fairy
            new Pokémon('Machamp', 'Fighting', 130, 55, 35, [movimientos[13], movimientos[18]]), // Fighting
            new Pokémon('Nidoking', 'Poison/Ground', 130, 50, 30, [movimientos[12], movimientos[14]]), // Poison
            new Pokémon('Gardevoir', 'Psychic/Fairy', 95, 45, 30, [movimientos[11], movimientos[10]]),
            new Pokémon('Salamence', 'Dragon', 160, 60, 40, [movimientos[15], movimientos[18]]),
            new Pokémon('Greninja', 'Water/Dark', 110, 45, 25, [movimientos[1], movimientos[14]])
        ];
    }

    elegirPokemonAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * this.pokemones.length);
        return this.pokemons[indiceAleatorio];
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