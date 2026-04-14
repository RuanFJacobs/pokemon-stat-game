import pokemonData from "./pokemon-data.js";

const pokemonName = document.getElementById("pokemon-name");
const leftStats = document.getElementById("left-stats");
const rightStats = document.getElementById("right-stats");
const pokemonImage = document.getElementById("pokemon-image");
const statOrder = ["hp", "attack", "defense", "spAttack", "spDefense", "speed"];
const generationButtons = document.querySelectorAll(".gen-btn");
const battleTotalDisplay = document.getElementById("battle-total");
const imageOverlay = document.getElementById("image-overlay");
const playAgainBtn = document.getElementById("play-again-btn");
const resultBanner = document.getElementById("result-banner");

let availablePokemon = [];
let usedStats = [];
let lockedStats = {};
let total = 0;
let currentPokemon = null;
let selectedGeneration = null;

generationButtons.forEach(button => {
    button.addEventListener("click", () => {
        generationButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedGeneration = Number(button.dataset.generation);

        startGame();
    });
});

function getRandomPokemon() {
    if (availablePokemon.length === 0) {
        endGame();
        return;
    }

    hidePlayAgainOverlay();

    const randomIndex = Math.floor(Math.random() * availablePokemon.length);
    currentPokemon = availablePokemon[randomIndex];

    pokemonName.textContent = currentPokemon.name;
    pokemonImage.src = getPokemonImage(currentPokemon.dex);
    pokemonImage.alt = currentPokemon.name;

    renderStatCards();
}

function getPokemonImage(dex) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`;
}

function showPlaceholderImage() {
    pokemonImage.src = "images/placeholder.png";
    pokemonImage.alt = "Placeholder image";
}

function formatStatName(stat) {
    if (stat === "hp") return "HP";
    if (stat === "spAttack") return "Sp. Attack";
    if (stat === "spDefense") return "Sp. Defense";

    return stat.charAt(0).toUpperCase() + stat.slice(1);
}

function renderStatCards() {
    leftStats.innerHTML = "";
    rightStats.innerHTML = "";

    statOrder.forEach((stat, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.classList.add("stat-card");

        const statName = document.createElement("span");
        statName.classList.add("stat-name");
        statName.textContent = formatStatName(stat);

        const statValue = document.createElement("span");
        statValue.classList.add("stat-value");

        if (lockedStats[stat] !== undefined) {
            const value = lockedStats[stat];

            card.classList.add("selected");
            card.disabled = true;

            statValue.textContent = value;

            const percent = Math.min((value / 160) * 100, 100);

            card.style.setProperty("--stat-fill", percent + "%");
        } else {
            statValue.textContent = "";
            card.addEventListener("click", () => chooseStat(stat));
        }

        card.appendChild(statName);
        card.appendChild(statValue);

        if (index < 3) {
            leftStats.appendChild(card);
        } else {
            rightStats.appendChild(card);
        }
    });
}

function chooseStat(stat) {
    if (lockedStats[stat] !== undefined) return;

    const value = currentPokemon.stats[stat];

    usedStats.push(stat);
    lockedStats[stat] = value;
    total += value;

    battleTotalDisplay.textContent = total;
    renderStatCards();

    availablePokemon = availablePokemon.filter(
        pokemon => pokemon.name !== currentPokemon.name
    );
    if (usedStats.length === 6) {
        setTimeout(() => {
            endGame();
        }, 900);
        return;
    }
    setTimeout(() => {
        getRandomPokemon();
    }, 900);
}

function showPlayAgainOverlay() {
    imageOverlay.classList.remove("hidden");
}

function hidePlayAgainOverlay() {
    imageOverlay.classList.add("hidden");
}

function startGame() {
    availablePokemon = pokemonData.filter(
        pokemon => pokemon.generation === selectedGeneration
    );
    usedStats = [];
    lockedStats = {};
    total = 0;
    currentPokemon = null;

    battleTotalDisplay.textContent = "0";
    resultBanner.textContent = "";
    resultBanner.className = "result-banner";

    hidePlayAgainOverlay();
    getRandomPokemon();
}

function endGame() {
    pokemonName.textContent = "Finished!";
    showPlaceholderImage();

    if (total >= 600) {
        resultBanner.textContent = `You Win! Total: ${total}`;
        resultBanner.className = "result-banner win";
    } else {
        resultBanner.textContent = `You Lose! Total: ${total}`;
        resultBanner.className = "result-banner lose";
    }

    showPlayAgainOverlay();
}

showPlaceholderImage();

playAgainBtn.addEventListener("click", () => {
    if (selectedGeneration) {
        startGame();
    }
});