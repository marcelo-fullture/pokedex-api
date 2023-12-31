const axios = require('axios')

const BASE_URL = process.env.BASE_URL || 'https://pokeapi.co/api/v2/pokemon?limit=50'
const LIMIT = process.env.LIMIT || '50'

async function getPokemons () {
  try {
    const resource = `?limit=${LIMIT}`
    const { results } = (await axios.get(`${BASE_URL}${resource}`)).data
    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const result = (await axios.get(pokemon.url)).data
        const { pokemonMainData } = _formatResponseData(result)
        return pokemonMainData
      })
    )
    console.log('pokeapiService :: getPokemons :: Pokemons', pokemons)
    return {
      pokemons
    }
  } catch (error) {
    console.log('pokeapiService :: getPokemons :: error', error.reponse?.data)
    throw new Error(error.reponse?.data)
  }
}

async function getPokemonById (pokemonid) {
  try {
    const resource = `/${pokemonid}`
    const result = (await axios.get(`${BASE_URL}${resource}`)).data
    const { pokemonCompleteData } = _formatResponseData(result)
    console.log('pokeapiService :: getPokemonById :: Pokemon', pokemonCompleteData)
    return pokemonCompleteData
  } catch (error) {
    console.log('pokeapiService :: getPokemonById :: error', error.reponse?.data)
    throw new Error(error.reponse?.data)
  }
}

function _formatResponseData (result) {
  const { id, name, types, sprites, abilities, species, stats, height, weight } = result
  const image = sprites.other['official-artwork'].front_default
  const pokemonTypes = types.map(element => {
    const { slot, type } = element
    return {
      slot,
      pokemonType: type
    }
  })
  const pokemonMainData = {
    id, name, pokemonTypes, image
  }
  const pokemonCompleteData = {
    ...pokemonMainData,
    details: {
      abilities, species, stats, height, weight
    }
  }
  return {
    pokemonMainData,
    pokemonCompleteData
  }
}

module.exports = { getPokemons, getPokemonById }