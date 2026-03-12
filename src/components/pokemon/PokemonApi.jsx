export const fetchPokemonByNames = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((name) => {
    return name.json();
  });
};
