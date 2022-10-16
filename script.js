let currentPokemon;
let allPokemon = [];
let allPokemonSpecies = [];
let testPoke = [];
let currentSpeciesInfo = [];
let evolutionChainInfo = [];
let pokeLoadLoop = 20;
let pokeLoadLoopNow = 1;


async function loadPokemon() {
    // let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
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


async function getAllPokeDataTest(i) {
    testPoke = [];
    currentSpeciesInfo = [];
    evolutionChainInfo = [];

    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    testPoke.push(currentPokemon);
    console.log('INDEX', i);


    const PokespeciesURL = testPoke[0].species.url;
    let SpeciesUrlResponse = await fetch(PokespeciesURL);
    currentSpeciesInfo = await SpeciesUrlResponse.json();
   

    const evolutionChainUrl = currentSpeciesInfo.evolution_chain.url;
    let evolutionResponse = await fetch(evolutionChainUrl);
    evolutionChainInfo = await evolutionResponse.json();



    console.log('jetzt Pokemon', currentPokemon);
    console.log('TestPoke', currentSpeciesInfo);
    console.log('ChainJSON', evolutionChainInfo);

    // console.log('Entwickelt durch', currentSpeciesInfo.evolves_from_species.name);
    // console.log('Entwickelt zu', evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name);
    if (evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.hasOwnProperty('name')) {
        let maxEvo = evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name;
        console.log('Dritte Entwicklung', maxEvo);
    } else {
        console.log('Keine dritte Entwicklung');
    }
    if (evolutionChainInfo.chain.evolves_to[0].species.name) {
        let midEvo = evolutionChainInfo.chain.evolves_to[0].species.name;
        console.log('ChainJSONMidEvo', midEvo);
    } else {
        console.log('Keine Zweite entwicklung');
    }
    if (evolutionChainInfo.chain.species.name) {
        let minEvo = evolutionChainInfo.chain.species.name;
        console.log('ChainJSONMinEvo', minEvo);
    } else {
        console.log('Keine erste Entwicklung')
    }
}


function renderEvolutionChain(i) {
    let container = document.getElementById('pokeInfoBox');
    let maxEvo = evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name.slice(1);
    let midEvo = evolutionChainInfo.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + evolutionChainInfo.chain.evolves_to[0].species.name.slice(1);
    let minEvo = evolutionChainInfo.chain.species.name.charAt(0).toUpperCase() + evolutionChainInfo.chain.species.name.slice(1);

    container.innerHTML = '';
    container.innerHTML += `
        ${maxEvo}, ${midEvo}, ${minEvo}
    `;
}

let positionCounter = 900;

function offSet() {
    let pokedex = document.getElementById('pokedex');
    let pokePosTop = pokedex.offsetTop
    let pokePos = pokedex.getBoundingClientRect();

    if(window.scrollY >= positionCounter) {
        console.log('geht');
        loadPokemon();
        positionCounter += 900;
    } else {
    }
}



function manageDataprocess(i) {
    let pokeName = document.getElementById(`pokemonName${i}`);
    let pokeNumber = document.getElementById(`pokeNumber${i}`);
    let pokeImg = document.getElementById(`pokemonImage${i}`);
    let pokeNameUp = currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
    pokeName.innerHTML = pokeNameUp;
    pokeNumber.innerHTML = currentPokemon.id
    pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
}

async function testID(i) {
    i++
    const url = `https://pokeapi.co/api/v2/evolution-chain/90/`; 
    let response = await fetch(url);
    let currentPokemonChain = await response.json();
    console.log('pokechain', currentPokemonChain);
    // let currenChainLink = currentPokemonChain['evolution_chain']['url'];
    // let chainResponse = await fetch(currenChainLink);
    // let currenChain = await chainResponse.json();


    // console.log('chain Url', currenChain, i);
}


async function getPokemonSpeciesURL(i) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let response = await fetch(url);
    let currentPokemonSpecies = await response.json();
    allPokemonSpecies.push(currentPokemonSpecies);
    console.log('All Species', allPokemonSpecies);
}


function openPokeCard(i) {
    let container = document.getElementById('fullPokemonCard');
    getAllPokeDataTest(i);
    i--;
    let pokeNameUp = allPokemon[i].name.charAt(0).toUpperCase() + allPokemon[i].name.slice(1);
    let poke = allPokemon[i];
    container.classList.remove('d-none');
    container.innerHTML = renderPokeCardHTML(i, poke, pokeNameUp);
    // renderPokeCardNavbarHTML();
    pokeCardTypeProcess(i);
    // renderPokeCardStats(poke);
    renderPokeAbout(i);
    // testID(i);
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

function pokeCardTypeBgr(i, j) {
    let typeBox = document.getElementById('pokeTypeBox' + i + j);
    let typeBoxMain = document.getElementById('pokeTypeBox' + i + 0);
    let container = document.getElementById('pokeCardContainer');
    chooseCardTypeBGR(typeBox);
    chooseCardBGR(typeBoxMain, container);

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
                        <a onclick="renderPokeAbout(${i})" class="nav-item nav-link" href="#">About<span class="sr-only">(current)</span></a>
                        <a onclick="renderPokeCardStats(${i})" class="nav-item nav-link" href="#">Base Stats</a>
                        <a onclick="renderEvolutionChain(${i})" class="nav-item nav-link" href="#">Evolution</a>
                    </div>
                </div>
            </nav>
        <div class="pokeInfoBox" id="pokeInfoBox"></div>
        </div>
        </div>

    `;
}


// function getPokeInfo(category) {
//     for (let j = 0; j < poke.category.length; j++) {
//         const pokeStats = poke.category[j].stat.name;
//         document.getElementById('pokeInfoBox').innerHTML += `

//             <p>${pokeStats}</p>

//         `;
//     }
// }


function renderPokeAbout(i) {
    let pokeContainer = document.getElementById('pokeInfoBox');
    pokeContainer.innerHTML = '';
    let poke = allPokemon[i];
    pokeContainer.innerHTML += `<p>Height: ${(poke.height / 10)} M</p>`;
    pokeContainer.innerHTML += `<p>Weight: ${poke.weight / 10} KG</p>`;

}


function renderPokeCardStats(i) {
    let pokeContainer = document.getElementById('pokeInfoBox');
        pokeContainer.innerHTML = '';
    let poke = allPokemon[i];
    for (let j = 0; j < poke.stats.length; j++) {
        const pokeStats = poke.stats[j].base_stat;
        const pokeStatsName = poke.stats[j].stat.name.charAt(0).toUpperCase() + poke.stats[j].stat.name.slice(1);
        // let pokeNameUp = allPokemon[i].name.charAt(0).toUpperCase() + allPokemon[i].name.slice(1);

        pokeContainer.innerHTML += `
            <div id="pokeStats${j}" class="d-flex pokeStats"><p class="pokeStatsP1"><b>${pokeStatsName}:</p></b></div>
        `;
        document.getElementById('pokeStats' + j).innerHTML += `<p class="pokeStatsP2">${pokeStats}</p>`
    }
}


function closePokeCard() {
    document.getElementById('fullPokemonCard').classList.add('d-none');
}


// function renderPokeCardNavbarHTML() {
//     let bottomBox = document.getElementById('pokeCardBottomBox');
//    return bottomBox.innerHTML += ` 

//     `;
// }

