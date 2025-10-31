import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h1>Daftar Products</h1>
      {products.map((item, index) => (
        <div key={index}>
          <ul>
            <li>ID Product: {item.id}</li>
            <li>Nama: {item.name}</li>
            <li>Price: {item.price}</li>
          </ul>
          <button onClick={() => addToCart(item)}>Add To Cart</button>
          <button onClick={() => deleteProduct(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
