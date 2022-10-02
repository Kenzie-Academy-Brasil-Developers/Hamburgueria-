import Product from "./Product";
import "./styles.css";

const ProductsList = ({ buttonAdd, products }) => {
  return (
    <ul>
      {products.map((product) => (
        <Product product={product} buttonAdd={buttonAdd} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
