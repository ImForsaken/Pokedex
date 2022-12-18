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
