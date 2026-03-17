export const fetchPokemonByNames = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((name) => {
    if (name.ok) {
      return name.json();
    }
    return Promise.reject(new Error(`Помилка!!! Ім'я{$name} не правильне.`));
  });
};
