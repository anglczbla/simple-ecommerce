import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import CartProvider from "./context/CartContext";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
