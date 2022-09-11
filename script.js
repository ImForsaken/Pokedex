let currentPokemon;
let allPokemon;


async function loadPokemon() {
    // let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let pokedex = document.getElementById('pokedex');

    // console.log('loaded Pokemon', currentPokemon);
    for (let i = 1; i < 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokedex.innerHTML += renderPokemonCard(i);
        let pokeName = document.getElementById(`pokemonName${i}`);
        let pokeNumber = document.getElementById(`pokeNumber${i}`);
        let pokeImg = document.getElementById(`pokemonImage${i}`);
        let typeContainer = document.getElementById(`pokeTypeContainer${i}`);
        let pokeNameUp = currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
        pokeName.innerHTML = pokeNameUp;
        pokeNumber.innerHTML = currentPokemon.id
        pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
        for (let j = 0; j < currentPokemon.types.length; j++) {
            const pokeType = currentPokemon.types[j].type.name.charAt(0).toUpperCase() + currentPokemon.types[j].type.name.slice(1);
            console.log(pokeType);
            typeContainer.innerHTML += `
            <div class="pokeTypeBox" id="pokeTypeBox${i}${j}">${pokeType}</div>
            `;
            let typeBox = document.getElementById('pokeTypeBox' +i + j);
            if (typeBox.innerHTML == 'Grass') {
                typeBox.style.color = 'rgb(43 255 49)'
            } else if (typeBox.innerHTML == 'Fire') {
                typeBox.style.color = 'red'
            } else if (typeBox.innerHTML == 'Water') {
                typeBox.style.color = 'blue'
            } else if (typeBox.innerHTML == 'Poison') {
                typeBox.style.color = 'purple'
            }else if (typeBox.innerHTML == 'Flying') {
                typeBox.style.color = "rgb(0 144 247)"
            } else if (typeBox.innerHTML == 'Normal') {
                typeBox.style.color = "rgb(114 35 57)"
            }
            
            else if (typeBox.innerHTML == 'Bug') {
                typeBox.style.color = "green"
            }
            

            // typeContainer.innerHTML += ' ' + pokeType;
        }


 
        console.log(currentPokemon);

    }
}





function renderPokemonCard(i) {
    return `
    <div onclick="openPokeCard(${i})" class="pokemonCard glow-on-hover" id="pokemonCard${i}">
    <div class="pokemonWindow" id="pokemonWindow${i}">
        <div class="cardHead">
            <h1 id="pokemonName${i}"></h1>
            <p id="pokeNumber${i}"></p>
        </div>
            <img id="pokemonImage${i}" src="">
            <div class="pokeTypeContainer" id="pokeTypeContainer${i}">
            </div>
    </div>
    <div class="infoContainer d-none" id="infoContainer${i}">
    </div> 
    </div>
    `;
}


function openPokeCard(i) {
    document.getElementById('fullPokemonCard').classList.remove('d-none')
}

function closePokeCard() {
    document.getElementById('fullPokemonCard').classList.add('d-none')
}


