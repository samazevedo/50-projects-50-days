const container = document.getElementById('container')
const pokemon_count = 100
const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
}
const main_types = Object.keys(colors)

const fetchPokemon = async (id) => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    createPokemon(data)
}

const createPokemon = (pokemon) => {
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const pokemonType = pokemon.types.map((type) => type.type.name)
    const type = pokemonType.find((type) => pokemonType.indexOf(type) > -1)
    const color = colors[type]

    pokemonElement.style.backgroundColor = color

    const pokemonInnerHTML = `
            <div class="img-container">
                <img src="https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
                
            </div>
    `
    pokemonElement.innerHTML = pokemonInnerHTML
    container.appendChild(pokemonElement)
}
fetchPokemon()
