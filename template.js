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
        <h4> Info </h4>
        <div class="headAboutBoxParent">
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
      </div>
      <div class="bottomAboutContainer" id="bottomAboutContainer">
          <h4> Breeding </h4>
          <div class="d-justySA w100">
              <div>
                  <p><b>Egg Groups:</b></p>
                  <p><b>Egg Cycle:</b></p>
                  <p><b>Hatch counter:</b></p>
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
