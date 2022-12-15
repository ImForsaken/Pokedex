let pokemonHitList = [];

//Get Pokemon from Json file
const searchPokemon = async (searchBox) => {
  document.body.style.overflow = "hidden";
  const res = await fetch("./pokeData.json");
  const pokeDataListJson = await res.json();
  document.getElementById("searchbarHits").classList.remove("d-none");
  pokemonHitList = [];
  let searchBoxUpperCase =
    searchBox.charAt(0).toUpperCase() + searchBox.slice(1);
  let searchBoxLowerCase =
    searchBox.charAt(0).toLowerCase() + searchBox.slice(1);

  if (searchBox.length > 0) {
    let fits = pokeDataListJson.filter((poke) =>
      checkPokemonId(poke, searchBox)
    );
    let fits2 = pokeDataListJson.filter(
      (pokemon) =>
        pokemon.name.includes(searchBoxLowerCase) ||
        pokemon.types.includes(searchBoxUpperCase)
    );

    if (!fits.length == 0) {
      pokemonHitList.push(fits);
    }
    if (fits2) {
      pokemonHitList.push(fits2);
    }
    outputHtml(pokemonHitList[0]);
  } else {
    document.getElementById("searchbarHits").classList.add("d-none");
    document.getElementById("searchbarHits").innerHTML = "";
  }
};

function checkPokemonId(poke, searchBox) {
  let pokeID = poke.id.toString();
  let searchInput = searchBox.toString();

  let result;

  result = pokeID.startsWith(searchInput);
  return result;
}

// generate the searchbar hits container of found Pokemons
const outputHtml = (fits) => {
  if (fits.length > 0) {
    const html = fits
      .map(
        (fit) =>
          `
      <div id="pokemonSearchbarHitContainer${
        fit.id
      }" onmouseenter="whenMouseEnters(${
            fit.id
          })" onmouseleave="whenMouseLeaves(${
            fit.id
          })" onclick="searchbarPokemon(${fit.id})">
       <div class="card col s12">
       <div class="card-action">
       <img class="pokeSearchbarHitImage" src="${fit.image}"></img>
     </div>
         <div class="  grey darken-4 darken-1">
           <div class="card-content white-text">
              <h4 class="card-title m1">${
                fit.name.charAt(0).toUpperCase() + fit.name.slice(1)
              }<span class="blue-text m-4" ><br>${fit.types
            .map((a) => `<span id="searchbarType${fit.id}">` + a + "</span>")
            .join(", ")}</span></h4>
              <h5>#${fit.id}</h5>
           </div>
         </div>
       </div>
      </div>
      `
      )
      .join("");

    document.getElementById("searchbarHits").innerHTML = html;
  } else {
    document.getElementById("searchbarHits").innerHTML = "No Pokemon found!";
  }
};

//starts search process for searchbar
document
  .getElementById("search")
  .addEventListener("input", () => searchPokemon(search.value));

document
  .getElementById("search")
  .addEventListener("input", () => checkIfInputIsEmpty(search.value));

function checkIfInputIsEmpty(search) {
  if (!search) {
    document.body.style.overflow = "unset";
  }
}
