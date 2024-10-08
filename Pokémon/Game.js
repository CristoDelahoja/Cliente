import { Movimiento } from './Moves.js';
import { Pokemon } from './Pokémon.js';
import { Batalla } from './Battle.js';

export class Juego {
    constructor() {
        const lanzallamas = new Movimiento('Flamethrower', 40);
        const placaje = new Movimiento('Tackle', 20);
        const hidrobomba = new Movimiento('Hydro Pump', 50);
        const latigoCepa = new Movimiento('Vine Whip', 30);
        const hiperrayo = new Movimiento('Hyper Beam', 60);
        const bolaSombra = new Movimiento('Shadow Ball', 45);
        const puñoFuego = new Movimiento('Fire Punch', 35);
        const trueno = new Movimiento('Thunder', 55);
        const terremoto = new Movimiento('Earthquake', 65);

        this.pokemones = [
            new Pokemon('Charizard', 'Fire', 120, 35, 25, [lanzallamas, placaje]),
            new Pokemon('Blastoise', 'Water', 130, 30, 30, [hidrobomba, placaje]),
            new Pokemon('Venusaur', 'Grass', 150, 28, 35, [latigoCepa, placaje]),
            new Pokemon('Pikachu', 'Electric', 100, 40, 20, [trueno, placaje]),
            new Pokemon('Gengar', 'Ghost', 110, 45, 20, [bolaSombra, placaje]),
            new Pokemon('Dragonite', 'Dragon', 160, 50, 40, [hiperrayo, puñoFuego]),
            new Pokemon('Golem', 'Rock/Ground', 140, 48, 50, [terremoto, placaje])
        ];
    }

    elegirPokemonAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * this.pokemones.length);
        return this.pokemones[indiceAleatorio];
    }

    iniciar() {
        const pokemonJugador = this.elegirPokemonAleatorio();
        const pokemonOponente = this.elegirPokemonAleatorio();

        console.log(`You chose ${pokemonJugador.nombre}`);
        console.log(`Your opponent chose ${pokemonOponente.nombre}`);

        const batalla = new Batalla(pokemonJugador, pokemonOponente);
        batalla.iniciar();
    }
}
