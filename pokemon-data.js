const pokemonData = [
    {
        "dex": 1,
        "name": "bulbasaur",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 2,
        "name": "ivysaur",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 60
        }
    },
    {
        "dex": 3,
        "name": "venusaur",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 80
        }
    },
    {
        "dex": 4,
        "name": "charmander",
        "generation": 1,
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "spAttack": 60,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 5,
        "name": "charmeleon",
        "generation": 1,
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "spAttack": 80,
            "spDefense": 65,
            "speed": 80
        }
    },
    {
        "dex": 6,
        "name": "charizard",
        "generation": 1,
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "spAttack": 109,
            "spDefense": 85,
            "speed": 100
        }
    },
    {
        "dex": 7,
        "name": "squirtle",
        "generation": 1,
        "stats": {
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "spAttack": 50,
            "spDefense": 64,
            "speed": 43
        }
    },
    {
        "dex": 8,
        "name": "wartortle",
        "generation": 1,
        "stats": {
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "spAttack": 65,
            "spDefense": 80,
            "speed": 58
        }
    },
    {
        "dex": 9,
        "name": "blastoise",
        "generation": 1,
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "spAttack": 85,
            "spDefense": 105,
            "speed": 78
        }
    },
    {
        "dex": 10,
        "name": "caterpie",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "spAttack": 20,
            "spDefense": 20,
            "speed": 45
        }
    },
    {
        "dex": 11,
        "name": "metapod",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 30
        }
    },
    {
        "dex": 12,
        "name": "butterfree",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "spAttack": 90,
            "spDefense": 80,
            "speed": 70
        }
    },
    {
        "dex": 13,
        "name": "weedle",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "spAttack": 20,
            "spDefense": 20,
            "speed": 50
        }
    },
    {
        "dex": 14,
        "name": "kakuna",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 35
        }
    },
    {
        "dex": 15,
        "name": "beedrill",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "spAttack": 45,
            "spDefense": 80,
            "speed": 75
        }
    },
    {
        "dex": 16,
        "name": "pidgey",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 56
        }
    },
    {
        "dex": 17,
        "name": "pidgeotto",
        "generation": 1,
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 71
        }
    },
    {
        "dex": 18,
        "name": "pidgeot",
        "generation": 1,
        "stats": {
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "spAttack": 70,
            "spDefense": 70,
            "speed": 101
        }
    },
    {
        "dex": 19,
        "name": "rattata",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "spAttack": 25,
            "spDefense": 35,
            "speed": 72
        }
    },
    {
        "dex": 20,
        "name": "raticate",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "spAttack": 50,
            "spDefense": 70,
            "speed": 97
        }
    },
    {
        "dex": 21,
        "name": "spearow",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "spAttack": 31,
            "spDefense": 31,
            "speed": 70
        }
    },
    {
        "dex": 22,
        "name": "fearow",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "spAttack": 61,
            "spDefense": 61,
            "speed": 100
        }
    },
    {
        "dex": 23,
        "name": "ekans",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "spAttack": 40,
            "spDefense": 54,
            "speed": 55
        }
    },
    {
        "dex": 24,
        "name": "arbok",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "spAttack": 65,
            "spDefense": 79,
            "speed": 80
        }
    },
    {
        "dex": 25,
        "name": "pikachu",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 90
        }
    },
    {
        "dex": 26,
        "name": "raichu",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "spAttack": 90,
            "spDefense": 80,
            "speed": 110
        }
    },
    {
        "dex": 27,
        "name": "sandshrew",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "spAttack": 20,
            "spDefense": 30,
            "speed": 40
        }
    },
    {
        "dex": 28,
        "name": "sandslash",
        "generation": 1,
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 65
        }
    },
    {
        "dex": 29,
        "name": "nidoran-f",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 41
        }
    },
    {
        "dex": 30,
        "name": "nidorina",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 56
        }
    },
    {
        "dex": 31,
        "name": "nidoqueen",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "spAttack": 75,
            "spDefense": 85,
            "speed": 76
        }
    },
    {
        "dex": 32,
        "name": "nidoran-m",
        "generation": 1,
        "stats": {
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 50
        }
    },
    {
        "dex": 33,
        "name": "nidorino",
        "generation": 1,
        "stats": {
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 65
        }
    },
    {
        "dex": 34,
        "name": "nidoking",
        "generation": 1,
        "stats": {
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 85
        }
    },
    {
        "dex": 35,
        "name": "clefairy",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "spAttack": 60,
            "spDefense": 65,
            "speed": 35
        }
    },
    {
        "dex": 36,
        "name": "clefable",
        "generation": 1,
        "stats": {
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "spAttack": 95,
            "spDefense": 90,
            "speed": 60
        }
    },
    {
        "dex": 37,
        "name": "vulpix",
        "generation": 1,
        "stats": {
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 65,
            "speed": 65
        }
    },
    {
        "dex": 38,
        "name": "ninetales",
        "generation": 1,
        "stats": {
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "spAttack": 81,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 39,
        "name": "jigglypuff",
        "generation": 1,
        "stats": {
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "spAttack": 45,
            "spDefense": 25,
            "speed": 20
        }
    },
    {
        "dex": 40,
        "name": "wigglytuff",
        "generation": 1,
        "stats": {
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "spAttack": 85,
            "spDefense": 50,
            "speed": 45
        }
    },
    {
        "dex": 41,
        "name": "zubat",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAttack": 30,
            "spDefense": 40,
            "speed": 55
        }
    },
    {
        "dex": 42,
        "name": "golbat",
        "generation": 1,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "spAttack": 65,
            "spDefense": 75,
            "speed": 90
        }
    },
    {
        "dex": 43,
        "name": "oddish",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "spAttack": 75,
            "spDefense": 65,
            "speed": 30
        }
    },
    {
        "dex": 44,
        "name": "gloom",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 40
        }
    },
    {
        "dex": 45,
        "name": "vileplume",
        "generation": 1,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "spAttack": 110,
            "spDefense": 90,
            "speed": 50
        }
    },
    {
        "dex": 46,
        "name": "paras",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 25
        }
    },
    {
        "dex": 47,
        "name": "parasect",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 80,
            "speed": 30
        }
    },
    {
        "dex": 48,
        "name": "venonat",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 55,
            "speed": 45
        }
    },
    {
        "dex": 49,
        "name": "venomoth",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "spAttack": 90,
            "spDefense": 75,
            "speed": 90
        }
    },
    {
        "dex": 50,
        "name": "diglett",
        "generation": 1,
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "spAttack": 35,
            "spDefense": 45,
            "speed": 95
        }
    },
    {
        "dex": 51,
        "name": "dugtrio",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 70,
            "speed": 120
        }
    },
    {
        "dex": 52,
        "name": "meowth",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 90
        }
    },
    {
        "dex": 53,
        "name": "persian",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 115
        }
    },
    {
        "dex": 54,
        "name": "psyduck",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "spAttack": 65,
            "spDefense": 50,
            "speed": 55
        }
    },
    {
        "dex": 55,
        "name": "golduck",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "spAttack": 95,
            "spDefense": 80,
            "speed": 85
        }
    },
    {
        "dex": 56,
        "name": "mankey",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "spAttack": 35,
            "spDefense": 45,
            "speed": 70
        }
    },
    {
        "dex": 57,
        "name": "primeape",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 95
        }
    },
    {
        "dex": 58,
        "name": "growlithe",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "spAttack": 70,
            "spDefense": 50,
            "speed": 60
        }
    },
    {
        "dex": 59,
        "name": "arcanine",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "spAttack": 100,
            "spDefense": 80,
            "speed": 95
        }
    },
    {
        "dex": 60,
        "name": "poliwag",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 90
        }
    },
    {
        "dex": 61,
        "name": "poliwhirl",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 90
        }
    },
    {
        "dex": 62,
        "name": "poliwrath",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "spAttack": 70,
            "spDefense": 90,
            "speed": 70
        }
    },
    {
        "dex": 63,
        "name": "abra",
        "generation": 1,
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "spAttack": 105,
            "spDefense": 55,
            "speed": 90
        }
    },
    {
        "dex": 64,
        "name": "kadabra",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "spAttack": 120,
            "spDefense": 70,
            "speed": 105
        }
    },
    {
        "dex": 65,
        "name": "alakazam",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "spAttack": 135,
            "spDefense": 95,
            "speed": 120
        }
    },
    {
        "dex": 66,
        "name": "machop",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 35
        }
    },
    {
        "dex": 67,
        "name": "machoke",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "spAttack": 50,
            "spDefense": 60,
            "speed": 45
        }
    },
    {
        "dex": 68,
        "name": "machamp",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "spAttack": 65,
            "spDefense": 85,
            "speed": 55
        }
    },
    {
        "dex": 69,
        "name": "bellsprout",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "spAttack": 70,
            "spDefense": 30,
            "speed": 40
        }
    },
    {
        "dex": 70,
        "name": "weepinbell",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "spAttack": 85,
            "spDefense": 45,
            "speed": 55
        }
    },
    {
        "dex": 71,
        "name": "victreebel",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "spAttack": 100,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 72,
        "name": "tentacool",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAttack": 50,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 73,
        "name": "tentacruel",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 120,
            "speed": 100
        }
    },
    {
        "dex": 74,
        "name": "geodude",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 20
        }
    },
    {
        "dex": 75,
        "name": "graveler",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 35
        }
    },
    {
        "dex": 76,
        "name": "golem",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 77,
        "name": "ponyta",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 90
        }
    },
    {
        "dex": 78,
        "name": "rapidash",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 105
        }
    },
    {
        "dex": 79,
        "name": "slowpoke",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 15
        }
    },
    {
        "dex": 80,
        "name": "slowbro",
        "generation": 1,
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "spAttack": 100,
            "spDefense": 80,
            "speed": 30
        }
    },
    {
        "dex": 81,
        "name": "magnemite",
        "generation": 1,
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "spAttack": 95,
            "spDefense": 55,
            "speed": 45
        }
    },
    {
        "dex": 82,
        "name": "magneton",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "spAttack": 120,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 83,
        "name": "farfetchd",
        "generation": 1,
        "stats": {
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "spAttack": 58,
            "spDefense": 62,
            "speed": 60
        }
    },
    {
        "dex": 84,
        "name": "doduo",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 75
        }
    },
    {
        "dex": 85,
        "name": "dodrio",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 110
        }
    },
    {
        "dex": 86,
        "name": "seel",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "spAttack": 45,
            "spDefense": 70,
            "speed": 45
        }
    },
    {
        "dex": 87,
        "name": "dewgong",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 95,
            "speed": 70
        }
    },
    {
        "dex": 88,
        "name": "grimer",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 25
        }
    },
    {
        "dex": 89,
        "name": "muk",
        "generation": 1,
        "stats": {
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "spAttack": 65,
            "spDefense": 100,
            "speed": 50
        }
    },
    {
        "dex": 90,
        "name": "shellder",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "spAttack": 45,
            "spDefense": 25,
            "speed": 40
        }
    },
    {
        "dex": 91,
        "name": "cloyster",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "spAttack": 85,
            "spDefense": 45,
            "speed": 70
        }
    },
    {
        "dex": 92,
        "name": "gastly",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "spAttack": 100,
            "spDefense": 35,
            "speed": 80
        }
    },
    {
        "dex": 93,
        "name": "haunter",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "spAttack": 115,
            "spDefense": 55,
            "speed": 95
        }
    },
    {
        "dex": 94,
        "name": "gengar",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "spAttack": 130,
            "spDefense": 75,
            "speed": 110
        }
    },
    {
        "dex": 95,
        "name": "onix",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "spAttack": 30,
            "spDefense": 45,
            "speed": 70
        }
    },
    {
        "dex": 96,
        "name": "drowzee",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "spAttack": 43,
            "spDefense": 90,
            "speed": 42
        }
    },
    {
        "dex": 97,
        "name": "hypno",
        "generation": 1,
        "stats": {
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "spAttack": 73,
            "spDefense": 115,
            "speed": 67
        }
    },
    {
        "dex": 98,
        "name": "krabby",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 50
        }
    },
    {
        "dex": 99,
        "name": "kingler",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 75
        }
    },
    {
        "dex": 100,
        "name": "voltorb",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 100
        }
    },
    {
        "dex": 101,
        "name": "electrode",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 150
        }
    },
    {
        "dex": 102,
        "name": "exeggcute",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 45,
            "speed": 40
        }
    },
    {
        "dex": 103,
        "name": "exeggutor",
        "generation": 1,
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "spAttack": 125,
            "spDefense": 75,
            "speed": 55
        }
    },
    {
        "dex": 104,
        "name": "cubone",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 35
        }
    },
    {
        "dex": 105,
        "name": "marowak",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "spAttack": 50,
            "spDefense": 80,
            "speed": 45
        }
    },
    {
        "dex": 106,
        "name": "hitmonlee",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "spAttack": 35,
            "spDefense": 110,
            "speed": 87
        }
    },
    {
        "dex": 107,
        "name": "hitmonchan",
        "generation": 1,
        "stats": {
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "spAttack": 35,
            "spDefense": 110,
            "speed": 76
        }
    },
    {
        "dex": 108,
        "name": "lickitung",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "spAttack": 60,
            "spDefense": 75,
            "speed": 30
        }
    },
    {
        "dex": 109,
        "name": "koffing",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "spAttack": 60,
            "spDefense": 45,
            "speed": 35
        }
    },
    {
        "dex": 110,
        "name": "weezing",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "spAttack": 85,
            "spDefense": 70,
            "speed": 60
        }
    },
    {
        "dex": 111,
        "name": "rhyhorn",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 25
        }
    },
    {
        "dex": 112,
        "name": "rhydon",
        "generation": 1,
        "stats": {
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 40
        }
    },
    {
        "dex": 113,
        "name": "chansey",
        "generation": 1,
        "stats": {
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "spAttack": 35,
            "spDefense": 105,
            "speed": 50
        }
    },
    {
        "dex": 114,
        "name": "tangela",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "spAttack": 100,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 115,
        "name": "kangaskhan",
        "generation": 1,
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "spAttack": 40,
            "spDefense": 80,
            "speed": 90
        }
    },
    {
        "dex": 116,
        "name": "horsea",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "spAttack": 70,
            "spDefense": 25,
            "speed": 60
        }
    },
    {
        "dex": 117,
        "name": "seadra",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "spAttack": 95,
            "spDefense": 45,
            "speed": 85
        }
    },
    {
        "dex": 118,
        "name": "goldeen",
        "generation": 1,
        "stats": {
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "spAttack": 35,
            "spDefense": 50,
            "speed": 63
        }
    },
    {
        "dex": 119,
        "name": "seaking",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "spAttack": 65,
            "spDefense": 80,
            "speed": 68
        }
    },
    {
        "dex": 120,
        "name": "staryu",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "spAttack": 70,
            "spDefense": 55,
            "speed": 85
        }
    },
    {
        "dex": 121,
        "name": "starmie",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "spAttack": 100,
            "spDefense": 85,
            "speed": 115
        }
    },
    {
        "dex": 122,
        "name": "mr-mime",
        "generation": 1,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "spAttack": 100,
            "spDefense": 120,
            "speed": 90
        }
    },
    {
        "dex": 123,
        "name": "scyther",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "spAttack": 55,
            "spDefense": 80,
            "speed": 105
        }
    },
    {
        "dex": 124,
        "name": "jynx",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "spAttack": 115,
            "spDefense": 95,
            "speed": 95
        }
    },
    {
        "dex": 125,
        "name": "electabuzz",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "spAttack": 95,
            "spDefense": 85,
            "speed": 105
        }
    },
    {
        "dex": 126,
        "name": "magmar",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "spAttack": 100,
            "spDefense": 85,
            "speed": 93
        }
    },
    {
        "dex": 127,
        "name": "pinsir",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "spAttack": 55,
            "spDefense": 70,
            "speed": 85
        }
    },
    {
        "dex": 128,
        "name": "tauros",
        "generation": 1,
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "spAttack": 40,
            "spDefense": 70,
            "speed": 110
        }
    },
    {
        "dex": 129,
        "name": "magikarp",
        "generation": 1,
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "spAttack": 15,
            "spDefense": 20,
            "speed": 80
        }
    },
    {
        "dex": 130,
        "name": "gyarados",
        "generation": 1,
        "stats": {
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "spAttack": 60,
            "spDefense": 100,
            "speed": 81
        }
    },
    {
        "dex": 131,
        "name": "lapras",
        "generation": 1,
        "stats": {
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "spAttack": 85,
            "spDefense": 95,
            "speed": 60
        }
    },
    {
        "dex": 132,
        "name": "ditto",
        "generation": 1,
        "stats": {
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "spAttack": 48,
            "spDefense": 48,
            "speed": 48
        }
    },
    {
        "dex": 133,
        "name": "eevee",
        "generation": 1,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "spAttack": 45,
            "spDefense": 65,
            "speed": 55
        }
    },
    {
        "dex": 134,
        "name": "vaporeon",
        "generation": 1,
        "stats": {
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "spAttack": 110,
            "spDefense": 95,
            "speed": 65
        }
    },
    {
        "dex": 135,
        "name": "jolteon",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "spAttack": 110,
            "spDefense": 95,
            "speed": 130
        }
    },
    {
        "dex": 136,
        "name": "flareon",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "spAttack": 95,
            "spDefense": 110,
            "speed": 65
        }
    },
    {
        "dex": 137,
        "name": "porygon",
        "generation": 1,
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 40
        }
    },
    {
        "dex": 138,
        "name": "omanyte",
        "generation": 1,
        "stats": {
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "spAttack": 90,
            "spDefense": 55,
            "speed": 35
        }
    },
    {
        "dex": 139,
        "name": "omastar",
        "generation": 1,
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "spAttack": 115,
            "spDefense": 70,
            "speed": 55
        }
    },
    {
        "dex": 140,
        "name": "kabuto",
        "generation": 1,
        "stats": {
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "spAttack": 55,
            "spDefense": 45,
            "speed": 55
        }
    },
    {
        "dex": 141,
        "name": "kabutops",
        "generation": 1,
        "stats": {
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 80
        }
    },
    {
        "dex": 142,
        "name": "aerodactyl",
        "generation": 1,
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "spAttack": 60,
            "spDefense": 75,
            "speed": 130
        }
    },
    {
        "dex": 143,
        "name": "snorlax",
        "generation": 1,
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "spAttack": 65,
            "spDefense": 110,
            "speed": 30
        }
    },
    {
        "dex": 144,
        "name": "articuno",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "spAttack": 95,
            "spDefense": 125,
            "speed": 85
        }
    },
    {
        "dex": 145,
        "name": "zapdos",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "spAttack": 125,
            "spDefense": 90,
            "speed": 100
        }
    },
    {
        "dex": 146,
        "name": "moltres",
        "generation": 1,
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAttack": 125,
            "spDefense": 85,
            "speed": 90
        }
    },
    {
        "dex": 147,
        "name": "dratini",
        "generation": 1,
        "stats": {
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 50
        }
    },
    {
        "dex": 148,
        "name": "dragonair",
        "generation": 1,
        "stats": {
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "spAttack": 70,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 149,
        "name": "dragonite",
        "generation": 1,
        "stats": {
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 80
        }
    },
    {
        "dex": 150,
        "name": "mewtwo",
        "generation": 1,
        "stats": {
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "spAttack": 154,
            "spDefense": 90,
            "speed": 130
        }
    },
    {
        "dex": 151,
        "name": "mew",
        "generation": 1,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 152,
        "name": "chikorita",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 65,
            "spAttack": 49,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 153,
        "name": "bayleef",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 80,
            "spAttack": 63,
            "spDefense": 80,
            "speed": 60
        }
    },
    {
        "dex": 154,
        "name": "meganium",
        "generation": 2,
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 100,
            "spAttack": 83,
            "spDefense": 100,
            "speed": 80
        }
    },
    {
        "dex": 155,
        "name": "cyndaquil",
        "generation": 2,
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "spAttack": 60,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 156,
        "name": "quilava",
        "generation": 2,
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "spAttack": 80,
            "spDefense": 65,
            "speed": 80
        }
    },
    {
        "dex": 157,
        "name": "typhlosion",
        "generation": 2,
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "spAttack": 109,
            "spDefense": 85,
            "speed": 100
        }
    },
    {
        "dex": 158,
        "name": "totodile",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 64,
            "spAttack": 44,
            "spDefense": 48,
            "speed": 43
        }
    },
    {
        "dex": 159,
        "name": "croconaw",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 80,
            "spAttack": 59,
            "spDefense": 63,
            "speed": 58
        }
    },
    {
        "dex": 160,
        "name": "feraligatr",
        "generation": 2,
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 100,
            "spAttack": 79,
            "spDefense": 83,
            "speed": 78
        }
    },
    {
        "dex": 161,
        "name": "sentret",
        "generation": 2,
        "stats": {
            "hp": 35,
            "attack": 46,
            "defense": 34,
            "spAttack": 35,
            "spDefense": 45,
            "speed": 20
        }
    },
    {
        "dex": 162,
        "name": "furret",
        "generation": 2,
        "stats": {
            "hp": 85,
            "attack": 76,
            "defense": 64,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 90
        }
    },
    {
        "dex": 163,
        "name": "hoothoot",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 30,
            "defense": 30,
            "spAttack": 36,
            "spDefense": 56,
            "speed": 50
        }
    },
    {
        "dex": 164,
        "name": "noctowl",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 50,
            "defense": 50,
            "spAttack": 86,
            "spDefense": 96,
            "speed": 70
        }
    },
    {
        "dex": 165,
        "name": "ledyba",
        "generation": 2,
        "stats": {
            "hp": 40,
            "attack": 20,
            "defense": 30,
            "spAttack": 40,
            "spDefense": 80,
            "speed": 55
        }
    },
    {
        "dex": 166,
        "name": "ledian",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 35,
            "defense": 50,
            "spAttack": 55,
            "spDefense": 110,
            "speed": 85
        }
    },
    {
        "dex": 167,
        "name": "spinarak",
        "generation": 2,
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 30
        }
    },
    {
        "dex": 168,
        "name": "ariados",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 40
        }
    },
    {
        "dex": 169,
        "name": "crobat",
        "generation": 2,
        "stats": {
            "hp": 85,
            "attack": 90,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 130
        }
    },
    {
        "dex": 170,
        "name": "chinchou",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 38,
            "defense": 38,
            "spAttack": 56,
            "spDefense": 56,
            "speed": 67
        }
    },
    {
        "dex": 171,
        "name": "lanturn",
        "generation": 2,
        "stats": {
            "hp": 125,
            "attack": 58,
            "defense": 58,
            "spAttack": 76,
            "spDefense": 76,
            "speed": 67
        }
    },
    {
        "dex": 172,
        "name": "pichu",
        "generation": 2,
        "stats": {
            "hp": 20,
            "attack": 40,
            "defense": 15,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 60
        }
    },
    {
        "dex": 173,
        "name": "cleffa",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 25,
            "defense": 28,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 15
        }
    },
    {
        "dex": 174,
        "name": "igglybuff",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 30,
            "defense": 15,
            "spAttack": 40,
            "spDefense": 20,
            "speed": 15
        }
    },
    {
        "dex": 175,
        "name": "togepi",
        "generation": 2,
        "stats": {
            "hp": 35,
            "attack": 20,
            "defense": 65,
            "spAttack": 40,
            "spDefense": 65,
            "speed": 20
        }
    },
    {
        "dex": 176,
        "name": "togetic",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 85,
            "spAttack": 80,
            "spDefense": 105,
            "speed": 40
        }
    },
    {
        "dex": 177,
        "name": "natu",
        "generation": 2,
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 45,
            "spAttack": 70,
            "spDefense": 45,
            "speed": 70
        }
    },
    {
        "dex": 178,
        "name": "xatu",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 70,
            "spAttack": 95,
            "spDefense": 70,
            "speed": 95
        }
    },
    {
        "dex": 179,
        "name": "mareep",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 40,
            "spAttack": 65,
            "spDefense": 45,
            "speed": 35
        }
    },
    {
        "dex": 180,
        "name": "flaaffy",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "spAttack": 80,
            "spDefense": 60,
            "speed": 45
        }
    },
    {
        "dex": 181,
        "name": "ampharos",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 75,
            "defense": 85,
            "spAttack": 115,
            "spDefense": 90,
            "speed": 55
        }
    },
    {
        "dex": 182,
        "name": "bellossom",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 95,
            "spAttack": 90,
            "spDefense": 100,
            "speed": 50
        }
    },
    {
        "dex": 183,
        "name": "marill",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 20,
            "defense": 50,
            "spAttack": 20,
            "spDefense": 50,
            "speed": 40
        }
    },
    {
        "dex": 184,
        "name": "azumarill",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 50,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 80,
            "speed": 50
        }
    },
    {
        "dex": 185,
        "name": "sudowoodo",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "spAttack": 30,
            "spDefense": 65,
            "speed": 30
        }
    },
    {
        "dex": 186,
        "name": "politoed",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 75,
            "defense": 75,
            "spAttack": 90,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 187,
        "name": "hoppip",
        "generation": 2,
        "stats": {
            "hp": 35,
            "attack": 35,
            "defense": 40,
            "spAttack": 35,
            "spDefense": 55,
            "speed": 50
        }
    },
    {
        "dex": 188,
        "name": "skiploom",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 45,
            "defense": 50,
            "spAttack": 45,
            "spDefense": 65,
            "speed": 80
        }
    },
    {
        "dex": 189,
        "name": "jumpluff",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 55,
            "defense": 70,
            "spAttack": 55,
            "spDefense": 95,
            "speed": 110
        }
    },
    {
        "dex": 190,
        "name": "aipom",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 55,
            "spAttack": 40,
            "spDefense": 55,
            "speed": 85
        }
    },
    {
        "dex": 191,
        "name": "sunkern",
        "generation": 2,
        "stats": {
            "hp": 30,
            "attack": 30,
            "defense": 30,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 30
        }
    },
    {
        "dex": 192,
        "name": "sunflora",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 55,
            "spAttack": 105,
            "spDefense": 85,
            "speed": 30
        }
    },
    {
        "dex": 193,
        "name": "yanma",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 45,
            "spAttack": 75,
            "spDefense": 45,
            "speed": 95
        }
    },
    {
        "dex": 194,
        "name": "wooper",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 15
        }
    },
    {
        "dex": 195,
        "name": "quagsire",
        "generation": 2,
        "stats": {
            "hp": 95,
            "attack": 85,
            "defense": 85,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 35
        }
    },
    {
        "dex": 196,
        "name": "espeon",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "spAttack": 130,
            "spDefense": 95,
            "speed": 110
        }
    },
    {
        "dex": 197,
        "name": "umbreon",
        "generation": 2,
        "stats": {
            "hp": 95,
            "attack": 65,
            "defense": 110,
            "spAttack": 60,
            "spDefense": 130,
            "speed": 65
        }
    },
    {
        "dex": 198,
        "name": "murkrow",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 42,
            "spAttack": 85,
            "spDefense": 42,
            "speed": 91
        }
    },
    {
        "dex": 199,
        "name": "slowking",
        "generation": 2,
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 80,
            "spAttack": 100,
            "spDefense": 110,
            "speed": 30
        }
    },
    {
        "dex": 200,
        "name": "misdreavus",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAttack": 85,
            "spDefense": 85,
            "speed": 85
        }
    },
    {
        "dex": 201,
        "name": "unown",
        "generation": 2,
        "stats": {
            "hp": 48,
            "attack": 72,
            "defense": 48,
            "spAttack": 72,
            "spDefense": 48,
            "speed": 48
        }
    },
    {
        "dex": 202,
        "name": "wobbuffet",
        "generation": 2,
        "stats": {
            "hp": 190,
            "attack": 33,
            "defense": 58,
            "spAttack": 33,
            "spDefense": 58,
            "speed": 33
        }
    },
    {
        "dex": 203,
        "name": "girafarig",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 65,
            "spAttack": 90,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 204,
        "name": "pineco",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 90,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 15
        }
    },
    {
        "dex": 205,
        "name": "forretress",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 90,
            "defense": 140,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 40
        }
    },
    {
        "dex": 206,
        "name": "dunsparce",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 70,
            "defense": 70,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 207,
        "name": "gligar",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 105,
            "spAttack": 35,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 208,
        "name": "steelix",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 85,
            "defense": 200,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 30
        }
    },
    {
        "dex": 209,
        "name": "snubbull",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 30
        }
    },
    {
        "dex": 210,
        "name": "granbull",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 75,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 45
        }
    },
    {
        "dex": 211,
        "name": "qwilfish",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 85
        }
    },
    {
        "dex": 212,
        "name": "scizor",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 130,
            "defense": 100,
            "spAttack": 55,
            "spDefense": 80,
            "speed": 65
        }
    },
    {
        "dex": 213,
        "name": "shuckle",
        "generation": 2,
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 230,
            "spAttack": 10,
            "spDefense": 230,
            "speed": 5
        }
    },
    {
        "dex": 214,
        "name": "heracross",
        "generation": 2,
        "stats": {
            "hp": 80,
            "attack": 125,
            "defense": 75,
            "spAttack": 40,
            "spDefense": 95,
            "speed": 85
        }
    },
    {
        "dex": 215,
        "name": "sneasel",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "spAttack": 35,
            "spDefense": 75,
            "speed": 115
        }
    },
    {
        "dex": 216,
        "name": "teddiursa",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 40
        }
    },
    {
        "dex": 217,
        "name": "ursaring",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 75,
            "spAttack": 75,
            "spDefense": 75,
            "speed": 55
        }
    },
    {
        "dex": 218,
        "name": "slugma",
        "generation": 2,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 40,
            "spAttack": 70,
            "spDefense": 40,
            "speed": 20
        }
    },
    {
        "dex": 219,
        "name": "magcargo",
        "generation": 2,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 120,
            "spAttack": 90,
            "spDefense": 80,
            "speed": 30
        }
    },
    {
        "dex": 220,
        "name": "swinub",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 50
        }
    },
    {
        "dex": 221,
        "name": "piloswine",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 50
        }
    },
    {
        "dex": 222,
        "name": "corsola",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 95,
            "spAttack": 65,
            "spDefense": 95,
            "speed": 35
        }
    },
    {
        "dex": 223,
        "name": "remoraid",
        "generation": 2,
        "stats": {
            "hp": 35,
            "attack": 65,
            "defense": 35,
            "spAttack": 65,
            "spDefense": 35,
            "speed": 65
        }
    },
    {
        "dex": 224,
        "name": "octillery",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 105,
            "defense": 75,
            "spAttack": 105,
            "spDefense": 75,
            "speed": 45
        }
    },
    {
        "dex": 225,
        "name": "delibird",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 45,
            "spAttack": 65,
            "spDefense": 45,
            "speed": 75
        }
    },
    {
        "dex": 226,
        "name": "mantine",
        "generation": 2,
        "stats": {
            "hp": 85,
            "attack": 40,
            "defense": 70,
            "spAttack": 80,
            "spDefense": 140,
            "speed": 70
        }
    },
    {
        "dex": 227,
        "name": "skarmory",
        "generation": 2,
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 140,
            "spAttack": 40,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 228,
        "name": "houndour",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 30,
            "spAttack": 80,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 229,
        "name": "houndoom",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 90,
            "defense": 50,
            "spAttack": 110,
            "spDefense": 80,
            "speed": 95
        }
    },
    {
        "dex": 230,
        "name": "kingdra",
        "generation": 2,
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 95,
            "spAttack": 95,
            "spDefense": 95,
            "speed": 85
        }
    },
    {
        "dex": 231,
        "name": "phanpy",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 40
        }
    },
    {
        "dex": 232,
        "name": "donphan",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 120,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 50
        }
    },
    {
        "dex": 233,
        "name": "porygon2",
        "generation": 2,
        "stats": {
            "hp": 85,
            "attack": 80,
            "defense": 90,
            "spAttack": 105,
            "spDefense": 95,
            "speed": 60
        }
    },
    {
        "dex": 234,
        "name": "stantler",
        "generation": 2,
        "stats": {
            "hp": 73,
            "attack": 95,
            "defense": 62,
            "spAttack": 85,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 235,
        "name": "smeargle",
        "generation": 2,
        "stats": {
            "hp": 55,
            "attack": 20,
            "defense": 35,
            "spAttack": 20,
            "spDefense": 45,
            "speed": 75
        }
    },
    {
        "dex": 236,
        "name": "tyrogue",
        "generation": 2,
        "stats": {
            "hp": 35,
            "attack": 35,
            "defense": 35,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 35
        }
    },
    {
        "dex": 237,
        "name": "hitmontop",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 95,
            "spAttack": 35,
            "spDefense": 110,
            "speed": 70
        }
    },
    {
        "dex": 238,
        "name": "smoochum",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 15,
            "spAttack": 85,
            "spDefense": 65,
            "speed": 65
        }
    },
    {
        "dex": 239,
        "name": "elekid",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 63,
            "defense": 37,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 95
        }
    },
    {
        "dex": 240,
        "name": "magby",
        "generation": 2,
        "stats": {
            "hp": 45,
            "attack": 75,
            "defense": 37,
            "spAttack": 70,
            "spDefense": 55,
            "speed": 83
        }
    },
    {
        "dex": 241,
        "name": "miltank",
        "generation": 2,
        "stats": {
            "hp": 95,
            "attack": 80,
            "defense": 105,
            "spAttack": 40,
            "spDefense": 70,
            "speed": 100
        }
    },
    {
        "dex": 242,
        "name": "blissey",
        "generation": 2,
        "stats": {
            "hp": 255,
            "attack": 10,
            "defense": 10,
            "spAttack": 75,
            "spDefense": 135,
            "speed": 55
        }
    },
    {
        "dex": 243,
        "name": "raikou",
        "generation": 2,
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 75,
            "spAttack": 115,
            "spDefense": 100,
            "speed": 115
        }
    },
    {
        "dex": 244,
        "name": "entei",
        "generation": 2,
        "stats": {
            "hp": 115,
            "attack": 115,
            "defense": 85,
            "spAttack": 90,
            "spDefense": 75,
            "speed": 100
        }
    },
    {
        "dex": 245,
        "name": "suicune",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 75,
            "defense": 115,
            "spAttack": 90,
            "spDefense": 115,
            "speed": 85
        }
    },
    {
        "dex": 246,
        "name": "larvitar",
        "generation": 2,
        "stats": {
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "spAttack": 45,
            "spDefense": 50,
            "speed": 41
        }
    },
    {
        "dex": 247,
        "name": "pupitar",
        "generation": 2,
        "stats": {
            "hp": 70,
            "attack": 84,
            "defense": 70,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 51
        }
    },
    {
        "dex": 248,
        "name": "tyranitar",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "spAttack": 95,
            "spDefense": 100,
            "speed": 61
        }
    },
    {
        "dex": 249,
        "name": "lugia",
        "generation": 2,
        "stats": {
            "hp": 106,
            "attack": 90,
            "defense": 130,
            "spAttack": 90,
            "spDefense": 154,
            "speed": 110
        }
    },
    {
        "dex": 250,
        "name": "ho-oh",
        "generation": 2,
        "stats": {
            "hp": 106,
            "attack": 130,
            "defense": 90,
            "spAttack": 110,
            "spDefense": 154,
            "speed": 90
        }
    },
    {
        "dex": 251,
        "name": "celebi",
        "generation": 2,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 252,
        "name": "treecko",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 70
        }
    },
    {
        "dex": 253,
        "name": "grovyle",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "spAttack": 85,
            "spDefense": 65,
            "speed": 95
        }
    },
    {
        "dex": 254,
        "name": "sceptile",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAttack": 105,
            "spDefense": 85,
            "speed": 120
        }
    },
    {
        "dex": 255,
        "name": "torchic",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 40,
            "spAttack": 70,
            "spDefense": 50,
            "speed": 45
        }
    },
    {
        "dex": 256,
        "name": "combusken",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "spAttack": 85,
            "spDefense": 60,
            "speed": 55
        }
    },
    {
        "dex": 257,
        "name": "blaziken",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 70,
            "spAttack": 110,
            "spDefense": 70,
            "speed": 80
        }
    },
    {
        "dex": 258,
        "name": "mudkip",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 40
        }
    },
    {
        "dex": 259,
        "name": "marshtomp",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 50
        }
    },
    {
        "dex": 260,
        "name": "swampert",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 110,
            "defense": 90,
            "spAttack": 85,
            "spDefense": 90,
            "speed": 60
        }
    },
    {
        "dex": 261,
        "name": "poochyena",
        "generation": 3,
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 35,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 35
        }
    },
    {
        "dex": 262,
        "name": "mightyena",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 70
        }
    },
    {
        "dex": 263,
        "name": "zigzagoon",
        "generation": 3,
        "stats": {
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "spAttack": 30,
            "spDefense": 41,
            "speed": 60
        }
    },
    {
        "dex": 264,
        "name": "linoone",
        "generation": 3,
        "stats": {
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "spAttack": 50,
            "spDefense": 61,
            "speed": 100
        }
    },
    {
        "dex": 265,
        "name": "wurmple",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 35,
            "spAttack": 20,
            "spDefense": 30,
            "speed": 20
        }
    },
    {
        "dex": 266,
        "name": "silcoon",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 15
        }
    },
    {
        "dex": 267,
        "name": "beautifly",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 50,
            "spAttack": 100,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 268,
        "name": "cascoon",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 15
        }
    },
    {
        "dex": 269,
        "name": "dustox",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "spAttack": 50,
            "spDefense": 90,
            "speed": 65
        }
    },
    {
        "dex": 270,
        "name": "lotad",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 30
        }
    },
    {
        "dex": 271,
        "name": "lombre",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 50,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 50
        }
    },
    {
        "dex": 272,
        "name": "ludicolo",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 70,
            "spAttack": 90,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 273,
        "name": "seedot",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 50,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 30
        }
    },
    {
        "dex": 274,
        "name": "nuzleaf",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 40,
            "spAttack": 60,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 275,
        "name": "shiftry",
        "generation": 3,
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 60,
            "spAttack": 90,
            "spDefense": 60,
            "speed": 80
        }
    },
    {
        "dex": 276,
        "name": "taillow",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 85
        }
    },
    {
        "dex": 277,
        "name": "swellow",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "spAttack": 75,
            "spDefense": 50,
            "speed": 125
        }
    },
    {
        "dex": 278,
        "name": "wingull",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "spAttack": 55,
            "spDefense": 30,
            "speed": 85
        }
    },
    {
        "dex": 279,
        "name": "pelipper",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 100,
            "spAttack": 95,
            "spDefense": 70,
            "speed": 65
        }
    },
    {
        "dex": 280,
        "name": "ralts",
        "generation": 3,
        "stats": {
            "hp": 28,
            "attack": 25,
            "defense": 25,
            "spAttack": 45,
            "spDefense": 35,
            "speed": 40
        }
    },
    {
        "dex": 281,
        "name": "kirlia",
        "generation": 3,
        "stats": {
            "hp": 38,
            "attack": 35,
            "defense": 35,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 50
        }
    },
    {
        "dex": 282,
        "name": "gardevoir",
        "generation": 3,
        "stats": {
            "hp": 68,
            "attack": 65,
            "defense": 65,
            "spAttack": 125,
            "spDefense": 115,
            "speed": 80
        }
    },
    {
        "dex": 283,
        "name": "surskit",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 32,
            "spAttack": 50,
            "spDefense": 52,
            "speed": 65
        }
    },
    {
        "dex": 284,
        "name": "masquerain",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 62,
            "spAttack": 100,
            "spDefense": 82,
            "speed": 80
        }
    },
    {
        "dex": 285,
        "name": "shroomish",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 60,
            "speed": 35
        }
    },
    {
        "dex": 286,
        "name": "breloom",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 130,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 70
        }
    },
    {
        "dex": 287,
        "name": "slakoth",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 30
        }
    },
    {
        "dex": 288,
        "name": "vigoroth",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 90
        }
    },
    {
        "dex": 289,
        "name": "slaking",
        "generation": 3,
        "stats": {
            "hp": 150,
            "attack": 160,
            "defense": 100,
            "spAttack": 95,
            "spDefense": 65,
            "speed": 100
        }
    },
    {
        "dex": 290,
        "name": "nincada",
        "generation": 3,
        "stats": {
            "hp": 31,
            "attack": 45,
            "defense": 90,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 40
        }
    },
    {
        "dex": 291,
        "name": "ninjask",
        "generation": 3,
        "stats": {
            "hp": 61,
            "attack": 90,
            "defense": 45,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 160
        }
    },
    {
        "dex": 292,
        "name": "shedinja",
        "generation": 3,
        "stats": {
            "hp": 1,
            "attack": 90,
            "defense": 45,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 40
        }
    },
    {
        "dex": 293,
        "name": "whismur",
        "generation": 3,
        "stats": {
            "hp": 64,
            "attack": 51,
            "defense": 23,
            "spAttack": 51,
            "spDefense": 23,
            "speed": 28
        }
    },
    {
        "dex": 294,
        "name": "loudred",
        "generation": 3,
        "stats": {
            "hp": 84,
            "attack": 71,
            "defense": 43,
            "spAttack": 71,
            "spDefense": 43,
            "speed": 48
        }
    },
    {
        "dex": 295,
        "name": "exploud",
        "generation": 3,
        "stats": {
            "hp": 104,
            "attack": 91,
            "defense": 63,
            "spAttack": 91,
            "spDefense": 73,
            "speed": 68
        }
    },
    {
        "dex": 296,
        "name": "makuhita",
        "generation": 3,
        "stats": {
            "hp": 72,
            "attack": 60,
            "defense": 30,
            "spAttack": 20,
            "spDefense": 30,
            "speed": 25
        }
    },
    {
        "dex": 297,
        "name": "hariyama",
        "generation": 3,
        "stats": {
            "hp": 144,
            "attack": 120,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 60,
            "speed": 50
        }
    },
    {
        "dex": 298,
        "name": "azurill",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 40,
            "spAttack": 20,
            "spDefense": 40,
            "speed": 20
        }
    },
    {
        "dex": 299,
        "name": "nosepass",
        "generation": 3,
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 135,
            "spAttack": 45,
            "spDefense": 90,
            "speed": 30
        }
    },
    {
        "dex": 300,
        "name": "skitty",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 50
        }
    },
    {
        "dex": 301,
        "name": "delcatty",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 65,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 90
        }
    },
    {
        "dex": 302,
        "name": "sableye",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 75,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 50
        }
    },
    {
        "dex": 303,
        "name": "mawile",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 85,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 50
        }
    },
    {
        "dex": 304,
        "name": "aron",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 100,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 30
        }
    },
    {
        "dex": 305,
        "name": "lairon",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 140,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 40
        }
    },
    {
        "dex": 306,
        "name": "aggron",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 180,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 50
        }
    },
    {
        "dex": 307,
        "name": "meditite",
        "generation": 3,
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 55,
            "spAttack": 40,
            "spDefense": 55,
            "speed": 60
        }
    },
    {
        "dex": 308,
        "name": "medicham",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "spAttack": 60,
            "spDefense": 75,
            "speed": 80
        }
    },
    {
        "dex": 309,
        "name": "electrike",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAttack": 65,
            "spDefense": 40,
            "speed": 65
        }
    },
    {
        "dex": 310,
        "name": "manectric",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 60,
            "spAttack": 105,
            "spDefense": 60,
            "speed": 105
        }
    },
    {
        "dex": 311,
        "name": "plusle",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 40,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 95
        }
    },
    {
        "dex": 312,
        "name": "minun",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 50,
            "spAttack": 75,
            "spDefense": 85,
            "speed": 95
        }
    },
    {
        "dex": 313,
        "name": "volbeat",
        "generation": 3,
        "stats": {
            "hp": 65,
            "attack": 73,
            "defense": 75,
            "spAttack": 47,
            "spDefense": 85,
            "speed": 85
        }
    },
    {
        "dex": 314,
        "name": "illumise",
        "generation": 3,
        "stats": {
            "hp": 65,
            "attack": 47,
            "defense": 75,
            "spAttack": 73,
            "spDefense": 85,
            "speed": 85
        }
    },
    {
        "dex": 315,
        "name": "roselia",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 45,
            "spAttack": 100,
            "spDefense": 80,
            "speed": 65
        }
    },
    {
        "dex": 316,
        "name": "gulpin",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 43,
            "defense": 53,
            "spAttack": 43,
            "spDefense": 53,
            "speed": 40
        }
    },
    {
        "dex": 317,
        "name": "swalot",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 73,
            "defense": 83,
            "spAttack": 73,
            "spDefense": 83,
            "speed": 55
        }
    },
    {
        "dex": 318,
        "name": "carvanha",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 90,
            "defense": 20,
            "spAttack": 65,
            "spDefense": 20,
            "speed": 65
        }
    },
    {
        "dex": 319,
        "name": "sharpedo",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 120,
            "defense": 40,
            "spAttack": 95,
            "spDefense": 40,
            "speed": 95
        }
    },
    {
        "dex": 320,
        "name": "wailmer",
        "generation": 3,
        "stats": {
            "hp": 130,
            "attack": 70,
            "defense": 35,
            "spAttack": 70,
            "spDefense": 35,
            "speed": 60
        }
    },
    {
        "dex": 321,
        "name": "wailord",
        "generation": 3,
        "stats": {
            "hp": 170,
            "attack": 90,
            "defense": 45,
            "spAttack": 90,
            "spDefense": 45,
            "speed": 60
        }
    },
    {
        "dex": 322,
        "name": "numel",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 40,
            "spAttack": 65,
            "spDefense": 45,
            "speed": 35
        }
    },
    {
        "dex": 323,
        "name": "camerupt",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "spAttack": 105,
            "spDefense": 75,
            "speed": 40
        }
    },
    {
        "dex": 324,
        "name": "torkoal",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 140,
            "spAttack": 85,
            "spDefense": 70,
            "speed": 20
        }
    },
    {
        "dex": 325,
        "name": "spoink",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 25,
            "defense": 35,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 60
        }
    },
    {
        "dex": 326,
        "name": "grumpig",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 45,
            "defense": 65,
            "spAttack": 90,
            "spDefense": 110,
            "speed": 80
        }
    },
    {
        "dex": 327,
        "name": "spinda",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 60
        }
    },
    {
        "dex": 328,
        "name": "trapinch",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 100,
            "defense": 45,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 10
        }
    },
    {
        "dex": 329,
        "name": "vibrava",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 70
        }
    },
    {
        "dex": 330,
        "name": "flygon",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 80,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 100
        }
    },
    {
        "dex": 331,
        "name": "cacnea",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 40,
            "spAttack": 85,
            "spDefense": 40,
            "speed": 35
        }
    },
    {
        "dex": 332,
        "name": "cacturne",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 60,
            "spAttack": 115,
            "spDefense": 60,
            "speed": 55
        }
    },
    {
        "dex": 333,
        "name": "swablu",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 40,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 75,
            "speed": 50
        }
    },
    {
        "dex": 334,
        "name": "altaria",
        "generation": 3,
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 90,
            "spAttack": 70,
            "spDefense": 105,
            "speed": 80
        }
    },
    {
        "dex": 335,
        "name": "zangoose",
        "generation": 3,
        "stats": {
            "hp": 73,
            "attack": 115,
            "defense": 60,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 90
        }
    },
    {
        "dex": 336,
        "name": "seviper",
        "generation": 3,
        "stats": {
            "hp": 73,
            "attack": 100,
            "defense": 60,
            "spAttack": 100,
            "spDefense": 60,
            "speed": 65
        }
    },
    {
        "dex": 337,
        "name": "lunatone",
        "generation": 3,
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 65,
            "spAttack": 95,
            "spDefense": 85,
            "speed": 70
        }
    },
    {
        "dex": 338,
        "name": "solrock",
        "generation": 3,
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 85,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 70
        }
    },
    {
        "dex": 339,
        "name": "barboach",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 48,
            "defense": 43,
            "spAttack": 46,
            "spDefense": 41,
            "speed": 60
        }
    },
    {
        "dex": 340,
        "name": "whiscash",
        "generation": 3,
        "stats": {
            "hp": 110,
            "attack": 78,
            "defense": 73,
            "spAttack": 76,
            "spDefense": 71,
            "speed": 60
        }
    },
    {
        "dex": 341,
        "name": "corphish",
        "generation": 3,
        "stats": {
            "hp": 43,
            "attack": 80,
            "defense": 65,
            "spAttack": 50,
            "spDefense": 35,
            "speed": 35
        }
    },
    {
        "dex": 342,
        "name": "crawdaunt",
        "generation": 3,
        "stats": {
            "hp": 63,
            "attack": 120,
            "defense": 85,
            "spAttack": 90,
            "spDefense": 55,
            "speed": 55
        }
    },
    {
        "dex": 343,
        "name": "baltoy",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 55,
            "spAttack": 40,
            "spDefense": 70,
            "speed": 55
        }
    },
    {
        "dex": 344,
        "name": "claydol",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 105,
            "spAttack": 70,
            "spDefense": 120,
            "speed": 75
        }
    },
    {
        "dex": 345,
        "name": "lileep",
        "generation": 3,
        "stats": {
            "hp": 66,
            "attack": 41,
            "defense": 77,
            "spAttack": 61,
            "spDefense": 87,
            "speed": 23
        }
    },
    {
        "dex": 346,
        "name": "cradily",
        "generation": 3,
        "stats": {
            "hp": 86,
            "attack": 81,
            "defense": 97,
            "spAttack": 81,
            "spDefense": 107,
            "speed": 43
        }
    },
    {
        "dex": 347,
        "name": "anorith",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 95,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 75
        }
    },
    {
        "dex": 348,
        "name": "armaldo",
        "generation": 3,
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 100,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 45
        }
    },
    {
        "dex": 349,
        "name": "feebas",
        "generation": 3,
        "stats": {
            "hp": 20,
            "attack": 15,
            "defense": 20,
            "spAttack": 10,
            "spDefense": 55,
            "speed": 80
        }
    },
    {
        "dex": 350,
        "name": "milotic",
        "generation": 3,
        "stats": {
            "hp": 95,
            "attack": 60,
            "defense": 79,
            "spAttack": 100,
            "spDefense": 125,
            "speed": 81
        }
    },
    {
        "dex": 351,
        "name": "castform",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "spAttack": 70,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 352,
        "name": "kecleon",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 120,
            "speed": 40
        }
    },
    {
        "dex": 353,
        "name": "shuppet",
        "generation": 3,
        "stats": {
            "hp": 44,
            "attack": 75,
            "defense": 35,
            "spAttack": 63,
            "spDefense": 33,
            "speed": 45
        }
    },
    {
        "dex": 354,
        "name": "banette",
        "generation": 3,
        "stats": {
            "hp": 64,
            "attack": 115,
            "defense": 65,
            "spAttack": 83,
            "spDefense": 63,
            "speed": 65
        }
    },
    {
        "dex": 355,
        "name": "duskull",
        "generation": 3,
        "stats": {
            "hp": 20,
            "attack": 40,
            "defense": 90,
            "spAttack": 30,
            "spDefense": 90,
            "speed": 25
        }
    },
    {
        "dex": 356,
        "name": "dusclops",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 70,
            "defense": 130,
            "spAttack": 60,
            "spDefense": 130,
            "speed": 25
        }
    },
    {
        "dex": 357,
        "name": "tropius",
        "generation": 3,
        "stats": {
            "hp": 99,
            "attack": 68,
            "defense": 83,
            "spAttack": 72,
            "spDefense": 87,
            "speed": 51
        }
    },
    {
        "dex": 358,
        "name": "chimecho",
        "generation": 3,
        "stats": {
            "hp": 75,
            "attack": 50,
            "defense": 80,
            "spAttack": 95,
            "spDefense": 90,
            "speed": 65
        }
    },
    {
        "dex": 359,
        "name": "absol",
        "generation": 3,
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "spAttack": 75,
            "spDefense": 60,
            "speed": 75
        }
    },
    {
        "dex": 360,
        "name": "wynaut",
        "generation": 3,
        "stats": {
            "hp": 95,
            "attack": 23,
            "defense": 48,
            "spAttack": 23,
            "spDefense": 48,
            "speed": 23
        }
    },
    {
        "dex": 361,
        "name": "snorunt",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 50
        }
    },
    {
        "dex": 362,
        "name": "glalie",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 80
        }
    },
    {
        "dex": 363,
        "name": "spheal",
        "generation": 3,
        "stats": {
            "hp": 70,
            "attack": 40,
            "defense": 50,
            "spAttack": 55,
            "spDefense": 50,
            "speed": 25
        }
    },
    {
        "dex": 364,
        "name": "sealeo",
        "generation": 3,
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 70,
            "spAttack": 75,
            "spDefense": 70,
            "speed": 45
        }
    },
    {
        "dex": 365,
        "name": "walrein",
        "generation": 3,
        "stats": {
            "hp": 110,
            "attack": 80,
            "defense": 90,
            "spAttack": 95,
            "spDefense": 90,
            "speed": 65
        }
    },
    {
        "dex": 366,
        "name": "clamperl",
        "generation": 3,
        "stats": {
            "hp": 35,
            "attack": 64,
            "defense": 85,
            "spAttack": 74,
            "spDefense": 55,
            "speed": 32
        }
    },
    {
        "dex": 367,
        "name": "huntail",
        "generation": 3,
        "stats": {
            "hp": 55,
            "attack": 104,
            "defense": 105,
            "spAttack": 94,
            "spDefense": 75,
            "speed": 52
        }
    },
    {
        "dex": 368,
        "name": "gorebyss",
        "generation": 3,
        "stats": {
            "hp": 55,
            "attack": 84,
            "defense": 105,
            "spAttack": 114,
            "spDefense": 75,
            "speed": 52
        }
    },
    {
        "dex": 369,
        "name": "relicanth",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 90,
            "defense": 130,
            "spAttack": 45,
            "spDefense": 65,
            "speed": 55
        }
    },
    {
        "dex": 370,
        "name": "luvdisc",
        "generation": 3,
        "stats": {
            "hp": 43,
            "attack": 30,
            "defense": 55,
            "spAttack": 40,
            "spDefense": 65,
            "speed": 97
        }
    },
    {
        "dex": 371,
        "name": "bagon",
        "generation": 3,
        "stats": {
            "hp": 45,
            "attack": 75,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 30,
            "speed": 50
        }
    },
    {
        "dex": 372,
        "name": "shelgon",
        "generation": 3,
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 100,
            "spAttack": 60,
            "spDefense": 50,
            "speed": 50
        }
    },
    {
        "dex": 373,
        "name": "salamence",
        "generation": 3,
        "stats": {
            "hp": 95,
            "attack": 135,
            "defense": 80,
            "spAttack": 110,
            "spDefense": 80,
            "speed": 100
        }
    },
    {
        "dex": 374,
        "name": "beldum",
        "generation": 3,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 80,
            "spAttack": 35,
            "spDefense": 60,
            "speed": 30
        }
    },
    {
        "dex": 375,
        "name": "metang",
        "generation": 3,
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 100,
            "spAttack": 55,
            "spDefense": 80,
            "speed": 50
        }
    },
    {
        "dex": 376,
        "name": "metagross",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 135,
            "defense": 130,
            "spAttack": 95,
            "spDefense": 90,
            "speed": 70
        }
    },
    {
        "dex": 377,
        "name": "regirock",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 200,
            "spAttack": 50,
            "spDefense": 100,
            "speed": 50
        }
    },
    {
        "dex": 378,
        "name": "regice",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 50,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 200,
            "speed": 50
        }
    },
    {
        "dex": 379,
        "name": "registeel",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 75,
            "defense": 150,
            "spAttack": 75,
            "spDefense": 150,
            "speed": 50
        }
    },
    {
        "dex": 380,
        "name": "latias",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 90,
            "spAttack": 110,
            "spDefense": 130,
            "speed": 110
        }
    },
    {
        "dex": 381,
        "name": "latios",
        "generation": 3,
        "stats": {
            "hp": 80,
            "attack": 90,
            "defense": 80,
            "spAttack": 130,
            "spDefense": 110,
            "speed": 110
        }
    },
    {
        "dex": 382,
        "name": "kyogre",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 90,
            "spAttack": 150,
            "spDefense": 140,
            "speed": 90
        }
    },
    {
        "dex": 383,
        "name": "groudon",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 140,
            "spAttack": 100,
            "spDefense": 90,
            "speed": 90
        }
    },
    {
        "dex": 384,
        "name": "rayquaza",
        "generation": 3,
        "stats": {
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "spAttack": 150,
            "spDefense": 90,
            "speed": 95
        }
    },
    {
        "dex": 385,
        "name": "jirachi",
        "generation": 3,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 386,
        "name": "deoxys-normal",
        "generation": 3,
        "stats": {
            "hp": 50,
            "attack": 150,
            "defense": 50,
            "spAttack": 150,
            "spDefense": 50,
            "speed": 150
        }
    },
    {
        "dex": 387,
        "name": "turtwig",
        "generation": 4,
        "stats": {
            "hp": 55,
            "attack": 68,
            "defense": 64,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 31
        }
    },
    {
        "dex": 388,
        "name": "grotle",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 89,
            "defense": 85,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 36
        }
    },
    {
        "dex": 389,
        "name": "torterra",
        "generation": 4,
        "stats": {
            "hp": 95,
            "attack": 109,
            "defense": 105,
            "spAttack": 75,
            "spDefense": 85,
            "speed": 56
        }
    },
    {
        "dex": 390,
        "name": "chimchar",
        "generation": 4,
        "stats": {
            "hp": 44,
            "attack": 58,
            "defense": 44,
            "spAttack": 58,
            "spDefense": 44,
            "speed": 61
        }
    },
    {
        "dex": 391,
        "name": "monferno",
        "generation": 4,
        "stats": {
            "hp": 64,
            "attack": 78,
            "defense": 52,
            "spAttack": 78,
            "spDefense": 52,
            "speed": 81
        }
    },
    {
        "dex": 392,
        "name": "infernape",
        "generation": 4,
        "stats": {
            "hp": 76,
            "attack": 104,
            "defense": 71,
            "spAttack": 104,
            "spDefense": 71,
            "speed": 108
        }
    },
    {
        "dex": 393,
        "name": "piplup",
        "generation": 4,
        "stats": {
            "hp": 53,
            "attack": 51,
            "defense": 53,
            "spAttack": 61,
            "spDefense": 56,
            "speed": 40
        }
    },
    {
        "dex": 394,
        "name": "prinplup",
        "generation": 4,
        "stats": {
            "hp": 64,
            "attack": 66,
            "defense": 68,
            "spAttack": 81,
            "spDefense": 76,
            "speed": 50
        }
    },
    {
        "dex": 395,
        "name": "empoleon",
        "generation": 4,
        "stats": {
            "hp": 84,
            "attack": 86,
            "defense": 88,
            "spAttack": 111,
            "spDefense": 101,
            "speed": 60
        }
    },
    {
        "dex": 396,
        "name": "starly",
        "generation": 4,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 60
        }
    },
    {
        "dex": 397,
        "name": "staravia",
        "generation": 4,
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 80
        }
    },
    {
        "dex": 398,
        "name": "staraptor",
        "generation": 4,
        "stats": {
            "hp": 85,
            "attack": 120,
            "defense": 70,
            "spAttack": 50,
            "spDefense": 60,
            "speed": 100
        }
    },
    {
        "dex": 399,
        "name": "bidoof",
        "generation": 4,
        "stats": {
            "hp": 59,
            "attack": 45,
            "defense": 40,
            "spAttack": 35,
            "spDefense": 40,
            "speed": 31
        }
    },
    {
        "dex": 400,
        "name": "bibarel",
        "generation": 4,
        "stats": {
            "hp": 79,
            "attack": 85,
            "defense": 60,
            "spAttack": 55,
            "spDefense": 60,
            "speed": 71
        }
    },
    {
        "dex": 401,
        "name": "kricketot",
        "generation": 4,
        "stats": {
            "hp": 37,
            "attack": 25,
            "defense": 41,
            "spAttack": 25,
            "spDefense": 41,
            "speed": 25
        }
    },
    {
        "dex": 402,
        "name": "kricketune",
        "generation": 4,
        "stats": {
            "hp": 77,
            "attack": 85,
            "defense": 51,
            "spAttack": 55,
            "spDefense": 51,
            "speed": 65
        }
    },
    {
        "dex": 403,
        "name": "shinx",
        "generation": 4,
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 34,
            "spAttack": 40,
            "spDefense": 34,
            "speed": 45
        }
    },
    {
        "dex": 404,
        "name": "luxio",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 49,
            "spAttack": 60,
            "spDefense": 49,
            "speed": 60
        }
    },
    {
        "dex": 405,
        "name": "luxray",
        "generation": 4,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 79,
            "spAttack": 95,
            "spDefense": 79,
            "speed": 70
        }
    },
    {
        "dex": 406,
        "name": "budew",
        "generation": 4,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "spAttack": 50,
            "spDefense": 70,
            "speed": 55
        }
    },
    {
        "dex": 407,
        "name": "roserade",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 65,
            "spAttack": 125,
            "spDefense": 105,
            "speed": 90
        }
    },
    {
        "dex": 408,
        "name": "cranidos",
        "generation": 4,
        "stats": {
            "hp": 67,
            "attack": 125,
            "defense": 40,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 58
        }
    },
    {
        "dex": 409,
        "name": "rampardos",
        "generation": 4,
        "stats": {
            "hp": 97,
            "attack": 165,
            "defense": 60,
            "spAttack": 65,
            "spDefense": 50,
            "speed": 58
        }
    },
    {
        "dex": 410,
        "name": "shieldon",
        "generation": 4,
        "stats": {
            "hp": 30,
            "attack": 42,
            "defense": 118,
            "spAttack": 42,
            "spDefense": 88,
            "speed": 30
        }
    },
    {
        "dex": 411,
        "name": "bastiodon",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 52,
            "defense": 168,
            "spAttack": 47,
            "spDefense": 138,
            "speed": 30
        }
    },
    {
        "dex": 412,
        "name": "burmy",
        "generation": 4,
        "stats": {
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "spAttack": 29,
            "spDefense": 45,
            "speed": 36
        }
    },
    {
        "dex": 413,
        "name": "wormadam-plant",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 59,
            "defense": 85,
            "spAttack": 79,
            "spDefense": 105,
            "speed": 36
        }
    },
    {
        "dex": 414,
        "name": "mothim",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 94,
            "defense": 50,
            "spAttack": 94,
            "spDefense": 50,
            "speed": 66
        }
    },
    {
        "dex": 415,
        "name": "combee",
        "generation": 4,
        "stats": {
            "hp": 30,
            "attack": 30,
            "defense": 42,
            "spAttack": 30,
            "spDefense": 42,
            "speed": 70
        }
    },
    {
        "dex": 416,
        "name": "vespiquen",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 102,
            "spAttack": 80,
            "spDefense": 102,
            "speed": 40
        }
    },
    {
        "dex": 417,
        "name": "pachirisu",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "spAttack": 45,
            "spDefense": 90,
            "speed": 95
        }
    },
    {
        "dex": 418,
        "name": "buizel",
        "generation": 4,
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 35,
            "spAttack": 60,
            "spDefense": 30,
            "speed": 85
        }
    },
    {
        "dex": 419,
        "name": "floatzel",
        "generation": 4,
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 55,
            "spAttack": 85,
            "spDefense": 50,
            "speed": 115
        }
    },
    {
        "dex": 420,
        "name": "cherubi",
        "generation": 4,
        "stats": {
            "hp": 45,
            "attack": 35,
            "defense": 45,
            "spAttack": 62,
            "spDefense": 53,
            "speed": 35
        }
    },
    {
        "dex": 421,
        "name": "cherrim",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 70,
            "spAttack": 87,
            "spDefense": 78,
            "speed": 85
        }
    },
    {
        "dex": 422,
        "name": "shellos",
        "generation": 4,
        "stats": {
            "hp": 76,
            "attack": 48,
            "defense": 48,
            "spAttack": 57,
            "spDefense": 62,
            "speed": 34
        }
    },
    {
        "dex": 423,
        "name": "gastrodon",
        "generation": 4,
        "stats": {
            "hp": 111,
            "attack": 83,
            "defense": 68,
            "spAttack": 92,
            "spDefense": 82,
            "speed": 39
        }
    },
    {
        "dex": 424,
        "name": "ambipom",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 66,
            "spAttack": 60,
            "spDefense": 66,
            "speed": 115
        }
    },
    {
        "dex": 425,
        "name": "drifloon",
        "generation": 4,
        "stats": {
            "hp": 90,
            "attack": 50,
            "defense": 34,
            "spAttack": 60,
            "spDefense": 44,
            "speed": 70
        }
    },
    {
        "dex": 426,
        "name": "drifblim",
        "generation": 4,
        "stats": {
            "hp": 150,
            "attack": 80,
            "defense": 44,
            "spAttack": 90,
            "spDefense": 54,
            "speed": 80
        }
    },
    {
        "dex": 427,
        "name": "buneary",
        "generation": 4,
        "stats": {
            "hp": 55,
            "attack": 66,
            "defense": 44,
            "spAttack": 44,
            "spDefense": 56,
            "speed": 85
        }
    },
    {
        "dex": 428,
        "name": "lopunny",
        "generation": 4,
        "stats": {
            "hp": 65,
            "attack": 76,
            "defense": 84,
            "spAttack": 54,
            "spDefense": 96,
            "speed": 105
        }
    },
    {
        "dex": 429,
        "name": "mismagius",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAttack": 105,
            "spDefense": 105,
            "speed": 105
        }
    },
    {
        "dex": 430,
        "name": "honchkrow",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 52,
            "spAttack": 105,
            "spDefense": 52,
            "speed": 71
        }
    },
    {
        "dex": 431,
        "name": "glameow",
        "generation": 4,
        "stats": {
            "hp": 49,
            "attack": 55,
            "defense": 42,
            "spAttack": 42,
            "spDefense": 37,
            "speed": 85
        }
    },
    {
        "dex": 432,
        "name": "purugly",
        "generation": 4,
        "stats": {
            "hp": 71,
            "attack": 82,
            "defense": 64,
            "spAttack": 64,
            "spDefense": 59,
            "speed": 112
        }
    },
    {
        "dex": 433,
        "name": "chingling",
        "generation": 4,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "spAttack": 65,
            "spDefense": 50,
            "speed": 45
        }
    },
    {
        "dex": 434,
        "name": "stunky",
        "generation": 4,
        "stats": {
            "hp": 63,
            "attack": 63,
            "defense": 47,
            "spAttack": 41,
            "spDefense": 41,
            "speed": 74
        }
    },
    {
        "dex": 435,
        "name": "skuntank",
        "generation": 4,
        "stats": {
            "hp": 103,
            "attack": 93,
            "defense": 67,
            "spAttack": 71,
            "spDefense": 61,
            "speed": 84
        }
    },
    {
        "dex": 436,
        "name": "bronzor",
        "generation": 4,
        "stats": {
            "hp": 57,
            "attack": 24,
            "defense": 86,
            "spAttack": 24,
            "spDefense": 86,
            "speed": 23
        }
    },
    {
        "dex": 437,
        "name": "bronzong",
        "generation": 4,
        "stats": {
            "hp": 67,
            "attack": 89,
            "defense": 116,
            "spAttack": 79,
            "spDefense": 116,
            "speed": 33
        }
    },
    {
        "dex": 438,
        "name": "bonsly",
        "generation": 4,
        "stats": {
            "hp": 50,
            "attack": 80,
            "defense": 95,
            "spAttack": 10,
            "spDefense": 45,
            "speed": 10
        }
    },
    {
        "dex": 439,
        "name": "mime-jr",
        "generation": 4,
        "stats": {
            "hp": 20,
            "attack": 25,
            "defense": 45,
            "spAttack": 70,
            "spDefense": 90,
            "speed": 60
        }
    },
    {
        "dex": 440,
        "name": "happiny",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 5,
            "defense": 5,
            "spAttack": 15,
            "spDefense": 65,
            "speed": 30
        }
    },
    {
        "dex": 441,
        "name": "chatot",
        "generation": 4,
        "stats": {
            "hp": 76,
            "attack": 65,
            "defense": 45,
            "spAttack": 92,
            "spDefense": 42,
            "speed": 91
        }
    },
    {
        "dex": 442,
        "name": "spiritomb",
        "generation": 4,
        "stats": {
            "hp": 50,
            "attack": 92,
            "defense": 108,
            "spAttack": 92,
            "spDefense": 108,
            "speed": 35
        }
    },
    {
        "dex": 443,
        "name": "gible",
        "generation": 4,
        "stats": {
            "hp": 58,
            "attack": 70,
            "defense": 45,
            "spAttack": 40,
            "spDefense": 45,
            "speed": 42
        }
    },
    {
        "dex": 444,
        "name": "gabite",
        "generation": 4,
        "stats": {
            "hp": 68,
            "attack": 90,
            "defense": 65,
            "spAttack": 50,
            "spDefense": 55,
            "speed": 82
        }
    },
    {
        "dex": 445,
        "name": "garchomp",
        "generation": 4,
        "stats": {
            "hp": 108,
            "attack": 130,
            "defense": 95,
            "spAttack": 80,
            "spDefense": 85,
            "speed": 102
        }
    },
    {
        "dex": 446,
        "name": "munchlax",
        "generation": 4,
        "stats": {
            "hp": 135,
            "attack": 85,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 85,
            "speed": 5
        }
    },
    {
        "dex": 447,
        "name": "riolu",
        "generation": 4,
        "stats": {
            "hp": 40,
            "attack": 70,
            "defense": 40,
            "spAttack": 35,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 448,
        "name": "lucario",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 70,
            "spAttack": 115,
            "spDefense": 70,
            "speed": 90
        }
    },
    {
        "dex": 449,
        "name": "hippopotas",
        "generation": 4,
        "stats": {
            "hp": 68,
            "attack": 72,
            "defense": 78,
            "spAttack": 38,
            "spDefense": 42,
            "speed": 32
        }
    },
    {
        "dex": 450,
        "name": "hippowdon",
        "generation": 4,
        "stats": {
            "hp": 108,
            "attack": 112,
            "defense": 118,
            "spAttack": 68,
            "spDefense": 72,
            "speed": 47
        }
    },
    {
        "dex": 451,
        "name": "skorupi",
        "generation": 4,
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 90,
            "spAttack": 30,
            "spDefense": 55,
            "speed": 65
        }
    },
    {
        "dex": 452,
        "name": "drapion",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 110,
            "spAttack": 60,
            "spDefense": 75,
            "speed": 95
        }
    },
    {
        "dex": 453,
        "name": "croagunk",
        "generation": 4,
        "stats": {
            "hp": 48,
            "attack": 61,
            "defense": 40,
            "spAttack": 61,
            "spDefense": 40,
            "speed": 50
        }
    },
    {
        "dex": 454,
        "name": "toxicroak",
        "generation": 4,
        "stats": {
            "hp": 83,
            "attack": 106,
            "defense": 65,
            "spAttack": 86,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 455,
        "name": "carnivine",
        "generation": 4,
        "stats": {
            "hp": 74,
            "attack": 100,
            "defense": 72,
            "spAttack": 90,
            "spDefense": 72,
            "speed": 46
        }
    },
    {
        "dex": 456,
        "name": "finneon",
        "generation": 4,
        "stats": {
            "hp": 49,
            "attack": 49,
            "defense": 56,
            "spAttack": 49,
            "spDefense": 61,
            "speed": 66
        }
    },
    {
        "dex": 457,
        "name": "lumineon",
        "generation": 4,
        "stats": {
            "hp": 69,
            "attack": 69,
            "defense": 76,
            "spAttack": 69,
            "spDefense": 86,
            "speed": 91
        }
    },
    {
        "dex": 458,
        "name": "mantyke",
        "generation": 4,
        "stats": {
            "hp": 45,
            "attack": 20,
            "defense": 50,
            "spAttack": 60,
            "spDefense": 120,
            "speed": 50
        }
    },
    {
        "dex": 459,
        "name": "snover",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 50,
            "spAttack": 62,
            "spDefense": 60,
            "speed": 40
        }
    },
    {
        "dex": 460,
        "name": "abomasnow",
        "generation": 4,
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 75,
            "spAttack": 92,
            "spDefense": 85,
            "speed": 60
        }
    },
    {
        "dex": 461,
        "name": "weavile",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 120,
            "defense": 65,
            "spAttack": 45,
            "spDefense": 85,
            "speed": 125
        }
    },
    {
        "dex": 462,
        "name": "magnezone",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 115,
            "spAttack": 130,
            "spDefense": 90,
            "speed": 60
        }
    },
    {
        "dex": 463,
        "name": "lickilicky",
        "generation": 4,
        "stats": {
            "hp": 110,
            "attack": 85,
            "defense": 95,
            "spAttack": 80,
            "spDefense": 95,
            "speed": 50
        }
    },
    {
        "dex": 464,
        "name": "rhyperior",
        "generation": 4,
        "stats": {
            "hp": 115,
            "attack": 140,
            "defense": 130,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 40
        }
    },
    {
        "dex": 465,
        "name": "tangrowth",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 125,
            "spAttack": 110,
            "spDefense": 50,
            "speed": 50
        }
    },
    {
        "dex": 466,
        "name": "electivire",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 123,
            "defense": 67,
            "spAttack": 95,
            "spDefense": 85,
            "speed": 95
        }
    },
    {
        "dex": 467,
        "name": "magmortar",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 67,
            "spAttack": 125,
            "spDefense": 95,
            "speed": 83
        }
    },
    {
        "dex": 468,
        "name": "togekiss",
        "generation": 4,
        "stats": {
            "hp": 85,
            "attack": 50,
            "defense": 95,
            "spAttack": 120,
            "spDefense": 115,
            "speed": 80
        }
    },
    {
        "dex": 469,
        "name": "yanmega",
        "generation": 4,
        "stats": {
            "hp": 86,
            "attack": 76,
            "defense": 86,
            "spAttack": 116,
            "spDefense": 56,
            "speed": 95
        }
    },
    {
        "dex": 470,
        "name": "leafeon",
        "generation": 4,
        "stats": {
            "hp": 65,
            "attack": 110,
            "defense": 130,
            "spAttack": 60,
            "spDefense": 65,
            "speed": 95
        }
    },
    {
        "dex": 471,
        "name": "glaceon",
        "generation": 4,
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 110,
            "spAttack": 130,
            "spDefense": 95,
            "speed": 65
        }
    },
    {
        "dex": 472,
        "name": "gliscor",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 125,
            "spAttack": 45,
            "spDefense": 75,
            "speed": 95
        }
    },
    {
        "dex": 473,
        "name": "mamoswine",
        "generation": 4,
        "stats": {
            "hp": 110,
            "attack": 130,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 60,
            "speed": 80
        }
    },
    {
        "dex": 474,
        "name": "porygon-z",
        "generation": 4,
        "stats": {
            "hp": 85,
            "attack": 80,
            "defense": 70,
            "spAttack": 135,
            "spDefense": 75,
            "speed": 90
        }
    },
    {
        "dex": 475,
        "name": "gallade",
        "generation": 4,
        "stats": {
            "hp": 68,
            "attack": 125,
            "defense": 65,
            "spAttack": 65,
            "spDefense": 115,
            "speed": 80
        }
    },
    {
        "dex": 476,
        "name": "probopass",
        "generation": 4,
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 145,
            "spAttack": 75,
            "spDefense": 150,
            "speed": 40
        }
    },
    {
        "dex": 477,
        "name": "dusknoir",
        "generation": 4,
        "stats": {
            "hp": 45,
            "attack": 100,
            "defense": 135,
            "spAttack": 65,
            "spDefense": 135,
            "speed": 45
        }
    },
    {
        "dex": 478,
        "name": "froslass",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 70,
            "spAttack": 80,
            "spDefense": 70,
            "speed": 110
        }
    },
    {
        "dex": 479,
        "name": "rotom",
        "generation": 4,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 77,
            "spAttack": 95,
            "spDefense": 77,
            "speed": 91
        }
    },
    {
        "dex": 480,
        "name": "uxie",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 130,
            "spAttack": 75,
            "spDefense": 130,
            "speed": 95
        }
    },
    {
        "dex": 481,
        "name": "mesprit",
        "generation": 4,
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 105,
            "spAttack": 105,
            "spDefense": 105,
            "speed": 80
        }
    },
    {
        "dex": 482,
        "name": "azelf",
        "generation": 4,
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 70,
            "spAttack": 125,
            "spDefense": 70,
            "speed": 115
        }
    },
    {
        "dex": 483,
        "name": "dialga",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 120,
            "spAttack": 150,
            "spDefense": 100,
            "speed": 90
        }
    },
    {
        "dex": 484,
        "name": "palkia",
        "generation": 4,
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 100,
            "spAttack": 150,
            "spDefense": 120,
            "speed": 100
        }
    },
    {
        "dex": 485,
        "name": "heatran",
        "generation": 4,
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 106,
            "spAttack": 130,
            "spDefense": 106,
            "speed": 77
        }
    },
    {
        "dex": 486,
        "name": "regigigas",
        "generation": 4,
        "stats": {
            "hp": 110,
            "attack": 160,
            "defense": 110,
            "spAttack": 80,
            "spDefense": 110,
            "speed": 100
        }
    },
    {
        "dex": 487,
        "name": "giratina-altered",
        "generation": 4,
        "stats": {
            "hp": 150,
            "attack": 100,
            "defense": 120,
            "spAttack": 100,
            "spDefense": 120,
            "speed": 90
        }
    },
    {
        "dex": 488,
        "name": "cresselia",
        "generation": 4,
        "stats": {
            "hp": 120,
            "attack": 70,
            "defense": 110,
            "spAttack": 75,
            "spDefense": 120,
            "speed": 85
        }
    },
    {
        "dex": 489,
        "name": "phione",
        "generation": 4,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 80
        }
    },
    {
        "dex": 490,
        "name": "manaphy",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 491,
        "name": "darkrai",
        "generation": 4,
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 90,
            "spAttack": 135,
            "spDefense": 90,
            "speed": 125
        }
    },
    {
        "dex": 492,
        "name": "shaymin-land",
        "generation": 4,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 493,
        "name": "arceus",
        "generation": 4,
        "stats": {
            "hp": 120,
            "attack": 120,
            "defense": 120,
            "spAttack": 120,
            "spDefense": 120,
            "speed": 120
        }
    },
    {
        "dex": 494,
        "name": "victini",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 100
        }
    },
    {
        "dex": 495,
        "name": "snivy",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 55,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 63
        }
    },
    {
        "dex": 496,
        "name": "servine",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "spAttack": 60,
            "spDefense": 75,
            "speed": 83
        }
    },
    {
        "dex": 497,
        "name": "serperior",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 95,
            "spAttack": 75,
            "spDefense": 95,
            "speed": 113
        }
    },
    {
        "dex": 498,
        "name": "tepig",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 63,
            "defense": 45,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 45
        }
    },
    {
        "dex": 499,
        "name": "pignite",
        "generation": 5,
        "stats": {
            "hp": 90,
            "attack": 93,
            "defense": 55,
            "spAttack": 70,
            "spDefense": 55,
            "speed": 55
        }
    },
    {
        "dex": 500,
        "name": "emboar",
        "generation": 5,
        "stats": {
            "hp": 110,
            "attack": 123,
            "defense": 65,
            "spAttack": 100,
            "spDefense": 65,
            "speed": 65
        }
    },
    {
        "dex": 501,
        "name": "oshawott",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 45,
            "spAttack": 63,
            "spDefense": 45,
            "speed": 45
        }
    },
    {
        "dex": 502,
        "name": "dewott",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 60,
            "spAttack": 83,
            "spDefense": 60,
            "speed": 60
        }
    },
    {
        "dex": 503,
        "name": "samurott",
        "generation": 5,
        "stats": {
            "hp": 95,
            "attack": 100,
            "defense": 85,
            "spAttack": 108,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 504,
        "name": "patrat",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 39,
            "spAttack": 35,
            "spDefense": 39,
            "speed": 42
        }
    },
    {
        "dex": 505,
        "name": "watchog",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 69,
            "spAttack": 60,
            "spDefense": 69,
            "speed": 77
        }
    },
    {
        "dex": 506,
        "name": "lillipup",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 45,
            "spAttack": 25,
            "spDefense": 45,
            "speed": 55
        }
    },
    {
        "dex": 507,
        "name": "herdier",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 65,
            "spAttack": 35,
            "spDefense": 65,
            "speed": 60
        }
    },
    {
        "dex": 508,
        "name": "stoutland",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 110,
            "defense": 90,
            "spAttack": 45,
            "spDefense": 90,
            "speed": 80
        }
    },
    {
        "dex": 509,
        "name": "purrloin",
        "generation": 5,
        "stats": {
            "hp": 41,
            "attack": 50,
            "defense": 37,
            "spAttack": 50,
            "spDefense": 37,
            "speed": 66
        }
    },
    {
        "dex": 510,
        "name": "liepard",
        "generation": 5,
        "stats": {
            "hp": 64,
            "attack": 88,
            "defense": 50,
            "spAttack": 88,
            "spDefense": 50,
            "speed": 106
        }
    },
    {
        "dex": 511,
        "name": "pansage",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAttack": 53,
            "spDefense": 48,
            "speed": 64
        }
    },
    {
        "dex": 512,
        "name": "simisage",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAttack": 98,
            "spDefense": 63,
            "speed": 101
        }
    },
    {
        "dex": 513,
        "name": "pansear",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAttack": 53,
            "spDefense": 48,
            "speed": 64
        }
    },
    {
        "dex": 514,
        "name": "simisear",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAttack": 98,
            "spDefense": 63,
            "speed": 101
        }
    },
    {
        "dex": 515,
        "name": "panpour",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAttack": 53,
            "spDefense": 48,
            "speed": 64
        }
    },
    {
        "dex": 516,
        "name": "simipour",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAttack": 98,
            "spDefense": 63,
            "speed": 101
        }
    },
    {
        "dex": 517,
        "name": "munna",
        "generation": 5,
        "stats": {
            "hp": 76,
            "attack": 25,
            "defense": 45,
            "spAttack": 67,
            "spDefense": 55,
            "speed": 24
        }
    },
    {
        "dex": 518,
        "name": "musharna",
        "generation": 5,
        "stats": {
            "hp": 116,
            "attack": 55,
            "defense": 85,
            "spAttack": 107,
            "spDefense": 95,
            "speed": 29
        }
    },
    {
        "dex": 519,
        "name": "pidove",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 55,
            "defense": 50,
            "spAttack": 36,
            "spDefense": 30,
            "speed": 43
        }
    },
    {
        "dex": 520,
        "name": "tranquill",
        "generation": 5,
        "stats": {
            "hp": 62,
            "attack": 77,
            "defense": 62,
            "spAttack": 50,
            "spDefense": 42,
            "speed": 65
        }
    },
    {
        "dex": 521,
        "name": "unfezant",
        "generation": 5,
        "stats": {
            "hp": 80,
            "attack": 115,
            "defense": 80,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 93
        }
    },
    {
        "dex": 522,
        "name": "blitzle",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 32,
            "spAttack": 50,
            "spDefense": 32,
            "speed": 76
        }
    },
    {
        "dex": 523,
        "name": "zebstrika",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 63,
            "spAttack": 80,
            "spDefense": 63,
            "speed": 116
        }
    },
    {
        "dex": 524,
        "name": "roggenrola",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 85,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 15
        }
    },
    {
        "dex": 525,
        "name": "boldore",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 105,
            "spAttack": 50,
            "spDefense": 40,
            "speed": 20
        }
    },
    {
        "dex": 526,
        "name": "gigalith",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 135,
            "defense": 130,
            "spAttack": 60,
            "spDefense": 80,
            "speed": 25
        }
    },
    {
        "dex": 527,
        "name": "woobat",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 43,
            "spAttack": 55,
            "spDefense": 43,
            "speed": 72
        }
    },
    {
        "dex": 528,
        "name": "swoobat",
        "generation": 5,
        "stats": {
            "hp": 67,
            "attack": 57,
            "defense": 55,
            "spAttack": 77,
            "spDefense": 55,
            "speed": 114
        }
    },
    {
        "dex": 529,
        "name": "drilbur",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 40,
            "spAttack": 30,
            "spDefense": 45,
            "speed": 68
        }
    },
    {
        "dex": 530,
        "name": "excadrill",
        "generation": 5,
        "stats": {
            "hp": 110,
            "attack": 135,
            "defense": 60,
            "spAttack": 50,
            "spDefense": 65,
            "speed": 88
        }
    },
    {
        "dex": 531,
        "name": "audino",
        "generation": 5,
        "stats": {
            "hp": 103,
            "attack": 60,
            "defense": 86,
            "spAttack": 60,
            "spDefense": 86,
            "speed": 50
        }
    },
    {
        "dex": 532,
        "name": "timburr",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 55,
            "spAttack": 25,
            "spDefense": 35,
            "speed": 35
        }
    },
    {
        "dex": 533,
        "name": "gurdurr",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 85,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 40
        }
    },
    {
        "dex": 534,
        "name": "conkeldurr",
        "generation": 5,
        "stats": {
            "hp": 105,
            "attack": 140,
            "defense": 95,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 535,
        "name": "tympole",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 40,
            "speed": 64
        }
    },
    {
        "dex": 536,
        "name": "palpitoad",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 65,
            "defense": 55,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 69
        }
    },
    {
        "dex": 537,
        "name": "seismitoad",
        "generation": 5,
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 75,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 74
        }
    },
    {
        "dex": 538,
        "name": "throh",
        "generation": 5,
        "stats": {
            "hp": 120,
            "attack": 100,
            "defense": 85,
            "spAttack": 30,
            "spDefense": 85,
            "speed": 45
        }
    },
    {
        "dex": 539,
        "name": "sawk",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 75,
            "spAttack": 30,
            "spDefense": 75,
            "speed": 85
        }
    },
    {
        "dex": 540,
        "name": "sewaddle",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 53,
            "defense": 70,
            "spAttack": 40,
            "spDefense": 60,
            "speed": 42
        }
    },
    {
        "dex": 541,
        "name": "swadloon",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 63,
            "defense": 90,
            "spAttack": 50,
            "spDefense": 80,
            "speed": 42
        }
    },
    {
        "dex": 542,
        "name": "leavanny",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 103,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 92
        }
    },
    {
        "dex": 543,
        "name": "venipede",
        "generation": 5,
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 59,
            "spAttack": 30,
            "spDefense": 39,
            "speed": 57
        }
    },
    {
        "dex": 544,
        "name": "whirlipede",
        "generation": 5,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 99,
            "spAttack": 40,
            "spDefense": 79,
            "speed": 47
        }
    },
    {
        "dex": 545,
        "name": "scolipede",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 89,
            "spAttack": 55,
            "spDefense": 69,
            "speed": 112
        }
    },
    {
        "dex": 546,
        "name": "cottonee",
        "generation": 5,
        "stats": {
            "hp": 40,
            "attack": 27,
            "defense": 60,
            "spAttack": 37,
            "spDefense": 50,
            "speed": 66
        }
    },
    {
        "dex": 547,
        "name": "whimsicott",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 67,
            "defense": 85,
            "spAttack": 77,
            "spDefense": 75,
            "speed": 116
        }
    },
    {
        "dex": 548,
        "name": "petilil",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 35,
            "defense": 50,
            "spAttack": 70,
            "spDefense": 50,
            "speed": 30
        }
    },
    {
        "dex": 549,
        "name": "lilligant",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 75,
            "spAttack": 110,
            "spDefense": 75,
            "speed": 90
        }
    },
    {
        "dex": 550,
        "name": "basculin-red-striped",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 55,
            "speed": 98
        }
    },
    {
        "dex": 551,
        "name": "sandile",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 72,
            "defense": 35,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 65
        }
    },
    {
        "dex": 552,
        "name": "krokorok",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 82,
            "defense": 45,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 74
        }
    },
    {
        "dex": 553,
        "name": "krookodile",
        "generation": 5,
        "stats": {
            "hp": 95,
            "attack": 117,
            "defense": 80,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 92
        }
    },
    {
        "dex": 554,
        "name": "darumaka",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "spAttack": 15,
            "spDefense": 45,
            "speed": 50
        }
    },
    {
        "dex": 555,
        "name": "darmanitan-standard",
        "generation": 5,
        "stats": {
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "spAttack": 30,
            "spDefense": 55,
            "speed": 95
        }
    },
    {
        "dex": 556,
        "name": "maractus",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 86,
            "defense": 67,
            "spAttack": 106,
            "spDefense": 67,
            "speed": 60
        }
    },
    {
        "dex": 557,
        "name": "dwebble",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 85,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 55
        }
    },
    {
        "dex": 558,
        "name": "crustle",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 125,
            "spAttack": 65,
            "spDefense": 75,
            "speed": 45
        }
    },
    {
        "dex": 559,
        "name": "scraggy",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 70,
            "spAttack": 35,
            "spDefense": 70,
            "speed": 48
        }
    },
    {
        "dex": 560,
        "name": "scrafty",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 115,
            "spAttack": 45,
            "spDefense": 115,
            "speed": 58
        }
    },
    {
        "dex": 561,
        "name": "sigilyph",
        "generation": 5,
        "stats": {
            "hp": 72,
            "attack": 58,
            "defense": 80,
            "spAttack": 103,
            "spDefense": 80,
            "speed": 97
        }
    },
    {
        "dex": 562,
        "name": "yamask",
        "generation": 5,
        "stats": {
            "hp": 38,
            "attack": 30,
            "defense": 85,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 30
        }
    },
    {
        "dex": 563,
        "name": "cofagrigus",
        "generation": 5,
        "stats": {
            "hp": 58,
            "attack": 50,
            "defense": 145,
            "spAttack": 95,
            "spDefense": 105,
            "speed": 30
        }
    },
    {
        "dex": 564,
        "name": "tirtouga",
        "generation": 5,
        "stats": {
            "hp": 54,
            "attack": 78,
            "defense": 103,
            "spAttack": 53,
            "spDefense": 45,
            "speed": 22
        }
    },
    {
        "dex": 565,
        "name": "carracosta",
        "generation": 5,
        "stats": {
            "hp": 74,
            "attack": 108,
            "defense": 133,
            "spAttack": 83,
            "spDefense": 65,
            "speed": 32
        }
    },
    {
        "dex": 566,
        "name": "archen",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 112,
            "defense": 45,
            "spAttack": 74,
            "spDefense": 45,
            "speed": 70
        }
    },
    {
        "dex": 567,
        "name": "archeops",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 140,
            "defense": 65,
            "spAttack": 112,
            "spDefense": 65,
            "speed": 110
        }
    },
    {
        "dex": 568,
        "name": "trubbish",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 62,
            "spAttack": 40,
            "spDefense": 62,
            "speed": 65
        }
    },
    {
        "dex": 569,
        "name": "garbodor",
        "generation": 5,
        "stats": {
            "hp": 80,
            "attack": 95,
            "defense": 82,
            "spAttack": 60,
            "spDefense": 82,
            "speed": 75
        }
    },
    {
        "dex": 570,
        "name": "zorua",
        "generation": 5,
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 40,
            "spAttack": 80,
            "spDefense": 40,
            "speed": 65
        }
    },
    {
        "dex": 571,
        "name": "zoroark",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 105,
            "defense": 60,
            "spAttack": 120,
            "spDefense": 60,
            "speed": 105
        }
    },
    {
        "dex": 572,
        "name": "minccino",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 75
        }
    },
    {
        "dex": 573,
        "name": "cinccino",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 60,
            "spAttack": 65,
            "spDefense": 60,
            "speed": 115
        }
    },
    {
        "dex": 574,
        "name": "gothita",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 45
        }
    },
    {
        "dex": 575,
        "name": "gothorita",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "spAttack": 75,
            "spDefense": 85,
            "speed": 55
        }
    },
    {
        "dex": 576,
        "name": "gothitelle",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 95,
            "spAttack": 95,
            "spDefense": 110,
            "speed": 65
        }
    },
    {
        "dex": 577,
        "name": "solosis",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 40,
            "spAttack": 105,
            "spDefense": 50,
            "speed": 20
        }
    },
    {
        "dex": 578,
        "name": "duosion",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 40,
            "defense": 50,
            "spAttack": 125,
            "spDefense": 60,
            "speed": 30
        }
    },
    {
        "dex": 579,
        "name": "reuniclus",
        "generation": 5,
        "stats": {
            "hp": 110,
            "attack": 65,
            "defense": 75,
            "spAttack": 125,
            "spDefense": 85,
            "speed": 30
        }
    },
    {
        "dex": 580,
        "name": "ducklett",
        "generation": 5,
        "stats": {
            "hp": 62,
            "attack": 44,
            "defense": 50,
            "spAttack": 44,
            "spDefense": 50,
            "speed": 55
        }
    },
    {
        "dex": 581,
        "name": "swanna",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 87,
            "defense": 63,
            "spAttack": 87,
            "spDefense": 63,
            "speed": 98
        }
    },
    {
        "dex": 582,
        "name": "vanillite",
        "generation": 5,
        "stats": {
            "hp": 36,
            "attack": 50,
            "defense": 50,
            "spAttack": 65,
            "spDefense": 60,
            "speed": 44
        }
    },
    {
        "dex": 583,
        "name": "vanillish",
        "generation": 5,
        "stats": {
            "hp": 51,
            "attack": 65,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 75,
            "speed": 59
        }
    },
    {
        "dex": 584,
        "name": "vanilluxe",
        "generation": 5,
        "stats": {
            "hp": 71,
            "attack": 95,
            "defense": 85,
            "spAttack": 110,
            "spDefense": 95,
            "speed": 79
        }
    },
    {
        "dex": 585,
        "name": "deerling",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 75
        }
    },
    {
        "dex": 586,
        "name": "sawsbuck",
        "generation": 5,
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 95
        }
    },
    {
        "dex": 587,
        "name": "emolga",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 60,
            "spAttack": 75,
            "spDefense": 60,
            "speed": 103
        }
    },
    {
        "dex": 588,
        "name": "karrablast",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 45,
            "spAttack": 40,
            "spDefense": 45,
            "speed": 60
        }
    },
    {
        "dex": 589,
        "name": "escavalier",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 135,
            "defense": 105,
            "spAttack": 60,
            "spDefense": 105,
            "speed": 20
        }
    },
    {
        "dex": 590,
        "name": "foongus",
        "generation": 5,
        "stats": {
            "hp": 69,
            "attack": 55,
            "defense": 45,
            "spAttack": 55,
            "spDefense": 55,
            "speed": 15
        }
    },
    {
        "dex": 591,
        "name": "amoonguss",
        "generation": 5,
        "stats": {
            "hp": 114,
            "attack": 85,
            "defense": 70,
            "spAttack": 85,
            "spDefense": 80,
            "speed": 30
        }
    },
    {
        "dex": 592,
        "name": "frillish-male",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 50,
            "spAttack": 65,
            "spDefense": 85,
            "speed": 40
        }
    },
    {
        "dex": 593,
        "name": "jellicent-male",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 60,
            "defense": 70,
            "spAttack": 85,
            "spDefense": 105,
            "speed": 60
        }
    },
    {
        "dex": 594,
        "name": "alomomola",
        "generation": 5,
        "stats": {
            "hp": 165,
            "attack": 75,
            "defense": 80,
            "spAttack": 40,
            "spDefense": 45,
            "speed": 65
        }
    },
    {
        "dex": 595,
        "name": "joltik",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 47,
            "defense": 50,
            "spAttack": 57,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 596,
        "name": "galvantula",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 77,
            "defense": 60,
            "spAttack": 97,
            "spDefense": 60,
            "speed": 108
        }
    },
    {
        "dex": 597,
        "name": "ferroseed",
        "generation": 5,
        "stats": {
            "hp": 44,
            "attack": 50,
            "defense": 91,
            "spAttack": 24,
            "spDefense": 86,
            "speed": 10
        }
    },
    {
        "dex": 598,
        "name": "ferrothorn",
        "generation": 5,
        "stats": {
            "hp": 74,
            "attack": 94,
            "defense": 131,
            "spAttack": 54,
            "spDefense": 116,
            "speed": 20
        }
    },
    {
        "dex": 599,
        "name": "klink",
        "generation": 5,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 70,
            "spAttack": 45,
            "spDefense": 60,
            "speed": 30
        }
    },
    {
        "dex": 600,
        "name": "klang",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 95,
            "spAttack": 70,
            "spDefense": 85,
            "speed": 50
        }
    },
    {
        "dex": 601,
        "name": "klinklang",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 115,
            "spAttack": 70,
            "spDefense": 85,
            "speed": 90
        }
    },
    {
        "dex": 602,
        "name": "tynamo",
        "generation": 5,
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "spAttack": 45,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 603,
        "name": "eelektrik",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 85,
            "defense": 70,
            "spAttack": 75,
            "spDefense": 70,
            "speed": 40
        }
    },
    {
        "dex": 604,
        "name": "eelektross",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 115,
            "defense": 80,
            "spAttack": 105,
            "spDefense": 80,
            "speed": 50
        }
    },
    {
        "dex": 605,
        "name": "elgyem",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "spAttack": 85,
            "spDefense": 55,
            "speed": 30
        }
    },
    {
        "dex": 606,
        "name": "beheeyem",
        "generation": 5,
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 75,
            "spAttack": 125,
            "spDefense": 95,
            "speed": 40
        }
    },
    {
        "dex": 607,
        "name": "litwick",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 30,
            "defense": 55,
            "spAttack": 65,
            "spDefense": 55,
            "speed": 20
        }
    },
    {
        "dex": 608,
        "name": "lampent",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "spAttack": 95,
            "spDefense": 60,
            "speed": 55
        }
    },
    {
        "dex": 609,
        "name": "chandelure",
        "generation": 5,
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 90,
            "spAttack": 145,
            "spDefense": 90,
            "speed": 80
        }
    },
    {
        "dex": 610,
        "name": "axew",
        "generation": 5,
        "stats": {
            "hp": 46,
            "attack": 87,
            "defense": 60,
            "spAttack": 30,
            "spDefense": 40,
            "speed": 57
        }
    },
    {
        "dex": 611,
        "name": "fraxure",
        "generation": 5,
        "stats": {
            "hp": 66,
            "attack": 117,
            "defense": 70,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 67
        }
    },
    {
        "dex": 612,
        "name": "haxorus",
        "generation": 5,
        "stats": {
            "hp": 76,
            "attack": 147,
            "defense": 90,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 97
        }
    },
    {
        "dex": 613,
        "name": "cubchoo",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 40,
            "spAttack": 60,
            "spDefense": 40,
            "speed": 40
        }
    },
    {
        "dex": 614,
        "name": "beartic",
        "generation": 5,
        "stats": {
            "hp": 95,
            "attack": 130,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 50
        }
    },
    {
        "dex": 615,
        "name": "cryogonal",
        "generation": 5,
        "stats": {
            "hp": 80,
            "attack": 50,
            "defense": 50,
            "spAttack": 95,
            "spDefense": 135,
            "speed": 105
        }
    },
    {
        "dex": 616,
        "name": "shelmet",
        "generation": 5,
        "stats": {
            "hp": 50,
            "attack": 40,
            "defense": 85,
            "spAttack": 40,
            "spDefense": 65,
            "speed": 25
        }
    },
    {
        "dex": 617,
        "name": "accelgor",
        "generation": 5,
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 40,
            "spAttack": 100,
            "spDefense": 60,
            "speed": 145
        }
    },
    {
        "dex": 618,
        "name": "stunfisk",
        "generation": 5,
        "stats": {
            "hp": 109,
            "attack": 66,
            "defense": 84,
            "spAttack": 81,
            "spDefense": 99,
            "speed": 32
        }
    },
    {
        "dex": 619,
        "name": "mienfoo",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 85,
            "defense": 50,
            "spAttack": 55,
            "spDefense": 50,
            "speed": 65
        }
    },
    {
        "dex": 620,
        "name": "mienshao",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 60,
            "spAttack": 95,
            "spDefense": 60,
            "speed": 105
        }
    },
    {
        "dex": 621,
        "name": "druddigon",
        "generation": 5,
        "stats": {
            "hp": 77,
            "attack": 120,
            "defense": 90,
            "spAttack": 60,
            "spDefense": 90,
            "speed": 48
        }
    },
    {
        "dex": 622,
        "name": "golett",
        "generation": 5,
        "stats": {
            "hp": 59,
            "attack": 74,
            "defense": 50,
            "spAttack": 35,
            "spDefense": 50,
            "speed": 35
        }
    },
    {
        "dex": 623,
        "name": "golurk",
        "generation": 5,
        "stats": {
            "hp": 89,
            "attack": 124,
            "defense": 80,
            "spAttack": 55,
            "spDefense": 80,
            "speed": 55
        }
    },
    {
        "dex": 624,
        "name": "pawniard",
        "generation": 5,
        "stats": {
            "hp": 45,
            "attack": 85,
            "defense": 70,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 625,
        "name": "bisharp",
        "generation": 5,
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 70
        }
    },
    {
        "dex": 626,
        "name": "bouffalant",
        "generation": 5,
        "stats": {
            "hp": 95,
            "attack": 110,
            "defense": 95,
            "spAttack": 40,
            "spDefense": 95,
            "speed": 55
        }
    },
    {
        "dex": 627,
        "name": "rufflet",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 83,
            "defense": 50,
            "spAttack": 37,
            "spDefense": 50,
            "speed": 60
        }
    },
    {
        "dex": 628,
        "name": "braviary",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 123,
            "defense": 75,
            "spAttack": 57,
            "spDefense": 75,
            "speed": 80
        }
    },
    {
        "dex": 629,
        "name": "vullaby",
        "generation": 5,
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 75,
            "spAttack": 45,
            "spDefense": 65,
            "speed": 60
        }
    },
    {
        "dex": 630,
        "name": "mandibuzz",
        "generation": 5,
        "stats": {
            "hp": 110,
            "attack": 65,
            "defense": 105,
            "spAttack": 55,
            "spDefense": 95,
            "speed": 80
        }
    },
    {
        "dex": 631,
        "name": "heatmor",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 97,
            "defense": 66,
            "spAttack": 105,
            "spDefense": 66,
            "speed": 65
        }
    },
    {
        "dex": 632,
        "name": "durant",
        "generation": 5,
        "stats": {
            "hp": 58,
            "attack": 109,
            "defense": 112,
            "spAttack": 48,
            "spDefense": 48,
            "speed": 109
        }
    },
    {
        "dex": 633,
        "name": "deino",
        "generation": 5,
        "stats": {
            "hp": 52,
            "attack": 65,
            "defense": 50,
            "spAttack": 45,
            "spDefense": 50,
            "speed": 38
        }
    },
    {
        "dex": 634,
        "name": "zweilous",
        "generation": 5,
        "stats": {
            "hp": 72,
            "attack": 85,
            "defense": 70,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 58
        }
    },
    {
        "dex": 635,
        "name": "hydreigon",
        "generation": 5,
        "stats": {
            "hp": 92,
            "attack": 105,
            "defense": 90,
            "spAttack": 125,
            "spDefense": 90,
            "speed": 98
        }
    },
    {
        "dex": 636,
        "name": "larvesta",
        "generation": 5,
        "stats": {
            "hp": 55,
            "attack": 85,
            "defense": 55,
            "spAttack": 50,
            "spDefense": 55,
            "speed": 60
        }
    },
    {
        "dex": 637,
        "name": "volcarona",
        "generation": 5,
        "stats": {
            "hp": 85,
            "attack": 60,
            "defense": 65,
            "spAttack": 135,
            "spDefense": 105,
            "speed": 100
        }
    },
    {
        "dex": 638,
        "name": "cobalion",
        "generation": 5,
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 129,
            "spAttack": 90,
            "spDefense": 72,
            "speed": 108
        }
    },
    {
        "dex": 639,
        "name": "terrakion",
        "generation": 5,
        "stats": {
            "hp": 91,
            "attack": 129,
            "defense": 90,
            "spAttack": 72,
            "spDefense": 90,
            "speed": 108
        }
    },
    {
        "dex": 640,
        "name": "virizion",
        "generation": 5,
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 72,
            "spAttack": 90,
            "spDefense": 129,
            "speed": 108
        }
    },
    {
        "dex": 641,
        "name": "tornadus-incarnate",
        "generation": 5,
        "stats": {
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "spAttack": 125,
            "spDefense": 80,
            "speed": 111
        }
    },
    {
        "dex": 642,
        "name": "thundurus-incarnate",
        "generation": 5,
        "stats": {
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "spAttack": 125,
            "spDefense": 80,
            "speed": 111
        }
    },
    {
        "dex": 643,
        "name": "reshiram",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 100,
            "spAttack": 150,
            "spDefense": 120,
            "speed": 90
        }
    },
    {
        "dex": 644,
        "name": "zekrom",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 120,
            "spAttack": 120,
            "spDefense": 100,
            "speed": 90
        }
    },
    {
        "dex": 645,
        "name": "landorus-incarnate",
        "generation": 5,
        "stats": {
            "hp": 89,
            "attack": 125,
            "defense": 90,
            "spAttack": 115,
            "spDefense": 80,
            "speed": 101
        }
    },
    {
        "dex": 646,
        "name": "kyurem",
        "generation": 5,
        "stats": {
            "hp": 125,
            "attack": 130,
            "defense": 90,
            "spAttack": 130,
            "spDefense": 90,
            "speed": 95
        }
    },
    {
        "dex": 647,
        "name": "keldeo-ordinary",
        "generation": 5,
        "stats": {
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "spAttack": 129,
            "spDefense": 90,
            "speed": 108
        }
    },
    {
        "dex": 648,
        "name": "meloetta-aria",
        "generation": 5,
        "stats": {
            "hp": 100,
            "attack": 77,
            "defense": 77,
            "spAttack": 128,
            "spDefense": 128,
            "speed": 90
        }
    },
    {
        "dex": 649,
        "name": "genesect",
        "generation": 5,
        "stats": {
            "hp": 71,
            "attack": 120,
            "defense": 95,
            "spAttack": 120,
            "spDefense": 95,
            "speed": 99
        }
    },
    {
        "dex": 650,
        "name": "chespin",
        "generation": 6,
        "stats": {
            "hp": 56,
            "attack": 61,
            "defense": 65,
            "spAttack": 48,
            "spDefense": 45,
            "speed": 38
        }
    },
    {
        "dex": 651,
        "name": "quilladin",
        "generation": 6,
        "stats": {
            "hp": 61,
            "attack": 78,
            "defense": 95,
            "spAttack": 56,
            "spDefense": 58,
            "speed": 57
        }
    },
    {
        "dex": 652,
        "name": "chesnaught",
        "generation": 6,
        "stats": {
            "hp": 88,
            "attack": 107,
            "defense": 122,
            "spAttack": 74,
            "spDefense": 75,
            "speed": 64
        }
    },
    {
        "dex": 653,
        "name": "fennekin",
        "generation": 6,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAttack": 62,
            "spDefense": 60,
            "speed": 60
        }
    },
    {
        "dex": 654,
        "name": "braixen",
        "generation": 6,
        "stats": {
            "hp": 59,
            "attack": 59,
            "defense": 58,
            "spAttack": 90,
            "spDefense": 70,
            "speed": 73
        }
    },
    {
        "dex": 655,
        "name": "delphox",
        "generation": 6,
        "stats": {
            "hp": 75,
            "attack": 69,
            "defense": 72,
            "spAttack": 114,
            "spDefense": 100,
            "speed": 104
        }
    },
    {
        "dex": 656,
        "name": "froakie",
        "generation": 6,
        "stats": {
            "hp": 41,
            "attack": 56,
            "defense": 40,
            "spAttack": 62,
            "spDefense": 44,
            "speed": 71
        }
    },
    {
        "dex": 657,
        "name": "frogadier",
        "generation": 6,
        "stats": {
            "hp": 54,
            "attack": 63,
            "defense": 52,
            "spAttack": 83,
            "spDefense": 56,
            "speed": 97
        }
    },
    {
        "dex": 658,
        "name": "greninja",
        "generation": 6,
        "stats": {
            "hp": 72,
            "attack": 95,
            "defense": 67,
            "spAttack": 103,
            "spDefense": 71,
            "speed": 122
        }
    },
    {
        "dex": 659,
        "name": "bunnelby",
        "generation": 6,
        "stats": {
            "hp": 38,
            "attack": 36,
            "defense": 38,
            "spAttack": 32,
            "spDefense": 36,
            "speed": 57
        }
    },
    {
        "dex": 660,
        "name": "diggersby",
        "generation": 6,
        "stats": {
            "hp": 85,
            "attack": 56,
            "defense": 77,
            "spAttack": 50,
            "spDefense": 77,
            "speed": 78
        }
    },
    {
        "dex": 661,
        "name": "fletchling",
        "generation": 6,
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 43,
            "spAttack": 40,
            "spDefense": 38,
            "speed": 62
        }
    },
    {
        "dex": 662,
        "name": "fletchinder",
        "generation": 6,
        "stats": {
            "hp": 62,
            "attack": 73,
            "defense": 55,
            "spAttack": 56,
            "spDefense": 52,
            "speed": 84
        }
    },
    {
        "dex": 663,
        "name": "talonflame",
        "generation": 6,
        "stats": {
            "hp": 78,
            "attack": 81,
            "defense": 71,
            "spAttack": 74,
            "spDefense": 69,
            "speed": 126
        }
    },
    {
        "dex": 664,
        "name": "scatterbug",
        "generation": 6,
        "stats": {
            "hp": 38,
            "attack": 35,
            "defense": 40,
            "spAttack": 27,
            "spDefense": 25,
            "speed": 35
        }
    },
    {
        "dex": 665,
        "name": "spewpa",
        "generation": 6,
        "stats": {
            "hp": 45,
            "attack": 22,
            "defense": 60,
            "spAttack": 27,
            "spDefense": 30,
            "speed": 29
        }
    },
    {
        "dex": 666,
        "name": "vivillon",
        "generation": 6,
        "stats": {
            "hp": 80,
            "attack": 52,
            "defense": 50,
            "spAttack": 90,
            "spDefense": 50,
            "speed": 89
        }
    },
    {
        "dex": 667,
        "name": "litleo",
        "generation": 6,
        "stats": {
            "hp": 62,
            "attack": 50,
            "defense": 58,
            "spAttack": 73,
            "spDefense": 54,
            "speed": 72
        }
    },
    {
        "dex": 668,
        "name": "pyroar-male",
        "generation": 6,
        "stats": {
            "hp": 86,
            "attack": 68,
            "defense": 72,
            "spAttack": 109,
            "spDefense": 66,
            "speed": 106
        }
    },
    {
        "dex": 669,
        "name": "flabebe",
        "generation": 6,
        "stats": {
            "hp": 44,
            "attack": 38,
            "defense": 39,
            "spAttack": 61,
            "spDefense": 79,
            "speed": 42
        }
    },
    {
        "dex": 670,
        "name": "floette",
        "generation": 6,
        "stats": {
            "hp": 54,
            "attack": 45,
            "defense": 47,
            "spAttack": 75,
            "spDefense": 98,
            "speed": 52
        }
    },
    {
        "dex": 671,
        "name": "florges",
        "generation": 6,
        "stats": {
            "hp": 78,
            "attack": 65,
            "defense": 68,
            "spAttack": 112,
            "spDefense": 154,
            "speed": 75
        }
    },
    {
        "dex": 672,
        "name": "skiddo",
        "generation": 6,
        "stats": {
            "hp": 66,
            "attack": 65,
            "defense": 48,
            "spAttack": 62,
            "spDefense": 57,
            "speed": 52
        }
    },
    {
        "dex": 673,
        "name": "gogoat",
        "generation": 6,
        "stats": {
            "hp": 123,
            "attack": 100,
            "defense": 62,
            "spAttack": 97,
            "spDefense": 81,
            "speed": 68
        }
    },
    {
        "dex": 674,
        "name": "pancham",
        "generation": 6,
        "stats": {
            "hp": 67,
            "attack": 82,
            "defense": 62,
            "spAttack": 46,
            "spDefense": 48,
            "speed": 43
        }
    },
    {
        "dex": 675,
        "name": "pangoro",
        "generation": 6,
        "stats": {
            "hp": 95,
            "attack": 124,
            "defense": 78,
            "spAttack": 69,
            "spDefense": 71,
            "speed": 58
        }
    },
    {
        "dex": 676,
        "name": "furfrou",
        "generation": 6,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 60,
            "spAttack": 65,
            "spDefense": 90,
            "speed": 102
        }
    },
    {
        "dex": 677,
        "name": "espurr",
        "generation": 6,
        "stats": {
            "hp": 62,
            "attack": 48,
            "defense": 54,
            "spAttack": 63,
            "spDefense": 60,
            "speed": 68
        }
    },
    {
        "dex": 678,
        "name": "meowstic-male",
        "generation": 6,
        "stats": {
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "spAttack": 83,
            "spDefense": 81,
            "speed": 104
        }
    },
    {
        "dex": 679,
        "name": "honedge",
        "generation": 6,
        "stats": {
            "hp": 45,
            "attack": 80,
            "defense": 100,
            "spAttack": 35,
            "spDefense": 37,
            "speed": 28
        }
    },
    {
        "dex": 680,
        "name": "doublade",
        "generation": 6,
        "stats": {
            "hp": 59,
            "attack": 110,
            "defense": 150,
            "spAttack": 45,
            "spDefense": 49,
            "speed": 35
        }
    },
    {
        "dex": 681,
        "name": "aegislash-shield",
        "generation": 6,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 140,
            "spAttack": 50,
            "spDefense": 140,
            "speed": 60
        }
    },
    {
        "dex": 682,
        "name": "spritzee",
        "generation": 6,
        "stats": {
            "hp": 78,
            "attack": 52,
            "defense": 60,
            "spAttack": 63,
            "spDefense": 65,
            "speed": 23
        }
    },
    {
        "dex": 683,
        "name": "aromatisse",
        "generation": 6,
        "stats": {
            "hp": 101,
            "attack": 72,
            "defense": 72,
            "spAttack": 99,
            "spDefense": 89,
            "speed": 29
        }
    },
    {
        "dex": 684,
        "name": "swirlix",
        "generation": 6,
        "stats": {
            "hp": 62,
            "attack": 48,
            "defense": 66,
            "spAttack": 59,
            "spDefense": 57,
            "speed": 49
        }
    },
    {
        "dex": 685,
        "name": "slurpuff",
        "generation": 6,
        "stats": {
            "hp": 82,
            "attack": 80,
            "defense": 86,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 72
        }
    },
    {
        "dex": 686,
        "name": "inkay",
        "generation": 6,
        "stats": {
            "hp": 53,
            "attack": 54,
            "defense": 53,
            "spAttack": 37,
            "spDefense": 46,
            "speed": 45
        }
    },
    {
        "dex": 687,
        "name": "malamar",
        "generation": 6,
        "stats": {
            "hp": 86,
            "attack": 92,
            "defense": 88,
            "spAttack": 68,
            "spDefense": 75,
            "speed": 73
        }
    },
    {
        "dex": 688,
        "name": "binacle",
        "generation": 6,
        "stats": {
            "hp": 42,
            "attack": 52,
            "defense": 67,
            "spAttack": 39,
            "spDefense": 56,
            "speed": 50
        }
    },
    {
        "dex": 689,
        "name": "barbaracle",
        "generation": 6,
        "stats": {
            "hp": 72,
            "attack": 105,
            "defense": 115,
            "spAttack": 54,
            "spDefense": 86,
            "speed": 68
        }
    },
    {
        "dex": 690,
        "name": "skrelp",
        "generation": 6,
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 60,
            "spAttack": 60,
            "spDefense": 60,
            "speed": 30
        }
    },
    {
        "dex": 691,
        "name": "dragalge",
        "generation": 6,
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 90,
            "spAttack": 97,
            "spDefense": 123,
            "speed": 44
        }
    },
    {
        "dex": 692,
        "name": "clauncher",
        "generation": 6,
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "spAttack": 58,
            "spDefense": 63,
            "speed": 44
        }
    },
    {
        "dex": 693,
        "name": "clawitzer",
        "generation": 6,
        "stats": {
            "hp": 71,
            "attack": 73,
            "defense": 88,
            "spAttack": 120,
            "spDefense": 89,
            "speed": 59
        }
    },
    {
        "dex": 694,
        "name": "helioptile",
        "generation": 6,
        "stats": {
            "hp": 44,
            "attack": 38,
            "defense": 33,
            "spAttack": 61,
            "spDefense": 43,
            "speed": 70
        }
    },
    {
        "dex": 695,
        "name": "heliolisk",
        "generation": 6,
        "stats": {
            "hp": 62,
            "attack": 55,
            "defense": 52,
            "spAttack": 109,
            "spDefense": 94,
            "speed": 109
        }
    },
    {
        "dex": 696,
        "name": "tyrunt",
        "generation": 6,
        "stats": {
            "hp": 58,
            "attack": 89,
            "defense": 77,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 48
        }
    },
    {
        "dex": 697,
        "name": "tyrantrum",
        "generation": 6,
        "stats": {
            "hp": 82,
            "attack": 121,
            "defense": 119,
            "spAttack": 69,
            "spDefense": 59,
            "speed": 71
        }
    },
    {
        "dex": 698,
        "name": "amaura",
        "generation": 6,
        "stats": {
            "hp": 77,
            "attack": 59,
            "defense": 50,
            "spAttack": 67,
            "spDefense": 63,
            "speed": 46
        }
    },
    {
        "dex": 699,
        "name": "aurorus",
        "generation": 6,
        "stats": {
            "hp": 123,
            "attack": 77,
            "defense": 72,
            "spAttack": 99,
            "spDefense": 92,
            "speed": 58
        }
    },
    {
        "dex": 700,
        "name": "sylveon",
        "generation": 6,
        "stats": {
            "hp": 95,
            "attack": 65,
            "defense": 65,
            "spAttack": 110,
            "spDefense": 130,
            "speed": 60
        }
    },
    {
        "dex": 701,
        "name": "hawlucha",
        "generation": 6,
        "stats": {
            "hp": 78,
            "attack": 92,
            "defense": 75,
            "spAttack": 74,
            "spDefense": 63,
            "speed": 118
        }
    },
    {
        "dex": 702,
        "name": "dedenne",
        "generation": 6,
        "stats": {
            "hp": 67,
            "attack": 58,
            "defense": 57,
            "spAttack": 81,
            "spDefense": 67,
            "speed": 101
        }
    },
    {
        "dex": 703,
        "name": "carbink",
        "generation": 6,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 150,
            "spAttack": 50,
            "spDefense": 150,
            "speed": 50
        }
    },
    {
        "dex": 704,
        "name": "goomy",
        "generation": 6,
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 35,
            "spAttack": 55,
            "spDefense": 75,
            "speed": 40
        }
    },
    {
        "dex": 705,
        "name": "sliggoo",
        "generation": 6,
        "stats": {
            "hp": 68,
            "attack": 75,
            "defense": 53,
            "spAttack": 83,
            "spDefense": 113,
            "speed": 60
        }
    },
    {
        "dex": 706,
        "name": "goodra",
        "generation": 6,
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 70,
            "spAttack": 110,
            "spDefense": 150,
            "speed": 80
        }
    },
    {
        "dex": 707,
        "name": "klefki",
        "generation": 6,
        "stats": {
            "hp": 57,
            "attack": 80,
            "defense": 91,
            "spAttack": 80,
            "spDefense": 87,
            "speed": 75
        }
    },
    {
        "dex": 708,
        "name": "phantump",
        "generation": 6,
        "stats": {
            "hp": 43,
            "attack": 70,
            "defense": 48,
            "spAttack": 50,
            "spDefense": 60,
            "speed": 38
        }
    },
    {
        "dex": 709,
        "name": "trevenant",
        "generation": 6,
        "stats": {
            "hp": 85,
            "attack": 110,
            "defense": 76,
            "spAttack": 65,
            "spDefense": 82,
            "speed": 56
        }
    },
    {
        "dex": 710,
        "name": "pumpkaboo-average",
        "generation": 6,
        "stats": {
            "hp": 49,
            "attack": 66,
            "defense": 70,
            "spAttack": 44,
            "spDefense": 55,
            "speed": 51
        }
    },
    {
        "dex": 711,
        "name": "gourgeist-average",
        "generation": 6,
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 122,
            "spAttack": 58,
            "spDefense": 75,
            "speed": 84
        }
    },
    {
        "dex": 712,
        "name": "bergmite",
        "generation": 6,
        "stats": {
            "hp": 55,
            "attack": 69,
            "defense": 85,
            "spAttack": 32,
            "spDefense": 35,
            "speed": 28
        }
    },
    {
        "dex": 713,
        "name": "avalugg",
        "generation": 6,
        "stats": {
            "hp": 95,
            "attack": 117,
            "defense": 184,
            "spAttack": 44,
            "spDefense": 46,
            "speed": 28
        }
    },
    {
        "dex": 714,
        "name": "noibat",
        "generation": 6,
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "spAttack": 45,
            "spDefense": 40,
            "speed": 55
        }
    },
    {
        "dex": 715,
        "name": "noivern",
        "generation": 6,
        "stats": {
            "hp": 85,
            "attack": 70,
            "defense": 80,
            "spAttack": 97,
            "spDefense": 80,
            "speed": 123
        }
    },
    {
        "dex": 716,
        "name": "xerneas",
        "generation": 6,
        "stats": {
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "spAttack": 131,
            "spDefense": 98,
            "speed": 99
        }
    },
    {
        "dex": 717,
        "name": "yveltal",
        "generation": 6,
        "stats": {
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "spAttack": 131,
            "spDefense": 98,
            "speed": 99
        }
    },
    {
        "dex": 718,
        "name": "zygarde-50",
        "generation": 6,
        "stats": {
            "hp": 108,
            "attack": 100,
            "defense": 121,
            "spAttack": 81,
            "spDefense": 95,
            "speed": 95
        }
    },
    {
        "dex": 719,
        "name": "diancie",
        "generation": 6,
        "stats": {
            "hp": 50,
            "attack": 100,
            "defense": 150,
            "spAttack": 100,
            "spDefense": 150,
            "speed": 50
        }
    },
    {
        "dex": 720,
        "name": "hoopa",
        "generation": 6,
        "stats": {
            "hp": 80,
            "attack": 110,
            "defense": 60,
            "spAttack": 150,
            "spDefense": 130,
            "speed": 70
        }
    },
    {
        "dex": 721,
        "name": "volcanion",
        "generation": 6,
        "stats": {
            "hp": 80,
            "attack": 110,
            "defense": 120,
            "spAttack": 130,
            "spDefense": 90,
            "speed": 70
        }
    },
    {
        "dex": 722,
        "name": "rowlet",
        "generation": 7,
        "stats": {
            "hp": 68,
            "attack": 55,
            "defense": 55,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 42
        }
    },
    {
        "dex": 723,
        "name": "dartrix",
        "generation": 7,
        "stats": {
            "hp": 78,
            "attack": 75,
            "defense": 75,
            "spAttack": 70,
            "spDefense": 70,
            "speed": 52
        }
    },
    {
        "dex": 724,
        "name": "decidueye",
        "generation": 7,
        "stats": {
            "hp": 78,
            "attack": 107,
            "defense": 75,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 725,
        "name": "litten",
        "generation": 7,
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "spAttack": 60,
            "spDefense": 40,
            "speed": 70
        }
    },
    {
        "dex": 726,
        "name": "torracat",
        "generation": 7,
        "stats": {
            "hp": 65,
            "attack": 85,
            "defense": 50,
            "spAttack": 80,
            "spDefense": 50,
            "speed": 90
        }
    },
    {
        "dex": 727,
        "name": "incineroar",
        "generation": 7,
        "stats": {
            "hp": 95,
            "attack": 115,
            "defense": 90,
            "spAttack": 80,
            "spDefense": 90,
            "speed": 60
        }
    },
    {
        "dex": 728,
        "name": "popplio",
        "generation": 7,
        "stats": {
            "hp": 50,
            "attack": 54,
            "defense": 54,
            "spAttack": 66,
            "spDefense": 56,
            "speed": 40
        }
    },
    {
        "dex": 729,
        "name": "brionne",
        "generation": 7,
        "stats": {
            "hp": 60,
            "attack": 69,
            "defense": 69,
            "spAttack": 91,
            "spDefense": 81,
            "speed": 50
        }
    },
    {
        "dex": 730,
        "name": "primarina",
        "generation": 7,
        "stats": {
            "hp": 80,
            "attack": 74,
            "defense": 74,
            "spAttack": 126,
            "spDefense": 116,
            "speed": 60
        }
    },
    {
        "dex": 731,
        "name": "pikipek",
        "generation": 7,
        "stats": {
            "hp": 35,
            "attack": 75,
            "defense": 30,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 65
        }
    },
    {
        "dex": 732,
        "name": "trumbeak",
        "generation": 7,
        "stats": {
            "hp": 55,
            "attack": 85,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 75
        }
    },
    {
        "dex": 733,
        "name": "toucannon",
        "generation": 7,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 75,
            "spAttack": 75,
            "spDefense": 75,
            "speed": 60
        }
    },
    {
        "dex": 734,
        "name": "yungoos",
        "generation": 7,
        "stats": {
            "hp": 48,
            "attack": 70,
            "defense": 30,
            "spAttack": 30,
            "spDefense": 30,
            "speed": 45
        }
    },
    {
        "dex": 735,
        "name": "gumshoos",
        "generation": 7,
        "stats": {
            "hp": 88,
            "attack": 110,
            "defense": 60,
            "spAttack": 55,
            "spDefense": 60,
            "speed": 45
        }
    },
    {
        "dex": 736,
        "name": "grubbin",
        "generation": 7,
        "stats": {
            "hp": 47,
            "attack": 62,
            "defense": 45,
            "spAttack": 55,
            "spDefense": 45,
            "speed": 46
        }
    },
    {
        "dex": 737,
        "name": "charjabug",
        "generation": 7,
        "stats": {
            "hp": 57,
            "attack": 82,
            "defense": 95,
            "spAttack": 55,
            "spDefense": 75,
            "speed": 36
        }
    },
    {
        "dex": 738,
        "name": "vikavolt",
        "generation": 7,
        "stats": {
            "hp": 77,
            "attack": 70,
            "defense": 90,
            "spAttack": 145,
            "spDefense": 75,
            "speed": 43
        }
    },
    {
        "dex": 739,
        "name": "crabrawler",
        "generation": 7,
        "stats": {
            "hp": 47,
            "attack": 82,
            "defense": 57,
            "spAttack": 42,
            "spDefense": 47,
            "speed": 63
        }
    },
    {
        "dex": 740,
        "name": "crabominable",
        "generation": 7,
        "stats": {
            "hp": 97,
            "attack": 132,
            "defense": 77,
            "spAttack": 62,
            "spDefense": 67,
            "speed": 43
        }
    },
    {
        "dex": 741,
        "name": "oricorio-baile",
        "generation": 7,
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "spAttack": 98,
            "spDefense": 70,
            "speed": 93
        }
    },
    {
        "dex": 742,
        "name": "cutiefly",
        "generation": 7,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAttack": 55,
            "spDefense": 40,
            "speed": 84
        }
    },
    {
        "dex": 743,
        "name": "ribombee",
        "generation": 7,
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 60,
            "spAttack": 95,
            "spDefense": 70,
            "speed": 124
        }
    },
    {
        "dex": 744,
        "name": "rockruff",
        "generation": 7,
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "spAttack": 30,
            "spDefense": 40,
            "speed": 60
        }
    },
    {
        "dex": 745,
        "name": "lycanroc-midday",
        "generation": 7,
        "stats": {
            "hp": 75,
            "attack": 115,
            "defense": 65,
            "spAttack": 55,
            "spDefense": 65,
            "speed": 112
        }
    },
    {
        "dex": 746,
        "name": "wishiwashi-solo",
        "generation": 7,
        "stats": {
            "hp": 45,
            "attack": 20,
            "defense": 20,
            "spAttack": 25,
            "spDefense": 25,
            "speed": 40
        }
    },
    {
        "dex": 747,
        "name": "mareanie",
        "generation": 7,
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "spAttack": 43,
            "spDefense": 52,
            "speed": 45
        }
    },
    {
        "dex": 748,
        "name": "toxapex",
        "generation": 7,
        "stats": {
            "hp": 50,
            "attack": 63,
            "defense": 152,
            "spAttack": 53,
            "spDefense": 142,
            "speed": 35
        }
    },
    {
        "dex": 749,
        "name": "mudbray",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 45
        }
    },
    {
        "dex": 750,
        "name": "mudsdale",
        "generation": 7,
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 100,
            "spAttack": 55,
            "spDefense": 85,
            "speed": 35
        }
    },
    {
        "dex": 751,
        "name": "dewpider",
        "generation": 7,
        "stats": {
            "hp": 38,
            "attack": 40,
            "defense": 52,
            "spAttack": 40,
            "spDefense": 72,
            "speed": 27
        }
    },
    {
        "dex": 752,
        "name": "araquanid",
        "generation": 7,
        "stats": {
            "hp": 68,
            "attack": 70,
            "defense": 92,
            "spAttack": 50,
            "spDefense": 132,
            "speed": 42
        }
    },
    {
        "dex": 753,
        "name": "fomantis",
        "generation": 7,
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 35,
            "spAttack": 50,
            "spDefense": 35,
            "speed": 35
        }
    },
    {
        "dex": 754,
        "name": "lurantis",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 90,
            "spAttack": 80,
            "spDefense": 90,
            "speed": 45
        }
    },
    {
        "dex": 755,
        "name": "morelull",
        "generation": 7,
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 55,
            "spAttack": 65,
            "spDefense": 75,
            "speed": 15
        }
    },
    {
        "dex": 756,
        "name": "shiinotic",
        "generation": 7,
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 80,
            "spAttack": 90,
            "spDefense": 100,
            "speed": 30
        }
    },
    {
        "dex": 757,
        "name": "salandit",
        "generation": 7,
        "stats": {
            "hp": 48,
            "attack": 44,
            "defense": 40,
            "spAttack": 71,
            "spDefense": 40,
            "speed": 77
        }
    },
    {
        "dex": 758,
        "name": "salazzle",
        "generation": 7,
        "stats": {
            "hp": 68,
            "attack": 64,
            "defense": 60,
            "spAttack": 111,
            "spDefense": 60,
            "speed": 117
        }
    },
    {
        "dex": 759,
        "name": "stufful",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 50,
            "spAttack": 45,
            "spDefense": 50,
            "speed": 50
        }
    },
    {
        "dex": 760,
        "name": "bewear",
        "generation": 7,
        "stats": {
            "hp": 120,
            "attack": 125,
            "defense": 80,
            "spAttack": 55,
            "spDefense": 60,
            "speed": 60
        }
    },
    {
        "dex": 761,
        "name": "bounsweet",
        "generation": 7,
        "stats": {
            "hp": 42,
            "attack": 30,
            "defense": 38,
            "spAttack": 30,
            "spDefense": 38,
            "speed": 32
        }
    },
    {
        "dex": 762,
        "name": "steenee",
        "generation": 7,
        "stats": {
            "hp": 52,
            "attack": 40,
            "defense": 48,
            "spAttack": 40,
            "spDefense": 48,
            "speed": 62
        }
    },
    {
        "dex": 763,
        "name": "tsareena",
        "generation": 7,
        "stats": {
            "hp": 72,
            "attack": 120,
            "defense": 98,
            "spAttack": 50,
            "spDefense": 98,
            "speed": 72
        }
    },
    {
        "dex": 764,
        "name": "comfey",
        "generation": 7,
        "stats": {
            "hp": 51,
            "attack": 52,
            "defense": 90,
            "spAttack": 82,
            "spDefense": 110,
            "speed": 100
        }
    },
    {
        "dex": 765,
        "name": "oranguru",
        "generation": 7,
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 80,
            "spAttack": 90,
            "spDefense": 110,
            "speed": 60
        }
    },
    {
        "dex": 766,
        "name": "passimian",
        "generation": 7,
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 90,
            "spAttack": 40,
            "spDefense": 60,
            "speed": 80
        }
    },
    {
        "dex": 767,
        "name": "wimpod",
        "generation": 7,
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 40,
            "spAttack": 20,
            "spDefense": 30,
            "speed": 80
        }
    },
    {
        "dex": 768,
        "name": "golisopod",
        "generation": 7,
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 140,
            "spAttack": 60,
            "spDefense": 90,
            "speed": 40
        }
    },
    {
        "dex": 769,
        "name": "sandygast",
        "generation": 7,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 80,
            "spAttack": 70,
            "spDefense": 45,
            "speed": 15
        }
    },
    {
        "dex": 770,
        "name": "palossand",
        "generation": 7,
        "stats": {
            "hp": 85,
            "attack": 75,
            "defense": 110,
            "spAttack": 100,
            "spDefense": 75,
            "speed": 35
        }
    },
    {
        "dex": 771,
        "name": "pyukumuku",
        "generation": 7,
        "stats": {
            "hp": 55,
            "attack": 60,
            "defense": 130,
            "spAttack": 30,
            "spDefense": 130,
            "speed": 5
        }
    },
    {
        "dex": 772,
        "name": "type-null",
        "generation": 7,
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "spAttack": 95,
            "spDefense": 95,
            "speed": 59
        }
    },
    {
        "dex": 773,
        "name": "silvally",
        "generation": 7,
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "spAttack": 95,
            "spDefense": 95,
            "speed": 95
        }
    },
    {
        "dex": 774,
        "name": "minior-red-meteor",
        "generation": 7,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "spAttack": 60,
            "spDefense": 100,
            "speed": 60
        }
    },
    {
        "dex": 775,
        "name": "komala",
        "generation": 7,
        "stats": {
            "hp": 65,
            "attack": 115,
            "defense": 65,
            "spAttack": 75,
            "spDefense": 95,
            "speed": 65
        }
    },
    {
        "dex": 776,
        "name": "turtonator",
        "generation": 7,
        "stats": {
            "hp": 60,
            "attack": 78,
            "defense": 135,
            "spAttack": 91,
            "spDefense": 85,
            "speed": 36
        }
    },
    {
        "dex": 777,
        "name": "togedemaru",
        "generation": 7,
        "stats": {
            "hp": 65,
            "attack": 98,
            "defense": 63,
            "spAttack": 40,
            "spDefense": 73,
            "speed": 96
        }
    },
    {
        "dex": 778,
        "name": "mimikyu-disguised",
        "generation": 7,
        "stats": {
            "hp": 55,
            "attack": 90,
            "defense": 80,
            "spAttack": 50,
            "spDefense": 105,
            "speed": 96
        }
    },
    {
        "dex": 779,
        "name": "bruxish",
        "generation": 7,
        "stats": {
            "hp": 68,
            "attack": 105,
            "defense": 70,
            "spAttack": 70,
            "spDefense": 70,
            "speed": 92
        }
    },
    {
        "dex": 780,
        "name": "drampa",
        "generation": 7,
        "stats": {
            "hp": 78,
            "attack": 60,
            "defense": 85,
            "spAttack": 135,
            "spDefense": 91,
            "speed": 36
        }
    },
    {
        "dex": 781,
        "name": "dhelmise",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 131,
            "defense": 100,
            "spAttack": 86,
            "spDefense": 90,
            "speed": 40
        }
    },
    {
        "dex": 782,
        "name": "jangmo-o",
        "generation": 7,
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 65,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 45
        }
    },
    {
        "dex": 783,
        "name": "hakamo-o",
        "generation": 7,
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 90,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 65
        }
    },
    {
        "dex": 784,
        "name": "kommo-o",
        "generation": 7,
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 125,
            "spAttack": 100,
            "spDefense": 105,
            "speed": 85
        }
    },
    {
        "dex": 785,
        "name": "tapu-koko",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 85,
            "spAttack": 95,
            "spDefense": 75,
            "speed": 130
        }
    },
    {
        "dex": 786,
        "name": "tapu-lele",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 75,
            "spAttack": 130,
            "spDefense": 115,
            "speed": 95
        }
    },
    {
        "dex": 787,
        "name": "tapu-bulu",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 130,
            "defense": 115,
            "spAttack": 85,
            "spDefense": 95,
            "speed": 75
        }
    },
    {
        "dex": 788,
        "name": "tapu-fini",
        "generation": 7,
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 115,
            "spAttack": 95,
            "spDefense": 130,
            "speed": 85
        }
    },
    {
        "dex": 789,
        "name": "cosmog",
        "generation": 7,
        "stats": {
            "hp": 43,
            "attack": 29,
            "defense": 31,
            "spAttack": 29,
            "spDefense": 31,
            "speed": 37
        }
    },
    {
        "dex": 790,
        "name": "cosmoem",
        "generation": 7,
        "stats": {
            "hp": 43,
            "attack": 29,
            "defense": 131,
            "spAttack": 29,
            "spDefense": 131,
            "speed": 37
        }
    },
    {
        "dex": 791,
        "name": "solgaleo",
        "generation": 7,
        "stats": {
            "hp": 137,
            "attack": 137,
            "defense": 107,
            "spAttack": 113,
            "spDefense": 89,
            "speed": 97
        }
    },
    {
        "dex": 792,
        "name": "lunala",
        "generation": 7,
        "stats": {
            "hp": 137,
            "attack": 113,
            "defense": 89,
            "spAttack": 137,
            "spDefense": 107,
            "speed": 97
        }
    },
    {
        "dex": 793,
        "name": "nihilego",
        "generation": 7,
        "stats": {
            "hp": 109,
            "attack": 53,
            "defense": 47,
            "spAttack": 127,
            "spDefense": 131,
            "speed": 103
        }
    },
    {
        "dex": 794,
        "name": "buzzwole",
        "generation": 7,
        "stats": {
            "hp": 107,
            "attack": 139,
            "defense": 139,
            "spAttack": 53,
            "spDefense": 53,
            "speed": 79
        }
    },
    {
        "dex": 795,
        "name": "pheromosa",
        "generation": 7,
        "stats": {
            "hp": 71,
            "attack": 137,
            "defense": 37,
            "spAttack": 137,
            "spDefense": 37,
            "speed": 151
        }
    },
    {
        "dex": 796,
        "name": "xurkitree",
        "generation": 7,
        "stats": {
            "hp": 83,
            "attack": 89,
            "defense": 71,
            "spAttack": 173,
            "spDefense": 71,
            "speed": 83
        }
    },
    {
        "dex": 797,
        "name": "celesteela",
        "generation": 7,
        "stats": {
            "hp": 97,
            "attack": 101,
            "defense": 103,
            "spAttack": 107,
            "spDefense": 101,
            "speed": 61
        }
    },
    {
        "dex": 798,
        "name": "kartana",
        "generation": 7,
        "stats": {
            "hp": 59,
            "attack": 181,
            "defense": 131,
            "spAttack": 59,
            "spDefense": 31,
            "speed": 109
        }
    },
    {
        "dex": 799,
        "name": "guzzlord",
        "generation": 7,
        "stats": {
            "hp": 223,
            "attack": 101,
            "defense": 53,
            "spAttack": 97,
            "spDefense": 53,
            "speed": 43
        }
    },
    {
        "dex": 800,
        "name": "necrozma",
        "generation": 7,
        "stats": {
            "hp": 97,
            "attack": 107,
            "defense": 101,
            "spAttack": 127,
            "spDefense": 89,
            "speed": 79
        }
    },
    {
        "dex": 801,
        "name": "magearna",
        "generation": 7,
        "stats": {
            "hp": 80,
            "attack": 95,
            "defense": 115,
            "spAttack": 130,
            "spDefense": 115,
            "speed": 65
        }
    },
    {
        "dex": 802,
        "name": "marshadow",
        "generation": 7,
        "stats": {
            "hp": 90,
            "attack": 125,
            "defense": 80,
            "spAttack": 90,
            "spDefense": 90,
            "speed": 125
        }
    },
    {
        "dex": 803,
        "name": "poipole",
        "generation": 7,
        "stats": {
            "hp": 67,
            "attack": 73,
            "defense": 67,
            "spAttack": 73,
            "spDefense": 67,
            "speed": 73
        }
    },
    {
        "dex": 804,
        "name": "naganadel",
        "generation": 7,
        "stats": {
            "hp": 73,
            "attack": 73,
            "defense": 73,
            "spAttack": 127,
            "spDefense": 73,
            "speed": 121
        }
    },
    {
        "dex": 805,
        "name": "stakataka",
        "generation": 7,
        "stats": {
            "hp": 61,
            "attack": 131,
            "defense": 211,
            "spAttack": 53,
            "spDefense": 101,
            "speed": 13
        }
    },
    {
        "dex": 806,
        "name": "blacephalon",
        "generation": 7,
        "stats": {
            "hp": 53,
            "attack": 127,
            "defense": 53,
            "spAttack": 151,
            "spDefense": 79,
            "speed": 107
        }
    },
    {
        "dex": 807,
        "name": "zeraora",
        "generation": 7,
        "stats": {
            "hp": 88,
            "attack": 112,
            "defense": 75,
            "spAttack": 102,
            "spDefense": 80,
            "speed": 143
        }
    },
    {
        "dex": 808,
        "name": "meltan",
        "generation": 7,
        "stats": {
            "hp": 46,
            "attack": 65,
            "defense": 65,
            "spAttack": 55,
            "spDefense": 35,
            "speed": 34
        }
    },
    {
        "dex": 809,
        "name": "melmetal",
        "generation": 7,
        "stats": {
            "hp": 135,
            "attack": 143,
            "defense": 143,
            "spAttack": 80,
            "spDefense": 65,
            "speed": 34
        }
    },
    {
        "dex": 810,
        "name": "grookey",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 65
        }
    },
    {
        "dex": 811,
        "name": "thwackey",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "spAttack": 55,
            "spDefense": 60,
            "speed": 80
        }
    },
    {
        "dex": 812,
        "name": "rillaboom",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 90,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 85
        }
    },
    {
        "dex": 813,
        "name": "scorbunny",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 71,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 69
        }
    },
    {
        "dex": 814,
        "name": "raboot",
        "generation": 8,
        "stats": {
            "hp": 65,
            "attack": 86,
            "defense": 60,
            "spAttack": 55,
            "spDefense": 60,
            "speed": 94
        }
    },
    {
        "dex": 815,
        "name": "cinderace",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 116,
            "defense": 75,
            "spAttack": 65,
            "spDefense": 75,
            "speed": 119
        }
    },
    {
        "dex": 816,
        "name": "sobble",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 40,
            "defense": 40,
            "spAttack": 70,
            "spDefense": 40,
            "speed": 70
        }
    },
    {
        "dex": 817,
        "name": "drizzile",
        "generation": 8,
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 55,
            "spAttack": 95,
            "spDefense": 55,
            "speed": 90
        }
    },
    {
        "dex": 818,
        "name": "inteleon",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAttack": 125,
            "spDefense": 65,
            "speed": 120
        }
    },
    {
        "dex": 819,
        "name": "skwovet",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 25
        }
    },
    {
        "dex": 820,
        "name": "greedent",
        "generation": 8,
        "stats": {
            "hp": 120,
            "attack": 95,
            "defense": 95,
            "spAttack": 55,
            "spDefense": 75,
            "speed": 20
        }
    },
    {
        "dex": 821,
        "name": "rookidee",
        "generation": 8,
        "stats": {
            "hp": 38,
            "attack": 47,
            "defense": 35,
            "spAttack": 33,
            "spDefense": 35,
            "speed": 57
        }
    },
    {
        "dex": 822,
        "name": "corvisquire",
        "generation": 8,
        "stats": {
            "hp": 68,
            "attack": 67,
            "defense": 55,
            "spAttack": 43,
            "spDefense": 55,
            "speed": 77
        }
    },
    {
        "dex": 823,
        "name": "corviknight",
        "generation": 8,
        "stats": {
            "hp": 98,
            "attack": 87,
            "defense": 105,
            "spAttack": 53,
            "spDefense": 85,
            "speed": 67
        }
    },
    {
        "dex": 824,
        "name": "blipbug",
        "generation": 8,
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 20,
            "spAttack": 25,
            "spDefense": 45,
            "speed": 45
        }
    },
    {
        "dex": 825,
        "name": "dottler",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 80,
            "spAttack": 50,
            "spDefense": 90,
            "speed": 30
        }
    },
    {
        "dex": 826,
        "name": "orbeetle",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 110,
            "spAttack": 80,
            "spDefense": 120,
            "speed": 90
        }
    },
    {
        "dex": 827,
        "name": "nickit",
        "generation": 8,
        "stats": {
            "hp": 40,
            "attack": 28,
            "defense": 28,
            "spAttack": 47,
            "spDefense": 52,
            "speed": 50
        }
    },
    {
        "dex": 828,
        "name": "thievul",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 58,
            "defense": 58,
            "spAttack": 87,
            "spDefense": 92,
            "speed": 90
        }
    },
    {
        "dex": 829,
        "name": "gossifleur",
        "generation": 8,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 60,
            "speed": 10
        }
    },
    {
        "dex": 830,
        "name": "eldegoss",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 90,
            "spAttack": 80,
            "spDefense": 120,
            "speed": 60
        }
    },
    {
        "dex": 831,
        "name": "wooloo",
        "generation": 8,
        "stats": {
            "hp": 42,
            "attack": 40,
            "defense": 55,
            "spAttack": 40,
            "spDefense": 45,
            "speed": 48
        }
    },
    {
        "dex": 832,
        "name": "dubwool",
        "generation": 8,
        "stats": {
            "hp": 72,
            "attack": 80,
            "defense": 100,
            "spAttack": 60,
            "spDefense": 90,
            "speed": 88
        }
    },
    {
        "dex": 833,
        "name": "chewtle",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "spAttack": 38,
            "spDefense": 38,
            "speed": 44
        }
    },
    {
        "dex": 834,
        "name": "drednaw",
        "generation": 8,
        "stats": {
            "hp": 90,
            "attack": 115,
            "defense": 90,
            "spAttack": 48,
            "spDefense": 68,
            "speed": 74
        }
    },
    {
        "dex": 835,
        "name": "yamper",
        "generation": 8,
        "stats": {
            "hp": 59,
            "attack": 45,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 26
        }
    },
    {
        "dex": 836,
        "name": "boltund",
        "generation": 8,
        "stats": {
            "hp": 69,
            "attack": 90,
            "defense": 60,
            "spAttack": 90,
            "spDefense": 60,
            "speed": 121
        }
    },
    {
        "dex": 837,
        "name": "rolycoly",
        "generation": 8,
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 50,
            "spAttack": 40,
            "spDefense": 50,
            "speed": 30
        }
    },
    {
        "dex": 838,
        "name": "carkol",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 60,
            "defense": 90,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 50
        }
    },
    {
        "dex": 839,
        "name": "coalossal",
        "generation": 8,
        "stats": {
            "hp": 110,
            "attack": 80,
            "defense": 120,
            "spAttack": 80,
            "spDefense": 90,
            "speed": 30
        }
    },
    {
        "dex": 840,
        "name": "applin",
        "generation": 8,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 80,
            "spAttack": 40,
            "spDefense": 40,
            "speed": 20
        }
    },
    {
        "dex": 841,
        "name": "flapple",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "spAttack": 95,
            "spDefense": 60,
            "speed": 70
        }
    },
    {
        "dex": 842,
        "name": "appletun",
        "generation": 8,
        "stats": {
            "hp": 110,
            "attack": 85,
            "defense": 80,
            "spAttack": 100,
            "spDefense": 80,
            "speed": 30
        }
    },
    {
        "dex": 843,
        "name": "silicobra",
        "generation": 8,
        "stats": {
            "hp": 52,
            "attack": 57,
            "defense": 75,
            "spAttack": 35,
            "spDefense": 50,
            "speed": 46
        }
    },
    {
        "dex": 844,
        "name": "sandaconda",
        "generation": 8,
        "stats": {
            "hp": 72,
            "attack": 107,
            "defense": 125,
            "spAttack": 65,
            "spDefense": 70,
            "speed": 71
        }
    },
    {
        "dex": 845,
        "name": "cramorant",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 55,
            "spAttack": 85,
            "spDefense": 95,
            "speed": 85
        }
    },
    {
        "dex": 846,
        "name": "arrokuda",
        "generation": 8,
        "stats": {
            "hp": 41,
            "attack": 63,
            "defense": 40,
            "spAttack": 40,
            "spDefense": 30,
            "speed": 66
        }
    },
    {
        "dex": 847,
        "name": "barraskewda",
        "generation": 8,
        "stats": {
            "hp": 61,
            "attack": 123,
            "defense": 60,
            "spAttack": 60,
            "spDefense": 50,
            "speed": 136
        }
    },
    {
        "dex": 848,
        "name": "toxel",
        "generation": 8,
        "stats": {
            "hp": 40,
            "attack": 38,
            "defense": 35,
            "spAttack": 54,
            "spDefense": 35,
            "speed": 40
        }
    },
    {
        "dex": 849,
        "name": "toxtricity-amped",
        "generation": 8,
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "spAttack": 114,
            "spDefense": 70,
            "speed": 75
        }
    },
    {
        "dex": 850,
        "name": "sizzlipede",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 45
        }
    },
    {
        "dex": 851,
        "name": "centiskorch",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 115,
            "defense": 65,
            "spAttack": 90,
            "spDefense": 90,
            "speed": 65
        }
    },
    {
        "dex": 852,
        "name": "clobbopus",
        "generation": 8,
        "stats": {
            "hp": 50,
            "attack": 68,
            "defense": 60,
            "spAttack": 50,
            "spDefense": 50,
            "speed": 32
        }
    },
    {
        "dex": 853,
        "name": "grapploct",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 118,
            "defense": 90,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 42
        }
    },
    {
        "dex": 854,
        "name": "sinistea",
        "generation": 8,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "spAttack": 74,
            "spDefense": 54,
            "speed": 50
        }
    },
    {
        "dex": 855,
        "name": "polteageist",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 65,
            "spAttack": 134,
            "spDefense": 114,
            "speed": 70
        }
    },
    {
        "dex": 856,
        "name": "hatenna",
        "generation": 8,
        "stats": {
            "hp": 42,
            "attack": 30,
            "defense": 45,
            "spAttack": 56,
            "spDefense": 53,
            "speed": 39
        }
    },
    {
        "dex": 857,
        "name": "hattrem",
        "generation": 8,
        "stats": {
            "hp": 57,
            "attack": 40,
            "defense": 65,
            "spAttack": 86,
            "spDefense": 73,
            "speed": 49
        }
    },
    {
        "dex": 858,
        "name": "hatterene",
        "generation": 8,
        "stats": {
            "hp": 57,
            "attack": 90,
            "defense": 95,
            "spAttack": 136,
            "spDefense": 103,
            "speed": 29
        }
    },
    {
        "dex": 859,
        "name": "impidimp",
        "generation": 8,
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 30,
            "spAttack": 55,
            "spDefense": 40,
            "speed": 50
        }
    },
    {
        "dex": 860,
        "name": "morgrem",
        "generation": 8,
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 45,
            "spAttack": 75,
            "spDefense": 55,
            "speed": 70
        }
    },
    {
        "dex": 861,
        "name": "grimmsnarl",
        "generation": 8,
        "stats": {
            "hp": 95,
            "attack": 120,
            "defense": 65,
            "spAttack": 95,
            "spDefense": 75,
            "speed": 60
        }
    },
    {
        "dex": 862,
        "name": "obstagoon",
        "generation": 8,
        "stats": {
            "hp": 93,
            "attack": 90,
            "defense": 101,
            "spAttack": 60,
            "spDefense": 81,
            "speed": 95
        }
    },
    {
        "dex": 863,
        "name": "perrserker",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 100,
            "spAttack": 50,
            "spDefense": 60,
            "speed": 50
        }
    },
    {
        "dex": 864,
        "name": "cursola",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 50,
            "spAttack": 145,
            "spDefense": 130,
            "speed": 30
        }
    },
    {
        "dex": 865,
        "name": "sirfetchd",
        "generation": 8,
        "stats": {
            "hp": 62,
            "attack": 135,
            "defense": 95,
            "spAttack": 68,
            "spDefense": 82,
            "speed": 65
        }
    },
    {
        "dex": 866,
        "name": "mr-rime",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 75,
            "spAttack": 110,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 867,
        "name": "runerigus",
        "generation": 8,
        "stats": {
            "hp": 58,
            "attack": 95,
            "defense": 145,
            "spAttack": 50,
            "spDefense": 105,
            "speed": 30
        }
    },
    {
        "dex": 868,
        "name": "milcery",
        "generation": 8,
        "stats": {
            "hp": 45,
            "attack": 40,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 61,
            "speed": 34
        }
    },
    {
        "dex": 869,
        "name": "alcremie",
        "generation": 8,
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 75,
            "spAttack": 110,
            "spDefense": 121,
            "speed": 64
        }
    },
    {
        "dex": 870,
        "name": "falinks",
        "generation": 8,
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 100,
            "spAttack": 70,
            "spDefense": 60,
            "speed": 75
        }
    },
    {
        "dex": 871,
        "name": "pincurchin",
        "generation": 8,
        "stats": {
            "hp": 48,
            "attack": 101,
            "defense": 95,
            "spAttack": 91,
            "spDefense": 85,
            "speed": 15
        }
    },
    {
        "dex": 872,
        "name": "snom",
        "generation": 8,
        "stats": {
            "hp": 30,
            "attack": 25,
            "defense": 35,
            "spAttack": 45,
            "spDefense": 30,
            "speed": 20
        }
    },
    {
        "dex": 873,
        "name": "frosmoth",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "spAttack": 125,
            "spDefense": 90,
            "speed": 65
        }
    },
    {
        "dex": 874,
        "name": "stonjourner",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 135,
            "spAttack": 20,
            "spDefense": 20,
            "speed": 70
        }
    },
    {
        "dex": 875,
        "name": "eiscue-ice",
        "generation": 8,
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 110,
            "spAttack": 65,
            "spDefense": 90,
            "speed": 50
        }
    },
    {
        "dex": 876,
        "name": "indeedee-male",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 55,
            "spAttack": 105,
            "spDefense": 95,
            "speed": 95
        }
    },
    {
        "dex": 877,
        "name": "morpeko-full-belly",
        "generation": 8,
        "stats": {
            "hp": 58,
            "attack": 95,
            "defense": 58,
            "spAttack": 70,
            "spDefense": 58,
            "speed": 97
        }
    },
    {
        "dex": 878,
        "name": "cufant",
        "generation": 8,
        "stats": {
            "hp": 72,
            "attack": 80,
            "defense": 49,
            "spAttack": 40,
            "spDefense": 49,
            "speed": 40
        }
    },
    {
        "dex": 879,
        "name": "copperajah",
        "generation": 8,
        "stats": {
            "hp": 122,
            "attack": 130,
            "defense": 69,
            "spAttack": 80,
            "spDefense": 69,
            "speed": 30
        }
    },
    {
        "dex": 880,
        "name": "dracozolt",
        "generation": 8,
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAttack": 80,
            "spDefense": 70,
            "speed": 75
        }
    },
    {
        "dex": 881,
        "name": "arctozolt",
        "generation": 8,
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAttack": 90,
            "spDefense": 80,
            "speed": 55
        }
    },
    {
        "dex": 882,
        "name": "dracovish",
        "generation": 8,
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "spAttack": 70,
            "spDefense": 80,
            "speed": 75
        }
    },
    {
        "dex": 883,
        "name": "arctovish",
        "generation": 8,
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "spAttack": 80,
            "spDefense": 90,
            "speed": 55
        }
    },
    {
        "dex": 884,
        "name": "duraludon",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 95,
            "defense": 115,
            "spAttack": 120,
            "spDefense": 50,
            "speed": 85
        }
    },
    {
        "dex": 885,
        "name": "dreepy",
        "generation": 8,
        "stats": {
            "hp": 28,
            "attack": 60,
            "defense": 30,
            "spAttack": 40,
            "spDefense": 30,
            "speed": 82
        }
    },
    {
        "dex": 886,
        "name": "drakloak",
        "generation": 8,
        "stats": {
            "hp": 68,
            "attack": 80,
            "defense": 50,
            "spAttack": 60,
            "spDefense": 50,
            "speed": 102
        }
    },
    {
        "dex": 887,
        "name": "dragapult",
        "generation": 8,
        "stats": {
            "hp": 88,
            "attack": 120,
            "defense": 75,
            "spAttack": 100,
            "spDefense": 75,
            "speed": 142
        }
    },
    {
        "dex": 888,
        "name": "zacian",
        "generation": 8,
        "stats": {
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "spAttack": 80,
            "spDefense": 115,
            "speed": 138
        }
    },
    {
        "dex": 889,
        "name": "zamazenta",
        "generation": 8,
        "stats": {
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "spAttack": 80,
            "spDefense": 115,
            "speed": 138
        }
    },
    {
        "dex": 890,
        "name": "eternatus",
        "generation": 8,
        "stats": {
            "hp": 140,
            "attack": 85,
            "defense": 95,
            "spAttack": 145,
            "spDefense": 95,
            "speed": 130
        }
    },
    {
        "dex": 891,
        "name": "kubfu",
        "generation": 8,
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 60,
            "spAttack": 53,
            "spDefense": 50,
            "speed": 72
        }
    },
    {
        "dex": 892,
        "name": "urshifu-single-strike",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "spAttack": 63,
            "spDefense": 60,
            "speed": 97
        }
    },
    {
        "dex": 893,
        "name": "zarude",
        "generation": 8,
        "stats": {
            "hp": 105,
            "attack": 120,
            "defense": 105,
            "spAttack": 70,
            "spDefense": 95,
            "speed": 105
        }
    },
    {
        "dex": 894,
        "name": "regieleki",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 50,
            "spAttack": 100,
            "spDefense": 50,
            "speed": 200
        }
    },
    {
        "dex": 895,
        "name": "regidrago",
        "generation": 8,
        "stats": {
            "hp": 200,
            "attack": 100,
            "defense": 50,
            "spAttack": 100,
            "spDefense": 50,
            "speed": 80
        }
    },
    {
        "dex": 896,
        "name": "glastrier",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 145,
            "defense": 130,
            "spAttack": 65,
            "spDefense": 110,
            "speed": 30
        }
    },
    {
        "dex": 897,
        "name": "spectrier",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 65,
            "defense": 60,
            "spAttack": 145,
            "spDefense": 80,
            "speed": 130
        }
    },
    {
        "dex": 898,
        "name": "calyrex",
        "generation": 8,
        "stats": {
            "hp": 100,
            "attack": 80,
            "defense": 80,
            "spAttack": 80,
            "spDefense": 80,
            "speed": 80
        }
    },
    {
        "dex": 899,
        "name": "wyrdeer",
        "generation": 8,
        "stats": {
            "hp": 103,
            "attack": 105,
            "defense": 72,
            "spAttack": 105,
            "spDefense": 75,
            "speed": 65
        }
    },
    {
        "dex": 900,
        "name": "kleavor",
        "generation": 8,
        "stats": {
            "hp": 70,
            "attack": 135,
            "defense": 95,
            "spAttack": 45,
            "spDefense": 70,
            "speed": 85
        }
    },
    {
        "dex": 901,
        "name": "ursaluna",
        "generation": 8,
        "stats": {
            "hp": 130,
            "attack": 140,
            "defense": 105,
            "spAttack": 45,
            "spDefense": 80,
            "speed": 50
        }
    },
    {
        "dex": 902,
        "name": "basculegion-male",
        "generation": 8,
        "stats": {
            "hp": 120,
            "attack": 112,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 75,
            "speed": 78
        }
    },
    {
        "dex": 903,
        "name": "sneasler",
        "generation": 8,
        "stats": {
            "hp": 80,
            "attack": 130,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 80,
            "speed": 120
        }
    },
    {
        "dex": 904,
        "name": "overqwil",
        "generation": 8,
        "stats": {
            "hp": 85,
            "attack": 115,
            "defense": 95,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 905,
        "name": "enamorus-incarnate",
        "generation": 8,
        "stats": {
            "hp": 74,
            "attack": 115,
            "defense": 70,
            "spAttack": 135,
            "spDefense": 80,
            "speed": 106
        }
    },
    {
        "dex": 906,
        "name": "sprigatito",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 61,
            "defense": 54,
            "spAttack": 45,
            "spDefense": 45,
            "speed": 65
        }
    },
    {
        "dex": 907,
        "name": "floragato",
        "generation": 9,
        "stats": {
            "hp": 61,
            "attack": 80,
            "defense": 63,
            "spAttack": 60,
            "spDefense": 63,
            "speed": 83
        }
    },
    {
        "dex": 908,
        "name": "meowscarada",
        "generation": 9,
        "stats": {
            "hp": 76,
            "attack": 110,
            "defense": 70,
            "spAttack": 81,
            "spDefense": 70,
            "speed": 123
        }
    },
    {
        "dex": 909,
        "name": "fuecoco",
        "generation": 9,
        "stats": {
            "hp": 67,
            "attack": 45,
            "defense": 59,
            "spAttack": 63,
            "spDefense": 40,
            "speed": 36
        }
    },
    {
        "dex": 910,
        "name": "crocalor",
        "generation": 9,
        "stats": {
            "hp": 81,
            "attack": 55,
            "defense": 78,
            "spAttack": 90,
            "spDefense": 58,
            "speed": 49
        }
    },
    {
        "dex": 911,
        "name": "skeledirge",
        "generation": 9,
        "stats": {
            "hp": 104,
            "attack": 75,
            "defense": 100,
            "spAttack": 110,
            "spDefense": 75,
            "speed": 66
        }
    },
    {
        "dex": 912,
        "name": "quaxly",
        "generation": 9,
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 45,
            "spAttack": 50,
            "spDefense": 45,
            "speed": 50
        }
    },
    {
        "dex": 913,
        "name": "quaxwell",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAttack": 65,
            "spDefense": 60,
            "speed": 65
        }
    },
    {
        "dex": 914,
        "name": "quaquaval",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 120,
            "defense": 80,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 85
        }
    },
    {
        "dex": 915,
        "name": "lechonk",
        "generation": 9,
        "stats": {
            "hp": 54,
            "attack": 45,
            "defense": 40,
            "spAttack": 35,
            "spDefense": 45,
            "speed": 35
        }
    },
    {
        "dex": 916,
        "name": "oinkologne-male",
        "generation": 9,
        "stats": {
            "hp": 110,
            "attack": 100,
            "defense": 75,
            "spAttack": 59,
            "spDefense": 80,
            "speed": 65
        }
    },
    {
        "dex": 917,
        "name": "tarountula",
        "generation": 9,
        "stats": {
            "hp": 35,
            "attack": 41,
            "defense": 45,
            "spAttack": 29,
            "spDefense": 40,
            "speed": 20
        }
    },
    {
        "dex": 918,
        "name": "spidops",
        "generation": 9,
        "stats": {
            "hp": 60,
            "attack": 79,
            "defense": 92,
            "spAttack": 52,
            "spDefense": 86,
            "speed": 35
        }
    },
    {
        "dex": 919,
        "name": "nymble",
        "generation": 9,
        "stats": {
            "hp": 33,
            "attack": 46,
            "defense": 40,
            "spAttack": 21,
            "spDefense": 25,
            "speed": 45
        }
    },
    {
        "dex": 920,
        "name": "lokix",
        "generation": 9,
        "stats": {
            "hp": 71,
            "attack": 102,
            "defense": 78,
            "spAttack": 52,
            "spDefense": 55,
            "speed": 92
        }
    },
    {
        "dex": 921,
        "name": "pawmi",
        "generation": 9,
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 20,
            "spAttack": 40,
            "spDefense": 25,
            "speed": 60
        }
    },
    {
        "dex": 922,
        "name": "pawmo",
        "generation": 9,
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 40,
            "speed": 85
        }
    },
    {
        "dex": 923,
        "name": "pawmot",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 70,
            "spAttack": 70,
            "spDefense": 60,
            "speed": 105
        }
    },
    {
        "dex": 924,
        "name": "tandemaus",
        "generation": 9,
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 45,
            "spAttack": 40,
            "spDefense": 45,
            "speed": 75
        }
    },
    {
        "dex": 925,
        "name": "maushold-family-of-four",
        "generation": 9,
        "stats": {
            "hp": 74,
            "attack": 75,
            "defense": 70,
            "spAttack": 65,
            "spDefense": 75,
            "speed": 111
        }
    },
    {
        "dex": 926,
        "name": "fidough",
        "generation": 9,
        "stats": {
            "hp": 37,
            "attack": 55,
            "defense": 70,
            "spAttack": 30,
            "spDefense": 55,
            "speed": 65
        }
    },
    {
        "dex": 927,
        "name": "dachsbun",
        "generation": 9,
        "stats": {
            "hp": 57,
            "attack": 80,
            "defense": 115,
            "spAttack": 50,
            "spDefense": 80,
            "speed": 95
        }
    },
    {
        "dex": 928,
        "name": "smoliv",
        "generation": 9,
        "stats": {
            "hp": 41,
            "attack": 35,
            "defense": 45,
            "spAttack": 58,
            "spDefense": 51,
            "speed": 30
        }
    },
    {
        "dex": 929,
        "name": "dolliv",
        "generation": 9,
        "stats": {
            "hp": 52,
            "attack": 53,
            "defense": 60,
            "spAttack": 78,
            "spDefense": 78,
            "speed": 33
        }
    },
    {
        "dex": 930,
        "name": "arboliva",
        "generation": 9,
        "stats": {
            "hp": 78,
            "attack": 69,
            "defense": 90,
            "spAttack": 125,
            "spDefense": 109,
            "speed": 39
        }
    },
    {
        "dex": 931,
        "name": "squawkabilly-green-plumage",
        "generation": 9,
        "stats": {
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "spAttack": 45,
            "spDefense": 51,
            "speed": 92
        }
    },
    {
        "dex": 932,
        "name": "nacli",
        "generation": 9,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 75,
            "spAttack": 35,
            "spDefense": 35,
            "speed": 25
        }
    },
    {
        "dex": 933,
        "name": "naclstack",
        "generation": 9,
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "spAttack": 35,
            "spDefense": 65,
            "speed": 35
        }
    },
    {
        "dex": 934,
        "name": "garganacl",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 130,
            "spAttack": 45,
            "spDefense": 90,
            "speed": 35
        }
    },
    {
        "dex": 935,
        "name": "charcadet",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "spAttack": 50,
            "spDefense": 40,
            "speed": 35
        }
    },
    {
        "dex": 936,
        "name": "armarouge",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 60,
            "defense": 100,
            "spAttack": 125,
            "spDefense": 80,
            "speed": 75
        }
    },
    {
        "dex": 937,
        "name": "ceruledge",
        "generation": 9,
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 80,
            "spAttack": 60,
            "spDefense": 100,
            "speed": 85
        }
    },
    {
        "dex": 938,
        "name": "tadbulb",
        "generation": 9,
        "stats": {
            "hp": 61,
            "attack": 31,
            "defense": 41,
            "spAttack": 59,
            "spDefense": 35,
            "speed": 45
        }
    },
    {
        "dex": 939,
        "name": "bellibolt",
        "generation": 9,
        "stats": {
            "hp": 109,
            "attack": 64,
            "defense": 91,
            "spAttack": 103,
            "spDefense": 83,
            "speed": 45
        }
    },
    {
        "dex": 940,
        "name": "wattrel",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAttack": 55,
            "spDefense": 40,
            "speed": 70
        }
    },
    {
        "dex": 941,
        "name": "kilowattrel",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 60,
            "spAttack": 105,
            "spDefense": 60,
            "speed": 125
        }
    },
    {
        "dex": 942,
        "name": "maschiff",
        "generation": 9,
        "stats": {
            "hp": 60,
            "attack": 78,
            "defense": 60,
            "spAttack": 40,
            "spDefense": 51,
            "speed": 51
        }
    },
    {
        "dex": 943,
        "name": "mabosstiff",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 90,
            "spAttack": 60,
            "spDefense": 70,
            "speed": 85
        }
    },
    {
        "dex": 944,
        "name": "shroodle",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 35,
            "spAttack": 40,
            "spDefense": 35,
            "speed": 75
        }
    },
    {
        "dex": 945,
        "name": "grafaiai",
        "generation": 9,
        "stats": {
            "hp": 63,
            "attack": 95,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 72,
            "speed": 110
        }
    },
    {
        "dex": 946,
        "name": "bramblin",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 30,
            "spAttack": 45,
            "spDefense": 35,
            "speed": 60
        }
    },
    {
        "dex": 947,
        "name": "brambleghast",
        "generation": 9,
        "stats": {
            "hp": 55,
            "attack": 115,
            "defense": 70,
            "spAttack": 80,
            "spDefense": 70,
            "speed": 90
        }
    },
    {
        "dex": 948,
        "name": "toedscool",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAttack": 50,
            "spDefense": 100,
            "speed": 70
        }
    },
    {
        "dex": 949,
        "name": "toedscruel",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "spAttack": 80,
            "spDefense": 120,
            "speed": 100
        }
    },
    {
        "dex": 950,
        "name": "klawf",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "spAttack": 35,
            "spDefense": 55,
            "speed": 75
        }
    },
    {
        "dex": 951,
        "name": "capsakid",
        "generation": 9,
        "stats": {
            "hp": 50,
            "attack": 62,
            "defense": 40,
            "spAttack": 62,
            "spDefense": 40,
            "speed": 50
        }
    },
    {
        "dex": 952,
        "name": "scovillain",
        "generation": 9,
        "stats": {
            "hp": 65,
            "attack": 108,
            "defense": 65,
            "spAttack": 108,
            "spDefense": 65,
            "speed": 75
        }
    },
    {
        "dex": 953,
        "name": "rellor",
        "generation": 9,
        "stats": {
            "hp": 41,
            "attack": 50,
            "defense": 60,
            "spAttack": 31,
            "spDefense": 58,
            "speed": 30
        }
    },
    {
        "dex": 954,
        "name": "rabsca",
        "generation": 9,
        "stats": {
            "hp": 75,
            "attack": 50,
            "defense": 85,
            "spAttack": 115,
            "spDefense": 100,
            "speed": 45
        }
    },
    {
        "dex": 955,
        "name": "flittle",
        "generation": 9,
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "spAttack": 55,
            "spDefense": 30,
            "speed": 75
        }
    },
    {
        "dex": 956,
        "name": "espathra",
        "generation": 9,
        "stats": {
            "hp": 95,
            "attack": 60,
            "defense": 60,
            "spAttack": 101,
            "spDefense": 60,
            "speed": 105
        }
    },
    {
        "dex": 957,
        "name": "tinkatink",
        "generation": 9,
        "stats": {
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "spAttack": 35,
            "spDefense": 64,
            "speed": 58
        }
    },
    {
        "dex": 958,
        "name": "tinkatuff",
        "generation": 9,
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 55,
            "spAttack": 45,
            "spDefense": 82,
            "speed": 78
        }
    },
    {
        "dex": 959,
        "name": "tinkaton",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 75,
            "defense": 77,
            "spAttack": 70,
            "spDefense": 105,
            "speed": 94
        }
    },
    {
        "dex": 960,
        "name": "wiglett",
        "generation": 9,
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "spAttack": 35,
            "spDefense": 25,
            "speed": 95
        }
    },
    {
        "dex": 961,
        "name": "wugtrio",
        "generation": 9,
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "spAttack": 50,
            "spDefense": 70,
            "speed": 120
        }
    },
    {
        "dex": 962,
        "name": "bombirdier",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 103,
            "defense": 85,
            "spAttack": 60,
            "spDefense": 85,
            "speed": 82
        }
    },
    {
        "dex": 963,
        "name": "finizen",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 40,
            "spAttack": 45,
            "spDefense": 40,
            "speed": 75
        }
    },
    {
        "dex": 964,
        "name": "palafin-zero",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 70,
            "defense": 72,
            "spAttack": 53,
            "spDefense": 62,
            "speed": 100
        }
    },
    {
        "dex": 965,
        "name": "varoom",
        "generation": 9,
        "stats": {
            "hp": 45,
            "attack": 70,
            "defense": 63,
            "spAttack": 30,
            "spDefense": 45,
            "speed": 47
        }
    },
    {
        "dex": 966,
        "name": "revavroom",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 119,
            "defense": 90,
            "spAttack": 54,
            "spDefense": 67,
            "speed": 90
        }
    },
    {
        "dex": 967,
        "name": "cyclizar",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 95,
            "defense": 65,
            "spAttack": 85,
            "spDefense": 65,
            "speed": 121
        }
    },
    {
        "dex": 968,
        "name": "orthworm",
        "generation": 9,
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 145,
            "spAttack": 60,
            "spDefense": 55,
            "speed": 65
        }
    },
    {
        "dex": 969,
        "name": "glimmet",
        "generation": 9,
        "stats": {
            "hp": 48,
            "attack": 35,
            "defense": 42,
            "spAttack": 105,
            "spDefense": 60,
            "speed": 60
        }
    },
    {
        "dex": 970,
        "name": "glimmora",
        "generation": 9,
        "stats": {
            "hp": 83,
            "attack": 55,
            "defense": 90,
            "spAttack": 130,
            "spDefense": 81,
            "speed": 86
        }
    },
    {
        "dex": 971,
        "name": "greavard",
        "generation": 9,
        "stats": {
            "hp": 50,
            "attack": 61,
            "defense": 60,
            "spAttack": 30,
            "spDefense": 55,
            "speed": 34
        }
    },
    {
        "dex": 972,
        "name": "houndstone",
        "generation": 9,
        "stats": {
            "hp": 72,
            "attack": 101,
            "defense": 100,
            "spAttack": 50,
            "spDefense": 97,
            "speed": 68
        }
    },
    {
        "dex": 973,
        "name": "flamigo",
        "generation": 9,
        "stats": {
            "hp": 82,
            "attack": 115,
            "defense": 74,
            "spAttack": 75,
            "spDefense": 64,
            "speed": 90
        }
    },
    {
        "dex": 974,
        "name": "cetoddle",
        "generation": 9,
        "stats": {
            "hp": 108,
            "attack": 68,
            "defense": 45,
            "spAttack": 30,
            "spDefense": 40,
            "speed": 43
        }
    },
    {
        "dex": 975,
        "name": "cetitan",
        "generation": 9,
        "stats": {
            "hp": 170,
            "attack": 113,
            "defense": 65,
            "spAttack": 45,
            "spDefense": 55,
            "speed": 73
        }
    },
    {
        "dex": 976,
        "name": "veluza",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 102,
            "defense": 73,
            "spAttack": 78,
            "spDefense": 65,
            "speed": 70
        }
    },
    {
        "dex": 977,
        "name": "dondozo",
        "generation": 9,
        "stats": {
            "hp": 150,
            "attack": 100,
            "defense": 115,
            "spAttack": 65,
            "spDefense": 65,
            "speed": 35
        }
    },
    {
        "dex": 978,
        "name": "tatsugiri-curly",
        "generation": 9,
        "stats": {
            "hp": 68,
            "attack": 50,
            "defense": 60,
            "spAttack": 120,
            "spDefense": 95,
            "speed": 82
        }
    },
    {
        "dex": 979,
        "name": "annihilape",
        "generation": 9,
        "stats": {
            "hp": 110,
            "attack": 115,
            "defense": 80,
            "spAttack": 50,
            "spDefense": 90,
            "speed": 90
        }
    },
    {
        "dex": 980,
        "name": "clodsire",
        "generation": 9,
        "stats": {
            "hp": 130,
            "attack": 75,
            "defense": 60,
            "spAttack": 45,
            "spDefense": 100,
            "speed": 20
        }
    },
    {
        "dex": 981,
        "name": "farigiraf",
        "generation": 9,
        "stats": {
            "hp": 120,
            "attack": 90,
            "defense": 70,
            "spAttack": 110,
            "spDefense": 70,
            "speed": 60
        }
    },
    {
        "dex": 982,
        "name": "dudunsparce-two-segment",
        "generation": 9,
        "stats": {
            "hp": 125,
            "attack": 100,
            "defense": 80,
            "spAttack": 85,
            "spDefense": 75,
            "speed": 55
        }
    },
    {
        "dex": 983,
        "name": "kingambit",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 135,
            "defense": 120,
            "spAttack": 60,
            "spDefense": 85,
            "speed": 50
        }
    },
    {
        "dex": 984,
        "name": "great-tusk",
        "generation": 9,
        "stats": {
            "hp": 115,
            "attack": 131,
            "defense": 131,
            "spAttack": 53,
            "spDefense": 53,
            "speed": 87
        }
    },
    {
        "dex": 985,
        "name": "scream-tail",
        "generation": 9,
        "stats": {
            "hp": 115,
            "attack": 65,
            "defense": 99,
            "spAttack": 65,
            "spDefense": 115,
            "speed": 111
        }
    },
    {
        "dex": 986,
        "name": "brute-bonnet",
        "generation": 9,
        "stats": {
            "hp": 111,
            "attack": 127,
            "defense": 99,
            "spAttack": 79,
            "spDefense": 99,
            "speed": 55
        }
    },
    {
        "dex": 987,
        "name": "flutter-mane",
        "generation": 9,
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "spAttack": 135,
            "spDefense": 135,
            "speed": 135
        }
    },
    {
        "dex": 988,
        "name": "slither-wing",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 135,
            "defense": 79,
            "spAttack": 85,
            "spDefense": 105,
            "speed": 81
        }
    },
    {
        "dex": 989,
        "name": "sandy-shocks",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 81,
            "defense": 97,
            "spAttack": 121,
            "spDefense": 85,
            "speed": 101
        }
    },
    {
        "dex": 990,
        "name": "iron-treads",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 112,
            "defense": 120,
            "spAttack": 72,
            "spDefense": 70,
            "speed": 106
        }
    },
    {
        "dex": 991,
        "name": "iron-bundle",
        "generation": 9,
        "stats": {
            "hp": 56,
            "attack": 80,
            "defense": 114,
            "spAttack": 124,
            "spDefense": 60,
            "speed": 136
        }
    },
    {
        "dex": 992,
        "name": "iron-hands",
        "generation": 9,
        "stats": {
            "hp": 154,
            "attack": 140,
            "defense": 108,
            "spAttack": 50,
            "spDefense": 68,
            "speed": 50
        }
    },
    {
        "dex": 993,
        "name": "iron-jugulis",
        "generation": 9,
        "stats": {
            "hp": 94,
            "attack": 80,
            "defense": 86,
            "spAttack": 122,
            "spDefense": 80,
            "speed": 108
        }
    },
    {
        "dex": 994,
        "name": "iron-moth",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 60,
            "spAttack": 140,
            "spDefense": 110,
            "speed": 110
        }
    },
    {
        "dex": 995,
        "name": "iron-thorns",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "spAttack": 70,
            "spDefense": 84,
            "speed": 72
        }
    },
    {
        "dex": 996,
        "name": "frigibax",
        "generation": 9,
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 45,
            "spAttack": 35,
            "spDefense": 45,
            "speed": 55
        }
    },
    {
        "dex": 997,
        "name": "arctibax",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 66,
            "spAttack": 45,
            "spDefense": 65,
            "speed": 62
        }
    },
    {
        "dex": 998,
        "name": "baxcalibur",
        "generation": 9,
        "stats": {
            "hp": 115,
            "attack": 145,
            "defense": 92,
            "spAttack": 75,
            "spDefense": 86,
            "speed": 87
        }
    },
    {
        "dex": 999,
        "name": "gimmighoul",
        "generation": 9,
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 70,
            "spAttack": 75,
            "spDefense": 70,
            "speed": 10
        }
    },
    {
        "dex": 1000,
        "name": "gholdengo",
        "generation": 9,
        "stats": {
            "hp": 87,
            "attack": 60,
            "defense": 95,
            "spAttack": 133,
            "spDefense": 91,
            "speed": 84
        }
    },
    {
        "dex": 1001,
        "name": "wo-chien",
        "generation": 9,
        "stats": {
            "hp": 85,
            "attack": 85,
            "defense": 100,
            "spAttack": 95,
            "spDefense": 135,
            "speed": 70
        }
    },
    {
        "dex": 1002,
        "name": "chien-pao",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "spAttack": 90,
            "spDefense": 65,
            "speed": 135
        }
    },
    {
        "dex": 1003,
        "name": "ting-lu",
        "generation": 9,
        "stats": {
            "hp": 155,
            "attack": 110,
            "defense": 125,
            "spAttack": 55,
            "spDefense": 80,
            "speed": 45
        }
    },
    {
        "dex": 1004,
        "name": "chi-yu",
        "generation": 9,
        "stats": {
            "hp": 55,
            "attack": 80,
            "defense": 80,
            "spAttack": 135,
            "spDefense": 120,
            "speed": 100
        }
    },
    {
        "dex": 1005,
        "name": "roaring-moon",
        "generation": 9,
        "stats": {
            "hp": 105,
            "attack": 139,
            "defense": 71,
            "spAttack": 55,
            "spDefense": 101,
            "speed": 119
        }
    },
    {
        "dex": 1006,
        "name": "iron-valiant",
        "generation": 9,
        "stats": {
            "hp": 74,
            "attack": 130,
            "defense": 90,
            "spAttack": 120,
            "spDefense": 60,
            "speed": 116
        }
    },
    {
        "dex": 1007,
        "name": "koraidon",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 135,
            "defense": 115,
            "spAttack": 85,
            "spDefense": 100,
            "speed": 135
        }
    },
    {
        "dex": 1008,
        "name": "miraidon",
        "generation": 9,
        "stats": {
            "hp": 100,
            "attack": 85,
            "defense": 100,
            "spAttack": 135,
            "spDefense": 115,
            "speed": 135
        }
    },
    {
        "dex": 1009,
        "name": "walking-wake",
        "generation": 9,
        "stats": {
            "hp": 99,
            "attack": 83,
            "defense": 91,
            "spAttack": 125,
            "spDefense": 83,
            "speed": 109
        }
    },
    {
        "dex": 1010,
        "name": "iron-leaves",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 88,
            "spAttack": 70,
            "spDefense": 108,
            "speed": 104
        }
    },
    {
        "dex": 1011,
        "name": "dipplin",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 110,
            "spAttack": 95,
            "spDefense": 80,
            "speed": 40
        }
    },
    {
        "dex": 1012,
        "name": "poltchageist",
        "generation": 9,
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "spAttack": 74,
            "spDefense": 54,
            "speed": 50
        }
    },
    {
        "dex": 1013,
        "name": "sinistcha",
        "generation": 9,
        "stats": {
            "hp": 71,
            "attack": 60,
            "defense": 106,
            "spAttack": 121,
            "spDefense": 80,
            "speed": 70
        }
    },
    {
        "dex": 1014,
        "name": "okidogi",
        "generation": 9,
        "stats": {
            "hp": 88,
            "attack": 128,
            "defense": 115,
            "spAttack": 58,
            "spDefense": 86,
            "speed": 80
        }
    },
    {
        "dex": 1015,
        "name": "munkidori",
        "generation": 9,
        "stats": {
            "hp": 88,
            "attack": 75,
            "defense": 66,
            "spAttack": 130,
            "spDefense": 90,
            "speed": 106
        }
    },
    {
        "dex": 1016,
        "name": "fezandipiti",
        "generation": 9,
        "stats": {
            "hp": 88,
            "attack": 91,
            "defense": 82,
            "spAttack": 70,
            "spDefense": 125,
            "speed": 99
        }
    },
    {
        "dex": 1017,
        "name": "ogerpon",
        "generation": 9,
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "spAttack": 60,
            "spDefense": 96,
            "speed": 110
        }
    },
    {
        "dex": 1018,
        "name": "archaludon",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 105,
            "defense": 130,
            "spAttack": 125,
            "spDefense": 65,
            "speed": 85
        }
    },
    {
        "dex": 1019,
        "name": "hydrapple",
        "generation": 9,
        "stats": {
            "hp": 106,
            "attack": 80,
            "defense": 110,
            "spAttack": 120,
            "spDefense": 80,
            "speed": 44
        }
    },
    {
        "dex": 1020,
        "name": "gouging-fire",
        "generation": 9,
        "stats": {
            "hp": 105,
            "attack": 115,
            "defense": 121,
            "spAttack": 65,
            "spDefense": 93,
            "speed": 91
        }
    },
    {
        "dex": 1021,
        "name": "raging-bolt",
        "generation": 9,
        "stats": {
            "hp": 125,
            "attack": 73,
            "defense": 91,
            "spAttack": 137,
            "spDefense": 89,
            "speed": 75
        }
    },
    {
        "dex": 1022,
        "name": "iron-boulder",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 80,
            "spAttack": 68,
            "spDefense": 108,
            "speed": 124
        }
    },
    {
        "dex": 1023,
        "name": "iron-crown",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 72,
            "defense": 100,
            "spAttack": 122,
            "spDefense": 108,
            "speed": 98
        }
    },
    {
        "dex": 1024,
        "name": "terapagos",
        "generation": 9,
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 85,
            "spAttack": 65,
            "spDefense": 85,
            "speed": 60
        }
    },
    {
        "dex": 1025,
        "name": "pecharunt",
        "generation": 9,
        "stats": {
            "hp": 88,
            "attack": 88,
            "defense": 160,
            "spAttack": 88,
            "spDefense": 88,
            "speed": 88
        }
    }
];

export default pokemonData;
