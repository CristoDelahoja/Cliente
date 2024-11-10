function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
}

// Obtener los Pokémon desde las cookies
let playerPokemon = getCookie("selectedPokemon");
let opponentPokemon = getCookie("opponentPokemon");

// Que salga shiny o no con un 50% de probabilidad
playerPokemon.isShiny = Math.random() < 0.5;
opponentPokemon.isShiny = Math.random() < 0.5;

// Ajustar la imagen en función de si son shiny
if (playerPokemon.isShiny) {
    playerPokemon.img = playerPokemon.img.replace("normal", "shiny");
}
if (opponentPokemon.isShiny) {
    opponentPokemon.img = opponentPokemon.img.replace("normal", "shiny");
}

// Inicializar el HP actual
playerPokemon.currentHP = playerPokemon.hp;
opponentPokemon.currentHP = opponentPokemon.hp;

let isPlayerTurn = true;
let isDefending = false; // Variable para saber si el jugador está defendiendo

function updateStats() {
    // Función para obtener el color según el porcentaje de vida
    function getHealthColor(percentage) {
        if (percentage <= 0) {
            return '#000000'; // Negro si la vida es 0 o menor
        } else if (percentage >= 51) {
            return '#00ff00'; // Verde
        } else if (percentage >= 11) {
            return '#ffa500'; // Naranja
        } else {
            return '#ff0000'; // Rojo
        }
    }

    // Actualiza las estadísticas del jugador
    document.getElementById("player-stats").innerHTML = `
        <h2 class="${playerPokemon.isShiny ? 'shiny' : ''}">${playerPokemon.name}</h2>
        <img src="${playerPokemon.img}" alt="${playerPokemon.name}">
        <p>HP: ${playerPokemon.currentHP} / ${playerPokemon.hp}</p>
        <div class="hp-bar" id="player-hp-bar">
            <div class="hp-bar-inner" style="width: ${(playerPokemon.currentHP / playerPokemon.hp) * 100}%; background-color: ${getHealthColor((playerPokemon.currentHP / playerPokemon.hp) * 100)};"></div>
        </div>
    `;

    // Actualiza las estadísticas del oponente
    document.getElementById("opponent-stats").innerHTML = `
        <h2 class="${opponentPokemon.isShiny ? 'shiny' : ''}">${opponentPokemon.name}</h2>
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
        <p>HP: ${opponentPokemon.currentHP} / ${opponentPokemon.hp}</p>
        <div class="hp-bar" id="opponent-hp-bar">
            <div class="hp-bar-inner" style="width: ${(opponentPokemon.currentHP / opponentPokemon.hp) * 100}%; background-color: ${getHealthColor((opponentPokemon.currentHP / opponentPokemon.hp) * 100)};"></div>
        </div>
    `;
}

function calculateDamage(attacker, defender) {
    // Calcula el daño base
    const baseDamage = attacker.attack - defender.defense;

    // Si el daño es 0 o menos, hace que el daño sea al menos 1
    const finalBaseDamage = Math.max(baseDamage, 1);

    // Calcula un multiplicador aleatorio para que el daño aumente
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
    // Curar el Pokémon, sumando 20 puntos de HP
    const healAmount = 20;
    playerPokemon.currentHP = Math.min(playerPokemon.currentHP + healAmount, playerPokemon.hp);
    document.getElementById("battle-log").innerHTML += `<p>${playerPokemon.name} se cura ${healAmount} HP!</p>`;
    isPlayerTurn = false;
    checkEndCondition();
    setTimeout(opponentTurn, 1000);
    updateStats();
}

function defendPokemon() {
    // Hace que el jugador se defienda y sufra menos daño
    isDefending = true;
    document.getElementById("battle-log").innerHTML += `<p>${playerPokemon.name} está defendiendo!</p>`;
    isPlayerTurn = false;
    checkEndCondition();
    setTimeout(opponentTurn, 1000);
    updateStats();
}

function checkEndCondition() {
    if (playerPokemon.currentHP <= 0 || opponentPokemon.currentHP <= 0) {
        // Desactivar botones de ataque, defensa y curación
        document.getElementById("attack-button").disabled = true;
        document.getElementById("defend-button").disabled = true;
        document.getElementById("heal-button").disabled = true;

        // Mostrar el mensaje de victoria o derrota
        document.getElementById("battle-log").innerHTML += playerPokemon.currentHP <= 0 ?
            "<p>Has perdido</p>" :
            "<p>Has ganado</p>";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Reproducir la música de combate
    const battleMusic = document.getElementById("battle-music");

    // Intentar reproducir la música cuando la página cargue
    battleMusic.play().catch(error => {
        console.log("No se pudo reproducir la música automáticamente: ", error);
    });

    // Actualizar las estadísticas de los Pokémon
    updateStats();

    // Configuración de los botones
    document.getElementById("attack-button").onclick = playerTurn;
    document.getElementById("defend-button").onclick = defendPokemon;
    document.getElementById("heal-button").onclick = healPokemon;

    // Control del botón de música (pausar/reanudar)
    document.getElementById("music-toggle").addEventListener("click", function () {
        if (battleMusic.paused) {
            battleMusic.play();
            this.textContent = "Pausar Música";
        } else {
            battleMusic.pause();
            this.textContent = "Reanudar Música";
        }
    });
});
