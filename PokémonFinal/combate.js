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

function calculateDamage(attacker, defender) {
    return Math.max(attacker.attack - defender.defense, 1);
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

function checkEndCondition() {
    if (playerPokemon.currentHP <= 0 || opponentPokemon.currentHP <= 0) {
        document.getElementById("attack-button").disabled = true;
        document.getElementById("battle-log").innerHTML += playerPokemon.currentHP <= 0 
            ? "<p>Has perdido</p>" 
            : "<p>Has ganado</p>";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateStats();
    document.getElementById("attack-button").onclick = playerTurn;
});
