import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.id === id);
  console.log(product);

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
