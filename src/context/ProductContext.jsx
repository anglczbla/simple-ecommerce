import { createContext, useState } from "react";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [formProduct, setFormProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [products, setProducts] = [
    { id: 1, name: "Laptop Gaming", price: 10000000 },
    { id: 2, name: "Mouse Wireless", price: 150000 },
    { id: 3, name: "Printer", price: 1900000 },
    { id: 4, name: "Camera", price: 1600000 },
  ];

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setFormProduct({ ...formProduct, [name]: value });
  };

  const submitNewProduct = (e) => {
    e.preventDefault();
    setProducts([...products, formProduct]);
  };

  return (
    <ProductContext.Provider
      value={{ handleChangeProduct, submitNewProduct, products }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
