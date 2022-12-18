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
