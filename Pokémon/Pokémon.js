export class Pokémon {
    constructor(nombre, tipo, hp, ataque, defensa, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hp = hp;
        this.hpMax = hp;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.curado = false;
    }

    atacar(oponente, movimiento) {
        const daño = this.calcularDaño(movimiento, oponente);
        oponente.hp -= daño;
        console.log(`${this.nombre} used ${movimiento.nombre} and dealt ${daño.toFixed(2)} damage to ${oponente.nombre}!`);
        if (oponente.hp <= 0) {
            console.log(`${oponente.nombre} has been defeated!`);
        }
    }

    calcularDaño(movimiento, oponente) {
        const factorAleatorio = Math.random() * (1.0 - 0.85) + 0.85;
        return ((this.ataque / oponente.defensa) * movimiento.daño) * factorAleatorio;
    }

    curarse() {
        if (!this.curado) {
            const cantidadCura = this.hpMax * 0.5;
            this.hp = Math.min(this.hp + cantidadCura, this.hpMax);
            this.curado = true;
            console.log(`${this.nombre} healed and recovered ${cantidadCura.toFixed(2)} HP!`);
        } else {
            console.log(`${this.nombre} can no longer heal.`);
        }
    }

    estaDerrotado() {
        return this.hp <= 0;
    }
}