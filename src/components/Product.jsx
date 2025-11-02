import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const {
    handleChangeProduct,
    submitNewProduct,
    formProduct,
    products,
    editProduct,
    setEditProduct,
    saveEdit,
    handleEditProduct,
    deleteProduct,
  } = useContext(ProductContext);
  const [showEdit, setShowEdit] = useState(null);

  const toggleEdit = (product, index) => {
    setShowEdit(index);
    setEditProduct(product);
  };

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

        <h1>List Products</h1>
        <div>
          {products.map((item, index) => (
            <div key={index}>
              <ul>
                <li>ID: {item.id}</li>
                <li>Name Product: {item.name}</li>
                <li>Price: {item.price}</li>
              </ul>
              <button onClick={() => toggleEdit(item, index)}>
                Edit Product
              </button>

              {showEdit == index ? (
                <div>
                  <input
                    type="text"
                    name="id"
                    value={editProduct.id}
                    placeholder="Masukan id baru product"
                    onChange={handleEditProduct}
                  />
                  <input
                    type="text"
                    name="name"
                    value={editProduct.name}
                    placeholder="Masukan nama baru product"
                    onChange={handleEditProduct}
                  />
                  <input
                    type="number"
                    name="price"
                    value={editProduct.price}
                    placeholder="Masukan harga baru product"
                    onChange={handleEditProduct}
                  />
                  <button onClick={() => saveEdit(editProduct, index)}>
                    Save Edit
                  </button>
                </div>
              ) : null}
              <button onClick={() => deleteProduct(item)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
