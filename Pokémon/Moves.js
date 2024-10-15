// Define la clase Movimiento, que representa los movimientos o ataques que un Pokémon puede usar
export class Movimiento {
    // El constructor inicializa el movimiento con un nombre, un valor de daño, y un tipo elemental
    constructor(nombre, daño, tipo) {
        this.nombre = nombre; // Nombre del movimiento (por ejemplo, 'Flamethrower')
        this.daño = daño; // Valor del daño base que inflige el movimiento
        this.tipo = tipo; // Tipo elemental del movimiento (por ejemplo, 'Fire', 'Water')
    }
}