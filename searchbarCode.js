let global = [];

//Get Countries From Json File
const searchPokemon = async searchBox => {

    const res = await fetch('./pokeData.json');
    const pokeDataListJson = await res.json();

    global = [];
    // pokemon.name.match(searchBox) || pokemon.types[0].match(searchBox)  || pokemon.id.toString().includes(searchBox)
    //Get Entered Data
  

    if (searchBox.length > 0) {
      let fits = pokeDataListJson.filter(poke => checkprefix(poke, searchBox));
      let fits2 = pokeDataListJson.filter(pokemon => pokemon.name.match(searchBox) || pokemon.types.includes(searchBox));
  
      // console.log('fits', fits);
      // console.log('fits2', fits2);
      if (!fits.length == 0) {
        global.push(fits);
      }
      if (fits2) {
        global.push(fits2);
  
      }
      outputHtml(global[0]);

    } else {
      // console.log('kein input')
      document.getElementById('searchbarHits').innerHTML = "";
    }
 
    // if (fits.name == fits2.name) {
    //   global.push(fits);
    // } else {
    //   global.push(fits2);
    // }

    // console.log('global Array', global);

  
  };
  

  function checkprefix(A, B) {

    // Convert numbers into Strings
    let s1 = A.id.toString();
    let s2 = B.toString();
  
    let result;
  
    // Check if s2 is a prefix of s1
    // or not using starts_with() function
    
    result = s1.startsWith(s2);
    // console.log(global);
    // If result is true, print "Yes"
    return result;
    if (result) {
      console.log("Yes", A);
      global.push(A);
    } else {
      console.log("No");
    }


  }
  

  // document
  // .getElementById('myInput')
  // .addEventListener('input', () => findNumber());

  // function findNumber() {
   
  //   let value = document.getElementById("search").value;
  //   return currentList.filter(poke => poke.id === checkprefix(poke.id, value));
  // }
  

  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0) {
      const html = fits 
        .map(
          fit =>
      `
      <div onclick="searchbarPokemon(${fit.id})">
       <div class="col s12">
         <div class="card  grey darken-4 darken-1">
           <div class="card-content white-text">
              <h4 class="card-title m1">${fit.name}<span id="searchbarType" class="blue-text m-4"> ${fit.types.join(', ')}</span></h4>
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

      
    } else {
      document.getElementById('searchbarHits').innerHTML = "No Pokemon found!";
    }
  };
  
  document
    .getElementById('search')
    .addEventListener('input', () => searchPokemon(search.value));