const pokeAPI = 'https://pokeapi.co/api/v2/pokemon';
const pokeDex = 'https://pokeapi.co/api/v2/pokedex/1';

const fetchPokeDex = async api => {
  const response = await fetch(api);
  const pokeJson = await response.json();
}