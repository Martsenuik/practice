export const ProductList = ({ products }) => {
  return (
    <div style={{ border: "15px solid yellow" }}>
      <h2>Що треба купити?</h2>
      <ul>
        {products.map((product) => {
          return (
            <>
              <li key={product.id}>{product}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
