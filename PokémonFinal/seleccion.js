import {
    pokemons
} from './pokemons.js';

function setCookie(name, value) {
    document.cookie = `${name}=${JSON.stringify(value)}; path=/`;
}

function displayPokemons() {
    const pokemonList = document.getElementById("pokemon-list");
    pokemons.forEach(pokemon => {
        const pokemonItem = document.createElement("div");
        pokemonItem.className = "pokemon-item";
        // HTML interno
        pokemonItem.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>Tipos: ${pokemon.types.join(", ")}</p>
            <p>HP: ${pokemon.hp}, Ataque: ${pokemon.attack}, Defensa: ${pokemon.defense}</p>
            <button onclick="selectPokemon(${pokemon.id})">Seleccionar</button>
        `;
        pokemonList.appendChild(pokemonItem);
    });
}

window.selectPokemon = function (id) {
    const selectedPokemon = pokemons.find(p => p.id === id);
    setCookie("selectedPokemon", selectedPokemon);

    const randomOpponent = pokemons[Math.floor(Math.random() * pokemons.length)];
    setCookie("opponentPokemon", randomOpponent);

    window.location.href = "vs.html"; // Redirige a la pantalla VS
};

document.addEventListener("DOMContentLoaded", displayPokemons);