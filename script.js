let currentPokemon;
let allPokemon = [];
let allPokemonSpecies = [];
let currentPokemonEditionInfo = [];
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
let lockFunction = false;

//fetches the Data of specific Pokemon
async function getListPokemonData() {
  let pokedex = document.getElementById("pokedex");
  for (pokeLoadLoopNow; pokeLoadLoopNow <= pokeLoadLoop; pokeLoadLoopNow++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeLoadLoopNow}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    allPokemon.push(currentPokemon);
    pokedex.innerHTML += renderPokemonCard(pokeLoadLoopNow);
    manageDataprocess(pokeLoadLoopNow);
    pokeListTypeProcess(currentPokemon, pokeLoadLoopNow);
    console.log(currentPokemon);
  }
  pokeLoadLoop += 20;
}

//tracks the species information of current itterated Pokemon
async function getPokemonSpeciesURL(i) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
  let response = await fetch(url);
  let currentPokemonSpecies = await response.json();
  allPokemonSpecies.push(currentPokemonSpecies);
  console.log("All Species", allPokemonSpecies);
}

//tracks down the Edition information of selected pokemon
async function getPokeEditionInfo() {
  const url = `${currentPokemon.forms[0].url}`;
  let pokeUrl = await fetch(url);
  let currenPokeInfo = await pokeUrl.json();
  currentPokemonEditionInfo.push(currenPokeInfo);
}

//Get all URLS from selected pokemon for all information that will displayed
async function getSelectedPokemonUrls(i) {
  currentPokemonInfo = [];
  currentSpeciesInfo = [];
  evolutionChainInfo = [];
  currentPokemonEditionInfo = [];

  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  let response = await fetch(url);
  currentPokemon = await response.json();
  currentPokemonInfo.push(currentPokemon);
  console.log("INDEX", i);

  await getPokeEditionInfo();
  await getSpeciesUrl();
  await getEvolutionUrl();

  console.log("jetzt Pokemon", currentPokemon);
  console.log("Edition Info", currentPokemonEditionInfo);
  console.log("currentPokemonInfo", currentSpeciesInfo);
  console.log("ChainJSON", evolutionChainInfo);
  await checkPokeEvolutionChain();
}

//renders Pokemon evolution names, images and levelup.
function setEvoBoxInfo() {
  if (currentEvoMaxInfo && currentEvoMaxInfo.length > 0) {
    let maxEvoName =
      currentEvoMaxInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMaxInfo[0].name.slice(1);
    let midEvoName =
      currentEvoMidInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMidInfo[0].name.slice(1);
    let minEvoName =
      currentEvoMinInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMinInfo[0].name.slice(1);
    checkSecondLevelUpTrigger();
    checkThirdLevelUptrigger();
    return renderThreeEvoBoxHTML(
      maxEvoName,
      midEvoName,
      minEvoName,
      levelTrigger1,
      levelTrigger2
    );
  }
  if (currentEvoMidInfo && currentEvoMidInfo.length > 0) {
    let midEvoName =
      currentEvoMidInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMidInfo[0].name.slice(1);
    let minEvoName =
      currentEvoMinInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMinInfo[0].name.slice(1);
    checkSecondLevelUpTrigger();
    return renderTwoEvoBoxHTML(midEvoName, minEvoName, levelTrigger1);
  }
  if (currentEvoMinInfo && currentEvoMinInfo.length > 0) {
    let minEvoName =
      currentEvoMinInfo[0].name.charAt(0).toUpperCase() +
      currentEvoMinInfo[0].name.slice(1);
    return renderOneEvoBoxHtml(minEvoName);
  }
}

//checks the level up trigger for Evolutioncontainer in Fullscreen card
function checkSecondLevelUpTrigger() {
  if (evolutionChainInfo.chain.evolves_to[0].evolution_details[0].min_level) {
    return (levelTrigger1 =
      evolutionChainInfo.chain.evolves_to[0].evolution_details[0].min_level);
  } else if (evolutionChainInfo.chain.evolves_to[0].evolution_details[0].item) {
    return (levelTrigger1 =
      evolutionChainInfo.chain.evolves_to[0].evolution_details[0].item.name);
  } else {
    return (levelTrigger1 = "No Information");
  }
}

