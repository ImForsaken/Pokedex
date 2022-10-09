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
        pokeListTypeProcess(currentPokemon, typeContainer, i)
        console.log(currentPokemon);
    }
}

function openPokeCard(i) {
    let container = document.getElementById('fullPokemonCard');
    i--;
    let pokeNameUp = allPokemon[i].name.charAt(0).toUpperCase() + allPokemon[i].name.slice(1);
    let poke = allPokemon[i];
    container.classList.remove('d-none');
    container.innerHTML = renderPokeCardHTML(i, poke, pokeNameUp);
    // renderPokeCardNavbarHTML();
    pokeCardTypeProcess(i);
    renderPokeCardStats(poke);
}

function renderPokeCardStats(poke) {
    for (let j = 0; j < poke.stats.length; j++) {
        const pokeStats = poke.stats[j].base_stat;
        document.getElementById('pokeInfoBox').innerHTML += `

            <p>${pokeStats}</p>

        `;
    }
}



function pokeListTypeProcess(Pokemon, typeContainer, i) {
    i--;
    for (let j = 0; j < Pokemon.types.length; j++) {
        const pokeType = Pokemon.types[j].type.name.charAt(0).toUpperCase() + Pokemon.types[j].type.name.slice(1);
        console.log(pokeType);
        typeContainer.innerHTML += `
        <div class="pokeTypeBox" id="pokeTypeBox${i}${j}">${pokeType}</div>
        `;
        determineBgrColor(i, j);
    }
}

function pokeCardTypeProcess(i) {
    for (let j = 0; j < allPokemon[i].types.length; j++) {
        const pokeTypeName = allPokemon[i].types[j].type.name;
        let pokeTypeUp = pokeTypeName.charAt(0).toUpperCase() + pokeTypeName.slice(1);
        let typeBox = document.getElementById('pokeCardTypes');
        typeBox.innerHTML += `
        <p id="pokeTypeBox${i}${j}" class="pokeTypeBox">${pokeTypeUp}</p>
        `;
        pokeCardTypeBgr(i, j);
    }
}

function chooseCardTypeBGR(typeBox) {
    if (typeBox.innerHTML == 'Grass') {
        typeBox.style.background = 'rgb(43 255 49)';
    } else if (typeBox.innerHTML == 'Fire') {
        typeBox.style.background = 'red';
    } else if (typeBox.innerHTML == 'Water') {
        typeBox.style.background = 'blue';
    } else if (typeBox.innerHTML == 'Poison') {
        typeBox.style.background = 'purple';
    } else if (typeBox.innerHTML == 'Flying') {
        typeBox.style.background = "rgb(0 144 247)";
    } else if (typeBox.innerHTML == 'Normal') {
        typeBox.style.background = "rgb(114 35 57)";
    } else if (typeBox.innerHTML == 'Bug') {
        typeBox.style.background = "green";
    }
}

function chooseCardBGR(typeBoxMain, container) {
    if (typeBoxMain.innerHTML == 'Grass') {
        container.style.background = 'rgb(9 155 13)';
    } else if (typeBoxMain.innerHTML == 'Fire') {
        container.style.background = 'red';
    } else if (typeBoxMain.innerHTML == 'Water') {
        container.style.background = 'blue';
    } else if (typeBoxMain.innerHTML == 'Poison') {
        container.style.background = 'purple';
    } else if (typeBoxMain.innerHTML == 'Flying') {
        container.style.background = "rgb(0 144 247)";
    } else if (typeBoxMain.innerHTML == 'Normal') {
        container.style.background = "rgb(114 35 57)";
    } else if (typeBoxMain.innerHTML == 'Bug') {
        container.style.background = "green";
    }
}

function pokeCardTypeBgr(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' + i + j);
    let typeBoxMain = document.getElementById('pokeTypeBox' + i + 0);
    let container = document.getElementById('pokeCardContainer');
    chooseCardTypeBGR(typeBox);
    chooseCardBGR(typeBoxMain, container);

}

function pokeCardBackground() {

}




function determineBgrColor(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' +i + j);
    if (typeBox.innerHTML == 'Grass') {
        typeBox.style.background = 'rgb(43 255 49)';
    } else if (typeBox.innerHTML == 'Fire') {
        typeBox.style.background = 'red';
    } else if (typeBox.innerHTML == 'Water') {
        typeBox.style.background = 'blue';
    } else if (typeBox.innerHTML == 'Poison') {
        typeBox.style.background = 'purple';
    } else if (typeBox.innerHTML == 'Flying') {
        typeBox.style.background = "rgb(0 144 247)";
    } else if (typeBox.innerHTML == 'Normal') {
        typeBox.style.background = "rgb(114 35 57)";
    } else if (typeBox.innerHTML == 'Bug') {
        typeBox.style.background = "green";
    }
}

function renderPokemonCard(i) {
    return /*html*/`
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



function renderPokeCardHTML(i, poke, pokeNameUp) {
    return /*html*/`
    <div class="pokeCardContainer" id="pokeCardContainer" onclick="event.stopPropagation()">
        <div class="pokeCardHeadBox">
            <div class="pokeCardInteraction">
                <button class="pokeCardBackBtn" onclick="closePokeCard()"></button>
                <img id="pokeCardLikeImg" class="pokeCardLikeImg" src="./img/notLiked.png">
            </div>
            <div id="pokeCardIdent" class="pokeCardIdent">
                <div class="pokeTag">
                    <h1><b>${pokeNameUp}</b></h1>
                <div id="pokeCardTypes" class="pokeCardTypes">
                </div>
                </div>
                    <p>#000${i + 1}</p>
                </div>
            </div>
                <img class="pokeCardPokeImg" src="${poke.sprites.other.dream_world.front_default}">
        <div id="pokeCardBottomBox" class="pokeCardBottomBox">
            <nav class="navbar pokeCardNavbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Pokeinfo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#">About<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Base Stats</a>
                        <a class="nav-item nav-link" href="#">Evolution</a>
                    </div>
                </div>
            </nav>
        <div class="pokeInfoBox" id="pokeInfoBox"></div>
        </div>
        </div>

    `;
}




function closePokeCard() {
    document.getElementById('fullPokemonCard').classList.add('d-none');
}


// function renderPokeCardNavbarHTML() {
//     let bottomBox = document.getElementById('pokeCardBottomBox');
//    return bottomBox.innerHTML += ` 

//     `;
// }

