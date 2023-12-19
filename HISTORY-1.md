HISTÓRIA 1
Eu como usuário da aplicação
Ao acessar a tela de listagem
Quero poder ver a imagem dos pokemons e as informações principais

TAREFA 1 - CRIAR PROJETO - [OK]
Criar a base do projeto

TAREFA 2 - CRIAR API DE LISTAGEM DE POKEMONS - [OK]
DADO que acesso a tela de listagem
E preciso da lista de Pokemons
ENTÃO recebo um JSON com a lista de pokemons

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
  image: String
}
