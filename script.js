let currentPokemon;
let allPokemon;


async function loadPokemon() {
    // let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let pokedex = document.getElementById('pokedex')

    // console.log('loaded Pokemon', currentPokemon);
    for (let i = 1; i < 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokedex.innerHTML += renderPokemonCard(i);
        let pokeName = document.getElementById(`pokemonName${i}`)
        let pokeImg = document.getElementById(`pokemonImage${i}`)
        // renderPokemonInfo(i);
        pokeName.innerHTML = currentPokemon.name;
        pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
        // pokedex.innerHTML += `
        // <div class="pokemonCard" id="pokemonCard${i}">
        //     <h1 id="pokemonName${i}">${currentPokemon.name}</h1>
        //     <img id="pokemonImage${i}" src="">
        //     <div class="infoContainer">
        //     </div> 
        // </div>
        // `;
    }
}

// function renderPokemonInfo(i) {
//     let pName = document.getElementById(`pokemonName${i}`);
//     pName.innerHTML = currentPokemon.name;
//     // let pSrc = document.getElementById('pokemonName').src = currentPokemon.sprites.other.dream_world.front_default;

//     // pokedex.innerHTML += `
//     //     <h1 id="pokemonName">${currentPokemon.name}</h1>
//     //     <img id="pokemonImage" src="${currentPokemon.sprites.other.dream_world.front_default}">
//     //     <div class="infoContainer">
//     //     </div>
//     // `;
// }

function renderPokemonCard(i) {
    return `
    <div class="pokemonCard" id="pokemonCard${i}">
        <h1 id="pokemonName${i}"></h1>
        <img id="pokemonImage${i}" src="">
        <div class="infoContainer">
        </div> 
    </div>

    `;
}