//checks the level up trigger for Evolutioncontainer in Fullscreen card
function checkThirdLevelUptrigger() {
  if (
    evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
      .min_level
  ) {
    return (levelTrigger2 =
      evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
        .min_level);
  } else if (
    evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
      .item
  ) {
    return (levelTrigger2 =
      evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
        .item.name);
  } else if (
    evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
      .trigger.name
  ) {
    return (levelTrigger2 =
      evolutionChainInfo.chain.evolves_to[0].evolves_to[0].evolution_details[0]
        .trigger.name);
  } else {
    return (levelTrigger2 = "No Information");
  }
}

//tracks down the highest Evolution of specific Pokemon for fullscreen card
async function getMaxEvolutionDetails() {
  currentEvoMaxInfo = [];
  evolutionChainMaxSpeciesInfo = [];
  let maxEvo =
    evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.name;
  let maxEvoUrl =
    evolutionChainInfo.chain.evolves_to[0].evolves_to[0].species.url;
  let maxEvoUrlResponse = await fetch(maxEvoUrl);
  evolutionChainMaxSpeciesInfo.push(await maxEvoUrlResponse.json());
  console.log("Dritte Stufe 3", maxEvo, maxEvoUrl);
  let maxEvoId = evolutionChainMaxSpeciesInfo[0].id;
  let url = `https://pokeapi.co/api/v2/pokemon/${maxEvoId}`;
  let response = await fetch(url);
  currentEvoMaxInfo.push(await response.json());
  console.log("ID 3", currentEvoMaxInfo);
}

//tracks the second stage of specific pokemon evolution chain
async function getMidEvolutionDetails() {
  currentEvoMidInfo = [];
  evolutionChainMidSpeciesInfo = [];
  let midEvo = evolutionChainInfo.chain.evolves_to[0].species.name;
  let midEvoUrl = evolutionChainInfo.chain.evolves_to[0].species.url;
  let midEvoUrlResponse = await fetch(midEvoUrl);
  evolutionChainMidSpeciesInfo.push(await midEvoUrlResponse.json());
  console.log("Zweite Stufe 2", midEvo, midEvoUrl);
  let midEvoId = evolutionChainMidSpeciesInfo[0].id;
  let url = `https://pokeapi.co/api/v2/pokemon/${midEvoId}`;
  let response = await fetch(url);
  currentEvoMidInfo.push(await response.json());
  console.log("ID 2", currentEvoMidInfo);
}

//checks and display the lowest Pokemon in evolution chain
async function getMinEvolutionDetails() {
  currentEvoMinInfo = [];
  evolutionChainMinSpeciesInfo = [];
  let minEvo = evolutionChainInfo.chain.species.name;
  let minEvoUrl = evolutionChainInfo.chain.species.url;
  let minEvoUrlResponse = await fetch(minEvoUrl);
  evolutionChainMinSpeciesInfo.push(await minEvoUrlResponse.json());
  console.log("Erste Stufe 1", minEvo, minEvoUrl);
  let minEvoId = evolutionChainMinSpeciesInfo[0].id;
  let url = `https://pokeapi.co/api/v2/pokemon/${minEvoId}`;
  let response = await fetch(url);
  currentEvoMinInfo.push(await response.json());
  console.log("ID 1", currentEvoMinInfo);
}

// renders Fullscreen Pokecard about information container
function renderPokeAbout(i) {
  let container = document.getElementById("pokeAboutContainer");
  let poke = allPokemon[i];

  clearAndDisplayCardContainer(
    "pokeAboutContainer",
    "pokeStatsContainer",
    "pokeEvoContainer",
    "pokeMovesContainer"
  );
  container.innerHTML = renderPokeAboutHTML(poke);
}

//renders specific pokemon about information
function renderPokeAboutSearchbar() {
  let container = document.getElementById("pokeAboutContainer");
  let poke = currentPokemon;

  clearAndDisplayCardContainer(
    "pokeAboutContainer",
    "pokeStatsContainer",
    "pokeEvoContainer",
    "pokeMovesContainer"
  );
  container.innerHTML = renderPokeAboutHTML(poke);
}

