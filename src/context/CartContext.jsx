import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    const adaProduk = cart.find((cart) => cart.id == prod.id);

    if (adaProduk) {
      setCart(
        cart.map(
          (item,
          (index) =>
            item.id == prod.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.price * item.quantity,
                }
              : item)
        )
      );
    } else {
      setCart([...cart], { ...prod, quantity: 1 });
    }
  };

  const deleteCart = (item) => {
    setCart(cart.filter(cart, (index) => cart.id !== item.id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id == productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          addToCart,
          deleteCart,
          getTotalPrice,
          cart,
          getTotalItems,
          clearCart,
          updateQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
