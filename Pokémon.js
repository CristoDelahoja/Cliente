const readlineSync = require('readline-sync');

// Clase Move que representa los movimientos de un Pokémon
class Move {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

// Clase Pokemon que contiene los atributos del Pokémon
class Pokemon {
    constructor(name, type, hp, attack, defense, moves) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.hpMax = hp;
        this.attack = attack;
        this.defense = defense;
        this.moves = moves;
        this.healed = false; // Para rastrear si el Pokémon ya se curó
    }

    // Método para atacar a otro Pokémon
    attackOpponent(opponent, move) {
        const damage = this.calculateDamage(move, opponent);
        opponent.hp -= damage;
        console.log(`${this.name} usó ${move.name} e infligió ${damage.toFixed(2)} de daño a ${opponent.name}!`);
        if (opponent.hp <= 0) {
            console.log(`${opponent.name} ha sido derrotado!`);
        }
    }

    // Método para calcular el daño de un ataque
    calculateDamage(move, opponent) {
        const randomFactor = Math.random() * (1.0 - 0.85) + 0.85; // Factor aleatorio entre 0.85 y 1.0
        return ((this.attack / opponent.defense) * move.damage) * randomFactor;
    }

    // Método para curarse
    heal() {
        if (!this.healed) {
            const healAmount = this.hpMax * 0.5;
            this.hp = Math.min(this.hp + healAmount, this.hpMax); // No puede curarse por encima de su HP máximo
            this.healed = true;
            console.log(`${this.name} se ha curado y recupera ${healAmount.toFixed(2)} HP!`);
        } else {
            console.log(`${this.name} ya no puede curarse.`);
        }
    }

    // Método para verificar si el Pokémon está derrotado
    isDefeated() {
        return this.hp <= 0;
    }
}

// Clase Battle que controla la lógica del combate
class Battle {
    constructor(playerPokemon, opponentPokemon) {
        this.playerPokemon = playerPokemon;
        this.opponentPokemon = opponentPokemon;
        this.turn = 'player'; // Controla de quién es el turno
    }

    // Método para iniciar el combate
    start() {
        console.log('¡El combate ha comenzado!');

        // Bucle del combate
        while (!this.playerPokemon.isDefeated() && !this.opponentPokemon.isDefeated()) {
            if (this.turn === 'player') {
                this.playerTurn();
            } else {
                this.opponentTurn();
            }
        }

        if (this.playerPokemon.isDefeated()) {
            console.log('¡Tu Pokémon ha sido derrotado! La máquina gana.');
        } else {
            console.log('¡Has ganado el combate!');
        }
    }

    // Turno del jugador
    playerTurn() {
        console.log(`\nEs el turno de ${this.playerPokemon.name}.`);
        console.log(`Tu HP: ${this.playerPokemon.hp.toFixed(2)}`);
        console.log(`HP del oponente: ${this.opponentPokemon.hp.toFixed(2)}`);

        const options = ['Atacar', 'Curarse'];
        const action = readlineSync.keyInSelect(options, '¿Qué deseas hacer?');

        if (action === 0) {
            this.playerAttack();
        } else if (action === 1) {
            this.playerHeal();
        }

        if (!this.opponentPokemon.isDefeated()) {
            this.turn = 'opponent';
        }
    }

    // Método para el ataque del jugador
    playerAttack() {
        const moveIndex = readlineSync.keyInSelect(this.playerPokemon.moves.map(move => move.name), 'Elige un movimiento:');
        if (moveIndex >= 0) {
            const move = this.playerPokemon.moves[moveIndex];
            this.playerPokemon.attackOpponent(this.opponentPokemon, move);
        }
    }

    // Método para la curación del jugador
    playerHeal() {
        this.playerPokemon.heal();
    }

    // Turno de la máquina
    opponentTurn() {
        console.log(`\nEs el turno de ${this.opponentPokemon.name}.`);
        const action = Math.random() < 0.5 ? 'attack' : 'heal'; // La IA elige aleatoriamente

        if (action === 'attack') {
            const move = this.opponentPokemon.moves[Math.floor(Math.random() * this.opponentPokemon.moves.length)];
            this.opponentPokemon.attackOpponent(this.playerPokemon, move);
        } else {
            this.opponentPokemon.heal();
        }

        if (!this.playerPokemon.isDefeated()) {
            this.turn = 'player';
        }
    }
}

// Clase Game que maneja el flujo general del juego
class Game {
    constructor() {
        // Crear movimientos
        const flamethrower = new Move('Lanzallamas', 40);
        const tackle = new Move('Placaje', 20);
        const hydroPump = new Move('Hidrobomba', 50);
        const vineWhip = new Move('Látigo Cepa', 30);

        // Crear Pokémon
        this.playerPokemon = new Pokemon('Charizard', 'Fuego', 120, 35, 25, [flamethrower, tackle]);
        this.opponentPokemon = new Pokemon('Blastoise', 'Agua', 130, 30, 30, [hydroPump, tackle]);
    }

    // Método para iniciar el juego
    start() {
        const battle = new Battle(this.playerPokemon, this.opponentPokemon);
        battle.start();
    }
}

// Iniciar el juego
const game = new Game();
game.start();