//renders all moves to the Moves container in fullscreen card
function renderPokeMoves() {
  let container = document.getElementById("pokeMovesContainer");
  clearAndDisplayCardContainer(
    "pokeMovesContainer",
    "pokeStatsContainer",
    "pokeEvoContainer",
    "pokeAboutContainer"
  );
  for (let j = 0; j < currentPokemon.moves.length; j++) {
    const move = currentPokemon.moves[j].move.name;
    container.innerHTML += `
            <p class="pokeMoveTag">${move}<p>
        `;
  }
}

//manages the process for Evolutionchaincontainer
function renderEvolutionChain() {
  let container = document.getElementById("pokeEvoContainer");
  clearAndDisplayCardContainer(
    "pokeEvoContainer",
    "pokeMovesContainer",
    "pokeStatsContainer",
    "pokeAboutContainer"
  );
  container.innerHTML = setEvoBoxInfo();
}

//gambles if displayed pokemon in fullscreen card will be shiny or not
function randomShinyEvent(category) {
  if (Math.random() < 0.15) {
    return category.sprites.other.home.front_shiny;
  } else {
    return category.sprites.other.dream_world.front_default;
  }
}

function renderPokeCardStats(i) {
  let container = document.getElementById("pokeStatsContainer");
  let poke = allPokemon[i];
  container.innerHTML = "";
  clearAndDisplayCardContainer(
    "pokeStatsContainer",
    "pokeMovesContainer",
    "pokeEvoContainer",
    "pokeAboutContainer"
  );
  getPokeCardStats(container, poke);
}

// generate card data depends on searchbar Hits
function renderPokeCardStatsSearchbar() {
  let container = document.getElementById("pokeStatsContainer");
  let poke = currentPokemon;
  container.innerHTML = "";

  clearAndDisplayCardContainer(
    "pokeStatsContainer",
    "pokeMovesContainer",
    "pokeEvoContainer",
    "pokeAboutContainer"
  );
  getPokeCardStatsforSearchbarRequest(container, poke);
}

// triggers new Pokemon data download if scrolled to bottom of page
async function offSet() {
  if (!lockFunction) {
    let pageBottom = 100;
    let viewerHeight = document.body.scrollHeight;
    let currentScrollPosition = window.scrollY + window.innerHeight;
    lockFunction = true;

    if (pokeLoadLoop <= 905) {
      if (currentScrollPosition + pageBottom > viewerHeight) {
        await getListPokemonData();
      }
    }
    lockFunction = false;
  }
}

// generate Infos for Pokedex list Cards
function manageDataprocess(i) {
  let pokeName = document.getElementById(`pokemonName${i}`);
  let pokeNumber = document.getElementById(`pokeNumber${i}`);
  let pokeImg = document.getElementById(`pokemonImage${i}`);
  let pokeNameUp =
    currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
  pokeName.innerHTML = pokeNameUp;
  pokeNumber.innerHTML = currentPokemon.id;
  checkPokedexListImages(pokeImg);
}

//generate the info on the basis of specific Pokemon from the searchbar
async function searchbarPokemon(i) {
  await getSelectedPokemonUrls(i);
  let container = document.getElementById("fullPokemonCard");
  container.classList.remove("d-none");
  let poke = currentPokemon;
  let pokeNameUp =
    currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
  container.innerHTML = renderPokeCardHTMLSearchbar(i - 1, poke, pokeNameUp);
  pokeCardTypesSearchbar(i);
  renderPokeAboutSearchbar();
}

//generate the fullscreen Card of selected Pokemon from Pokedex list
async function openPokeCard(i) {
  let container = document.getElementById("fullPokemonCard");
  document.body.style.overflow = "hidden";
  await getSelectedPokemonUrls(i);
  i--;
  let pokeNameUp =
    allPokemon[i].name.charAt(0).toUpperCase() + allPokemon[i].name.slice(1);
  let poke = allPokemon[i];
  container.classList.remove("d-none");
  container.innerHTML = renderPokeCardHTML(i, poke, pokeNameUp);
  pokeCardTypeProcess(i);
  renderPokeAbout(i);
}

//gets Species URL from specific pokemon
async function getSpeciesUrl() {
  const PokespeciesURL = currentPokemonInfo[0].species.url;
  let SpeciesUrlResponse = await fetch(PokespeciesURL);
  currentSpeciesInfo = await SpeciesUrlResponse.json();
}

//gets Evolutionchain URL from specific pokemon
async function getEvolutionUrl() {
  const evolutionChainUrl = currentSpeciesInfo.evolution_chain.url;
  let evolutionResponse = await fetch(evolutionChainUrl);
  evolutionChainInfo = await evolutionResponse.json();
}

