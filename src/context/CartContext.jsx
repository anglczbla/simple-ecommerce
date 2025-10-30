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
            prod.id == item.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.price * item.price,
                }
              : item)
        )
      );
    } else {
      setCart([...cart], { ...prod, quantity: 1 });
    }
  };
  return (
    <div>
      <CartContext.Provider value={{ addToCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
