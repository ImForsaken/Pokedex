let currentPokemon;
let allPokemon = [];
let allPokemonSpecies = [];
let currentPokemonInfo = [];
let currentSpeciesInfo = [];
let evolutionChainInfo = [];
let evolutionChainMaxSpeciesInfo = [];
let evolutionChainMidSpeciesInfo = [];
let evolutionChainMinSpeciesInfo = [];
let currentEvoMaxInfo;
let currentEvoMidInfo;
let currentEvoMinInfo;
let pokeLoadLoop = 20;
let pokeLoadLoopNow = 1;
let maxPoke = 151;
let lockFunction = false;


//fetches the Data of specific Pokemon
async function getListPokemonData() {
    let pokedex = document.getElementById('pokedex');
    for (pokeLoadLoopNow; pokeLoadLoopNow <= pokeLoadLoop; pokeLoadLoopNow++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeLoadLoopNow}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
        pokedex.innerHTML += renderPokemonCard(pokeLoadLoopNow);
        manageDataprocess(pokeLoadLoopNow)
        pokeListTypeProcess(currentPokemon, pokeLoadLoopNow);
        console.log(currentPokemon);

        // getPokemonSpeciesURL(i);
    }
    pokeLoadLoop += 20;

    // console.log('loaded Pokemon', currentPokemon);
}

async function getPokemonSpeciesURL(i) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let response = await fetch(url);
    let currentPokemonSpecies = await response.json();
    allPokemonSpecies.push(currentPokemonSpecies);
    console.log('All Species', allPokemonSpecies);
}




async function getAllPokeDataTest(i) {
    currentPokemonInfo = [];
    currentSpeciesInfo = [];
    evolutionChainInfo = [];

    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    currentPokemonInfo.push(currentPokemon);
    console.log('INDEX', i);

    await getSpeciesUrl();
    await getEvolutionUrl();

    console.log('jetzt Pokemon', currentPokemon);
    console.log('currentPokemonInfo', currentSpeciesInfo);
    console.log('ChainJSON', evolutionChainInfo);


    if (0 in evolutionChainInfo.chain.evolves_to[0].evolves_to) {
        await getMaxEvolutionDetails();
    }
    if ('species' in evolutionChainInfo.chain.evolves_to[0]) {
        await getMidEvolutionDetails();
    }
    if ('name' in evolutionChainInfo.chain.species) {
        await getMinEvolutionDetails();
    }

}



async function getMaxEvolutionDetails() {
    currentEvoMaxInfo = [];
    evolutionChainMaxSpeciesInfo = [];
    let maxEvo = evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name;
    let maxEvoUrl = evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.url;
    let maxEvoUrlResponse = await fetch(maxEvoUrl);
    evolutionChainMaxSpeciesInfo.push(await maxEvoUrlResponse.json());
    console.log('Dritte Stufe 3', maxEvo, maxEvoUrl);
    let maxEvoId = evolutionChainMaxSpeciesInfo[0].id;
    let url = `https://pokeapi.co/api/v2/pokemon/${maxEvoId}`;
    let response = await fetch(url);
    currentEvoMaxInfo = await response.json();
    console.log('ID 3', currentEvoMaxInfo);
}

async function getMidEvolutionDetails() {
    currentEvoMidInfo = [];
    evolutionChainMidSpeciesInfo = [];
    let midEvo = evolutionChainInfo.chain.evolves_to[0].species.name;
    let midEvoUrl = evolutionChainInfo.chain.evolves_to[0].species.url;
    let midEvoUrlResponse = await fetch(midEvoUrl);
    evolutionChainMidSpeciesInfo.push(await midEvoUrlResponse.json());
    console.log('Zweite Stufe 2', midEvo, midEvoUrl);
    let midEvoId = evolutionChainMidSpeciesInfo[0].id;
    let url = `https://pokeapi.co/api/v2/pokemon/${midEvoId}`;
    let response = await fetch(url);
    currentEvoMidInfo = await response.json();
    console.log('ID 2', currentEvoMidInfo);
}


async function getMinEvolutionDetails() {
    currentEvoMinInfo = [];
    evolutionChainMinSpeciesInfo = [];
    let minEvo = evolutionChainInfo.chain.species.name;
    let minEvoUrl = evolutionChainInfo.chain.species.url;
    let minEvoUrlResponse = await fetch(minEvoUrl);
    evolutionChainMinSpeciesInfo.push(await minEvoUrlResponse.json());
    console.log('Erste Stufe 1', minEvo, minEvoUrl);
    let minEvoId = evolutionChainMinSpeciesInfo[0].id;
    let url = `https://pokeapi.co/api/v2/pokemon/${minEvoId}`;
    let response = await fetch(url);
    currentEvoMinInfo = await response.json();
    console.log('ID 1', currentEvoMinInfo);
}


