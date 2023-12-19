const { Router } = require('express')
const { findAllPokemons } = require('./controllers/findAllPokemonsController')

const routes = Router()

routes.get('/pokemons', findAllPokemons)

module.exports = routes