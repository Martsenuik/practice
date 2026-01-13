import { useState } from "react";
import { ColorPicker } from "./components/colorPicker/Colorpicker";
import { Status } from "./components/status/Status";
import { ProductList } from "./components/productList/ProductList";
import { Counter } from "./components/counter/Counter";

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

function App() {
  return (
    <>
      <ColorPicker options={colorPickerOptions} />
      <Status isOnline={user1.status} />
      <ProductList products={products} />
      <Counter InitialValue={0} />
    </>
  );
}

export default App;
