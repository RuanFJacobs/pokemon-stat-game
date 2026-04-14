import { writeFile } from "node:fs/promises";

const API_BASE = "https://pokeapi.co/api/v2";
const MAX_POKEMON_ID = 1025;

function mapGenerationNameToNumber(name) {
    const map = {
        "generation-i": 1,
        "generation-ii": 2,
        "generation-iii": 3,
        "generation-iv": 4,
        "generation-v": 5,
        "generation-vi": 6,
        "generation-vii": 7,
        "generation-viii": 8,
        "generation-ix": 9
    };

    return map[name] ?? null;
}

function getStatValue(stats, statName) {
    const match = stats.find((entry) => entry.stat.name === statName);
    return match ? match.base_stat : 0;
}

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText} - ${url}`);
    }

    return response.json();
}

async function buildPokemonData() {
    const output = [];

    for (let id = 1; id <= MAX_POKEMON_ID; id++) {
        console.log(`Fetching Pokémon ${id}/${MAX_POKEMON_ID}`);

        const pokemon = await fetchJson(`${API_BASE}/pokemon/${id}`);
        const species = await fetchJson(pokemon.species.url);

        const generation = mapGenerationNameToNumber(species.generation.name);

        if (!generation) {
            continue;
        }

        output.push({
            dex: pokemon.id,
            name: pokemon.name,
            generation,
            stats: {
                hp: getStatValue(pokemon.stats, "hp"),
                attack: getStatValue(pokemon.stats, "attack"),
                defense: getStatValue(pokemon.stats, "defense"),
                spAttack: getStatValue(pokemon.stats, "special-attack"),
                spDefense: getStatValue(pokemon.stats, "special-defense"),
                speed: getStatValue(pokemon.stats, "speed")
            }
        });
    }

    return output;
}

function toJsModule(data) {
    return `const pokemonData = ${JSON.stringify(data, null, 4)};\n\nexport default pokemonData;\n`;
}

try {
    const pokemonData = await buildPokemonData();
    const fileContents = toJsModule(pokemonData);

    await writeFile("./pokemon-data.js", fileContents, "utf8");

    console.log(`Done. Wrote ${pokemonData.length} Pokémon to pokemon-data.js`);
} catch (error) {
    console.error("Failed to build pokemon-data.js");
    console.error(error);
    process.exit(1);
}