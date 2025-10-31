import { createContext, useState } from "react";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [formProduct, setFormProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop Gaming", price: 10000000 },
    { id: 2, name: "Mouse Wireless", price: 150000 },
    { id: 3, name: "Printer", price: 1900000 },
    { id: 4, name: "Camera", price: 1600000 },
  ]);
  const [editProduct, setEditProduct] = useState({
    id: "",
    name: "",
    price: "",
  });

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setFormProduct({ ...formProduct, [name]: value });
  };

  const submitNewProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...formProduct,
        id: formProduct.id,
        name: formProduct.name,
        price: formProduct.price,
      },
    ]);
    alert("Produk berhasil ditambahkan!");
  };

  const handleEditProduct = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const deleteProduct = (item) => {
    setProducts(products.filter((prod) => prod.id !== item.id));
  };

  return (
    <ProductContext.Provider
      value={{
        handleChangeProduct,
        submitNewProduct,
        products,
        formProduct,
        editProduct,
        handleEditProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