//gets the pokemon Type for the Pokedex listed pokemon
function pokeListTypeProcess(Pokemon, i) {
  let typeContainer = document.getElementById(`pokeTypeContainer${i}`);
  i--;
  getPokeListTypeData(Pokemon, typeContainer, i);
  let typeBox = document.getElementById("pokeTypeBox" + i + 0).innerHTML;
  i++;
  let cardBgr = document.getElementById("pokemonCard" + i);
  cardBgr.style.background = setPokemonListCardsBgr(typeBox);
}

//changes the Bgr of hovered Pokemon in searchbar depending on its main Type
function whenMouseEnters(id) {
  elemType = document.getElementById("searchbarType" + id).innerHTML;
  elem = document.getElementById("pokemonSearchbarHitContainer" + id);
  elem.style.background = setPokemonListCardsBgr(elemType);
}

//changes the Bgr color of before hovered Pokemon to none
function whenMouseLeaves(id) {
  elem = document.getElementById("pokemonSearchbarHitContainer" + id);
  elem.style.background = "none";
}

//gets Type for specific searched pokemon
function pokeCardTypesSearchbar(i) {
  for (let j = 0; j < currentPokemon.types.length; j++) {
    const pokeTypeName = currentPokemon.types[j].type.name;
    let pokeTypeUp =
      pokeTypeName.charAt(0).toUpperCase() + pokeTypeName.slice(1);
    let typeBox = document.getElementById("pokeCardTypes");
    typeBox.innerHTML += `
        <p id="pokeTypeBox${i}${j}" class="pokeTypeBox">${pokeTypeUp}</p>
        `;
    setPokeCardBackgrounds(i, j);
  }
}

//gets Type names and place information as <p>
function pokeCardTypeProcess(i) {
  for (let j = 0; j < allPokemon[i].types.length; j++) {
    const pokeTypeName = allPokemon[i].types[j].type.name;
    let pokeTypeUp =
      pokeTypeName.charAt(0).toUpperCase() + pokeTypeName.slice(1);
    let typeBox = document.getElementById("pokeCardTypes");
    typeBox.innerHTML += `
        <p id="pokeTypeBox${i}${j}" class="pokeTypeBox">${pokeTypeUp}</p>
        `;
    setPokeCardBackgrounds(i, j);
  }
}

//Sets the Background of type and pokemon box of an displayed pokemoncard
function setPokeCardBackgrounds(i, j) {
  let firstTypeBox = document.getElementById("pokeTypeBox" + i + 0);
  let typeBox = document.getElementById("pokeTypeBox" + i + j);
  let typeIcon = document.getElementById("pokeCardPokeTypeImg");
  typeBox.style.backgroundColor = getTypeBackgroundcolors(typeBox.innerHTML);
  typeIcon.src = getPokemonTypeIcon(firstTypeBox.innerHTML);
  typeIcon.style.backgroundColor = getPokemonBackgroundcolor(
    firstTypeBox.innerHTML
  );
}

//sets the Type Bgr of Pokedex cards
function getTypeBackgroundcolors(element) {
  return (
    {
      fire: "#FBA54C",
      grass: "#5FBD58",
      water: "#539DDF",
      poison: "#B763CF",
      flying: "#A1BBEC",
      normal: "#A0A29F",
      bug: "#92BC2C",
      dark: "#595761",
      dragon: "#0C69C8",
      electric: "#F2D94E",
      fairy: "#EE90E6",
      fighting: "#D3425F",
      ghost: "#5F6DBC",
      ground: "#D3425F",
      ice: "#75D0C1",
      psychic: "#FA8581",
      rock: "#C9BB8A",
      steel: "#5695A3",
    }[element.toLowerCase()] || "white"
  );
}

//determine the Bgr for Pokedex listed Pokemon cards
function setPokemonListCardsBgr(element) {
  return (
    {
      fire: "#ff8200",
      grass: "#1d8b15",
      water: "#0372d5",
      poison: "#7d00a1",
      flying: "#588ef5",
      normal: "#565656",
      bug: "#9ddd01",
      dark: "#8173bb",
      dragon: "#0a72dd",
      electric: "#ffe100",
      fairy: "#ffbbf9",
      fighting: "#ff0a3c",
      ghost: "#19214e",
      ground: "#ed002f",
      ice: "#02ffd5",
      psychic: "#ff504a",
      rock: "#dfd19f",
      steel: "#5695A3",
    }[element.toLowerCase()] || "white"
  );
}