// renders Pokecard about information
function renderPokeAbout(i) {
    let container = document.getElementById('pokeAboutContainer');
    let poke = allPokemon[i];

    clearAndDisplayCardContainer('pokeAboutContainer', 'pokeStatsContainer', 'pokeEvoContainer', 'pokeMovesContainer');
    container.innerHTML = renderPokeAboutHTML(poke);
}


function renderPokeMoves() {

    let container = document.getElementById('pokeMovesContainer');

    clearAndDisplayCardContainer('pokeMovesContainer', 'pokeStatsContainer', 'pokeEvoContainer', 'pokeAboutContainer');
    
    for (let j = 0; j < currentPokemon.moves.length; j++) {
        const move = currentPokemon.moves[j].move.name;
        container.innerHTML += `
            ${move}<br>
        `;
    }
}


function renderEvolutionChain(i) {

    let container = document.getElementById('pokeEvoContainer');
    clearAndDisplayCardContainer('pokeEvoContainer', 'pokeMovesContainer', 'pokeStatsContainer', 'pokeAboutContainer');
    container.innerHTML = renderEvoBoxHTML();
}


//when pokecard is displayed the function decides if the Pokemon will displayed as shiny or not
function randomShinyEvent(category) {
    if (Math.random() < 0.15) {
        return category.sprites.other.home.front_shiny;
    } else {
        return category.sprites.other.dream_world.front_default;
    }
}

//renders Pokemon evolution names, images and levelup.
function renderEvoBoxHTML() {
    let maxEvoName = currentEvoMaxInfo.name.charAt(0).toUpperCase() + currentEvoMaxInfo.name.slice(1);
    let midEvoName = currentEvoMidInfo.name.charAt(0).toUpperCase() + currentEvoMidInfo.name.slice(1);
    let minEvoName = currentEvoMinInfo.name.charAt(0).toUpperCase() + currentEvoMinInfo.name.slice(1);
    renderPokeEvolutionHtml(maxEvoName, midEvoName, minEvoName);

}




function renderPokeCardStats(i) {

    let container = document.getElementById('pokeStatsContainer');
    let poke = allPokemon[i];
    container.innerHTML = '';

    clearAndDisplayCardContainer('pokeStatsContainer', 'pokeMovesContainer', 'pokeEvoContainer', 'pokeAboutContainer');

    for (let j = 0; j < poke.stats.length; j++) {
        const pokeStats = poke.stats[j].base_stat;
        const pokeStatsName = poke.stats[j].stat.name.charAt(0).toUpperCase() + poke.stats[j].stat.name.slice(1);
        
        container.innerHTML += `
            <div id="pokeStats${j}" class="d-flex pokeStats"><p class="pokeStatsP1"><b>${pokeStatsName}:</p></b></div>
        `;
        document.getElementById('pokeStats' + j).innerHTML += `<p class="pokeStatsP2">${pokeStats}</p>`
    }
}



function clearAndDisplayCardContainer(main, cc1, cc2, cc3) {

    let container = document.getElementById(main);

    let cleanContainer1 = document.getElementById(cc1);
    let cleanContainer2 = document.getElementById(cc2);
    let cleanContainer3 = document.getElementById(cc3);
    cleanContainer1.classList.add('d-none');
    cleanContainer2.classList.add('d-none');
    cleanContainer3.classList.add('d-none');
    container.classList.remove('d-none');

    cleanContainer1.innerHTML = '';
    cleanContainer2.innerHTML = '';
    cleanContainer3.innerHTML = '';
    container.innerHTML = '';
}



async function offSet() {

    if (!lockFunction) {
        let pageBottom = 100;
        let viewerHeight = document.body.scrollHeight;
        let currentScrollPosition = window.scrollY + window.innerHeight;
        lockFunction = true;

        if (pokeLoadLoop <= 140) {
            if (currentScrollPosition + pageBottom > viewerHeight) {
                await getListPokemonData();
            }
        }
        lockFunction = false;
    }
}


// places the Info into pokemon list card
function manageDataprocess(i) {
    let pokeName = document.getElementById(`pokemonName${i}`);
    let pokeNumber = document.getElementById(`pokeNumber${i}`);
    let pokeImg = document.getElementById(`pokemonImage${i}`);
    let pokeNameUp = currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
    pokeName.innerHTML = pokeNameUp;
    pokeNumber.innerHTML = currentPokemon.id
    pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
}





