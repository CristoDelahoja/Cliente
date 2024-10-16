class SaludoUsuario {
    constructor(nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.fechaHoraActual = new Date();
    }

    mostrarSaludo() {
        const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const fechaHoraFormateada = this.fechaHoraActual.toLocaleString('es-ES', opciones);
        console.log(`¡Hola, ${this.nombreUsuario}! La fecha y hora actuales son: ${fechaHoraFormateada}`);
    }
}

const usuario = new SaludoUsuario('Cristóbal');
usuario.mostrarSaludo();
