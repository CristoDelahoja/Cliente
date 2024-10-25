document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id, nombre, precio) {
    const carrito = obtenerCarrito();

    if (carrito[id]) {
        carrito[id].cantidad += 1;
    } else {
        carrito[id] = {
            nombre,
            precio,
            cantidad: 1
        };
    }

    guardarCarrito(carrito);
    mostrarCarrito();
}

function eliminarDelCarrito(id) {
    const carrito = obtenerCarrito();
    if (carrito[id]) {
        delete carrito[id];
    }

    guardarCarrito(carrito);
    mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = "";

    const carrito = obtenerCarrito();
    let totalCarrito = 0;

    for (const id in carrito) {
        const item = carrito[id];
        const totalProducto = item.precio * item.cantidad;
        totalCarrito += totalProducto;

        const li = document.createElement("li");
        li.textContent = `${item.nombre} - €${item.precio} x ${item.cantidad} = €${totalProducto}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(id);

        li.appendChild(botonEliminar);
        carritoLista.appendChild(li);
    }

    let totalElement = document.getElementById("total-carrito");
    if (!totalElement) {
        totalElement = document.createElement("p");
        totalElement.id = "total-carrito";
        carritoLista.parentElement.appendChild(totalElement);
    }
    totalElement.textContent = `Total del carrito: €${totalCarrito}`;
}