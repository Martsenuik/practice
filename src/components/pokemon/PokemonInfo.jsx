export const PokemonInfo = ({ pokemon }) => {
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
