function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
}

let playerPokemon = getCookie("selectedPokemon");
let opponentPokemon = getCookie("opponentPokemon");

playerPokemon.currentHP = playerPokemon.hp;
opponentPokemon.currentHP = opponentPokemon.hp;

let isPlayerTurn = true;
let isDefending = false; // Variable para saber si el jugador está defendiendo

function updateStats() {
    document.getElementById("player-stats").innerHTML = `
        <h2>${playerPokemon.name}</h2>
        <img src="${playerPokemon.img}" alt="${playerPokemon.name}">
        <p>HP: ${playerPokemon.currentHP} / ${playerPokemon.hp}</p>
    `;
    document.getElementById("opponent-stats").innerHTML = `
        <h2>${opponentPokemon.name}</h2>
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
        <p>HP: ${opponentPokemon.currentHP} / ${opponentPokemon.hp}</p>
    `;
}

/**
 * Calcula el daño causado por un ataque.
 * @param {Object} attacker El objeto que contiene la información del atacante (Pokémon).
 * @param {Object} defender El objeto que contiene la información del defensor (Pokémon).
 * @returns {number} El daño causado.
 */
function calculateDamage(attacker, defender) {
    // Calcula el daño base
    const baseDamage = attacker.attack - defender.defense;

    // Si el daño es 0 o negativo, asegúrate de que al menos sea 1
    const finalBaseDamage = Math.max(baseDamage, 1);

    // Calcula un multiplicador aleatorio para dar variabilidad al daño (por ejemplo, entre 1 y 1.5)
    const damageMultiplier = 1 + Math.random() * 0.5; // Aleatorio entre 1 y 1.5

    // Calcula el daño final
    const finalDamage = Math.floor(finalBaseDamage * damageMultiplier);

    return finalDamage;
}

function playerTurn() {
    const damage = calculateDamage(playerPokemon, opponentPokemon);
    opponentPokemon.currentHP -= damage;
    document.getElementById("battle-log").innerHTML += `<p>${playerPokemon.name} causa ${damage} de daño!</p>`;
    isPlayerTurn = false;
    checkEndCondition();
    setTimeout(opponentTurn, 1000);
    updateStats();
}

function opponentTurn() {
    const damage = calculateDamage(opponentPokemon, playerPokemon);
    playerPokemon.currentHP -= damage;
    document.getElementById("battle-log").innerHTML += `<p>${opponentPokemon.name} causa ${damage} de daño!</p>`;
    isPlayerTurn = true;
    checkEndCondition();
    updateStats();
}

function healPokemon() {
    // Curar el Pokémon, añadiendo 20 puntos de HP
    const healAmount = 20;
    playerPokemon.currentHP = Math.min(playerPokemon.currentHP + healAmount, playerPokemon.hp);
    document.getElementById("battle-log").innerHTML += `<p>${playerPokemon.name} se cura ${healAmount} HP!</p>`;
    isPlayerTurn = false;
    checkEndCondition();
    setTimeout(opponentTurn, 1000);
    updateStats();
}

function defendPokemon() {
    // Hacer que el jugador se defienda y sufra menos daño
    isDefending = true;
    document.getElementById("battle-log").innerHTML += `<p>${playerPokemon.name} está defendiendo!</p>`;
    isPlayerTurn = false;
    checkEndCondition();
    setTimeout(opponentTurn, 1000);
    updateStats();
}

function checkEndCondition() {
    if (playerPokemon.currentHP <= 0 || opponentPokemon.currentHP <= 0) {
        document.getElementById("attack-button").disabled = true;
        document.getElementById("battle-log").innerHTML += playerPokemon.currentHP <= 0 ?
            "<p>Has perdido</p>" :
            "<p>Has ganado</p>";
    }
}

// Eventos para los botones de acción
document.addEventListener("DOMContentLoaded", function () {
    updateStats();

    document.getElementById("attack-button").onclick = playerTurn;
    document.getElementById("defend-button").onclick = defendPokemon;
    document.getElementById("heal-button").onclick = healPokemon;
});