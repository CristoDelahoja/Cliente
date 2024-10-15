import { tipoVentajas } from './Game.js';

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
        this.nivel = Math.floor(Math.random() * 10) + 1;
        this.hp += this.nivel * 5;
        this.hpMax += this.nivel * 5;
        this.ataque += this.nivel; 
        this.defensa += this.nivel;
    }

    atacar(oponente, movimiento) {
        if (Math.random() < 0.1) {
            console.log(`${this.nombre} missed the attack!`);
            return;
        }
        const daño = this.calcularDaño(movimiento, oponente);
        oponente.hp -= daño;
        console.log(`${this.nombre} used ${movimiento.nombre} and dealt ${daño.toFixed(2)} damage to ${oponente.nombre}!`);
        if (oponente.hp <= 0) {
            console.log(`${oponente.nombre} has been defeated!`);
        }
    }

    calcularDaño(movimiento, oponente) {
        const factorAleatorio = Math.random() * (1.0 - 0.85) + 0.85;
        const ventajaTipo = tipoVentajas[movimiento.tipo]?.[oponente.tipo] ?? 1;
        return (((this.ataque * this.nivel) / (oponente.defensa * oponente.nivel)) * movimiento.daño * ventajaTipo) * factorAleatorio;
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