async function openPokeCard(i) {
    let container = document.getElementById('fullPokemonCard');
    await getAllPokeDataTest(i);
    i--;
    let pokeNameUp = allPokemon[i].name.charAt(0).toUpperCase() + allPokemon[i].name.slice(1);
    let poke = allPokemon[i];
    container.classList.remove('d-none');
    container.innerHTML = renderPokeCardHTML(i, poke, pokeNameUp);
    pokeCardTypeProcess(i);
    renderPokeAbout(i);
}


async function getSpeciesUrl() {
    const PokespeciesURL = currentPokemonInfo[0].species.url;
    let SpeciesUrlResponse = await fetch(PokespeciesURL);
    currentSpeciesInfo = await SpeciesUrlResponse.json();
}

async function getEvolutionUrl() {
    const evolutionChainUrl = currentSpeciesInfo.evolution_chain.url;
    let evolutionResponse = await fetch(evolutionChainUrl);
    evolutionChainInfo = await evolutionResponse.json();
}


function pokeListTypeProcess(Pokemon, i) {
    let typeContainer = document.getElementById(`pokeTypeContainer${i}`);
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
// SPäter einfügen um backgrounds zu deciden
// function getBackgroundcolors(element) {
//     return {
//         fire: 'red',
//         water: 'blue',
//         grass: 'green',
//         poison: 'purple',
//         fyling: "rgb(0 144 247)",
//         normal: 'rgb(114 35 57)',
//         bug: 'green'
//     }[element.toLowerCase()] || 'white'
// }

function pokeCardTypeBgr(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' + i + j);
    let typeBoxMain = document.getElementById('pokeTypeBox' + i + 0);
    let container = document.getElementById('pokeCardContainer');
    chooseCardTypeBGR(typeBox);
    chooseCardBGR(typeBoxMain, container);

}






function determineBgrColor(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' + i + j);
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
    return `
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
                <div class="pokePreview">
                <img id="pokeCardPokeImg" class="pokeCardPokeImg" src="${randomShinyEvent(poke)}">
                <div class="pokeMainText">${currentSpeciesInfo.flavor_text_entries[1].flavor_text.replace('\f', ' ')}</div>
            </div>
            </div>
        <div id="pokeCardBottomBox" class="pokeCardBottomBox">
            <nav onclick="return false;" class="navbar pokeCardNavbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Pokeinfo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a onclick="renderPokeAbout(${i})" class="nav-item nav-link" href="#">About<span class="sr-only">(current)</span></a>
                        <a onclick="renderPokeCardStats(${i})" class="nav-item nav-link" href="#">Base Stats</a>
                        <a onclick="renderEvolutionChain(${i})" class="nav-item nav-link" href="#">Evolution</a>
                        <a onclick="renderPokeMoves()" class="nav-item nav-link" href="#">Moves</a>
                    </div>
                </div>
            </nav>
            <div class="pokeAboutContainer" id="pokeAboutContainer"></div>
            <div class="pokeStatsContainer d-none" id="pokeStatsContainer"></div>
            <div class="pokeEvoContainer d-none" id="pokeEvoContainer"></div>
            <div class="pokeMovesContainer d-none" id="pokeMovesContainer"></div>
        </div>
    </div>

    `;
}


function renderPokeAboutHTML(poke) {
    return `
    <div class="headAboutContainer" id="headAboutContainer">
        <div class="headAboutBoxLeft" id="headAboutBoxLeft">
            <div class="pokeAboutChildBox d-flex" id="pokeAboutHeight">
                <p><b>Height:</b></p>
            </div>
            <div class="pokeAboutChildBox d-flex" id="pokeAboutWeight">
                <p><b>Weight:</b></p>
            </div>
            <div class="pokeAboutChildBox d-flex" id="pokeAboutAbilities">
                <p><b>Abilities:</b></p>
            </div>
        </div>
        <div class="headAboutBoxRight">
            <p>${(poke.height / 10)} M</p>
            <p>${(poke.weight / 10)} KG</p>
            <p>${poke.abilities[0].ability.name}, ${getAbilities(poke)}</p>
        </div>
    </div>
    `;
}


function renderPokeEvolutionHtml(maxEvoName, midEvoName, minEvoName) {
    return `
    <div class="pokeEvoBox">
        ${minEvoName}<br>
        <img src="${currentEvoMinInfo.sprites.other.dream_world.front_default}">
    </div>  
    <div class="pokeEvoBox">
        ${midEvoName}<br>
        <img src="${currentEvoMidInfo.sprites.other.dream_world.front_default}">
    </div> 
    <div class="pokeEvoBox">
        ${maxEvoName}<br>
        <img src="${currentEvoMaxInfo.sprites.other.dream_world.front_default}">
    </div>   
    `;
}

function getAbilities(poke) {
    if(1 in poke.abilities) {
        return poke.abilities[1].ability.name;
    }
}


function closePokeCard() {
    document.getElementById('fullPokemonCard').classList.add('d-none');
}

