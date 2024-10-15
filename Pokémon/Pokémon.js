// Importa las ventajas de tipo desde el archivo Game.js, que se usan para calcular el daño basado en afinidades
import {
    tipoVentajas
} from './Game.js';

// Define la clase Pokémon, que representa a un Pokémon en la batalla
export class Pokémon {
    // El constructor inicializa un Pokémon con nombre, tipo, puntos de vida (hp), ataque, defensa y movimientos
    constructor(nombre, tipo, hp, ataque, defensa, movimientos) {
        this.nombre = nombre; // Nombre del Pokémon
        this.tipo = tipo; // Tipo elemental del Pokémon (por ejemplo, 'Fire', 'Water')
        this.hp = hp; // Puntos de vida actuales del Pokémon
        this.hpMax = hp; // Puntos de vida máximos, se guarda el valor inicial
        this.ataque = ataque; // Valor de ataque del Pokémon
        this.defensa = defensa; // Valor de defensa del Pokémon
        this.movimientos = movimientos; // Lista de movimientos que el Pokémon puede usar
        this.curado = false; // Controla si el Pokémon ya se ha curado durante la batalla
        this.nivel = Math.floor(Math.random() * 10) + 1; // Asigna un nivel aleatorio entre 1 y 10
        this.hp += this.nivel * 5; // Incrementa los puntos de vida según el nivel
        this.hpMax += this.nivel * 5; // Ajusta los puntos de vida máximos también
        this.ataque += this.nivel; // Incrementa el ataque basado en el nivel
        this.defensa += this.nivel; // Incrementa la defensa basado en el nivel
    }

    // Método que ejecuta un ataque contra un oponente usando un movimiento específico
    atacar(oponente, movimiento) {
        // Existe una probabilidad del 10% de que el ataque falle
        if (Math.random() < 0.1) {
            console.log(`${this.nombre} missed the attack!`);
            return;
        }
        // Calcula el daño infligido y reduce el HP del oponente
        const daño = this.calcularDaño(movimiento, oponente);
        oponente.hp -= daño;
        console.log(`${this.nombre} used ${movimiento.nombre} and dealt ${daño.toFixed(2)} damage to ${oponente.nombre}!`);
        // Si el HP del oponente es menor o igual a 0, se considera derrotado
        if (oponente.hp <= 0) {
            console.log(`${oponente.nombre} has been defeated!`);
        }
    }

    // Método que calcula el daño infligido a un oponente, considerando el tipo y un factor aleatorio
    calcularDaño(movimiento, oponente) {
        // Factor aleatorio para variación del daño (entre 0.85 y 1.0)
        const factorAleatorio = Math.random() * (1.0 - 0.85) + 0.85;
        // Obtiene la ventaja de tipo comparando el tipo del movimiento y el tipo del oponente
        const ventajaTipo = tipoVentajas[movimiento.tipo]?.[oponente.tipo] ?? 1;
        // Fórmula para calcular el daño basado en ataque, defensa, nivel, daño del movimiento y ventaja de tipo
        return (((this.ataque * this.nivel) / (oponente.defensa * oponente.nivel)) * movimiento.daño * ventajaTipo) * factorAleatorio;
    }

    // Método para curar al Pokémon, solo puede curarse una vez por batalla
    curarse() {
        if (!this.curado) {
            const cantidadCura = this.hpMax * 0.5; // Cura el 50% de los puntos de vida máximos
            this.hp = Math.min(this.hp + cantidadCura, this.hpMax); // Asegura que no se supere el HP máximo
            this.curado = true; // Marca al Pokémon como curado
            console.log(`${this.nombre} healed and recovered ${cantidadCura.toFixed(2)} HP!`);
        } else {
            console.log(`${this.nombre} can no longer heal.`); // Mensaje si ya se ha curado antes
        }
    }

    // Método que verifica si el Pokémon está derrotado (si su HP es 0 o menor)
    estaDerrotado() {
        return this.hp <= 0;
    }
}