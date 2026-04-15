import pokemonData from "./pokemon-data.js";

const pokemonName = document.getElementById("pokemon-name");
const leftStats = document.getElementById("left-stats");
const rightStats = document.getElementById("right-stats");
const pokemonImage = document.getElementById("pokemon-image");
const statOrder = ["hp", "attack", "defense", "spAttack", "spDefense", "speed"];
const generationButtons = document.querySelectorAll(".gen-btn");
const battleTotalDisplay = document.getElementById("battle-total");
const playAgainBtn = document.getElementById("play-again-btn");
const resultBanner = document.getElementById("result-banner");
const bestOutcome = document.getElementById("best-outcome");
const bestOutcomeList = document.getElementById("best-outcome-list");
const battleLayout = document.getElementById("battle-layout");
const resultScreen = document.getElementById("result-screen");
const playerTotal = document.getElementById("player-total");
const playerChoiceList = document.getElementById("player-choice-list");

let availablePokemon = [];
let usedStats = [];
let lockedStats = {};
let total = 0;
let currentPokemon = null;
let selectedGeneration = null;
let runPokemon = [];
let playerChoices = [];

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

    const randomIndex = Math.floor(Math.random() * availablePokemon.length);
    currentPokemon = availablePokemon[randomIndex];

    runPokemon.push(currentPokemon);

    pokemonName.textContent = formatPokemonName(currentPokemon.name);
    pokemonImage.src = getPokemonImage(currentPokemon.dex);
    pokemonImage.alt = currentPokemon.name;

    renderStatCards();
}

function formatPokemonName(name) {
    const specialNames = {
        "mr-mime": "Mr. Mime",
        "mime-jr": "Mime Jr.",
        "mr-rime": "Mr. Rime",
        "ho-oh": "Ho-Oh",
        "farfetchd": "Farfetch’d",
        "sirfetchd": "Sirfetch’d",
        "nidoran-f": "Nidoran♀",
        "nidoran-m": "Nidoran♂",
        "porygon-z": "Porygon-Z",
        "type-null": "Type: Null",
        "jangmo-o": "Jangmo-o",
        "hakamo-o": "Hakamo-o",
        "kommo-o": "Kommo-o",
        "wo-chien": "Wo-Chien",
        "chien-pao": "Chien-Pao",
        "ting-lu": "Ting-Lu",
        "chi-yu": "Chi-Yu"
    };

    if (specialNames[name]) {
        return specialNames[name];
    }

    const formSuffixes = [
        "average",
        "small",
        "large",
        "super",
        "male",
        "female",
        "altered",
        "origin",
        "land",
        "sky",
        "incarnate",
        "therian",
        "ordinary",
        "resolute",
        "aria",
        "pirouette",
        "shield",
        "blade",
        "amped",
        "lowkey"
    ];

    const cleanedParts = name
        .split("-")
        .filter(part => !formSuffixes.includes(part));

    return cleanedParts
        .map(part => {
            if (part.length === 1) {
                return part.toUpperCase();
            }

            if (/^\d+$/.test(part)) {
                return part;
            }

            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join(" ");
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

    playerChoices.push({
        dex: currentPokemon.dex,
        name: currentPokemon.name,
        stat,
        value
    });

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

function startGame() {
    availablePokemon = pokemonData.filter(
        pokemon => pokemon.generation === selectedGeneration
    );
    usedStats = [];
    lockedStats = {};
    total = 0;
    currentPokemon = null;
    runPokemon = [];
    playerChoices = [];

    battleTotalDisplay.textContent = "0";
    hideResultScreen();
    getRandomPokemon();
}

function getBestPossibleOutcome(pokemonList) {
    const stats = ["hp", "attack", "defense", "spAttack", "spDefense", "speed"];

    let bestTotal = 0;
    let bestChoice = [];

    function permute(arr) {
        if (arr.length === 0) {
            return [[]];
        }

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const permutations = permute(remaining);

            for (const perm of permutations) {
                result.push([current, ...perm]);
            }
        }

        return result;
    }

    const statPermutations = permute(stats);

    for (const permutation of statPermutations) {
        let total = 0;
        const choices = [];

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            const stat = permutation[i];
            const value = pokemon.stats[stat];

            total += value;

            choices.push({
                dex: pokemon.dex,
                name: pokemon.name,
                stat,
                value
            });
        }

        if (total > bestTotal) {
            bestTotal = total;
            bestChoice = choices;
        }
    }

    return {
        bestTotal,
        bestChoice
    };
}

function createResultCard(choice) {
    const card = document.createElement("div");
    card.classList.add("result-card");

    const image = document.createElement("img");
    image.classList.add("result-card-image");
    image.src = getPokemonImage(choice.dex);
    image.alt = formatPokemonName(choice.name);

    const info = document.createElement("div");
    info.classList.add("result-card-info");

    const stat = document.createElement("p");
    stat.classList.add("result-card-stat");
    stat.textContent = formatStatName(choice.stat);

    const value = document.createElement("p");
    value.classList.add("result-card-value");
    value.textContent = choice.value;

    info.appendChild(stat);
    info.appendChild(value);

    card.appendChild(image);
    card.appendChild(info);

    return card;
}

function showResultScreen() {
    battleLayout.classList.add("hidden");
    resultScreen.classList.remove("hidden");
}

function hideResultScreen() {
    battleLayout.classList.remove("hidden");
    resultScreen.classList.add("hidden");
}

function endGame() {
    const optimal = getBestPossibleOutcome(runPokemon);

    if (total >= 600) {
        resultBanner.textContent = `You Win! Total: ${total}`;
        resultBanner.className = "result-banner win";
    } else {
        resultBanner.textContent = `You Lose! Total: ${total}`;
        resultBanner.className = "result-banner lose";
    }

    playerTotal.textContent = `Total: ${total}`;
    playerChoiceList.innerHTML = "";

    playerChoices.forEach(choice => {
        playerChoiceList.appendChild(createResultCard(choice));
    });

    bestOutcome.textContent = `Total: ${optimal.bestTotal}`;
    bestOutcomeList.innerHTML = "";

    optimal.bestChoice.forEach(choice => {
        bestOutcomeList.appendChild(createResultCard(choice));
    });
    
    showResultScreen();
}

showPlaceholderImage();
hideResultScreen();

playAgainBtn.addEventListener("click", () => {
    if (selectedGeneration) {
        startGame();
    }
});