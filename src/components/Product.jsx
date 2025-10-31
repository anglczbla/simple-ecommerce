import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const { handleChangeProduct, submitNewProduct, formProduct } =
    useContext(ProductContext);
  return (
    <div>
      <div>
        <h1>Add New Product</h1>
        <form onSubmit={submitNewProduct}>
          <input
            type="text"
            name="id"
            value={formProduct.id}
            placeholder="Masukan id Product"
            onChange={handleChangeProduct}
          />
          <input
            type="text"
            name="name"
            value={formProduct.name}
            placeholder="Masukan nama Product"
            onChange={handleChangeProduct}
          />
          <input
            type="text"
            name="price"
            value={formProduct.price}
            placeholder="Masukan price Product"
            onChange={handleChangeProduct}
          />
          <button type="submit">Submit New Product</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
