const pokemonApiService = require('../services/pokeapiService')

async function findByPokemonId (request, response) {
  try {
    const { pokemonid } = request.params
    const pokemon = await pokemonApiService.getPokemonById(pokemonid)
    return response.json(pokemon)
  } catch (error) {
    return response.status(500).json({
      error: 'An unexpected error occurred while processing the request'
    })
  }
}

module.exports = { findByPokemonId }