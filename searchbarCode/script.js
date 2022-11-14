//Get Countries From Json File
const searchPokemon = async searchBox => {

    const res = await fetch('../data/pokeData.json');
    const pokeDataListJson = await res.json();

  
    // pokemon.name.match(searchBox) || pokemon.types[0].match(searchBox)
    //Get Entered Data
    let fits = pokeDataListJson.filter(pokemon => pokemon.name.match(searchBox) || pokemon.types[0].match(searchBox) || pokemon.id.toString().includes(searchBox));
  
    if (searchBox.length === 0) {
      fits = [];
      searchbarHits.innerHTML = '';
    }
  
    outputHtml(fits);
  };
  



  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0) {
      const html = fits
        .map(
          fit => `
       <div class="row">
       <div class="col s12">
         <div class="card  grey darken-4 darken-1">
           <div class="card-content white-text">
             <h4 class="card-title m1">${fit.name}<span class="blue-text m-4"> ${fit.types}</span></h4>
             <h5>${fit.id}</h5>
          <div class="card-action">
          <img class="pokeSearchbarHitImage" src="${fit.image}"></img>
          
        </div>
           </div>
         </div>
       </div>
     </div>
       `
        )
        .join('');
  
      document.getElementById('searchbarHits').innerHTML = html;
    }
  };
  
  document
    .getElementById('search')
    .addEventListener('input', () => searchPokemon(search.value));