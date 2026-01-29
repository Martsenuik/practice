export const ProductList = ({ products }) => {
  return (
    <div style={{ border: "5px solid yellow" }}>
      <h2>Що треба купити?</h2>
      <ul>
        {products.map((product) => {
          return (
            <>
              <li>{product}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
