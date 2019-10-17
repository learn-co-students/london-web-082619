// API constants
const BASE_URL = 'http://localhost:3000'
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// DOM constants
const trainersContainer = document.querySelector('main')

// API functions
const getTrainers = () => fetch(TRAINERS_URL).then(res => res.json())
const postPokemon = trainer_id =>
  fetch(POKEMONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ trainer_id })
  }).then(res => res.json())
const deletePokemon = pokemon_id =>
  fetch(`${POKEMONS_URL}/${pokemon_id}`, {
    method: 'DELETE'
  }).then(res => res.json())

// DOM manipulation
const renderTrainers = trainers =>
  trainers.forEach(trainer => renderTrainer(trainer))

// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>

const renderPokemon = (pokemon, parentEl, callback) => {
  const li = document.createElement('li')
  li.innerText = `${pokemon.nickname} (${pokemon.species})`
  const releaseButton = document.createElement('button')
  releaseButton.innerText = 'Release'
  releaseButton.className = 'release'

  releaseButton.addEventListener('click', () =>
    deletePokemon(pokemon.id)
      .then(pokemon => li.remove())
      .then(callback)
  )

  li.insertAdjacentElement('beforeend', releaseButton)
  parentEl.append(li)
}

const createAddPokemonButton = (trainer_id, pokemonParentEl, callback) => {
  const addPokemonButton = document.createElement('button')
  addPokemonButton.innerText = 'Add Pokemon'

  addPokemonButton.addEventListener('click', () =>
    postPokemon(trainer_id).then(pokemon => {
      renderPokemon(pokemon, pokemonParentEl)
      callback(pokemon)
    })
  )

  return addPokemonButton
}

const toggleAbilityOfAddButton = (trainer, button) =>
  (button.disabled = trainer.pokemons.length >= 6)

const renderTrainer = trainer => {
  const div = document.createElement('div')
  div.className = 'card'

  const p = document.createElement('p')
  p.innerText = trainer.name

  const ul = document.createElement('ul')

  trainer.pokemons.forEach(pokemon =>
    renderPokemon(pokemon, ul, () => {
      trainer.pokemons = trainer.pokemons.filter(p => p.id !== pokemon.id)
      toggleAbilityOfAddButton(trainer, addPokemonButton)
    })
  )

  const addPokemonButton = createAddPokemonButton(trainer.id, ul, pokemon => {
    trainer.pokemons.push(pokemon)
    toggleAbilityOfAddButton(trainer, addPokemonButton)
  })
  toggleAbilityOfAddButton(trainer, addPokemonButton)

  div.append(p, addPokemonButton, ul)

  trainersContainer.append(div)
}

getTrainers().then(trainers => renderTrainers(trainers))
