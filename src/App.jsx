import React from "react";
import { useState, useEffect } from "react";
import { ColorPicker } from "./components/colorPicker/Colorpicker";
import { Status } from "./components/status/Status";
import { ProductList } from "./components/productList/ProductList";
import { Counter } from "./components/counter/Counter";
import { DropDown } from "./components/dropDown/DropDown";
import { Form } from "./components/form/form";
import { fetchPokemonByNames } from "./components/pokemon/PokemonApi";
import { FormPokemon } from "./components/pokemon/FormPokemon";
import { PokemonInfo } from "./components/pokemon/PokemonInfo";
import { FilterTask } from "./components/useCallback&useMemo/FilterTask";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "rgba(63, 81, 181, 1)" },
];

const user1 = {
  name: "Олена",
  age: 20,
  city: "Львів",
};

const products = ["Хліб", "Молоко", "Сир", "Яблука"];

export const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonName) {
      setPokemon(null);
      setError(null);
      return;
    }
    setLoading(true);
    fetchPokemonByNames(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonName]);

  const ChangePokemonName = (name) => {
    setPokemonName(name);
  };

  return (
    <>
      <ColorPicker options={colorPickerOptions} />
      <Status isOnline={user1.status} />
      <ProductList products={products} />
      <Counter InitialValue={0} />
      <DropDown />
      <Form />
      <div style={{ border: "15px solid #00ffd9" }}>
        <FormPokemon addPokemonName={ChangePokemonName} />
        {pokemon && <PokemonInfo pokemon={pokemon} />}
        {error && !pokemonName && <p>{error}</p>}
        {pokemonName && <p>{pokemonName.name}</p>}
        {loading && <p>Loading ...</p>}
      </div>
      <FilterTask />
    </>
  );
};

export default App;
