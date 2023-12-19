const pokemonApiService = require('../services/pokeapiService')

async function findAllPokemons (request, response) {
  try {
    const { pokemons } = await pokemonApiService.getPokemons()
    return response.json(pokemons)
  } catch (error) {
    return response.status(500).json({
      error: 'An unexpected error occurred while processing the request'
    })
  }
}

module.exports = { findAllPokemons }