function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
}

const playerPokemon = getCookie("selectedPokemon");
const opponentPokemon = getCookie("opponentPokemon");

function displayVS() {
    // HTML interno
    document.getElementById("player").innerHTML = `
        <h2>${playerPokemon.name}</h2>
        <img src="${playerPokemon.img}" alt="${playerPokemon.name}">
        <p>Tipos: ${playerPokemon.types.join(", ")}</p>
    `;
    document.getElementById("opponent").innerHTML = `
        <h2>${opponentPokemon.name}</h2>
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
        <p>Tipos: ${opponentPokemon.types.join(", ")}</p>
    `;
}

window.startBattle = function () {
    window.location.href = "combate.html"; // Redirige a la pantalla de combate
};

document.addEventListener("DOMContentLoaded", displayVS);