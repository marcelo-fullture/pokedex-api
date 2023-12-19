const { Router } = require('express')
const { findAllPokemons } = require('./controllers/findAllPokemonsController')
const { findByPokemonId } = require('./controllers/findByPokemonIdController')

const routes = Router()

routes.get('/pokemons', findAllPokemons)
routes.get('/pokemons/:pokemonid', findByPokemonId)

module.exports = routes