let currentPokemon;
let allPokemon = [];


async function loadPokemon() {
    // let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let pokedex = document.getElementById('pokedex');

    // console.log('loaded Pokemon', currentPokemon);
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
        pokedex.innerHTML += renderPokemonCard(i);
        let pokeName = document.getElementById(`pokemonName${i}`);
        let pokeNumber = document.getElementById(`pokeNumber${i}`);
        let pokeImg = document.getElementById(`pokemonImage${i}`);
        let typeContainer = document.getElementById(`pokeTypeContainer${i}`);
        let pokeNameUp = currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
        pokeName.innerHTML = pokeNameUp;
        pokeNumber.innerHTML = currentPokemon.id
        pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
        typeColorProcess(currentPokemon, typeContainer, i)
        console.log(currentPokemon);
    }
}

function typeColorProcess(Pokemon, typeContainer, i) {
    for (let j = 0; j < Pokemon.types.length; j++) {
        const pokeType = Pokemon.types[j].type.name.charAt(0).toUpperCase() + Pokemon.types[j].type.name.slice(1);
        console.log(pokeType);
        typeContainer.innerHTML += `
        <div class="pokeTypeBox" id="pokeTypeBox${i}${j}">${pokeType}</div>
        `;
        chooseTypeColor(i, j);
    }
}

function getPokeTypes(i) {
    for (let j = 0; j < allPokemon[i].types.length; j++) {
        const element = allPokemon[i].types[j].type.name;
        let typeBox = document.getElementById('pokeCardTypes');
        typeBox.innerHTML += `
        <p class="pokeTypeBox">${element}</p>
        `;
    }
}

function openPokeCard(i) {
    let container = document.getElementById('fullPokemonCard');
    i = i -1;
    let poke = allPokemon[i];
    container.classList.remove('d-none');
    container.innerHTML = renderPokeCardHTML(i, poke);
    getPokeTypes(i);
    choosePokeCardTypeColor();
}



function chooseTypeColor(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' +i + j);
    if (typeBox.innerHTML == 'Grass') {
        typeBox.style.color = 'rgb(43 255 49)'
    } else if (typeBox.innerHTML == 'Fire') {
        typeBox.style.color = 'red'
    } else if (typeBox.innerHTML == 'Water') {
        typeBox.style.color = 'blue'
    } else if (typeBox.innerHTML == 'Poison') {
        typeBox.style.color = 'purple'
    } else if (typeBox.innerHTML == 'Flying') {
        typeBox.style.color = "rgb(0 144 247)"
    } else if (typeBox.innerHTML == 'Normal') {
        typeBox.style.color = "rgb(114 35 57)"
    } else if (typeBox.innerHTML == 'Bug') {
        typeBox.style.color = "green"
    }
}


function choosePokeCardTypeColor() {
    let typeBox = document.getElementById('pokeCardTypes');
    if (typeBox.innerHTML == 'Grass') {
        typeBox.style.color = 'rgb(43 255 49)'
    } else if (typeBox.innerHTML == 'Fire') {
        typeBox.style.color = 'red'
    } else if (typeBox.innerHTML == 'Water') {
        typeBox.style.color = 'blue'
    } else if (typeBox.innerHTML == 'Poison') {
        typeBox.style.color = 'purple'
    } else if (typeBox.innerHTML == 'Flying') {
        typeBox.style.color = "rgb(0 144 247)"
    } else if (typeBox.innerHTML == 'Normal') {
        typeBox.style.color = "rgb(114 35 57)"
    } else if (typeBox.innerHTML == 'Bug') {
        typeBox.style.color = "green"
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



function renderPokeCardHTML(i, poke) {
    return `
    <div class="pokeCardContainer" onclick="event.stopPropagation()">
        <div class="pokeCardHeadBox">
            <div class="pokeCardInteraction">
                <button class="pokeCardBackBtn" onclick="closePokeCard()"></button>
                <img id="pokeCardLikeImg${i}" class="pokeCardLikeImg" src="./img/notLiked.png">
            </div>
            <div id="pokeCardIdent${i}" class="pokeCardIdent">
                <div class="pokeTag">
                    <p>${poke.name}</p>
                    <div id="pokeCardTypes" class="pokeCardTypes">
                </div>
            </div>
                <p>#000${i + 1}</p>
            </div>

        </div>
        <img class="pokeCardPokeImg" src="${poke.sprites.other.dream_world.front_default}">
        <div id="pokeCardBottomBox${i}" class="pokeCardBottomBox">
            <div class="pokeCardMenubar">                
            </div>
            <div class="pokeCardStats">
            </div>
            <div class="pokeCardBreed">
            </div>
        </div>
    </div>
    `;
}




function closePokeCard() {
    document.getElementById('fullPokemonCard').classList.add('d-none');
}