//Sets the Bgr of Fullscreen Pokecard Type Image
function getPokemonBackgroundcolor(element) {
  return (
    {
      fire: "#f1800b",
      grass: "#2ec723",
      water: "#2184dd",
      poison: "#a625cb",
      flying: "#578ae9",
      normal: "#afbda9",
      bug: "#92c90d",
      dark: "#595761",
      dragon: "#1a446e",
      electric: "#f7d414",
      fairy: "#ef3de0",
      fighting: "#cf0c33",
      ghost: "#4051b5",
      ground: "#cf173c",
      ice: "#31c1a9",
      psychic: "#d54f4a",
      rock: "#cdb666",
      steel: "#4197ab",
    }[element.toLowerCase()] || "white"
  );
}

//determine the correct type symbol for the Fullscreen Pokemon card
function getPokemonTypeIcon(element) {
  return (
    {
      fire: "./img/fire.svg",
      grass: "./img/grass.svg",
      water: "./img/water.svg",
      poison: "./img/poison.svg",
      flying: "./img/flying.svg",
      normal: "./img/normal.svg",
      bug: "./img/bug.svg",
      dark: "./img/dark.svg",
      dragon: "./img/dragon.svg",
      electric: "./img/electric.svg",
      fairy: "./img/fairy.svg",
      fighting: "./img/fighting.svg",
      ghost: "./img/ghost.svg",
      ground: "./img/ground.svg",
      ice: "./img/ice.svg",
      psychic: "./img/psychic.svg",
      rock: "./img/rock.svg",
      steel: "./img/steel.svg",
    }[element.toLowerCase()] || "white"
  );
}

//clears all data from Fullscreen Pokemon card Information containers
function clearAndDisplayCardContainer(main, cc1, cc2, cc3) {
  let container = document.getElementById(main);
  let cleanContainer1 = document.getElementById(cc1);
  let cleanContainer2 = document.getElementById(cc2);
  let cleanContainer3 = document.getElementById(cc3);

  cleanContainer1.classList.add("d-none");
  cleanContainer2.classList.add("d-none");
  cleanContainer3.classList.add("d-none");
  container.classList.remove("d-none");

  cleanContainer1.innerHTML = "";
  cleanContainer2.innerHTML = "";
  cleanContainer3.innerHTML = "";
  container.innerHTML = "";
}

// HELP FUNCTIONS START
function getPokeCardStats(container, poke) {
  for (let j = 0; j < poke.stats.length; j++) {
    const pokeStats = poke.stats[j].base_stat;
    const pokeStatsName =
      poke.stats[j].stat.name.charAt(0).toUpperCase() +
      poke.stats[j].stat.name.slice(1);
    const pokeStatsWidth = Math.round(pokeStats / 2);
    container.innerHTML += `
                <p class="pokeStatsP1"><b>${pokeStatsName}:</b></p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="${pokeStats}" aria-valuemin="0" aria-valuemax="200" style="width: ${pokeStatsWidth}%"><b>${pokeStats}</b></div>
                </div>
        `;
  }
}

async function checkPokeEvolutionChain() {
  if ("name" in evolutionChainInfo.chain.species) {
    await getMinEvolutionDetails();
  }
  if (evolutionChainInfo.chain.evolves_to.length > 0) {
    await getMidEvolutionDetails();
    if (evolutionChainInfo.chain.evolves_to[0].evolves_to.length > 0) {
      await getMaxEvolutionDetails();
    }
  }
}

function getPokeCardStatsforSearchbarRequest(container, poke) {
  for (let j = 0; j < poke.stats.length; j++) {
    const pokeStats = poke.stats[j].base_stat;
    const pokeStatsName =
      poke.stats[j].stat.name.charAt(0).toUpperCase() +
      poke.stats[j].stat.name.slice(1);
    const pokeStatsWidth = Math.round(pokeStats / 2);

    container.innerHTML += `
                <p class="pokeStatsP1"><b>${pokeStatsName}:</b></p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="${pokeStats}" aria-valuemin="0" aria-valuemax="200" style="width: ${pokeStatsWidth}%"><b>${pokeStats}</b></div>
                </div>
        `;
  }
}

