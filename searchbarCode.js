let global = [];

//Get Pokemon from Json file
const searchPokemon = async searchBox => {

  const res = await fetch('./pokeData.json');
  const pokeDataListJson = await res.json();
  document.getElementById('searchbarHits').classList.remove('d-none')
  global = [];

  if (searchBox.length > 0) {
    let fits = pokeDataListJson.filter(poke => checkprefix(poke, searchBox));
    let fits2 = pokeDataListJson.filter(pokemon => pokemon.name.match(searchBox) || pokemon.types.includes(searchBox));

    if (!fits.length == 0) {
      global.push(fits);
    }
    if (fits2) {
      global.push(fits2);
    }
    outputHtml(global[0]);

  } else {
    document.getElementById('searchbarHits').classList.add('d-none')
    document.getElementById('searchbarHits').innerHTML = "";
  }
};



function checkprefix(A, B) {

  let s1 = A.id.toString();
  let s2 = B.toString();

  let result;

  result = s1.startsWith(s2);
  return result;
}


// generate the searchbar hits container of found Pokemons
const outputHtml = fits => {
  if (fits.length > 0) {
    const html = fits
      .map(
        fit =>
          `
      <div id="pokemonSearchbarHitContainer${fit.id}" onmouseenter="whenMouseEnters(${fit.id})" onmouseleave="whenMouseLeaves(${fit.id})" onclick="searchbarPokemon(${fit.id})">
       <div class="card col s12">
       <div class="card-action">
       <img class="pokeSearchbarHitImage" src="${fit.image}"></img>
     </div>
         <div class="  grey darken-4 darken-1">
           <div class="card-content white-text">
              <h4 class="card-title m1">${fit.name.charAt(0).toUpperCase() + fit.name.slice(1)}<span class="blue-text m-4" ><br>${fit.types.map(a => `<span id="searchbarType${fit.id}">` + a + '</span>').join(', ')}</span></h4>
              <h5>#${fit.id}</h5>
           </div>
         </div>
       </div>
      </div>
      `
      )
      .join('');

    document.getElementById('searchbarHits').innerHTML = html;
    document.body.style.overflow = 'hidden';

  } else {
    document.getElementById('searchbarHits').innerHTML = "No Pokemon found!";
  }
  document.body.style.overflow = 'unset';

};


//starts search process for searchbar
document
  .getElementById('search')
  .addEventListener('input', () => searchPokemon(search.value));