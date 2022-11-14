let currentList = [
    {
        "name": "bulbasaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "id": 1,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "ivysaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "id": 2,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "venusaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        "id": 3,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "charmander",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "id": 4,
        "types": [
            "fire"
        ]
    },
    {
        "name": "charmeleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        "id": 5,
        "types": [
            "fire"
        ]
    },
    {
        "name": "charizard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
        "id": 6,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "squirtle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "id": 7,
        "types": [
            "water"
        ]
    },
    {
        "name": "wartortle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        "id": 8,
        "types": [
            "water"
        ]
    },
    {
        "name": "blastoise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "id": 9,
        "types": [
            "water"
        ]
    },
    {
        "name": "caterpie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        "id": 10,
        "types": [
            "bug"
        ]
    },
    {
        "name": "metapod",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        "id": 11,
        "types": [
            "bug"
        ]
    },
    {
        "name": "butterfree",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
        "id": 12,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "weedle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
        "id": 13,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "kakuna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
        "id": 14,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "beedrill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
        "id": 15,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "pidgey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
        "id": 16,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeotto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
        "id": 17,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
        "id": 18,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "rattata",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        "id": 19,
        "types": [
            "normal"
        ]
    },
    {
        "name": "raticate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        "id": 20,
        "types": [
            "normal"
        ]
    },
    {
        "name": "spearow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
        "id": 21,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "fearow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
        "id": 22,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "ekans",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
        "id": 23,
        "types": [
            "poison"
        ]
    },
    {
        "name": "arbok",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "id": 24,
        "types": [
            "poison"
        ]
    },
    {
        "name": "pikachu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "id": 25,
        "types": [
            "electric"
        ]
    },
    {
        "name": "raichu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        "id": 26,
        "types": [
            "electric"
        ]
    },
    {
        "name": "sandshrew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        "id": 27,
        "types": [
            "ground"
        ]
    },
    {
        "name": "sandslash",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        "id": 28,
        "types": [
            "ground"
        ]
    },
    {
        "name": "nidoran-f",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        "id": 29,
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorina",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        "id": 30,
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoqueen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
        "id": 31,
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "nidoran-m",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        "id": 32,
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        "id": 33,
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoking",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
        "id": 34,
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "clefairy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        "id": 35,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "clefable",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
        "id": 36,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "vulpix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        "id": 37,
        "types": [
            "fire"
        ]
    },
    {
        "name": "ninetales",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
        "id": 38,
        "types": [
            "fire"
        ]
    },
    {
        "name": "jigglypuff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
        "id": 39,
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "wigglytuff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
        "id": 40,
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "zubat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",
        "id": 41,
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "golbat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
        "id": 42,
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "oddish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
        "id": 43,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "gloom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
        "id": 44,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "vileplume",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
        "id": 45,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "paras",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
        "id": 46,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "parasect",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
        "id": 47,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "venonat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
        "id": 48,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "venomoth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
        "id": 49,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "diglett",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
        "id": 50,
        "types": [
            "ground"
        ]
    },
    {
        "name": "dugtrio",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
        "id": 51,
        "types": [
            "ground"
        ]
    },
    {
        "name": "meowth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        "id": 52,
        "types": [
            "normal"
        ]
    },
    {
        "name": "persian",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
        "id": 53,
        "types": [
            "normal"
        ]
    },
    {
        "name": "psyduck",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
        "id": 54,
        "types": [
            "water"
        ]
    },
    {
        "name": "golduck",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
        "id": 55,
        "types": [
            "water"
        ]
    },
    {
        "name": "mankey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
        "id": 56,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "primeape",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
        "id": 57,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "growlithe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
        "id": 58,
        "types": [
            "fire"
        ]
    },
    {
        "name": "arcanine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
        "id": 59,
        "types": [
            "fire"
        ]
    },
    {
        "name": "poliwag",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
        "id": 60,
        "types": [
            "water"
        ]
    },
    {
        "name": "poliwhirl",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
        "id": 61,
        "types": [
            "water"
        ]
    },
    {
        "name": "poliwrath",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
        "id": 62,
        "types": [
            "water",
            "fighting"
        ]
    },
    {
        "name": "abra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
        "id": 63,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "kadabra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
        "id": 64,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "alakazam",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
        "id": 65,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "machop",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
        "id": 66,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "machoke",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
        "id": 67,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "machamp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
        "id": 68,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "bellsprout",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",
        "id": 69,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "weepinbell",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
        "id": 70,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "victreebel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
        "id": 71,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "tentacool",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",
        "id": 72,
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "name": "tentacruel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
        "id": 73,
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "name": "geodude",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
        "id": 74,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "graveler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
        "id": 75,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "golem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
        "id": 76,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "ponyta",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
        "id": 77,
        "types": [
            "fire"
        ]
    },
    {
        "name": "rapidash",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
        "id": 78,
        "types": [
            "fire"
        ]
    },
    {
        "name": "slowpoke",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
        "id": 79,
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "name": "slowbro",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
        "id": 80,
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "name": "magnemite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
        "id": 81,
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "name": "magneton",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
        "id": 82,
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "name": "farfetchd",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
        "id": 83,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "doduo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",
        "id": 84,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "dodrio",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
        "id": 85,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "seel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
        "id": 86,
        "types": [
            "water"
        ]
    },
    {
        "name": "dewgong",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
        "id": 87,
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "name": "grimer",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
        "id": 88,
        "types": [
            "poison"
        ]
    },
    {
        "name": "muk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
        "id": 89,
        "types": [
            "poison"
        ]
    },
    {
        "name": "shellder",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
        "id": 90,
        "types": [
            "water"
        ]
    },
    {
        "name": "cloyster",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
        "id": 91,
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "name": "gastly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
        "id": 92,
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "name": "haunter",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
        "id": 93,
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "name": "gengar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
        "id": 94,
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "name": "onix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
        "id": 95,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "drowzee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
        "id": 96,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "hypno",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
        "id": 97,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "krabby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
        "id": 98,
        "types": [
            "water"
        ]
    },
    {
        "name": "kingler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
        "id": 99,
        "types": [
            "water"
        ]
    },
    {
        "name": "voltorb",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
        "id": 100,
        "types": [
            "electric"
        ]
    },
    {
        "name": "electrode",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
        "id": 101,
        "types": [
            "electric"
        ]
    },
    {
        "name": "exeggcute",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/102.svg",
        "id": 102,
        "types": [
            "grass",
            "psychic"
        ]
    },
    {
        "name": "exeggutor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
        "id": 103,
        "types": [
            "grass",
            "psychic"
        ]
    },
    {
        "name": "cubone",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
        "id": 104,
        "types": [
            "ground"
        ]
    },
    {
        "name": "marowak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
        "id": 105,
        "types": [
            "ground"
        ]
    },
    {
        "name": "hitmonlee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
        "id": 106,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "hitmonchan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
        "id": 107,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "lickitung",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
        "id": 108,
        "types": [
            "normal"
        ]
    },
    {
        "name": "koffing",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
        "id": 109,
        "types": [
            "poison"
        ]
    },
    {
        "name": "weezing",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
        "id": 110,
        "types": [
            "poison"
        ]
    },
    {
        "name": "rhyhorn",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/111.svg",
        "id": 111,
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "name": "rhydon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
        "id": 112,
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "name": "chansey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
        "id": 113,
        "types": [
            "normal"
        ]
    },
    {
        "name": "tangela",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
        "id": 114,
        "types": [
            "grass"
        ]
    },
    {
        "name": "kangaskhan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
        "id": 115,
        "types": [
            "normal"
        ]
    },
    {
        "name": "horsea",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
        "id": 116,
        "types": [
            "water"
        ]
    },
    {
        "name": "seadra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
        "id": 117,
        "types": [
            "water"
        ]
    },
    {
        "name": "goldeen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
        "id": 118,
        "types": [
            "water"
        ]
    },
    {
        "name": "seaking",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
        "id": 119,
        "types": [
            "water"
        ]
    },
    {
        "name": "staryu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
        "id": 120,
        "types": [
            "water"
        ]
    },
    {
        "name": "starmie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
        "id": 121,
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "name": "mr-mime",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg",
        "id": 122,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "scyther",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg",
        "id": 123,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "jynx",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/124.svg",
        "id": 124,
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "name": "electabuzz",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
        "id": 125,
        "types": [
            "electric"
        ]
    },
    {
        "name": "magmar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
        "id": 126,
        "types": [
            "fire"
        ]
    },
    {
        "name": "pinsir",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
        "id": 127,
        "types": [
            "bug"
        ]
    },
    {
        "name": "tauros",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
        "id": 128,
        "types": [
            "normal"
        ]
    },
    {
        "name": "magikarp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
        "id": 129,
        "types": [
            "water"
        ]
    },
    {
        "name": "gyarados",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
        "id": 130,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "lapras",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg",
        "id": 131,
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "name": "ditto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
        "id": 132,
        "types": [
            "normal"
        ]
    },
    {
        "name": "eevee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
        "id": 133,
        "types": [
            "normal"
        ]
    },
    {
        "name": "vaporeon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
        "id": 134,
        "types": [
            "water"
        ]
    },
    {
        "name": "jolteon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
        "id": 135,
        "types": [
            "electric"
        ]
    },
    {
        "name": "flareon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
        "id": 136,
        "types": [
            "fire"
        ]
    },
    {
        "name": "porygon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
        "id": 137,
        "types": [
            "normal"
        ]
    },
    {
        "name": "omanyte",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/138.svg",
        "id": 138,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "omastar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
        "id": 139,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "kabuto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/140.svg",
        "id": 140,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "kabutops",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg",
        "id": 141,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "aerodactyl",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/142.svg",
        "id": 142,
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "name": "snorlax",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
        "id": 143,
        "types": [
            "normal"
        ]
    },
    {
        "name": "articuno",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg",
        "id": 144,
        "types": [
            "ice",
            "flying"
        ]
    },
    {
        "name": "zapdos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg",
        "id": 145,
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "name": "moltres",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg",
        "id": 146,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "dratini",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
        "id": 147,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "dragonair",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
        "id": 148,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "dragonite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg",
        "id": 149,
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "name": "mewtwo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
        "id": 150,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "mew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        "id": 151,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "chikorita",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
        "id": 152,
        "types": [
            "grass"
        ]
    },
    {
        "name": "bayleef",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
        "id": 153,
        "types": [
            "grass"
        ]
    },
    {
        "name": "meganium",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
        "id": 154,
        "types": [
            "grass"
        ]
    },
    {
        "name": "cyndaquil",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
        "id": 155,
        "types": [
            "fire"
        ]
    },
    {
        "name": "quilava",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
        "id": 156,
        "types": [
            "fire"
        ]
    },
    {
        "name": "typhlosion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
        "id": 157,
        "types": [
            "fire"
        ]
    },
    {
        "name": "totodile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
        "id": 158,
        "types": [
            "water"
        ]
    },
    {
        "name": "croconaw",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
        "id": 159,
        "types": [
            "water"
        ]
    },
    {
        "name": "feraligatr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
        "id": 160,
        "types": [
            "water"
        ]
    },
    {
        "name": "sentret",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
        "id": 161,
        "types": [
            "normal"
        ]
    },
    {
        "name": "furret",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
        "id": 162,
        "types": [
            "normal"
        ]
    },
    {
        "name": "hoothoot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/163.svg",
        "id": 163,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "noctowl",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/164.svg",
        "id": 164,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "ledyba",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/165.svg",
        "id": 165,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "ledian",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/166.svg",
        "id": 166,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "spinarak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/167.svg",
        "id": 167,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "ariados",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/168.svg",
        "id": 168,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "crobat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/169.svg",
        "id": 169,
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "chinchou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/170.svg",
        "id": 170,
        "types": [
            "water",
            "electric"
        ]
    },
    {
        "name": "lanturn",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/171.svg",
        "id": 171,
        "types": [
            "water",
            "electric"
        ]
    },
    {
        "name": "pichu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
        "id": 172,
        "types": [
            "electric"
        ]
    },
    {
        "name": "cleffa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
        "id": 173,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "igglybuff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/174.svg",
        "id": 174,
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "togepi",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
        "id": 175,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "togetic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/176.svg",
        "id": 176,
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "name": "natu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/177.svg",
        "id": 177,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "xatu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/178.svg",
        "id": 178,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "mareep",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
        "id": 179,
        "types": [
            "electric"
        ]
    },
    {
        "name": "flaaffy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
        "id": 180,
        "types": [
            "electric"
        ]
    },
    {
        "name": "ampharos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
        "id": 181,
        "types": [
            "electric"
        ]
    },
    {
        "name": "bellossom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
        "id": 182,
        "types": [
            "grass"
        ]
    },
    {
        "name": "marill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/183.svg",
        "id": 183,
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "name": "azumarill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/184.svg",
        "id": 184,
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "name": "sudowoodo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
        "id": 185,
        "types": [
            "rock"
        ]
    },
    {
        "name": "politoed",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
        "id": 186,
        "types": [
            "water"
        ]
    },
    {
        "name": "hoppip",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/187.svg",
        "id": 187,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "skiploom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/188.svg",
        "id": 188,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "jumpluff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/189.svg",
        "id": 189,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "aipom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
        "id": 190,
        "types": [
            "normal"
        ]
    },
    {
        "name": "sunkern",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
        "id": 191,
        "types": [
            "grass"
        ]
    },
    {
        "name": "sunflora",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
        "id": 192,
        "types": [
            "grass"
        ]
    },
    {
        "name": "yanma",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/193.svg",
        "id": 193,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "wooper",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/194.svg",
        "id": 194,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "quagsire",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/195.svg",
        "id": 195,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "espeon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
        "id": 196,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "umbreon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
        "id": 197,
        "types": [
            "dark"
        ]
    },
    {
        "name": "murkrow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/198.svg",
        "id": 198,
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "name": "slowking",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/199.svg",
        "id": 199,
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "name": "misdreavus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
        "id": 200,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "unown",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
        "id": 201,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "wobbuffet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
        "id": 202,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "girafarig",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/203.svg",
        "id": 203,
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "name": "pineco",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
        "id": 204,
        "types": [
            "bug"
        ]
    },
    {
        "name": "forretress",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/205.svg",
        "id": 205,
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "name": "dunsparce",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
        "id": 206,
        "types": [
            "normal"
        ]
    },
    {
        "name": "gligar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/207.svg",
        "id": 207,
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "name": "steelix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/208.svg",
        "id": 208,
        "types": [
            "steel",
            "ground"
        ]
    },
    {
        "name": "snubbull",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
        "id": 209,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "granbull",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
        "id": 210,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "qwilfish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/211.svg",
        "id": 211,
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "name": "scizor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/212.svg",
        "id": 212,
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "name": "shuckle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/213.svg",
        "id": 213,
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "name": "heracross",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/214.svg",
        "id": 214,
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "name": "sneasel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/215.svg",
        "id": 215,
        "types": [
            "dark",
            "ice"
        ]
    },
    {
        "name": "teddiursa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
        "id": 216,
        "types": [
            "normal"
        ]
    },
    {
        "name": "ursaring",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
        "id": 217,
        "types": [
            "normal"
        ]
    },
    {
        "name": "slugma",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
        "id": 218,
        "types": [
            "fire"
        ]
    },
    {
        "name": "magcargo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/219.svg",
        "id": 219,
        "types": [
            "fire",
            "rock"
        ]
    },
    {
        "name": "swinub",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/220.svg",
        "id": 220,
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "name": "piloswine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/221.svg",
        "id": 221,
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "name": "corsola",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/222.svg",
        "id": 222,
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "name": "remoraid",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
        "id": 223,
        "types": [
            "water"
        ]
    },
    {
        "name": "octillery",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
        "id": 224,
        "types": [
            "water"
        ]
    },
    {
        "name": "delibird",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/225.svg",
        "id": 225,
        "types": [
            "ice",
            "flying"
        ]
    },
    {
        "name": "mantine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/226.svg",
        "id": 226,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "skarmory",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/227.svg",
        "id": 227,
        "types": [
            "steel",
            "flying"
        ]
    },
    {
        "name": "houndour",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/228.svg",
        "id": 228,
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "name": "houndoom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/229.svg",
        "id": 229,
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "name": "kingdra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/230.svg",
        "id": 230,
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "name": "phanpy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
        "id": 231,
        "types": [
            "ground"
        ]
    },
    {
        "name": "donphan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
        "id": 232,
        "types": [
            "ground"
        ]
    },
    {
        "name": "porygon2",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
        "id": 233,
        "types": [
            "normal"
        ]
    },
    {
        "name": "stantler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
        "id": 234,
        "types": [
            "normal"
        ]
    },
    {
        "name": "smeargle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
        "id": 235,
        "types": [
            "normal"
        ]
    },
    {
        "name": "tyrogue",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
        "id": 236,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "hitmontop",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
        "id": 237,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "smoochum",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/238.svg",
        "id": 238,
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "name": "elekid",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
        "id": 239,
        "types": [
            "electric"
        ]
    },
    {
        "name": "magby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
        "id": 240,
        "types": [
            "fire"
        ]
    },
    {
        "name": "miltank",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
        "id": 241,
        "types": [
            "normal"
        ]
    },
    {
        "name": "blissey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
        "id": 242,
        "types": [
            "normal"
        ]
    },
    {
        "name": "raikou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
        "id": 243,
        "types": [
            "electric"
        ]
    },
    {
        "name": "entei",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
        "id": 244,
        "types": [
            "fire"
        ]
    },
    {
        "name": "suicune",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
        "id": 245,
        "types": [
            "water"
        ]
    },
    {
        "name": "larvitar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/246.svg",
        "id": 246,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "pupitar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/247.svg",
        "id": 247,
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "name": "tyranitar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/248.svg",
        "id": 248,
        "types": [
            "rock",
            "dark"
        ]
    },
    {
        "name": "lugia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg",
        "id": 249,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "ho-oh",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/250.svg",
        "id": 250,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "celebi",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/251.svg",
        "id": 251,
        "types": [
            "psychic",
            "grass"
        ]
    },
    {
        "name": "treecko",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
        "id": 252,
        "types": [
            "grass"
        ]
    },
    {
        "name": "grovyle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
        "id": 253,
        "types": [
            "grass"
        ]
    },
    {
        "name": "sceptile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
        "id": 254,
        "types": [
            "grass"
        ]
    },
    {
        "name": "torchic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
        "id": 255,
        "types": [
            "fire"
        ]
    },
    {
        "name": "combusken",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/256.svg",
        "id": 256,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "blaziken",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/257.svg",
        "id": 257,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "mudkip",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
        "id": 258,
        "types": [
            "water"
        ]
    },
    {
        "name": "marshtomp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/259.svg",
        "id": 259,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "swampert",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/260.svg",
        "id": 260,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "poochyena",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
        "id": 261,
        "types": [
            "dark"
        ]
    },
    {
        "name": "mightyena",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
        "id": 262,
        "types": [
            "dark"
        ]
    },
    {
        "name": "zigzagoon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
        "id": 263,
        "types": [
            "normal"
        ]
    },
    {
        "name": "linoone",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
        "id": 264,
        "types": [
            "normal"
        ]
    },
    {
        "name": "wurmple",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
        "id": 265,
        "types": [
            "bug"
        ]
    },
    {
        "name": "silcoon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
        "id": 266,
        "types": [
            "bug"
        ]
    },
    {
        "name": "beautifly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/267.svg",
        "id": 267,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "cascoon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png",
        "id": 268,
        "types": [
            "bug"
        ]
    },
    {
        "name": "dustox",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/269.svg",
        "id": 269,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "lotad",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/270.svg",
        "id": 270,
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "name": "lombre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/271.svg",
        "id": 271,
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "name": "ludicolo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/272.svg",
        "id": 272,
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "name": "seedot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
        "id": 273,
        "types": [
            "grass"
        ]
    },
    {
        "name": "nuzleaf",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/274.svg",
        "id": 274,
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "name": "shiftry",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/275.svg",
        "id": 275,
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "name": "taillow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/276.svg",
        "id": 276,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "swellow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/277.svg",
        "id": 277,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "wingull",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/278.svg",
        "id": 278,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "pelipper",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/279.svg",
        "id": 279,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "ralts",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/280.svg",
        "id": 280,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "kirlia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/281.svg",
        "id": 281,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "gardevoir",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/282.svg",
        "id": 282,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "surskit",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/283.svg",
        "id": 283,
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "name": "masquerain",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/284.svg",
        "id": 284,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "shroomish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
        "id": 285,
        "types": [
            "grass"
        ]
    },
    {
        "name": "breloom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/286.svg",
        "id": 286,
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "name": "slakoth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
        "id": 287,
        "types": [
            "normal"
        ]
    },
    {
        "name": "vigoroth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
        "id": 288,
        "types": [
            "normal"
        ]
    },
    {
        "name": "slaking",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
        "id": 289,
        "types": [
            "normal"
        ]
    },
    {
        "name": "nincada",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/290.svg",
        "id": 290,
        "types": [
            "bug",
            "ground"
        ]
    },
    {
        "name": "ninjask",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/291.svg",
        "id": 291,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "shedinja",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/292.svg",
        "id": 292,
        "types": [
            "bug",
            "ghost"
        ]
    },
    {
        "name": "whismur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
        "id": 293,
        "types": [
            "normal"
        ]
    },
    {
        "name": "loudred",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
        "id": 294,
        "types": [
            "normal"
        ]
    },
    {
        "name": "exploud",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
        "id": 295,
        "types": [
            "normal"
        ]
    },
    {
        "name": "makuhita",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
        "id": 296,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "hariyama",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
        "id": 297,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "azurill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/298.svg",
        "id": 298,
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "nosepass",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
        "id": 299,
        "types": [
            "rock"
        ]
    },
    {
        "name": "skitty",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
        "id": 300,
        "types": [
            "normal"
        ]
    },
    {
        "name": "delcatty",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
        "id": 301,
        "types": [
            "normal"
        ]
    },
    {
        "name": "sableye",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/302.svg",
        "id": 302,
        "types": [
            "dark",
            "ghost"
        ]
    },
    {
        "name": "mawile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/303.svg",
        "id": 303,
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "name": "aron",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/304.svg",
        "id": 304,
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "name": "lairon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/305.svg",
        "id": 305,
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "name": "aggron",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/306.svg",
        "id": 306,
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "name": "meditite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/307.svg",
        "id": 307,
        "types": [
            "fighting",
            "psychic"
        ]
    },
    {
        "name": "medicham",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/308.svg",
        "id": 308,
        "types": [
            "fighting",
            "psychic"
        ]
    },
    {
        "name": "electrike",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
        "id": 309,
        "types": [
            "electric"
        ]
    },
    {
        "name": "manectric",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
        "id": 310,
        "types": [
            "electric"
        ]
    },
    {
        "name": "plusle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
        "id": 311,
        "types": [
            "electric"
        ]
    },
    {
        "name": "minun",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
        "id": 312,
        "types": [
            "electric"
        ]
    },
    {
        "name": "volbeat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
        "id": 313,
        "types": [
            "bug"
        ]
    },
    {
        "name": "illumise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
        "id": 314,
        "types": [
            "bug"
        ]
    },
    {
        "name": "roselia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/315.svg",
        "id": 315,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "gulpin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
        "id": 316,
        "types": [
            "poison"
        ]
    },
    {
        "name": "swalot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
        "id": 317,
        "types": [
            "poison"
        ]
    },
    {
        "name": "carvanha",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/318.svg",
        "id": 318,
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "name": "sharpedo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/319.svg",
        "id": 319,
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "name": "wailmer",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
        "id": 320,
        "types": [
            "water"
        ]
    },
    {
        "name": "wailord",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
        "id": 321,
        "types": [
            "water"
        ]
    },
    {
        "name": "numel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/322.svg",
        "id": 322,
        "types": [
            "fire",
            "ground"
        ]
    },
    {
        "name": "camerupt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/323.svg",
        "id": 323,
        "types": [
            "fire",
            "ground"
        ]
    },
    {
        "name": "torkoal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
        "id": 324,
        "types": [
            "fire"
        ]
    },
    {
        "name": "spoink",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
        "id": 325,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "grumpig",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
        "id": 326,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "spinda",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
        "id": 327,
        "types": [
            "normal"
        ]
    },
    {
        "name": "trapinch",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
        "id": 328,
        "types": [
            "ground"
        ]
    },
    {
        "name": "vibrava",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/329.svg",
        "id": 329,
        "types": [
            "ground",
            "dragon"
        ]
    },
    {
        "name": "flygon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/330.svg",
        "id": 330,
        "types": [
            "ground",
            "dragon"
        ]
    },
    {
        "name": "cacnea",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
        "id": 331,
        "types": [
            "grass"
        ]
    },
    {
        "name": "cacturne",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/332.svg",
        "id": 332,
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "name": "swablu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/333.svg",
        "id": 333,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "altaria",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/334.svg",
        "id": 334,
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "name": "zangoose",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
        "id": 335,
        "types": [
            "normal"
        ]
    },
    {
        "name": "seviper",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
        "id": 336,
        "types": [
            "poison"
        ]
    },
    {
        "name": "lunatone",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/337.svg",
        "id": 337,
        "types": [
            "rock",
            "psychic"
        ]
    },
    {
        "name": "solrock",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/338.svg",
        "id": 338,
        "types": [
            "rock",
            "psychic"
        ]
    },
    {
        "name": "barboach",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/339.svg",
        "id": 339,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "whiscash",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/340.svg",
        "id": 340,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "corphish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
        "id": 341,
        "types": [
            "water"
        ]
    },
    {
        "name": "crawdaunt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/342.svg",
        "id": 342,
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "name": "baltoy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/343.svg",
        "id": 343,
        "types": [
            "ground",
            "psychic"
        ]
    },
    {
        "name": "claydol",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/344.svg",
        "id": 344,
        "types": [
            "ground",
            "psychic"
        ]
    },
    {
        "name": "lileep",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/345.svg",
        "id": 345,
        "types": [
            "rock",
            "grass"
        ]
    },
    {
        "name": "cradily",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/346.svg",
        "id": 346,
        "types": [
            "rock",
            "grass"
        ]
    },
    {
        "name": "anorith",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/347.svg",
        "id": 347,
        "types": [
            "rock",
            "bug"
        ]
    },
    {
        "name": "armaldo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/348.svg",
        "id": 348,
        "types": [
            "rock",
            "bug"
        ]
    },
    {
        "name": "feebas",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
        "id": 349,
        "types": [
            "water"
        ]
    },
    {
        "name": "milotic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
        "id": 350,
        "types": [
            "water"
        ]
    },
    {
        "name": "castform",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
        "id": 351,
        "types": [
            "normal"
        ]
    },
    {
        "name": "kecleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
        "id": 352,
        "types": [
            "normal"
        ]
    },
    {
        "name": "shuppet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
        "id": 353,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "banette",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
        "id": 354,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "duskull",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
        "id": 355,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "dusclops",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
        "id": 356,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "tropius",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/357.svg",
        "id": 357,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "chimecho",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
        "id": 358,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "absol",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
        "id": 359,
        "types": [
            "dark"
        ]
    },
    {
        "name": "wynaut",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
        "id": 360,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "snorunt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
        "id": 361,
        "types": [
            "ice"
        ]
    },
    {
        "name": "glalie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
        "id": 362,
        "types": [
            "ice"
        ]
    },
    {
        "name": "spheal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/363.svg",
        "id": 363,
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "name": "sealeo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/364.svg",
        "id": 364,
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "name": "walrein",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/365.svg",
        "id": 365,
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "name": "clamperl",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
        "id": 366,
        "types": [
            "water"
        ]
    },
    {
        "name": "huntail",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
        "id": 367,
        "types": [
            "water"
        ]
    },
    {
        "name": "gorebyss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png",
        "id": 368,
        "types": [
            "water"
        ]
    },
    {
        "name": "relicanth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/369.svg",
        "id": 369,
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "name": "luvdisc",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
        "id": 370,
        "types": [
            "water"
        ]
    },
    {
        "name": "bagon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
        "id": 371,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "shelgon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
        "id": 372,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "salamence",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/373.svg",
        "id": 373,
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "name": "beldum",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/374.svg",
        "id": 374,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "metang",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/375.svg",
        "id": 375,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "metagross",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/376.svg",
        "id": 376,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "regirock",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
        "id": 377,
        "types": [
            "rock"
        ]
    },
    {
        "name": "regice",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
        "id": 378,
        "types": [
            "ice"
        ]
    },
    {
        "name": "registeel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
        "id": 379,
        "types": [
            "steel"
        ]
    },
    {
        "name": "latias",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/380.svg",
        "id": 380,
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "name": "latios",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/381.svg",
        "id": 381,
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "name": "kyogre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
        "id": 382,
        "types": [
            "water"
        ]
    },
    {
        "name": "groudon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
        "id": 383,
        "types": [
            "ground"
        ]
    },
    {
        "name": "rayquaza",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/384.svg",
        "id": 384,
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "name": "jirachi",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/385.svg",
        "id": 385,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "deoxys-normal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png",
        "id": 386,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "turtwig",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
        "id": 387,
        "types": [
            "grass"
        ]
    },
    {
        "name": "grotle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
        "id": 388,
        "types": [
            "grass"
        ]
    },
    {
        "name": "torterra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/389.svg",
        "id": 389,
        "types": [
            "grass",
            "ground"
        ]
    },
    {
        "name": "chimchar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
        "id": 390,
        "types": [
            "fire"
        ]
    },
    {
        "name": "monferno",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/391.svg",
        "id": 391,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "infernape",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/392.svg",
        "id": 392,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "piplup",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
        "id": 393,
        "types": [
            "water"
        ]
    },
    {
        "name": "prinplup",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png",
        "id": 394,
        "types": [
            "water"
        ]
    },
    {
        "name": "empoleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/395.svg",
        "id": 395,
        "types": [
            "water",
            "steel"
        ]
    },
    {
        "name": "starly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/396.svg",
        "id": 396,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "staravia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/397.svg",
        "id": 397,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "staraptor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/398.svg",
        "id": 398,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "bidoof",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png",
        "id": 399,
        "types": [
            "normal"
        ]
    },
    {
        "name": "bibarel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/400.svg",
        "id": 400,
        "types": [
            "normal",
            "water"
        ]
    },
    {
        "name": "kricketot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png",
        "id": 401,
        "types": [
            "bug"
        ]
    },
    {
        "name": "kricketune",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
        "id": 402,
        "types": [
            "bug"
        ]
    },
    {
        "name": "shinx",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
        "id": 403,
        "types": [
            "electric"
        ]
    },
    {
        "name": "luxio",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png",
        "id": 404,
        "types": [
            "electric"
        ]
    },
    {
        "name": "luxray",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
        "id": 405,
        "types": [
            "electric"
        ]
    },
    {
        "name": "budew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/406.svg",
        "id": 406,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "roserade",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/407.svg",
        "id": 407,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "cranidos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png",
        "id": 408,
        "types": [
            "rock"
        ]
    },
    {
        "name": "rampardos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png",
        "id": 409,
        "types": [
            "rock"
        ]
    },
    {
        "name": "shieldon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/410.svg",
        "id": 410,
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "name": "bastiodon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/411.svg",
        "id": 411,
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "name": "burmy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png",
        "id": 412,
        "types": [
            "bug"
        ]
    },
    {
        "name": "wormadam-plant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/413.svg",
        "id": 413,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "mothim",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/414.svg",
        "id": 414,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "combee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/415.svg",
        "id": 415,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "vespiquen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/416.svg",
        "id": 416,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "pachirisu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",
        "id": 417,
        "types": [
            "electric"
        ]
    },
    {
        "name": "buizel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png",
        "id": 418,
        "types": [
            "water"
        ]
    },
    {
        "name": "floatzel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png",
        "id": 419,
        "types": [
            "water"
        ]
    },
    {
        "name": "cherubi",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png",
        "id": 420,
        "types": [
            "grass"
        ]
    },
    {
        "name": "cherrim",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
        "id": 421,
        "types": [
            "grass"
        ]
    },
    {
        "name": "shellos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png",
        "id": 422,
        "types": [
            "water"
        ]
    },
    {
        "name": "gastrodon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/423.svg",
        "id": 423,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "ambipom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png",
        "id": 424,
        "types": [
            "normal"
        ]
    },
    {
        "name": "drifloon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/425.svg",
        "id": 425,
        "types": [
            "ghost",
            "flying"
        ]
    },
    {
        "name": "drifblim",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/426.svg",
        "id": 426,
        "types": [
            "ghost",
            "flying"
        ]
    },
    {
        "name": "buneary",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png",
        "id": 427,
        "types": [
            "normal"
        ]
    },
    {
        "name": "lopunny",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
        "id": 428,
        "types": [
            "normal"
        ]
    },
    {
        "name": "mismagius",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
        "id": 429,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "honchkrow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/430.svg",
        "id": 430,
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "name": "glameow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png",
        "id": 431,
        "types": [
            "normal"
        ]
    },
    {
        "name": "purugly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png",
        "id": 432,
        "types": [
            "normal"
        ]
    },
    {
        "name": "chingling",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png",
        "id": 433,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "stunky",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/434.svg",
        "id": 434,
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "name": "skuntank",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/435.svg",
        "id": 435,
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "name": "bronzor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/436.svg",
        "id": 436,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "bronzong",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/437.svg",
        "id": 437,
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "name": "bonsly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png",
        "id": 438,
        "types": [
            "rock"
        ]
    },
    {
        "name": "mime-jr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/439.svg",
        "id": 439,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "happiny",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
        "id": 440,
        "types": [
            "normal"
        ]
    },
    {
        "name": "chatot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/441.svg",
        "id": 441,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "spiritomb",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/442.svg",
        "id": 442,
        "types": [
            "ghost",
            "dark"
        ]
    },
    {
        "name": "gible",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/443.svg",
        "id": 443,
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "name": "gabite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/444.svg",
        "id": 444,
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "name": "garchomp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/445.svg",
        "id": 445,
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "name": "munchlax",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
        "id": 446,
        "types": [
            "normal"
        ]
    },
    {
        "name": "riolu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
        "id": 447,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "lucario",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg",
        "id": 448,
        "types": [
            "fighting",
            "steel"
        ]
    },
    {
        "name": "hippopotas",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
        "id": 449,
        "types": [
            "ground"
        ]
    },
    {
        "name": "hippowdon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
        "id": 450,
        "types": [
            "ground"
        ]
    },
    {
        "name": "skorupi",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/451.svg",
        "id": 451,
        "types": [
            "poison",
            "bug"
        ]
    },
    {
        "name": "drapion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/452.svg",
        "id": 452,
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "name": "croagunk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/453.svg",
        "id": 453,
        "types": [
            "poison",
            "fighting"
        ]
    },
    {
        "name": "toxicroak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/454.svg",
        "id": 454,
        "types": [
            "poison",
            "fighting"
        ]
    },
    {
        "name": "carnivine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
        "id": 455,
        "types": [
            "grass"
        ]
    },
    {
        "name": "finneon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
        "id": 456,
        "types": [
            "water"
        ]
    },
    {
        "name": "lumineon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
        "id": 457,
        "types": [
            "water"
        ]
    },
    {
        "name": "mantyke",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/458.svg",
        "id": 458,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "snover",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/459.svg",
        "id": 459,
        "types": [
            "grass",
            "ice"
        ]
    },
    {
        "name": "abomasnow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/460.svg",
        "id": 460,
        "types": [
            "grass",
            "ice"
        ]
    },
    {
        "name": "weavile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/461.svg",
        "id": 461,
        "types": [
            "dark",
            "ice"
        ]
    },
    {
        "name": "magnezone",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/462.svg",
        "id": 462,
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "name": "lickilicky",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png",
        "id": 463,
        "types": [
            "normal"
        ]
    },
    {
        "name": "rhyperior",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/464.svg",
        "id": 464,
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "name": "tangrowth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png",
        "id": 465,
        "types": [
            "grass"
        ]
    },
    {
        "name": "electivire",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png",
        "id": 466,
        "types": [
            "electric"
        ]
    },
    {
        "name": "magmortar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png",
        "id": 467,
        "types": [
            "fire"
        ]
    },
    {
        "name": "togekiss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/468.svg",
        "id": 468,
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "name": "yanmega",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/469.svg",
        "id": 469,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "leafeon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
        "id": 470,
        "types": [
            "grass"
        ]
    },
    {
        "name": "glaceon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
        "id": 471,
        "types": [
            "ice"
        ]
    },
    {
        "name": "gliscor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/472.svg",
        "id": 472,
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "name": "mamoswine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/473.svg",
        "id": 473,
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "name": "porygon-z",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png",
        "id": 474,
        "types": [
            "normal"
        ]
    },
    {
        "name": "gallade",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/475.svg",
        "id": 475,
        "types": [
            "psychic",
            "fighting"
        ]
    },
    {
        "name": "probopass",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/476.svg",
        "id": 476,
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "name": "dusknoir",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
        "id": 477,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "froslass",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/478.svg",
        "id": 478,
        "types": [
            "ice",
            "ghost"
        ]
    },
    {
        "name": "rotom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/479.svg",
        "id": 479,
        "types": [
            "electric",
            "ghost"
        ]
    },
    {
        "name": "uxie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png",
        "id": 480,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "mesprit",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png",
        "id": 481,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "azelf",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png",
        "id": 482,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "dialga",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/483.svg",
        "id": 483,
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "name": "palkia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/484.svg",
        "id": 484,
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "name": "heatran",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/485.svg",
        "id": 485,
        "types": [
            "fire",
            "steel"
        ]
    },
    {
        "name": "regigigas",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png",
        "id": 486,
        "types": [
            "normal"
        ]
    },
    {
        "name": "giratina-altered",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg",
        "id": 487,
        "types": [
            "ghost",
            "dragon"
        ]
    },
    {
        "name": "cresselia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
        "id": 488,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "phione",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png",
        "id": 489,
        "types": [
            "water"
        ]
    },
    {
        "name": "manaphy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png",
        "id": 490,
        "types": [
            "water"
        ]
    },
    {
        "name": "darkrai",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png",
        "id": 491,
        "types": [
            "dark"
        ]
    },
    {
        "name": "shaymin-land",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png",
        "id": 492,
        "types": [
            "grass"
        ]
    },
    {
        "name": "arceus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
        "id": 493,
        "types": [
            "normal"
        ]
    },
    {
        "name": "victini",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/494.svg",
        "id": 494,
        "types": [
            "psychic",
            "fire"
        ]
    },
    {
        "name": "snivy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
        "id": 495,
        "types": [
            "grass"
        ]
    },
    {
        "name": "servine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png",
        "id": 496,
        "types": [
            "grass"
        ]
    },
    {
        "name": "serperior",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
        "id": 497,
        "types": [
            "grass"
        ]
    },
    {
        "name": "tepig",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png",
        "id": 498,
        "types": [
            "fire"
        ]
    },
    {
        "name": "pignite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/499.svg",
        "id": 499,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "emboar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/500.svg",
        "id": 500,
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "name": "oshawott",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
        "id": 501,
        "types": [
            "water"
        ]
    },
    {
        "name": "dewott",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png",
        "id": 502,
        "types": [
            "water"
        ]
    },
    {
        "name": "samurott",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png",
        "id": 503,
        "types": [
            "water"
        ]
    },
    {
        "name": "patrat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png",
        "id": 504,
        "types": [
            "normal"
        ]
    },
    {
        "name": "watchog",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png",
        "id": 505,
        "types": [
            "normal"
        ]
    },
    {
        "name": "lillipup",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png",
        "id": 506,
        "types": [
            "normal"
        ]
    },
    {
        "name": "herdier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png",
        "id": 507,
        "types": [
            "normal"
        ]
    },
    {
        "name": "stoutland",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png",
        "id": 508,
        "types": [
            "normal"
        ]
    },
    {
        "name": "purrloin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
        "id": 509,
        "types": [
            "dark"
        ]
    },
    {
        "name": "liepard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
        "id": 510,
        "types": [
            "dark"
        ]
    },
    {
        "name": "pansage",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
        "id": 511,
        "types": [
            "grass"
        ]
    },
    {
        "name": "simisage",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png",
        "id": 512,
        "types": [
            "grass"
        ]
    },
    {
        "name": "pansear",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png",
        "id": 513,
        "types": [
            "fire"
        ]
    },
    {
        "name": "simisear",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png",
        "id": 514,
        "types": [
            "fire"
        ]
    },
    {
        "name": "panpour",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png",
        "id": 515,
        "types": [
            "water"
        ]
    },
    {
        "name": "simipour",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png",
        "id": 516,
        "types": [
            "water"
        ]
    },
    {
        "name": "munna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png",
        "id": 517,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "musharna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png",
        "id": 518,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "pidove",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/519.svg",
        "id": 519,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "tranquill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/520.svg",
        "id": 520,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "unfezant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/521.svg",
        "id": 521,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "blitzle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png",
        "id": 522,
        "types": [
            "electric"
        ]
    },
    {
        "name": "zebstrika",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png",
        "id": 523,
        "types": [
            "electric"
        ]
    },
    {
        "name": "roggenrola",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png",
        "id": 524,
        "types": [
            "rock"
        ]
    },
    {
        "name": "boldore",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png",
        "id": 525,
        "types": [
            "rock"
        ]
    },
    {
        "name": "gigalith",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
        "id": 526,
        "types": [
            "rock"
        ]
    },
    {
        "name": "woobat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/527.svg",
        "id": 527,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "swoobat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/528.svg",
        "id": 528,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "drilbur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png",
        "id": 529,
        "types": [
            "ground"
        ]
    },
    {
        "name": "excadrill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/530.svg",
        "id": 530,
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "name": "audino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
        "id": 531,
        "types": [
            "normal"
        ]
    },
    {
        "name": "timburr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
        "id": 532,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "gurdurr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
        "id": 533,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "conkeldurr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
        "id": 534,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "tympole",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png",
        "id": 535,
        "types": [
            "water"
        ]
    },
    {
        "name": "palpitoad",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/536.svg",
        "id": 536,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "seismitoad",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/537.svg",
        "id": 537,
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "name": "throh",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png",
        "id": 538,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "sawk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png",
        "id": 539,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "sewaddle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/540.svg",
        "id": 540,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "swadloon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/541.svg",
        "id": 541,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "leavanny",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/542.svg",
        "id": 542,
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "venipede",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/543.svg",
        "id": 543,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "whirlipede",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/544.svg",
        "id": 544,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "scolipede",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/545.svg",
        "id": 545,
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "cottonee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/546.svg",
        "id": 546,
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "whimsicott",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/547.svg",
        "id": 547,
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "petilil",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png",
        "id": 548,
        "types": [
            "grass"
        ]
    },
    {
        "name": "lilligant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
        "id": 549,
        "types": [
            "grass"
        ]
    },
    {
        "name": "basculin-red-striped",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png",
        "id": 550,
        "types": [
            "water"
        ]
    },
    {
        "name": "sandile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/551.svg",
        "id": 551,
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "name": "krokorok",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/552.svg",
        "id": 552,
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "name": "krookodile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/553.svg",
        "id": 553,
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "name": "darumaka",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png",
        "id": 554,
        "types": [
            "fire"
        ]
    },
    {
        "name": "darmanitan-standard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png",
        "id": 555,
        "types": [
            "fire"
        ]
    },
    {
        "name": "maractus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png",
        "id": 556,
        "types": [
            "grass"
        ]
    },
    {
        "name": "dwebble",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/557.svg",
        "id": 557,
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "name": "crustle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/558.svg",
        "id": 558,
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "name": "scraggy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/559.svg",
        "id": 559,
        "types": [
            "dark",
            "fighting"
        ]
    },
    {
        "name": "scrafty",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/560.svg",
        "id": 560,
        "types": [
            "dark",
            "fighting"
        ]
    },
    {
        "name": "sigilyph",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/561.svg",
        "id": 561,
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "name": "yamask",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png",
        "id": 562,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "cofagrigus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png",
        "id": 563,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "tirtouga",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/564.svg",
        "id": 564,
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "name": "carracosta",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/565.svg",
        "id": 565,
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "name": "archen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/566.svg",
        "id": 566,
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "name": "archeops",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/567.svg",
        "id": 567,
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "name": "trubbish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png",
        "id": 568,
        "types": [
            "poison"
        ]
    },
    {
        "name": "garbodor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png",
        "id": 569,
        "types": [
            "poison"
        ]
    },
    {
        "name": "zorua",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
        "id": 570,
        "types": [
            "dark"
        ]
    },
    {
        "name": "zoroark",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
        "id": 571,
        "types": [
            "dark"
        ]
    },
    {
        "name": "minccino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png",
        "id": 572,
        "types": [
            "normal"
        ]
    },
    {
        "name": "cinccino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
        "id": 573,
        "types": [
            "normal"
        ]
    },
    {
        "name": "gothita",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png",
        "id": 574,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "gothorita",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png",
        "id": 575,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "gothitelle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
        "id": 576,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "solosis",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png",
        "id": 577,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "duosion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png",
        "id": 578,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "reuniclus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png",
        "id": 579,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "ducklett",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/580.svg",
        "id": 580,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "swanna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/581.svg",
        "id": 581,
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "name": "vanillite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
        "id": 582,
        "types": [
            "ice"
        ]
    },
    {
        "name": "vanillish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png",
        "id": 583,
        "types": [
            "ice"
        ]
    },
    {
        "name": "vanilluxe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
        "id": 584,
        "types": [
            "ice"
        ]
    },
    {
        "name": "deerling",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/585.svg",
        "id": 585,
        "types": [
            "normal",
            "grass"
        ]
    },
    {
        "name": "sawsbuck",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/586.svg",
        "id": 586,
        "types": [
            "normal",
            "grass"
        ]
    },
    {
        "name": "emolga",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/587.svg",
        "id": 587,
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "name": "karrablast",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png",
        "id": 588,
        "types": [
            "bug"
        ]
    },
    {
        "name": "escavalier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/589.svg",
        "id": 589,
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "name": "foongus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/590.svg",
        "id": 590,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "amoonguss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/591.svg",
        "id": 591,
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "frillish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/592.svg",
        "id": 592,
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "name": "jellicent",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/593.svg",
        "id": 593,
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "name": "alomomola",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png",
        "id": 594,
        "types": [
            "water"
        ]
    },
    {
        "name": "joltik",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/595.svg",
        "id": 595,
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "name": "galvantula",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/596.svg",
        "id": 596,
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "name": "ferroseed",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/597.svg",
        "id": 597,
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "name": "ferrothorn",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/598.svg",
        "id": 598,
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "name": "klink",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png",
        "id": 599,
        "types": [
            "steel"
        ]
    },
    {
        "name": "klang",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png",
        "id": 600,
        "types": [
            "steel"
        ]
    },
    {
        "name": "klinklang",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
        "id": 601,
        "types": [
            "steel"
        ]
    },
    {
        "name": "tynamo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png",
        "id": 602,
        "types": [
            "electric"
        ]
    },
    {
        "name": "eelektrik",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png",
        "id": 603,
        "types": [
            "electric"
        ]
    },
    {
        "name": "eelektross",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png",
        "id": 604,
        "types": [
            "electric"
        ]
    },
    {
        "name": "elgyem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png",
        "id": 605,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "beheeyem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png",
        "id": 606,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "litwick",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/607.svg",
        "id": 607,
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "name": "lampent",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/608.svg",
        "id": 608,
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "name": "chandelure",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/609.svg",
        "id": 609,
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "name": "axew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png",
        "id": 610,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "fraxure",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png",
        "id": 611,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "haxorus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png",
        "id": 612,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "cubchoo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png",
        "id": 613,
        "types": [
            "ice"
        ]
    },
    {
        "name": "beartic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png",
        "id": 614,
        "types": [
            "ice"
        ]
    },
    {
        "name": "cryogonal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png",
        "id": 615,
        "types": [
            "ice"
        ]
    },
    {
        "name": "shelmet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png",
        "id": 616,
        "types": [
            "bug"
        ]
    },
    {
        "name": "accelgor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
        "id": 617,
        "types": [
            "bug"
        ]
    },
    {
        "name": "stunfisk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/618.svg",
        "id": 618,
        "types": [
            "ground",
            "electric"
        ]
    },
    {
        "name": "mienfoo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
        "id": 619,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "mienshao",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
        "id": 620,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "druddigon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png",
        "id": 621,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "golett",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/622.svg",
        "id": 622,
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "name": "golurk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/623.svg",
        "id": 623,
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "name": "pawniard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/624.svg",
        "id": 624,
        "types": [
            "dark",
            "steel"
        ]
    },
    {
        "name": "bisharp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/625.svg",
        "id": 625,
        "types": [
            "dark",
            "steel"
        ]
    },
    {
        "name": "bouffalant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png",
        "id": 626,
        "types": [
            "normal"
        ]
    },
    {
        "name": "rufflet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/627.svg",
        "id": 627,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "braviary",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/628.svg",
        "id": 628,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "vullaby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/629.svg",
        "id": 629,
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "name": "mandibuzz",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/630.svg",
        "id": 630,
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "name": "heatmor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png",
        "id": 631,
        "types": [
            "fire"
        ]
    },
    {
        "name": "durant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/632.svg",
        "id": 632,
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "name": "deino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/633.svg",
        "id": 633,
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "name": "zweilous",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/634.svg",
        "id": 634,
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "name": "hydreigon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/635.svg",
        "id": 635,
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "name": "larvesta",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/636.svg",
        "id": 636,
        "types": [
            "bug",
            "fire"
        ]
    },
    {
        "name": "volcarona",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/637.svg",
        "id": 637,
        "types": [
            "bug",
            "fire"
        ]
    },
    {
        "name": "cobalion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/638.svg",
        "id": 638,
        "types": [
            "steel",
            "fighting"
        ]
    },
    {
        "name": "terrakion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/639.svg",
        "id": 639,
        "types": [
            "rock",
            "fighting"
        ]
    },
    {
        "name": "virizion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/640.svg",
        "id": 640,
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "name": "tornadus-incarnate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png",
        "id": 641,
        "types": [
            "flying"
        ]
    },
    {
        "name": "thundurus-incarnate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/642.svg",
        "id": 642,
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "name": "reshiram",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/643.svg",
        "id": 643,
        "types": [
            "dragon",
            "fire"
        ]
    },
    {
        "name": "zekrom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/644.svg",
        "id": 644,
        "types": [
            "dragon",
            "electric"
        ]
    },
    {
        "name": "landorus-incarnate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/645.svg",
        "id": 645,
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "name": "kyurem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/646.svg",
        "id": 646,
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "name": "keldeo-ordinary",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/647.svg",
        "id": 647,
        "types": [
            "water",
            "fighting"
        ]
    },
    {
        "name": "meloetta-aria",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/648.svg",
        "id": 648,
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "name": "genesect",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/649.svg",
        "id": 649,
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "name": "chespin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
        "id": 650,
        "types": [
            "grass"
        ]
    },
    {
        "name": "quilladin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
        "id": 651,
        "types": [
            "grass"
        ]
    },
    {
        "name": "chesnaught",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
        "id": 652,
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "name": "fennekin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png",
        "id": 653,
        "types": [
            "fire"
        ]
    },
    {
        "name": "braixen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
        "id": 654,
        "types": [
            "fire"
        ]
    },
    {
        "name": "delphox",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
        "id": 655,
        "types": [
            "fire",
            "psychic"
        ]
    },
    {
        "name": "froakie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png",
        "id": 656,
        "types": [
            "water"
        ]
    },
    {
        "name": "frogadier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png",
        "id": 657,
        "types": [
            "water"
        ]
    },
    {
        "name": "greninja",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
        "id": 658,
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "name": "bunnelby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png",
        "id": 659,
        "types": [
            "normal"
        ]
    },
    {
        "name": "diggersby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png",
        "id": 660,
        "types": [
            "normal",
            "ground"
        ]
    },
    {
        "name": "fletchling",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png",
        "id": 661,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "fletchinder",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png",
        "id": 662,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "talonflame",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png",
        "id": 663,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "scatterbug",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png",
        "id": 664,
        "types": [
            "bug"
        ]
    },
    {
        "name": "spewpa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png",
        "id": 665,
        "types": [
            "bug"
        ]
    },
    {
        "name": "vivillon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png",
        "id": 666,
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "litleo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png",
        "id": 667,
        "types": [
            "fire",
            "normal"
        ]
    },
    {
        "name": "pyroar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png",
        "id": 668,
        "types": [
            "fire",
            "normal"
        ]
    },
    {
        "name": "flabebe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png",
        "id": 669,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "floette",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png",
        "id": 670,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "florges",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
        "id": 671,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "skiddo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png",
        "id": 672,
        "types": [
            "grass"
        ]
    },
    {
        "name": "gogoat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png",
        "id": 673,
        "types": [
            "grass"
        ]
    },
    {
        "name": "pancham",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png",
        "id": 674,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "pangoro",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png",
        "id": 675,
        "types": [
            "fighting",
            "dark"
        ]
    },
    {
        "name": "furfrou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png",
        "id": 676,
        "types": [
            "normal"
        ]
    },
    {
        "name": "espurr",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png",
        "id": 677,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "meowstic-male",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
        "id": 678,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "honedge",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png",
        "id": 679,
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "name": "doublade",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png",
        "id": 680,
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "name": "aegislash-shield",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png",
        "id": 681,
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "name": "spritzee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png",
        "id": 682,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "aromatisse",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
        "id": 683,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "swirlix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png",
        "id": 684,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "slurpuff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png",
        "id": 685,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "inkay",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png",
        "id": 686,
        "types": [
            "dark",
            "psychic"
        ]
    },
    {
        "name": "malamar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png",
        "id": 687,
        "types": [
            "dark",
            "psychic"
        ]
    },
    {
        "name": "binacle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png",
        "id": 688,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "barbaracle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png",
        "id": 689,
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "name": "skrelp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png",
        "id": 690,
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "name": "dragalge",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
        "id": 691,
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "name": "clauncher",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png",
        "id": 692,
        "types": [
            "water"
        ]
    },
    {
        "name": "clawitzer",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png",
        "id": 693,
        "types": [
            "water"
        ]
    },
    {
        "name": "helioptile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png",
        "id": 694,
        "types": [
            "electric",
            "normal"
        ]
    },
    {
        "name": "heliolisk",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
        "id": 695,
        "types": [
            "electric",
            "normal"
        ]
    },
    {
        "name": "tyrunt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png",
        "id": 696,
        "types": [
            "rock",
            "dragon"
        ]
    },
    {
        "name": "tyrantrum",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png",
        "id": 697,
        "types": [
            "rock",
            "dragon"
        ]
    },
    {
        "name": "amaura",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png",
        "id": 698,
        "types": [
            "rock",
            "ice"
        ]
    },
    {
        "name": "aurorus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png",
        "id": 699,
        "types": [
            "rock",
            "ice"
        ]
    },
    {
        "name": "sylveon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
        "id": 700,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "hawlucha",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
        "id": 701,
        "types": [
            "fighting",
            "flying"
        ]
    },
    {
        "name": "dedenne",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png",
        "id": 702,
        "types": [
            "electric",
            "fairy"
        ]
    },
    {
        "name": "carbink",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png",
        "id": 703,
        "types": [
            "rock",
            "fairy"
        ]
    },
    {
        "name": "goomy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
        "id": 704,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "sliggoo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png",
        "id": 705,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "goodra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
        "id": 706,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "klefki",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png",
        "id": 707,
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "name": "phantump",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
        "id": 708,
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "name": "trevenant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
        "id": 709,
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "name": "pumpkaboo-average",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png",
        "id": 710,
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "name": "gourgeist-average",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png",
        "id": 711,
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "name": "bergmite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png",
        "id": 712,
        "types": [
            "ice"
        ]
    },
    {
        "name": "avalugg",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png",
        "id": 713,
        "types": [
            "ice"
        ]
    },
    {
        "name": "noibat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
        "id": 714,
        "types": [
            "flying",
            "dragon"
        ]
    },
    {
        "name": "noivern",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
        "id": 715,
        "types": [
            "flying",
            "dragon"
        ]
    },
    {
        "name": "xerneas",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
        "id": 716,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "yveltal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
        "id": 717,
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "name": "zygarde-50",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png",
        "id": 718,
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "name": "diancie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
        "id": 719,
        "types": [
            "rock",
            "fairy"
        ]
    },
    {
        "name": "hoopa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png",
        "id": 720,
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "volcanion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png",
        "id": 721,
        "types": [
            "fire",
            "water"
        ]
    },
    {
        "name": "rowlet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
        "id": 722,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "dartrix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
        "id": 723,
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "name": "decidueye",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png",
        "id": 724,
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "name": "litten",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
        "id": 725,
        "types": [
            "fire"
        ]
    },
    {
        "name": "torracat",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
        "id": 726,
        "types": [
            "fire"
        ]
    },
    {
        "name": "incineroar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
        "id": 727,
        "types": [
            "fire",
            "dark"
        ]
    },
    {
        "name": "popplio",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
        "id": 728,
        "types": [
            "water"
        ]
    },
    {
        "name": "brionne",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
        "id": 729,
        "types": [
            "water"
        ]
    },
    {
        "name": "primarina",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
        "id": 730,
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "name": "pikipek",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png",
        "id": 731,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "trumbeak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png",
        "id": 732,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "toucannon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png",
        "id": 733,
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "yungoos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png",
        "id": 734,
        "types": [
            "normal"
        ]
    },
    {
        "name": "gumshoos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png",
        "id": 735,
        "types": [
            "normal"
        ]
    },
    {
        "name": "grubbin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png",
        "id": 736,
        "types": [
            "bug"
        ]
    },
    {
        "name": "charjabug",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png",
        "id": 737,
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "name": "vikavolt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png",
        "id": 738,
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "name": "crabrawler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png",
        "id": 739,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "crabominable",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
        "id": 740,
        "types": [
            "fighting",
            "ice"
        ]
    },
    {
        "name": "oricorio-baile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png",
        "id": 741,
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "cutiefly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
        "id": 742,
        "types": [
            "bug",
            "fairy"
        ]
    },
    {
        "name": "ribombee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
        "id": 743,
        "types": [
            "bug",
            "fairy"
        ]
    },
    {
        "name": "rockruff",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png",
        "id": 744,
        "types": [
            "rock"
        ]
    },
    {
        "name": "lycanroc-midday",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png",
        "id": 745,
        "types": [
            "rock"
        ]
    },
    {
        "name": "wishiwashi-solo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png",
        "id": 746,
        "types": [
            "water"
        ]
    },
    {
        "name": "mareanie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png",
        "id": 747,
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "name": "toxapex",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
        "id": 748,
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "name": "mudbray",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png",
        "id": 749,
        "types": [
            "ground"
        ]
    },
    {
        "name": "mudsdale",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png",
        "id": 750,
        "types": [
            "ground"
        ]
    },
    {
        "name": "dewpider",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
        "id": 751,
        "types": [
            "water",
            "bug"
        ]
    },
    {
        "name": "araquanid",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png",
        "id": 752,
        "types": [
            "water",
            "bug"
        ]
    },
    {
        "name": "fomantis",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png",
        "id": 753,
        "types": [
            "grass"
        ]
    },
    {
        "name": "lurantis",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
        "id": 754,
        "types": [
            "grass"
        ]
    },
    {
        "name": "morelull",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
        "id": 755,
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "shiinotic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
        "id": 756,
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "salandit",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
        "id": 757,
        "types": [
            "poison",
            "fire"
        ]
    },
    {
        "name": "salazzle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
        "id": 758,
        "types": [
            "poison",
            "fire"
        ]
    },
    {
        "name": "stufful",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png",
        "id": 759,
        "types": [
            "normal",
            "fighting"
        ]
    },
    {
        "name": "bewear",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png",
        "id": 760,
        "types": [
            "normal",
            "fighting"
        ]
    },
    {
        "name": "bounsweet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
        "id": 761,
        "types": [
            "grass"
        ]
    },
    {
        "name": "steenee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png",
        "id": 762,
        "types": [
            "grass"
        ]
    },
    {
        "name": "tsareena",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
        "id": 763,
        "types": [
            "grass"
        ]
    },
    {
        "name": "comfey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png",
        "id": 764,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "oranguru",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png",
        "id": 765,
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "name": "passimian",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png",
        "id": 766,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "wimpod",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png",
        "id": 767,
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "name": "golisopod",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png",
        "id": 768,
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "name": "sandygast",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png",
        "id": 769,
        "types": [
            "ghost",
            "ground"
        ]
    },
    {
        "name": "palossand",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png",
        "id": 770,
        "types": [
            "ghost",
            "ground"
        ]
    },
    {
        "name": "pyukumuku",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png",
        "id": 771,
        "types": [
            "water"
        ]
    },
    {
        "name": "type-null",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png",
        "id": 772,
        "types": [
            "normal"
        ]
    },
    {
        "name": "silvally",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png",
        "id": 773,
        "types": [
            "normal"
        ]
    },
    {
        "name": "minior-red-meteor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png",
        "id": 774,
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "name": "komala",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png",
        "id": 775,
        "types": [
            "normal"
        ]
    },
    {
        "name": "turtonator",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png",
        "id": 776,
        "types": [
            "fire",
            "dragon"
        ]
    },
    {
        "name": "togedemaru",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png",
        "id": 777,
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "name": "mimikyu-disguised",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
        "id": 778,
        "types": [
            "ghost",
            "fairy"
        ]
    },
    {
        "name": "bruxish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png",
        "id": 779,
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "name": "drampa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png",
        "id": 780,
        "types": [
            "normal",
            "dragon"
        ]
    },
    {
        "name": "dhelmise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png",
        "id": 781,
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "name": "jangmo-o",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png",
        "id": 782,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "hakamo-o",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png",
        "id": 783,
        "types": [
            "dragon",
            "fighting"
        ]
    },
    {
        "name": "kommo-o",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
        "id": 784,
        "types": [
            "dragon",
            "fighting"
        ]
    },
    {
        "name": "tapu-koko",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
        "id": 785,
        "types": [
            "electric",
            "fairy"
        ]
    },
    {
        "name": "tapu-lele",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png",
        "id": 786,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "tapu-bulu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png",
        "id": 787,
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "tapu-fini",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png",
        "id": 788,
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "name": "cosmog",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png",
        "id": 789,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "cosmoem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png",
        "id": 790,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "solgaleo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
        "id": 791,
        "types": [
            "psychic",
            "steel"
        ]
    },
    {
        "name": "lunala",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png",
        "id": 792,
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "nihilego",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png",
        "id": 793,
        "types": [
            "rock",
            "poison"
        ]
    },
    {
        "name": "buzzwole",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png",
        "id": 794,
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "name": "pheromosa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
        "id": 795,
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "name": "xurkitree",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png",
        "id": 796,
        "types": [
            "electric"
        ]
    },
    {
        "name": "celesteela",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png",
        "id": 797,
        "types": [
            "steel",
            "flying"
        ]
    },
    {
        "name": "kartana",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png",
        "id": 798,
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "name": "guzzlord",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png",
        "id": 799,
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "name": "necrozma",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png",
        "id": 800,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "magearna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png",
        "id": 801,
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "name": "marshadow",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
        "id": 802,
        "types": [
            "fighting",
            "ghost"
        ]
    },
    {
        "name": "poipole",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png",
        "id": 803,
        "types": [
            "poison"
        ]
    },
    {
        "name": "naganadel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png",
        "id": 804,
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "name": "stakataka",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png",
        "id": 805,
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "name": "blacephalon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png",
        "id": 806,
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "name": "zeraora",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png",
        "id": 807,
        "types": [
            "electric"
        ]
    },
    {
        "name": "meltan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png",
        "id": 808,
        "types": [
            "steel"
        ]
    },
    {
        "name": "melmetal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png",
        "id": 809,
        "types": [
            "steel"
        ]
    },
    {
        "name": "grookey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
        "id": 810,
        "types": [
            "grass"
        ]
    },
    {
        "name": "thwackey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png",
        "id": 811,
        "types": [
            "grass"
        ]
    },
    {
        "name": "rillaboom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png",
        "id": 812,
        "types": [
            "grass"
        ]
    },
    {
        "name": "scorbunny",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png",
        "id": 813,
        "types": [
            "fire"
        ]
    },
    {
        "name": "raboot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png",
        "id": 814,
        "types": [
            "fire"
        ]
    },
    {
        "name": "cinderace",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png",
        "id": 815,
        "types": [
            "fire"
        ]
    },
    {
        "name": "sobble",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png",
        "id": 816,
        "types": [
            "water"
        ]
    },
    {
        "name": "drizzile",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png",
        "id": 817,
        "types": [
            "water"
        ]
    },
    {
        "name": "inteleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png",
        "id": 818,
        "types": [
            "water"
        ]
    },
    {
        "name": "skwovet",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png",
        "id": 819,
        "types": [
            "normal"
        ]
    },
    {
        "name": "greedent",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png",
        "id": 820,
        "types": [
            "normal"
        ]
    },
    {
        "name": "rookidee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png",
        "id": 821,
        "types": [
            "flying"
        ]
    },
    {
        "name": "corvisquire",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png",
        "id": 822,
        "types": [
            "flying"
        ]
    },
    {
        "name": "corviknight",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png",
        "id": 823,
        "types": [
            "flying",
            "steel"
        ]
    },
    {
        "name": "blipbug",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png",
        "id": 824,
        "types": [
            "bug"
        ]
    },
    {
        "name": "dottler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png",
        "id": 825,
        "types": [
            "bug",
            "psychic"
        ]
    },
    {
        "name": "orbeetle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png",
        "id": 826,
        "types": [
            "bug",
            "psychic"
        ]
    },
    {
        "name": "nickit",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png",
        "id": 827,
        "types": [
            "dark"
        ]
    },
    {
        "name": "thievul",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png",
        "id": 828,
        "types": [
            "dark"
        ]
    },
    {
        "name": "gossifleur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png",
        "id": 829,
        "types": [
            "grass"
        ]
    },
    {
        "name": "eldegoss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png",
        "id": 830,
        "types": [
            "grass"
        ]
    },
    {
        "name": "wooloo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png",
        "id": 831,
        "types": [
            "normal"
        ]
    },
    {
        "name": "dubwool",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png",
        "id": 832,
        "types": [
            "normal"
        ]
    },
    {
        "name": "chewtle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png",
        "id": 833,
        "types": [
            "water"
        ]
    },
    {
        "name": "drednaw",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png",
        "id": 834,
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "name": "yamper",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png",
        "id": 835,
        "types": [
            "electric"
        ]
    },
    {
        "name": "boltund",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png",
        "id": 836,
        "types": [
            "electric"
        ]
    },
    {
        "name": "rolycoly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png",
        "id": 837,
        "types": [
            "rock"
        ]
    },
    {
        "name": "carkol",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png",
        "id": 838,
        "types": [
            "rock",
            "fire"
        ]
    },
    {
        "name": "coalossal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png",
        "id": 839,
        "types": [
            "rock",
            "fire"
        ]
    },
    {
        "name": "applin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png",
        "id": 840,
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "name": "flapple",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png",
        "id": 841,
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "name": "appletun",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png",
        "id": 842,
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "name": "silicobra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png",
        "id": 843,
        "types": [
            "ground"
        ]
    },
    {
        "name": "sandaconda",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png",
        "id": 844,
        "types": [
            "ground"
        ]
    },
    {
        "name": "cramorant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png",
        "id": 845,
        "types": [
            "flying",
            "water"
        ]
    },
    {
        "name": "arrokuda",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png",
        "id": 846,
        "types": [
            "water"
        ]
    },
    {
        "name": "barraskewda",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png",
        "id": 847,
        "types": [
            "water"
        ]
    },
    {
        "name": "toxel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png",
        "id": 848,
        "types": [
            "electric",
            "poison"
        ]
    },
    {
        "name": "toxtricity-amped",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png",
        "id": 849,
        "types": [
            "electric",
            "poison"
        ]
    },
    {
        "name": "sizzlipede",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png",
        "id": 850,
        "types": [
            "fire",
            "bug"
        ]
    },
    {
        "name": "centiskorch",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png",
        "id": 851,
        "types": [
            "fire",
            "bug"
        ]
    },
    {
        "name": "clobbopus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png",
        "id": 852,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "grapploct",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png",
        "id": 853,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "sinistea",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png",
        "id": 854,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "polteageist",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png",
        "id": 855,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "hatenna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png",
        "id": 856,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "hattrem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png",
        "id": 857,
        "types": [
            "psychic"
        ]
    },
    {
        "name": "hatterene",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
        "id": 858,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "name": "impidimp",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png",
        "id": 859,
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "name": "morgrem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png",
        "id": 860,
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "name": "grimmsnarl",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png",
        "id": 861,
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "name": "obstagoon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png",
        "id": 862,
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "name": "perrserker",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png",
        "id": 863,
        "types": [
            "steel"
        ]
    },
    {
        "name": "cursola",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png",
        "id": 864,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "sirfetchd",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png",
        "id": 865,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "mr-rime",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png",
        "id": 866,
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "name": "runerigus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png",
        "id": 867,
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "name": "milcery",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png",
        "id": 868,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "alcremie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
        "id": 869,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "falinks",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png",
        "id": 870,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "pincurchin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png",
        "id": 871,
        "types": [
            "electric"
        ]
    },
    {
        "name": "snom",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png",
        "id": 872,
        "types": [
            "ice",
            "bug"
        ]
    },
    {
        "name": "frosmoth",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png",
        "id": 873,
        "types": [
            "ice",
            "bug"
        ]
    },
    {
        "name": "stonjourner",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png",
        "id": 874,
        "types": [
            "rock"
        ]
    },
    {
        "name": "eiscue-ice",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png",
        "id": 875,
        "types": [
            "ice"
        ]
    },
    {
        "name": "indeedee-male",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png",
        "id": 876,
        "types": [
            "psychic",
            "normal"
        ]
    },
    {
        "name": "morpeko-full-belly",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png",
        "id": 877,
        "types": [
            "electric",
            "dark"
        ]
    },
    {
        "name": "cufant",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png",
        "id": 878,
        "types": [
            "steel"
        ]
    },
    {
        "name": "copperajah",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png",
        "id": 879,
        "types": [
            "steel"
        ]
    },
    {
        "name": "dracozolt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png",
        "id": 880,
        "types": [
            "electric",
            "dragon"
        ]
    },
    {
        "name": "arctozolt",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png",
        "id": 881,
        "types": [
            "electric",
            "ice"
        ]
    },
    {
        "name": "dracovish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png",
        "id": 882,
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "name": "arctovish",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png",
        "id": 883,
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "name": "duraludon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png",
        "id": 884,
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "name": "dreepy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png",
        "id": 885,
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "name": "drakloak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png",
        "id": 886,
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "name": "dragapult",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png",
        "id": 887,
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "name": "zacian",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
        "id": 888,
        "types": [
            "fairy"
        ]
    },
    {
        "name": "zamazenta",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png",
        "id": 889,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "eternatus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png",
        "id": 890,
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "name": "kubfu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png",
        "id": 891,
        "types": [
            "fighting"
        ]
    },
    {
        "name": "urshifu-single-strike",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
        "id": 892,
        "types": [
            "fighting",
            "dark"
        ]
    },
    {
        "name": "zarude",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png",
        "id": 893,
        "types": [
            "dark",
            "grass"
        ]
    },
    {
        "name": "regieleki",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png",
        "id": 894,
        "types": [
            "electric"
        ]
    },
    {
        "name": "regidrago",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png",
        "id": 895,
        "types": [
            "dragon"
        ]
    },
    {
        "name": "glastrier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png",
        "id": 896,
        "types": [
            "ice"
        ]
    },
    {
        "name": "spectrier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png",
        "id": 897,
        "types": [
            "ghost"
        ]
    },
    {
        "name": "calyrex",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png",
        "id": 898,
        "types": [
            "psychic",
            "grass"
        ]
    },
    {
        "name": "wyrdeer",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png",
        "id": 899,
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "name": "kleavor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png",
        "id": 900,
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "name": "ursaluna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png",
        "id": 901,
        "types": [
            "ground",
            "normal"
        ]
    },
    {
        "name": "basculegion-male",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png",
        "id": 902,
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "name": "sneasler",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png",
        "id": 903,
        "types": [
            "fighting",
            "poison"
        ]
    },
    {
        "name": "overqwil",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png",
        "id": 904,
        "types": [
            "dark",
            "poison"
        ]
    },
    {
        "name": "enamorus-incarnate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png",
        "id": 905,
        "types": [
            "fairy",
            "flying"
        ]
    }
]