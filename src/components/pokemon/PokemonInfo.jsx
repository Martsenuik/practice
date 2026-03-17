export const PokemonInfo = ({ pokemon }) => {
  if (!pokemon || !pokemon.sprites) {
    return <p>Type name of Pokemon</p>;
  }
  return (
    <>
      <h4>{pokemon?.name}</h4>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon is tired ..."
      />
    </>
  );
};