function checkPokedexListImages(pokeImg) {
  if (currentPokemon.sprites.other.dream_world.front_default == null) {
    pokeImg.src =
      currentPokemon.sprites.other["official-artwork"].front_default;
  } else {
    pokeImg.src = currentPokemon.sprites.other.dream_world.front_default;
  }
}

function getPokeListTypeData(Pokemon, typeContainer, i) {
  for (let j = 0; j < Pokemon.types.length; j++) {
    const pokeType =
      Pokemon.types[j].type.name.charAt(0).toUpperCase() +
      Pokemon.types[j].type.name.slice(1);
    console.log(pokeType);
    typeContainer.innerHTML += `<div class="pokeTypeBox" id="pokeTypeBox${i}${j}">${pokeType}</div>`;
    let typeBox = document.getElementById("pokeTypeBox" + i + j).innerHTML;
    let typeBoxContainer = document.getElementById("pokeTypeBox" + i + j);
    typeBoxContainer.style.background = getTypeBackgroundcolors(typeBox);
  }
}

//HELP FUNCTIONS END

//generate all Pokedex listed Pokemoncards
function renderPokemonCard(i) {
  return /*html*/ `
    <div onclick="openPokeCard(${i})" class="pokemonCard glow-on-hover" id="pokemonCard${i}">
        <div class="pokemonWindow" id="pokemonWindow${i}">
            <div class="cardHead">
                <h1 id="pokemonName${i}"></h1>
                <p id="pokeNumber${i}"></p>
            </div>
            <img id="pokemonImage${i}" src="">
            <div class="pokeTypeContainer" id="pokeTypeContainer${i}"></div>
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
            </div>
            <div id="pokeCardIdent" class="pokeCardIdent">
                <div class="pokeTag">
                    <h1><b>${pokeNameUp}</b></h1>
                    <div id="pokeCardTypes" class="pokeCardTypes"></div>
                </div>
                    <h2>#000${i + 1}</h2>
            </div>
            <div class="pokePreview">
                <div class="pokeImagesContainer">
                    <img id="pokeCardPokeTypeImg" class="pokeCardPokeTypeImg" src="">
                    <img id="pokeCardPokeImg" class="pokeCardPokeImg" src="${randomShinyEvent(
                      poke
                    )}">
                </div>
                <div class="pokeMainText">${currentSpeciesInfo.flavor_text_entries[1].flavor_text.replace(
                  "\f",
                  " "
                )}</div>
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
                        <a onclick="renderPokeAbout(${i})" class="nav-item nav-link" href="#">About</a>
                        <a onclick="renderPokeCardStats(${i})" class="nav-item nav-link" href="#">Base Stats</a>
                        <a onclick="renderEvolutionChain()" class="nav-item nav-link" href="#">Evolution</a>
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

function renderPokeCardHTMLSearchbar(i, poke, pokeNameUp) {
  return `
    <div class="pokeCardContainer" id="pokeCardContainer" onclick="event.stopPropagation()">
        <div class="pokeCardHeadBox">
            <div class="pokeCardInteraction">
                <button class="pokeCardBackBtn" onclick="closePokeCard()"></button>
            </div>
            <div id="pokeCardIdent" class="pokeCardIdent">
                <div class="pokeTag">
                    <h1><b>${pokeNameUp}</b></h1>
                    <div id="pokeCardTypes" class="pokeCardTypes"></div>
                </div>
                    <h2>#000${i + 1}</h2>
            </div>
            <div class="pokePreview">
                <div class="pokeImagesContainer">
                    <img id="pokeCardPokeTypeImg" class="pokeCardPokeTypeImg" src="">
                    <img id="pokeCardPokeImg" class="pokeCardPokeImg" src="${randomShinyEvent(
                      poke
                    )}">
                </div>
                <div class="pokeMainText">${currentSpeciesInfo.flavor_text_entries[1].flavor_text.replace(
                  "\f",
                  " "
                )}</div>
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
                        <a onclick="renderPokeAboutSearchbar(${i})" class="nav-item nav-link" href="#">About<span class="sr-only">(current)</span></a>
                        <a onclick="renderPokeCardStatsSearchbar()" class="nav-item nav-link" href="#">Base Stats</a>
                        <a onclick="renderEvolutionChain()" class="nav-item nav-link" href="#">Evolution</a>
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
            <div class="pokeAboutChildBox d-flex" id="pokeAboutEdition">
                <p><b>Edition:</b></p>
            </div>
            <div class="pokeAboutChildBox d-flex" id="pokeAboutEdition">
                <p><b>Grow rate:</b></p>
            </div>
            <div class="pokeAboutChildBox d-flex" id="pokeAboutEdition">
                <p><b>Legendary status:</b></p>
            </div>
        </div>
        <div class="headAboutBoxRight">
            <p>${poke.height / 10} M</p>
            <p>${poke.weight / 10} KG</p>
            <p>${poke.abilities[0].ability.name}, ${getAbilities(poke)}</p>
            <p>${currentPokemonEditionInfo[0].version_group.name}</p>
            <p>${currentSpeciesInfo.growth_rate.name}</p>
            <p>${checkLegendaryStatus(currentSpeciesInfo.is_legendary)}</p>
        </div>
    </div>
    <div class="bottomAboutContainer" id="bottomAboutContainer">
        <h4> Breeding </h4>
        <div class="d-justySA w100">
            <div>
                <p>Egg Groups</p>
                <p>Egg Cycle</p>
                <p>Hatch counter</p>
            </div>
            <div>
                <p>${currentSpeciesInfo.egg_groups[0].name}</p>
                <p>${currentSpeciesInfo.growth_rate.name}</p>
                <p>${currentSpeciesInfo.hatch_counter * 255} Steps</p>
            </div>        
        </div>
    </div>
    `;
}

function checkLegendaryStatus(status) {
  if (status) {
    return "Legendary";
  } else {
    return "Non Legendary Pokemon";
  }
}

function renderThreeEvoBoxHTML(
  maxEvoName,
  midEvoName,
  minEvoName,
  levelTrigger1,
  levelTrigger2
) {
  return `
    <div class="pokeEvoBox">
        ${minEvoName}<br>
        <img src="${currentEvoMinInfo[0].sprites.other.dream_world.front_default}">
    </div>  
    <div class="d-column">
        <b style="text-align:center;" id="levelTrigger">Level up: ${levelTrigger1}</b>
        <img class="levelUpImg" src="./img/levelUp.png">
    </div>
    <div class="pokeEvoBox">
        ${midEvoName}<br>
        <img src="${currentEvoMidInfo[0].sprites.other.dream_world.front_default}">
    </div> 
    <div class="d-column">
        <b style="text-align:center;">Level up: ${levelTrigger2}</b>
        <img class="levelUpImg" src="./img/levelUp.png">
    </div>
    <div class="pokeEvoBox">
        ${maxEvoName}<br>
        <img src="${currentEvoMaxInfo[0].sprites.other.dream_world.front_default}">
    </div>   
    `;
}

function renderTwoEvoBoxHTML(midEvoName, minEvoName, levelTrigger1) {
  return `
    <div class="pokeEvoBox">
        ${minEvoName}<br>
        <img src="${currentEvoMinInfo[0].sprites.other.dream_world.front_default}">
    </div>  
    <div class="d-column">
        <b id="levelTrigger">Level up: ${levelTrigger1}</b>
        <img class="levelUpImg" src="./img/levelUp.png">
    </div>
    <div class="pokeEvoBox">
        ${midEvoName}<br>
        <img src="${currentEvoMidInfo[0].sprites.other.dream_world.front_default}">
    </div> 
    `;
}

function renderOneEvoBoxHtml(minEvoName) {
  return `
    <div class="pokeSingleBox">
        <h2>${minEvoName}</h2>
        <img src="${currentEvoMinInfo[0].sprites.other.dream_world.front_default}">
        <p>No Evolution details have been found!</p>
    </div>  
    `;
}

//get all Pokemon abilities for Fullscreen Pokemon card
function getAbilities(poke) {
  if (1 in poke.abilities) {
    return poke.abilities[1].ability.name;
  }
}

function closePokeCard() {
  currentEvoMaxInfo = [];
  currentEvoMidInfo = [];
  currentEvoMinInfo = [];
  document.getElementById("fullPokemonCard").classList.add("d-none");
  document.body.style.overflow = "unset";
}
