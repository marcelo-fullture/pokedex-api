HISTÓRIA 2
Eu como usuário da aplicação
Ao clicar sobre algum pokemon
Quero poder ver as informações detalhadas daquele Pokemon

TAREFA 3 - CRIAR API DE DETALHES DE POKEMON - [OK]
DADO que estou na tela de listagem
QUANDO visualizo a lista de Pokemons
E clico sobre algum pokemon
ENTÃO recebo um JSON com os detalhes daquele pokemon

CRITÉRIO TÉCNICO
Objeto de retorno
{
  id: Number,
  name: String,
  pokemonTypes: [
    {
      slot: Number,
			pokemonType: {
				name: String,
				url: String
			}
    }
  ],
  image: String,
  details: {
    abilities: [
      {
        ability: {
          name: String,
          url: String
        },
        is_hidden: Boolean,
        slot: Number
      }
    ],
    species: {
      name: String,
      url: String
    },
    stats: [
      {
				base_stat: Number,
				effort: Number,
				stat: {
					name: String,
					url: String
				}
			}
    ],
    height: Number,
    weight: Number,
  }
}