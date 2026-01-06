export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <>
            <li>{product}</li>
          </>
        );
      })}
    </ul>
  );
};
