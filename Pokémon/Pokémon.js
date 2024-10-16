// Importa el objeto tipoVentajas que contiene las ventajas de tipo entre Pokémon.
import { tipoVentajas } from './Game.js';

// Clase que representa a un Pokémon.
export class Pokémon {
    // Constructor que inicializa las propiedades del Pokémon.
    constructor(nombre, tipo, hp, ataque, defensa, movimientos) {
        this.nombre = nombre; // Nombre del Pokémon.
        this.tipo = tipo; // Tipo del Pokémon (por ejemplo, Fuego, Agua, etc.).
        this.hp = hp; // HP actual del Pokémon.
        this.hpMax = hp; // HP máximo del Pokémon.
        this.ataque = ataque; // Valor de ataque del Pokémon.
        this.defensa = defensa; // Valor de defensa del Pokémon.
        this.movimientos = movimientos; // Lista de movimientos que puede usar el Pokémon.
        this.curado = false; // Indica si el Pokémon ya se ha curado (para limitar una sola curación).

        // Asigna un nivel aleatorio entre 1 y 10 al Pokémon.
        this.nivel = Math.floor(Math.random() * 10) + 1;

        // Aumenta el HP, HP máximo, ataque y defensa según el nivel del Pokémon.
        this.hp += this.nivel * 5;
        this.hpMax += this.nivel * 5;
        this.ataque += this.nivel;
        this.defensa += this.nivel;
    }

    // Método que permite al Pokémon atacar a otro Pokémon utilizando un movimiento.
    atacar(oponente, movimiento) {
        // 10% de probabilidad de fallar el ataque.
        if (Math.random() < 0.1) {
            console.log(`${this.nombre} missed the attack!`); // Mensaje si el ataque falla.
            return; // Salir del método si el ataque falla.
        }

        // Calcula el daño que se inflige al oponente.
        const daño = this.calcularDaño(movimiento, oponente);

        // Resta el daño al HP del oponente.
        oponente.hp -= daño;

        // Mensaje que indica el daño infligido.
        console.log(`${this.nombre} used ${movimiento.nombre} and dealt ${daño.toFixed(2)} damage to ${oponente.nombre}!`);
    }

    // Método para calcular el daño que inflige un movimiento al oponente.
    calcularDaño(movimiento, oponente) {
        // Factor aleatorio para variar el daño entre un 85% y 100%.
        const factorAleatorio = Math.random() * (1.0 - 0.85) + 0.85;

        // Obtiene la ventaja de tipo entre el movimiento y el tipo del oponente.
        const ventajaTipo = tipoVentajas[movimiento.tipo]?.[oponente.tipo] ?? 1;

        // Fórmula para calcular el daño total, incluyendo ataque, defensa y ventaja de tipo.
        return (((this.ataque * this.nivel) / (oponente.defensa * oponente.nivel)) * movimiento.daño * ventajaTipo) * factorAleatorio;
    }

    // Método que permite al Pokémon curarse una vez.
    curarse() {
        // Verifica si el Pokémon no se ha curado anteriormente.
        if (!this.curado) {
            // Calcula la cantidad de HP que se recupera.
            const cantidadCura = this.hpMax * 0.5;

            // Aumenta el HP del Pokémon sin exceder el máximo.
            this.hp = Math.min(this.hp + cantidadCura, this.hpMax);

            // Marca al Pokémon como curado.
            this.curado = true;

            // Mensaje que indica cuánto HP se recuperó.
            console.log(`${this.nombre} healed and recovered ${cantidadCura.toFixed(2)} HP!`);
        } else {
            // Mensaje si el Pokémon ya no puede curarse.
            console.log(`${this.nombre} can no longer heal.`);
        }
    }

    // Método para verificar si el Pokémon está derrotado.
    estaDerrotado() {
        return this.hp <= 0; // Devuelve true si el HP es menor o igual a 0.
    }
}
