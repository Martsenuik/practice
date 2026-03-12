import { useState } from "react";

export const FormPokemon = ({ addPokemonName }) => {
  const [pokemonName, setpokemonName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPokemonName(pokemonName);
  };

  const handleChange = (event) => {
    setpokemonName(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Pokemons! 🎮🕹️👾</h2>
        <p>
          rattata, pidgeotto, beedrill, kakuna, weedle, butterfree, blastoise,
          charmeleon , ivysaur, caterpie.
        </p>
        <input onChange={handleChange} type="text" value={pokemonName} />
        <button type="submit"> add pokemon</button>
      </form>
    </div>
  );
};
